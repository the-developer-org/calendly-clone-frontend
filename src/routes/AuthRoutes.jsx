import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";

const AuthRoutes = () => {
    return (<>
        <AuthLayout>
            <Routes>
                <Route path="/" element={<AuthForm />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AuthLayout>
    </>);
}
export default AuthRoutes;