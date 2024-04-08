import { cardsData } from "../../assets/data";
import EventCard from "./EventCard";
import MobileHeader from "../header/MobileHeader";
import { useSelector } from "react-redux";

const EventPage = ({ title }) => {
    const { userDetails } = useSelector((state) => state.auth)
    const { name } = userDetails;
    return (
        <section className="flex flex-col gap-[1rem]">
            <MobileHeader name={name} className="block sm:hidden" />
            <h1 className=" text-1xl md:text-2xl lg:text-3xl font-poppins">{title}</h1>


            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                {cardsData.map((card, index) => (
                    <EventCard key={index} title={card.name} duration={card.duration} location={card.location} />
                ))}
            </div>
        </section>
    );
};

export default EventPage;
