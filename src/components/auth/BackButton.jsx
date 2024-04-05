import PropTypes from 'prop-types'
import { Button } from "@/components/ui/button"

import { Link } from 'react-router-dom'
const BackButton = ({ label, path }) => {
    return (<>
        <Button variant="link" className="font-normal w-full" asChild size="sm">
            <Link to={path}>{label}</Link>
        </Button>

    </>)
}
BackButton.propTypes = {
    label: PropTypes.string,
    path: PropTypes.string
}
export default BackButton