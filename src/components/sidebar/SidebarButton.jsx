import { Button } from "@/components/ui/button"
const SidebarButton = ({ label, icon: Icon }) => {
    return (
        <>
            <Button className="w-full  bg-grey-800 hover:bg-purple-500 text-black flex flex-row  gap-2 justify-center md:justify-start ">
                <Icon />
                {label}
            </Button>
        </>
    )
}
export default SidebarButton;