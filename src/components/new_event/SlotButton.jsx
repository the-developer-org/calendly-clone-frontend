
import { Button } from "@/components/ui/button";

const SlotButton = ({ slot, color }) => {
  return (
    <div className='flex flex-row  gap-2 justify-around w-40'>
      <Button disabled={slot.availabilty} variant="ghost" className={`hover:bg-purple-200 bg-purple-400 text-white w-full bg-${color} hover:bg-gray-50`} >
        {slot.startTime}
      </Button>
    </div>
  );
};

export default SlotButton;