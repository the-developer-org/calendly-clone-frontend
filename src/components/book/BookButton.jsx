import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Loader2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { bookSlotAction } from '../../store/actions/eventActions';

const BookButton = ({ slot, selectedDate, id, setBooked, setTime, event }) => {

    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: ''
    });
    const onClickHandler = () => {
        setShowDialog(!showDialog);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            eventId: id,
            eventStartTime: slot.startTime,
            eventEndTime: slot.endTime,
            eventDate: selectedDate,
            eventName: event.name,
            eventLink: event.meetingLink
        }
        dispatch(bookSlotAction(data, setLoading, setBooked))
        setTime(slot.startTime)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className='flex flex-row  gap-2 justify-between w-[10rem]'>

            <Button disabled={slot.availabilty} variant="outline" className={`hover:bg-purple-200 bg-purple-400 text-white ${showDialog ? 'w-1/2' : 'w-full'}`} onClick={onClickHandler}>
                {slot.startTime}
            </Button>
            {showDialog && (
                <Dialog isOpen={showDialog} onDismiss={() => setShowDialog(false)}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="max-w-1/2">Book</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Book Slot</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={onSubmitHandler}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="userName" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        id="userName"
                                        name="userName"
                                        placeholder="John Doe"
                                        className="col-span-3"
                                        value={formData.userName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">
                                        Email
                                    </Label>
                                    <Input
                                        id="userEmail"
                                        name="userEmail"
                                        placeholder="johndoe@example.com"
                                        className="col-span-3"
                                        value={formData.userEmail}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                <Button type="submit">Book Slot</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default BookButton;
