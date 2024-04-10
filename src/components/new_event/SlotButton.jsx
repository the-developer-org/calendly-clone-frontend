/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"
const SlotButton = ({ slot }) => {

    return (
        <Button disabled={slot.availabilty} variant="outline" className="hover:bg-blue-200" >{slot.startTime} to {slot.endTime}</Button>
    )
}
export default SlotButton