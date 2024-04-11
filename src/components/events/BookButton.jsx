import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const BookButton = ({ slot, selectedDate, id }) => {
    const location = useLocation();
    const [showDialog, setShowDialog] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: ''
    });

    const onClickHandler = () => {
        setShowDialog(!showDialog);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page
        console.log("Form Data:", formData);
        const data = {
            ...formData,
            eventId: id,
            eventStartTime: slot.startTime,
            eventEndTime: slot.endTime,
            date: selectedDate
        }
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
            <Button disabled={slot.availabilty} variant="outline" className={`hover:bg-blue-200 ${showDialog ? 'w-1/2' : 'w-full'}`} onClick={onClickHandler}>
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
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="col-span-3"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="johndoe@example.com"
                                        className="col-span-3"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default BookButton;
