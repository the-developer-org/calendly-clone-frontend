
import { Button } from "@/components/ui/Button"

import { Link } from 'react-router-dom'
const BackButton = ({ label, path }) => {
    return (<>
        <Button variant="link" className="font-normal w-full" asChild size="sm">
            <Link to={path}>{label}</Link>
        </Button>

    </>)
}


export default BackButton