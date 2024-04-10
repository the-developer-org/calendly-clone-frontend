import { Button } from "@/components/ui/button"

const BackButton = ({ label, toggle }) => {
    return (<>
        <Button variant="link" className="font-normal w-full" asChild size="sm">
            <p onClick={() => toggle()}>{label}</p>
        </Button>

    </>)
}


export default BackButton