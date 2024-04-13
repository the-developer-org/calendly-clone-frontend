import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings2 } from 'lucide-react'
import { Link } from "react-router-dom";
const MobileHeader = ({ name }) => {
  return (<>
    <div className=" sm:hidden flex flex-row items-center justify-between h-[4rem]  bg-white z-30 ">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className=" md:m-3 lg:m-5 flex flex-row items-center gap-x-4">
        <Link to={'/new-event'}>
          <Button variant="outline" className=" w-full  sm:hidden outline-none border border-blue-400 hover:bg-blue-200 hover:text-blue-600 text-blue-400">New event</Button>
        </Link>
      </div>
    </div>



  </>)
}
export default MobileHeader;