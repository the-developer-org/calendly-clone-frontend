import { useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { Loader2 } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import CardWrapper from "../common/CardWrapper";
import { loginSchema } from "@/schema";
import { logInAction } from "@/store/actions/authActions";


const Login = () => {
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = async (data) => {
        dispatch(logInAction(data, setIsSubmitting))
    }
    return (<>
        <CardWrapper label="Welcome back, we missed you." title="Login" backButtonPath="/auth/signup" backButtonLabel="Don't have an account? Signup here">
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
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    </>)
}
export default Login;