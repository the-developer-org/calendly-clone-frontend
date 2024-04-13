import { Link } from "react-router-dom"
const CardBody = ({ data, id }) => {
  console.log(data)
  return (
    <div className="px-4 py-2 flex flex-col gap-2 capitalize">
      <p className="text-2xl">{data.name}</p>
      <p className="text-sm text-semibold-foreground text-gray-400 ">Duration :{data.duration} minutes</p>
      <p className="text-sm text-semibold-foreground text-gray-400 "> Mode: {data.mode}</p>
      <Link to={`/preview/${data.id}`}><p className="text-md font-normal text-blue-500 hover:underline cursor-pointer underline-offset-2">View Booking page</p></Link>
    </div>
  )
}
export default CardBody