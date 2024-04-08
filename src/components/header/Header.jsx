import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
    return (<>
        <div className=" hidden md:right-0 md:flex flex-row gap-x-3 m-4 mr-8 fixed">
            <Button variant="outline" className=" hidden lg:block outline-none border border-blue-400 hover:bg-blue-200 hover:text-blue-600 text-blue-400 ">Invite</Button>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>


    </>)
}
export default Header;