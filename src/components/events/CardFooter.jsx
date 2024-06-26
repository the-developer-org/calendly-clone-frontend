/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { CopyIcon, Settings, Edit, Trash } from 'lucide-react';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { deleteEventAction } from '@/store/actions/eventActions';
import environmentConfig from '../../util/config';
const { FE_URL } = environmentConfig;
const CardFooter = ({ data }) => {
  const dispatch = useDispatch();
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.info("Link copied to clipboard")
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  const eventName = data.name.toLowerCase().replace(/\s+/g, '_');
  const linkToCopy = `${FE_URL}/book/${eventName}/${data.id}`;
  const deleteHandler = () => {
    dispatch(deleteEventAction(data.id));
  };
  const editHandler = () => {
    toast.info('Feature not added yet', {
      description: 'We are adding this feature soon',
    });
  };

  return (
    <div className="flex flex-row items-center justify-between p-4 border-t-2 mt-4">
      <div
        className="flex flex-row gap-[1rem] cursor-pointer"
        onClick={() => copyToClipboard(linkToCopy)}
      >
        <CopyIcon color="blue" />
        <p className="text-md font-normal text-blue-700 hover:underline">
          Copy Link
        </p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Settings size={'1.5rem'} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex flex-row gap-2 hover:bg-gray-50"
            onClick={editHandler}
          >
            <Edit size={'0.75rem'} /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex flex-row gap-2"
            onClick={deleteHandler}
          >
            <Trash size={'0.75rem'} /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CardFooter;
