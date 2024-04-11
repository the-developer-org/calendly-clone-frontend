import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import NewEvent from '../components/new_event/NewEvent';
import EventPage from '../components/events/Event';
import Schedule from '../components/scheduled-events/Schedule';
import EventPreview from '../components/events/EventPreview';

const UserRoutes = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <header className="hidden  fixed top-0 z-30 bg-white md:flex font-poppins">
        <Header show={show} />
      </header>
      <aside className="realtive md:fixed top-0 z-40 border-b-2 lg:border-r h-full">
        <Sidebar show={show} setShow={setShow} />
      </aside>

      <main
        className={`relative md:mt-[6rem]  w-full overflow-x-hidden ${show ? 'p-[1rem] md:pl-[6rem]' : 'p-[1rem] md:pl-[13rem]'}`}
      >
        <Routes>
          <Route path="/preview/:id" element={<EventPreview />} />
          <Route path="/events" element={<EventPage title="My Events" />} />
          <Route path="/new-event/*" element={<NewEvent />} />
          <Route
            path="/scheduled_events"
            element={<Schedule title="Scheduled Events" />}
          />
          <Route path="*" element={<Navigate to="/events" />} />
        </Routes>
      </main>
    </>
  );
};

export default UserRoutes;
