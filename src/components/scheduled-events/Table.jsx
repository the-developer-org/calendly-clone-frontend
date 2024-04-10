import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical, Edit, Trash } from 'lucide-react'


const ScheduledTable = ({ start, end, data }) => {
    return (
        <Table >
            <TableCaption>Your upcoming appointments</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[15rem]">Date</TableHead>
                    <TableHead>Timings</TableHead>
                    <TableHead>Detail</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.slice(start, end).map((event, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{event.date}</TableCell>
                        <TableCell>{event.timting}</TableCell>
                        <TableCell className="flex flex-col items-start">
                            <div>
                                <p>{event.client_name}</p>
                                <p className="hidden sm:block">Location: {event.mode}</p>
                            </div>
                        </TableCell>
                        <TableCell className="text-right">
                            <DropdownMenu>
                                <DropdownMenuTrigger><EllipsisVertical size={'1.5rem'} /></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="flex flex-row gap-2 hover:text-red-500 cursor-pointer"><Edit size={"0.75rem"} /> Edit</DropdownMenuItem>
                                    <DropdownMenuItem className="flex flex-row gap-2 hover:text-green-400 cursor-pointer"><Trash size={"0.75rem"} /> Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>

    )
}
export default ScheduledTable