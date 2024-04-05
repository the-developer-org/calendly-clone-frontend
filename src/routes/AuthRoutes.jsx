import AuthLayout from "@/components/auth/AuthLayout";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import { Route, Routes } from "react-router-dom";

const AuthRoutes = () => {
    return (<>
        <AuthLayout>
            <Routes>
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="/auth/login" element={<Login />} />
            </Routes>
        </AuthLayout>

    </>);
}
export default AuthRoutes;