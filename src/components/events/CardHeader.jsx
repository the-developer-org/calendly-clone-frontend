import { Settings, Edit, Trash } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const CardHeader = () => {
    return (
        <>
            <div className='flex flex-row items-center justify-end pl-4 pr-4'>
                <DropdownMenu>
                    <DropdownMenuTrigger><Settings size={'1rem'} /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Settings</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex flex-row gap-2"><Edit size={"0.75rem"} /> Edit</DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-row gap-2"><Trash size={"0.75rem"} /> Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>

        </>
    )
}
export default CardHeader