
import EventCard from "./EventCard";
import MobileHeader from "../header/MobileHeader";

import { cardsData } from "../../assets/data";

const EventPage = ({ title }) => {
    return (
        <section className="flex flex-col gap-[1rem]">
            <MobileHeader className="block sm:hidden" />
            <h1 className=" text-1xl md:text-2xl lg:text-3xl font-poppins">{title}</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2  xl:grid-cols-3 ">
                {cardsData.map((card, index) => (
                    <EventCard key={index} title={card.name} duration={card.duration} location={card.location} />
                ))}
            </div>
        </section>
    );
};

export default EventPage;
