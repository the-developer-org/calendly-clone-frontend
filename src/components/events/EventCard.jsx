import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardWrapper from "./CardWrapper";

const EventCard = ({ title, location, duration }) => {
    return (
        <CardWrapper>
            <CardBody title={title} duration={duration} location={location} />
            <CardFooter />
        </CardWrapper >

    )
}
export default EventCard;