import { useEffect, useState } from 'react'

import './App.css'
import PageLoader from '../components/common/PageLoader'
import AuthRoutes from '../routes/AuthRoutes';
import { Toaster } from "@/components/ui/sonner"

import { useSelector } from 'react-redux';
import UserRoutes from '../routes/UserRoutes';
import { useDispatch } from "react-redux";
import { verifyUserAction } from "../store/actions/authActions";




function App() {
    const dispatch = useDispatch();
    const { isloggedIn } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(verifyUserAction(token, setLoading));
        } else {
            setLoading(false);
        }
    }, [loading, dispatch]);

    return (
        <>
            {loading ? <PageLoader /> : isloggedIn ? <UserRoutes /> : <AuthRoutes />}
            <Toaster />
        </>
    )
}

export default App
