import { useState } from 'react'

import './App.css'
import PageLoader from '@/components/common/PageLoader'
import AuthRoutes from '@/routes/AuthRoutes';
import { Toaster } from "@/components/ui/Sonner"

import { useSelector } from 'react-redux';
import UserRoutes from '@/routes/UserRoutes';




function App() {
    const { isLoggedIn } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false);
    return (
        <>
            {loading && <PageLoader />}
            {isLoggedIn ? <UserRoutes /> : <AuthRoutes />}
            <Toaster />
        </>
    )
}

export default App
