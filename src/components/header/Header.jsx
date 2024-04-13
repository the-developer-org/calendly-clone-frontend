import { useSelector } from "react-redux";

import { Settings2 } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = ({ show }) => {
  const { userDetails } = useSelector(state => state.auth)
  const { name } = userDetails
  return (<>
    <div className="px-[1rem] flex flex-row justify-between  h-[4rem] mx-1 w-screen fixed top-0 bg-white z-30">
      <div className={`flex flex-row gap-[1rem] md:gap-[2rem] items-center ${show ? 'md:pl-[4rem] lg:pl-[5rem]' : 'md:pl-[11rem] lg:pl-[12rem]'}`}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-y-1">
          <p className="text-1xl">{name}</p>
        </div>
      </div>
      <div className="m-5 flex flex-row items-center gap-x-4">

        <Settings2 className="cursor-pointer" />
      </div>
    </div>


  </>)
}
export default Header;