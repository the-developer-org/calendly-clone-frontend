import EventCard from './EventCard';
import MobileHeader from '../header/MobileHeader';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsAction } from '@/store/actions/eventActions';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import PageLoader from '../common/PageLoader';

const EventPage = ({ title }) => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (userDetails.token) {
      dispatch(getEventsAction(userDetails.token, setLoader));
    } else {
      setLoader(false);
    }
  }, [dispatch, userDetails]);

  const { allEvents } = useSelector((state) => state.event);

  return (
    <>
      {loader ? (
        <PageLoader />
      ) : (
        <section className="flex flex-col gap-[1rem]">
          <MobileHeader className="block sm:hidden" />
          <h1 className="text-1xl md:text-2xl lg:text-3xl font-poppins">
            {title}
          </h1>
          {allEvents.length > 0 ? (
            <div className="grid grid-cols-1 p-2 gap-4 md:grid-cols-2 md:gap-x-0 xl:grid-cols-4">
              {Object.entries(allEvents).map(([eventId, eventData]) => (
                <EventCard key={eventId} id={eventId} data={eventData} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3 items-center justify-center">
              <p> No events here.. Create one? </p>
              <Link to={'/new-event'}>
                <Button> Create Event</Button>
              </Link>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default EventPage;
