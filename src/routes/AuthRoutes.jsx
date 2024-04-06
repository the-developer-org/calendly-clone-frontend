import AuthLayout from "@/components/auth/AuthLayout";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import { Route, Routes, Navigate } from "react-router-dom";

const AuthRoutes = () => {
    return (<>
        <AuthLayout>
            <Routes>
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </AuthLayout>

    </>);
}
export default AuthRoutes;