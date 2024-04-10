import { Button } from "@/components/ui/button"
const SidebarButton = ({ label, icon: Icon, show }) => {
    return (
        <>
            <Button className="w-full  bg-grey-800 hover:bg-purple-500 text-black flex flex-row  gap-2 justify-center md:justify-start ">
                <Icon />
                <p className={`${show ? 'hidden' : 'block'}`}>{label}</p>


            </Button>
        </>
    )
}
export default SidebarButton;