"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import { SignUpBody, SignUpSchema } from "@/schema/auth.schema";
import { signUp } from "@/api/api.auth";
import { useRouter } from "next/navigation";

export function useSignUp() {
    const { replace } = useRouter()
    const form = useForm<SignUpBody>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            email: "",
            name: "",
            password: ""
        }
    });

    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    async function handleSubmit(data: SignUpBody) {
        setIsLoading(true);
        setServerError(null);

        try {
            setIsLoading(true)
            await signUp(data)
            replace("/sign-in")

        } catch (err) {
            let errMessage = "Something went wrong!";

            if (isAxiosError(err)) {
                errMessage = err.response?.data?.message || errMessage;
            }

            toast.error(errMessage);
        } finally {
            setIsLoading(false)
        }
    }

    return { form, handleSubmit, isLoading, serverError };
}