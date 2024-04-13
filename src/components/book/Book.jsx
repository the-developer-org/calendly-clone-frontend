/* eslint-disable react/prop-types */
import { Calendar } from "@/components/ui/calendar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BookButton from "./BookButton";
import { Clock, } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import BrandTitle from "../common/BrandTitle";
import { getEventAction } from "@/store/actions/eventActions";
import { Button } from "@/components/ui/button";
import Message from "./Message";
const Book = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const id = location.pathname.split("/")[3]
  useEffect(() => {
    dispatch(getEventAction(id))
  }, [])
  const [booked, setBooked] = useState(false)
  const [time, setTime] = useState("")
  const { bookingEvent } = useSelector(state => state.event)
  const details = { ...bookingEvent, startDate: new Date(bookingEvent.startDate), endDate: new Date(bookingEvent.endDate) }
  const [selected, setSelected] = useState(null)
  const availableSlots = selected ? details.availableSlots[selected.toDateString()]?.map(slot => slot) : [];
  return (
    <>
      {booked ? <Message name={details.name} date={selected} time={time} link={details.meetingLink} /> :
        <div className=" flex felx-row justify-betweeen items-center max-h-1/2 font-poppins ">
          <div className="hidden md:block border-r p-4  w-full lg:w-1/2">
            <Card className="min-h-[30rem] flex flex-col  items-start justify-evenly"  >
              <CardHeader>
                <CardTitle>{details.name}</CardTitle>
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
                        Description
                      </p>
                      <p className="text-sm text-muted-foreground flex flex-row gap-2 items-center">
                        {details.description}
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
            </Card>
          </div>
          <div className="flex flex-col  items-center w-full  justify-center lg:w-1/2 md:flex-row ">
            <div className="flex flex-col items-center justify-center">
              <BrandTitle />
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

            </div>
            <div className="flex flex-row  gap-4 items-center pt-[4rem]">
              {selected && (
                <div className="grid grid-cols-2  md:flex md:flex-col gap-4 md:max-h-[20rem] lg:max-h-[25rem] overflow-y-scroll ">
                  {availableSlots.map((slot, index) => {
                    if (slot.availability) {
                      return <BookButton key={index} slot={slot} event={details} selectedDate={selected} id={details.id} setBooked={setBooked} setTime={setTime} />
                    }
                    else {
                      return <Button key={index} variant="destructive" className={`hover:bg-red-200 w-full cursor-not-allowed flex flex-row gap-2`} >
                        <p>{slot.startTime}</p>
                        Booked
                      </Button>
                    }

                  })}
                </div>
              )}
            </div>

          </div>
        </div >
      }
    </>



  )
}
export default Book