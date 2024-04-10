import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { login } from "../../validations/formValidation";
import { logInAction } from "../../store/actions/authActions";

import CardWrapper from "../common/CardWrapper";

const Login = ({ toggle }) => {
    const dispatch = useDispatch();
    const form = useForm({
        resolver: zodResolver(login),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = async (data) => {
        dispatch(logInAction(data))
    }
    return (<>
        <CardWrapper label="Welcome back, we missed you." title="Login" backButtonPath="/auth/signup" backButtonLabel="Don't have an account? Signup here" toggle={toggle}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Email:</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="email" placeholder="jhondoe@example.com" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Password:</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                    </div>
                    <Button type="submit" className="w-full  bg-purple-800 hover:bg-purple-500 text-white " >
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    </>)
}
export default Login;