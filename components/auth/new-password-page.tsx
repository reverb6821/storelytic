import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form'
import { PiEyeDuotone, PiEyeClosedDuotone, } from 'react-icons/pi';
import { BeatLoader } from 'react-spinners'
import * as z from 'zod'

import { newPassword } from '@/actions/new-password';
import CardWrapper from '@/components/auth/card-wrapper'
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { NewPasswordSchema } from '@/schemas'

const NewPasswordForm: React.FC = () => {
    const [error, setError] = React.useState<string | undefined>('')
    const [success, setSuccess] = React.useState<string | undefined>('')
    const [isPending, startTransition] = React.useTransition()
    const [showPsw, setShowPsw] = React.useState(false)

    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: '',
        },
        mode: 'onChange'
    })

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError('')
        setSuccess('')
        startTransition(() => {
            newPassword(values, token).then((data) => {
                setError(data?.error)
                setSuccess(data?.success)
            })
        })
    }

    return (
        <React.Fragment>
            <CardWrapper
                headerLabel='Enter a new password'
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
                                name='password'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <div className='flex items-center '>
                                                <Input
                                                    {...field}
                                                    placeholder='*****'
                                                    type={showPsw ? 'text' : 'password'}
                                                    disabled={isPending}
                                                />
                                                <Button
                                                    type='button'
                                                    variant='link'
                                                    onClick={() => setShowPsw(!showPsw)}
                                                    disabled={isPending}
                                                >
                                                    {showPsw ? (<PiEyeClosedDuotone className='h-5 w-5' />) : (<PiEyeDuotone className='h-5 w-5' />)}
                                                </Button>
                                            </div>
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
                            {isPending ? (<BeatLoader color='bg-slate-200' />) : 'Reset password'}
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </React.Fragment>
    )
}

export default NewPasswordForm