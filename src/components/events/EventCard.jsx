import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardWrapper from "./CardWrapper";

const EventCard = ({ data, id }) => {

    return (
        <CardWrapper>
            <CardBody data={data} id={id} />
            <CardFooter />
        </CardWrapper >

    )
}
export default EventCard;