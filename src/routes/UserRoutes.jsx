import { Routes, Route, Navigate } from "react-router-dom"

const UserRoutes = () => {
    return (<>
        <Routes>
            <Route path="/home" />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    </>)
}
export default UserRoutes