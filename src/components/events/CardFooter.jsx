import { CopyIcon, Settings, Edit, Trash } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const CardFooter = () => {
    return (
        <div className="flex flex-row items-center justify-between p-4 border-t-2 mt-4">
            <div className="flex flex-row gap-[1rem] cursor-pointer">
                <CopyIcon color="blue" />
                <p className="text-md font-normal text-blue-700 hover:underline">Copy Link</p>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger><Settings size={'1.5rem'} /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-row gap-2"><Edit size={"0.75rem"} /> Edit</DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-row gap-2"><Trash size={"0.75rem"} /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}
export default CardFooter