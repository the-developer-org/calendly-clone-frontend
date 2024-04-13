/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { useSelector, useDispatch } from 'react-redux';

const ScheduledTable = ({ start, end, data }) => {
  const convart12HoursTime = (time) => {
    let [hours, minutes, seconds] = time.split(':');
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
  };
  return (
    <Table>
      <TableCaption>Your upcoming appointments</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Mode</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Timings</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((event, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              {new Date(event.eventDate).toLocaleDateString()}
            </TableCell>
            <TableCell>{event.eventName}</TableCell>
            <TableCell>{event.mode}</TableCell>
            <TableCell>{event.userEmail}</TableCell>
            <TableCell>{`${convart12HoursTime(event.eventStartTime)}-${convart12HoursTime(event.eventEndTime)}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ScheduledTable;
