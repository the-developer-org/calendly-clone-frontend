import { useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { Loader2 } from "lucide-react"
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
import { signupSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod"

import CardWrapper from "../common/CardWrapper";
import { signUpAction } from "@/store/actions/authActions";


const Signup = ({ toggle }) => { // Receive toggle handler as prop
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    const onSubmit = (data) => {
        dispatch(signUpAction(data, setIsSubmitting))
    }
    return (<>
        <CardWrapper label="Get your journey started with Appointmently" title="Signup" backButtonPath="/auth/login" backButtonLabel="Already have an account? Login here" toggle={toggle}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Username:</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="text" placeholder="John Doe" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
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
                    <Button type="submit" className="w-full bg-purple-800 hover:bg-purple-500 text-white ">
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Signup
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    </>)
}
export default Signup;
