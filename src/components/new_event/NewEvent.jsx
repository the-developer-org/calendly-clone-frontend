import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Tab from './Tab';
import TabContent from './TabContent';
import EventForm from './EventForm';
import Preview from './Preview';
const NewEvent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { hasEvent, eventDetails } = useSelector((state) => state.event)
  return (
    <section className="flex flex-col gap-[1rem] mt-4">
      <div className="flex flex-row gap-x-[2rem]">
        <Tab
          to="/new-event/"
          label="Event Details"
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
          disabled={false}
        />
        <Tab
          to="/new-event/preview"
          label="Preview"
          isActive={activeTab === 2}
          disabled={!hasEvent}
          onClick={() => setActiveTab(2)}
        />
      </div>
      <TabContent>
        <Routes>
          <Route path='/' element={<EventForm setActiveTab={setActiveTab} />} />
          <Route path='/preview' element={<Preview details={eventDetails} />} />
        </Routes>
      </TabContent>
    </section>
  )
}
export default NewEvent