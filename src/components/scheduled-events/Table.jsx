import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Edit, Trash } from 'lucide-react'

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
                                <p>Location: {event.mode}</p>
                            </div>
                        </TableCell>
                        <TableCell className="text-right">
                            <div className="flex flex-row justify-end gap-4">
                                <Trash className="hover:text-red-500 cursor-pointer" />
                                <Edit className="hover:text-green-400 cursor-pointer" />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>

    )
}
export default ScheduledTable