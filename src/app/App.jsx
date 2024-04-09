import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import UserRoutes from '../routes/UserRoutes';
import AuthRoutes from '../routes/AuthRoutes';

import { verifyUserAction } from "../store/actions/authActions";
import { setLoading } from '../store/reducers/uiSlice';

import { Toaster } from "@/components/ui/sonner"
import PageLoader from '../components/common/PageLoader'

const App = () => {
    const dispatch = useDispatch();
    const { isloggedIn } = useSelector((state) => state.auth)
    const { isLoading } = useSelector((state) => state.ui)
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(verifyUserAction(token));
        } else {
            dispatch(setLoading())
        }
    }, [dispatch]);

    return (
        <>
            {isLoading ? <PageLoader /> : isloggedIn ? <UserRoutes /> : <AuthRoutes />}
            <Toaster />
        </>
    )
}

export default App
