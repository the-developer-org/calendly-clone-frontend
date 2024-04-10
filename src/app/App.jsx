import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import UserRoutes from '../routes/UserRoutes';
import AuthRoutes from '../routes/AuthRoutes';

import { verifyUserAction } from "../store/actions/authActions";

import { Toaster } from "@/components/ui/sonner"
import PageLoader from '../components/common/PageLoader'
import BookingRoutes from '@/routes/BookingRoutes';

const App = () => {
    const dispatch = useDispatch();
    const { isloggedIn } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)
    const location = useLocation()
    console.log(location.pathname)
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(verifyUserAction(token, setLoading));

        } else {
            setLoading(false)
        }
    }, [dispatch]);
    const renderRoutes = () => {
        const { pathname } = location;
        if (isloggedIn) {
            return <UserRoutes />
        }
        else {
            if (pathname.startsWith("/book")) {
                return <BookingRoutes />;
            } else {
                return <AuthRoutes />;
            }
        }

    };
    return (
        <>
            {loading ? <PageLoader /> : renderRoutes()}
            <Toaster />
        </>
    )
}

export default App
