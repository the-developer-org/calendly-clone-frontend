import { Button } from "@/components/ui/button";
import { CopyIcon } from 'lucide-react'
const CardFooter = () => {
    return (
        <div className="flex flex-row items-center justify-between p-4 border-t-2">
            <div className="flex flex-row gap-[1rem] cursor-pointer">
                <CopyIcon color="blue" />
                <p className="text-md font-normal text-blue-700 hover:underline">Copy Link</p>
            </div>

            <Button variant="outline" className="outline-none border border-blue-700 hover:bg-blue-200 hover:text-blue-600 text-blue-700 w-[6rem] rounded-full">Share</Button>
        </div>
    )
}
export default CardFooter