import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardWrapper from "./CardWrapper";


const EventCard = ({ title, location, duration }) => {
    return (
        <CardWrapper>
            <CardHeader />
            <CardBody title={title} duration={duration} location={location} />
            <CardFooter />
        </CardWrapper >

    )
}
export default EventCard;