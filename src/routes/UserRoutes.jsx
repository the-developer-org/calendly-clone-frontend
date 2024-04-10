import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"

import MainLayout from "../components/common/MainLayout"
import Sidebar from "../components/sidebar/Sidebar"
import Header from "../components/header/Header"
import NewEvent from "../components/new_event/NewEvent"
import EventPage from "../components/events/Event"
import Schedule from "../components/scheduled-events/Schedule"

const UserRoutes = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <header className="hidden md:w-full  top-0 z-30 bg-white  md:flex font-poppins">
                <Header show={show} />
            </header>
            <aside className=" relative md:fixed z-40 border-b-2 lg:border-r top-0 md:h-full  md:border-r h-full ">
                <Sidebar show={show} setShow={setShow} />
            </aside>

            <MainLayout show={show} setShow={setShow}>
                <Routes>
                    <Route path="/event_types" element={<EventPage title="My Events" />} />
                    <Route path="/new-event/*" element={<NewEvent />} />
                    <Route path="/scheduled_events" element={<Schedule title="Scheduled Events" />} />
                    <Route path="*" element={<Navigate to="/event_types" />} />
                </Routes>
            </MainLayout>

        </>
    )
}

export default UserRoutes
