import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings2 } from 'lucide-react'
const EventHeader = ({ name }) => {
    return (<>
        <div className=" flex flex-row justify-between border-b h-[4rem] m-1 md:m-0">
            <div className="flex flex-row gap-[1rem] md:gap-[2rem] items-center ">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-y-1">
                    <p className="text-1xl">{name}</p>
                    <p className="text-xs font-normal text-blue-500 hover:underline cursor-pointer overflow-hidden whitespace-nowrap md:w-[min] w-40 md:overflow-visible">
                        https://localhost:3000/mudassir-quraishi/event-two
                    </p>


                </div>
            </div>
            <div className="m-5 flex flex-row items-center gap-x-4">
                <Button variant="outline" className=" hidden lg:block outline-none border border-blue-400 hover:bg-blue-200 hover:text-blue-600 text-blue-400">New event type</Button>
                <Settings2 className="cursor-pointer" />

            </div>
        </div>


    </>)
}
export default EventHeader;