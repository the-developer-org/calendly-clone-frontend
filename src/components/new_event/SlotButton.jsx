import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const SlotButton = ({ slot, selectedDate }) => {
    return (
        <div className='flex flex-row  gap-2 justify-around w-40'>
            <Button disabled={slot.availabilty} variant="outline" className={`hover:bg-blue-200 w-full`} o>
                {slot.startTime}
            </Button>
        </div>
    );
};

export default SlotButton;