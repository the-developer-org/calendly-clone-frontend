import { cardsData } from "@/assets/data";
import EventCard from "./EventCard";
import EventHeader from "./EventHeader";
import { useSelector } from "react-redux";

const EventPage = () => {
    const { userDetails } = useSelector((state) => state.auth)
    const { name } = userDetails;
    return (
        <section className="flex flex-col gap-[1rem] mt-1">
            <h1 className=" text-1xl md:text-2xl lg:text-3xl">Event Types</h1>
            <EventHeader name={name} />

            <div className="grid grid-cols-1 m-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cardsData.map((card, index) => (
                    <EventCard key={index} title={card.name} duration={card.duration} location={card.location} />
                ))}
            </div>
        </section>
    );
};

export default EventPage;
