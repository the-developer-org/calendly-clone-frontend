/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CopyIcon, Settings, Edit, Trash } from 'lucide-react';
import { toast } from 'sonner'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const CardFooter = ({ data }) => {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess('Copied!');
        } catch (err) {
            console.error('Failed to copy: ', err);
            setCopySuccess('Failed to copy!');
        }
    };
    const eventName = data.name.toLowerCase().replace(/\s+/g, '_');
    const linkToCopy = `http://localhost:5173/book/${eventName}/${data.id}`;
    const deleteHandler = () => {

    }
    const editHandler = () => {
        console.log("hello")
        toast.info("Feature not added yet", {
            description: "We are adding this feature soon"
        })
    }

    return (
        <div className="flex flex-row items-center justify-between p-4 border-t-2 mt-4">
            <div className="flex flex-row gap-[1rem] cursor-pointer" onClick={() => copyToClipboard(linkToCopy)}>
                <CopyIcon color="blue" />
                <p className="text-md font-normal text-blue-700 hover:underline">Copy Link</p>
            </div>
            {copySuccess && <span>{copySuccess}</span>}
            <DropdownMenu>
                <DropdownMenuTrigger><Settings size={'1.5rem'} /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-row gap-2 hover:bg-gray-50" onClick={editHandler}><Edit size={"0.75rem"} /> Edit</DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-row gap-2" onClick={deleteHandler}><Trash size={"0.75rem"} /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default CardFooter;
