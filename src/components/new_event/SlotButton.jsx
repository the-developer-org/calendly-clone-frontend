import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const SlotButton = ({ slot, selectedDate }) => {
    const location = useLocation();
    const [showOtherButton, setShowOtherButton] = useState(false);

    const onClickHandler = () => {
        const id = location.pathname.split("/")[2];
        console.log(`http://localhost:3000/book-slot/`);
        setShowOtherButton(!showOtherButton);

        const onOtherButtonClick = () => {
            setShowOtherButton(!showOtherButton)
        };

        return (
            <div className='flex flex-row w-full gap-2 justify-between max-w-[12rem]'>
                <Button disabled={slot.availabilty} variant="outline" className={`hover:bg-blue-200 ${showOtherButton ? 'w-1/2' : 'w-full'}`} onClick={onClickHandler}>
                    {slot.startTime} to {slot.endTime}
                </Button>
                {showOtherButton && (
                    <Button onClick={onOtherButtonClick} className="w-1/2 text-xs">
                        BookSlot
                    </Button>
                )}
            </div>
        );
    };

}
export default SlotButton;
