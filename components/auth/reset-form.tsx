'use client'

import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BeatLoader } from 'react-spinners'
import * as z from 'zod'

import { reset } from '@/actions/reset'
import CardWrapper from '@/components/auth/card-wrapper'
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ResetSchema } from '@/schemas'

const ResetForm: React.FC = () => {
    const [error, setError] = React.useState<string | undefined>('')
    const [success, setSuccess] = React.useState<string | undefined>('')
    const [isPending, startTransition] = React.useTransition()

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: '',
        },
        mode: 'onChange'
    })

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError('')
        setSuccess('')
        startTransition(() => {
            reset(values).then((data) => {
                setError(data?.error)
                setSuccess(data?.success)
            })
        })
    }

    return (
        <React.Fragment>
            <CardWrapper
                headerLabel='Forgot your password?'
                backButtonLabel='Back to login'
                backButtonHref='/auth/login'
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-6'
                    >
                        <div className='space-y-4'>
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='john.doe@example.com'
                                                type='email'
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button
                            type='submit'
                            className='w-full'
                            disabled={
                                !form.formState.isValid ||
                                isPending
                            }
                        >
                            {isPending ? (<BeatLoader color='bg-slate-200' />) : 'Send Reset email'}
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </React.Fragment>
    )
}

export default ResetForm