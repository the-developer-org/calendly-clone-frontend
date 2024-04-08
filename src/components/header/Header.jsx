import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings2 } from 'lucide-react'

const Header = ({ name }) => {
    return (<>
        <div className="px-[1rem] flex flex-row justify-between  h-[4rem] mx-1 w-screen fixed top-0 bg-white z-30">
            <div className="flex flex-row gap-[1rem] md:gap-[2rem] items-center md:pl-[14rem] lg:pl-[15rem]">
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

                <Settings2 className="cursor-pointer" />
            </div>
        </div>


    </>)
}
export default Header;