/* eslint-disable react/prop-types */
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import SlotButton from "./SlotButton";
import { Clock, Check, Loader2 } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import BrandTitle from "../common/BrandTitle";
import { saveActionEvent } from "../../store/actions/eventActions";
const Preview = ({ details }) => {
    const [selected, setSelected] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { authToken } = useSelector(state => state.auth)
    const availableSlots = selected ? details.slots[selected]?.map(slot => slot) : [];
    const submitHandler = () => {
        const { slots, ...eventDetails } = details
        dispatch(saveActionEvent(eventDetails, authToken, navigate))
        localStorage.removeItem('formData');
    }
    return (
        <>

            <div className=" grid grid-cols-2 gap-x-[2rem] justify-center  max-h-1/2 font-poppins">
                <div className="hidden lg:block border-r p-4">
                    <Card className="min-h-[30rem] flex flex-col  items-start justify-evenly"  >
                        <CardHeader>
                            <CardTitle>{details.name}</CardTitle>
                            <CardDescription>This is just a preview of your event link which can be shared with others</CardDescription>
                        </CardHeader>
                        <div className="flex flex-col gap-4 items-start justify-evenly mt-2">
                            <CardContent>
                                <div className="mb-4 grid grid-cols-2 gap-2 items-start pb-4 last:mb-0 last:pb-0">
                                    <div className="space-y-1 ">
                                        <p className="text-sm font-medium leading-none ">
                                            Event Duration
                                        </p>
                                        <p className="text-sm text-muted-foreground flex flex-row gap-2 items-center">
                                            {details.duration} minutes<Clock size={"1rem"} />
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardContent>
                                <div className="mb-4 grid grid-cols-2 gap-2 items-start pb-4 last:mb-0 last:pb-0">
                                    <div className="space-y-1 ">
                                        <p className="text-sm font-medium leading-none ">
                                            Meeting mode
                                        </p>
                                        <p className="text-sm text-muted-foreground flex flex-row gap-2 items-center">
                                            {details.mode}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardContent>
                                <div className="mb-4 grid grid-cols-2 gap-2 items-start pb-4 last:mb-0 last:pb-0">
                                    <div className="space-y-1 ">
                                        <p className="text-sm font-medium leading-none ">
                                            Meeting link
                                        </p>
                                        <p className="text-sm text-muted-foreground flex flex-row gap-2 items-center">
                                            {details.meetingLink}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </div>

                        <CardFooter>
                            <Button className="w-full" onClick={submitHandler}>
                                <Check className="mr-2 h-4 w-4" /> Create Event
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="flex flex-col items-start justify-around">
                    <BrandTitle />
                    <div className="flex flex-col items-center justify-center sm:flex-row  ">
                        <div>
                            <Calendar
                                mode="single"
                                className="rounded-md border"
                                selected={selected}
                                onSelect={setSelected}
                                disabled={(date) =>
                                    date > details.endDate || date < details.startDate
                                } />
                        </div>
                        <div className="flex flex-row flex-1 gap-4 items-center">
                            {selected && (
                                <div className="grid grid-cols-3 md:grid-rows-2 lg:flex lg:flex-col gap-4 lg:max-h-80 ">
                                    {availableSlots.map((slot, index) => (
                                        <SlotButton key={index} slot={slot} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>



                </div>
            </div >
        </>



    )
}
export default Preview