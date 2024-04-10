const CardBody = ({ title, duration, location }) => {
    return (
        <div className="px-4 py-2 flex flex-col gap-2">
            <p className="text-2xl">{title}</p>
            <p className="text-sm text-semibold-foreground text-gray-400">Duration :{duration} minutes</p>
            <p className="text-sm text-semibold-foreground text-gray-400"> Mode: {location}</p>
            <p className="text-md font-normal text-blue-500 hover:underline cursor-pointer underline-offset-2">View Booking page</p>
        </div>
    )
}
export default CardBody