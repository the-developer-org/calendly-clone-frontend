
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/Card"
import AuthHeader from '../auth/AuthHeader';
import BackButton from '../auth/BackButton';


const CardWrapper = ({ label, title, backButtonLabel, backButtonPath, children }) => {
    return (
        <>
            <Card className="xl:w-1/3 lg:w-1/2 md:w-1/2 shadow-md">
                <CardHeader>
                    <AuthHeader label={label} title={title} />
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                <CardFooter>
                    <BackButton label={backButtonLabel} path={backButtonPath} />
                </CardFooter>
            </Card>

        </>
    );
};



export default CardWrapper;
