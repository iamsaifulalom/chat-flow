"use client"

import Link from 'next/link'
import { Form } from '../ui/form'
import InputField from '../ui/input-field'
import { Spinner } from '../ui/spinner'
import { Button } from '../ui/button'
import { SignUpFields } from '@/constants/auth.form'
import { useSignUp } from '@/hooks/use-signup'

export default function SignUpForm() {
    const { form, handleSubmit, isLoading } = useSignUp();

    return (
        <div className='space-y-8'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-3xl font-bold'>Sign up</h1>
                <p className='text-[16px] text-muted-foreground'>Already have an account? <Link href="/sign-in" className='font-bold text-green-600'> Sign in</Link></p>
            </div>
            <Form {...form}>
                <form>
                    <div className='flex flex-col gap-3'>
                        {/* form fields for sign up */}
                        {SignUpFields.map((item) => (
                            <InputField key={item.name} form={form} {...item} />
                        ))}
                    </div>
                </form>
            </Form>
            <Button
                disabled={isLoading}
                onClick={form.handleSubmit(handleSubmit)}
                className="w-full py-2.5 font-bold" size="lg"
            >
                {isLoading ? <Spinner /> : "Sign up"}
            </Button>
        </div>
    )
}