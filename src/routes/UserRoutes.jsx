import MainLayout from "@/components/common/MainLayout"
import EventPage from "@/components/events/EventPage"
import Header from "@/components/header/Header"
import NewEvent from "@/components/new_event/NewEvent"
import Sidebar from "@/components/sidebar/Sidebar"
import { Routes, Route, Navigate } from "react-router-dom"

const UserRoutes = () => {
    return (
        <>
            <header className=" hidden md:w-full fixed top-0 z-30 bg-white  h-[60px] md:flex justify-end">
                <Header />
            </header>

            <aside className=" relative md:fixed z-40 border-b-2 lg:w-[17rem] lg:border-r top-0 md:h-full md:w-[15rem] md:border-r h-full">
                <Sidebar />
            </aside>

            <MainLayout>
                <Routes>
                    <Route path="/event_types" element={<EventPage />} />
                    <Route path="/create-event" element={<NewEvent />} />
                    <Route path="*" element={<Navigate to="/event_types" />} />
                </Routes>
            </MainLayout>

        </>
    )
}

export default UserRoutes
