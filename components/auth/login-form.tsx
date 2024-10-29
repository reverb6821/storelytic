'use client'

import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { PiEyeDuotone, PiEyeClosedDuotone, } from 'react-icons/pi';
import { BeatLoader } from 'react-spinners';
import * as z from 'zod'

import { login } from '@/actions/login'
import CardWrapper from '@/components/auth/card-wrapper'
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema } from '@/schemas'

const LoginForm: React.FC = () => {
  const [showPsw, setShowPsw] = React.useState(false)
  const [error, setError] = React.useState<string | undefined>('')
  const [success, setSuccess] = React.useState<string | undefined>('')
  const [isPending, startTransition] = React.useTransition()
  const [show2Fa, setShow2Fa] = React.useState(false)

  const searchParams = useSearchParams()

  const urlError = searchParams.get('error') === '0AuthAccountNotLinked' ?
    'Email already in use with different provider' : ''

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      login(values).then((data) => {
        // setError(data?.error)
        // setSuccess(data?.success)
        if (data?.error) {
          form.reset()
          setError(data.error)
        }

        if (data?.success) {
          form.reset()
          setSuccess(data.success)
        }


        if (data?.twoFactor) {
          setShow2Fa(true)
        }
      }).catch(() => setError('Something went wrong'))

    })
  }

  return (
    <React.Fragment>
      <CardWrapper
        headerLabel='Welcome back!'
        backButtonLabel='Dont have and account?'
        backButtonHref='/auth/register'
        showSocial
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6'
          >
            <div className='space-y-4'>
              {!show2Fa ? (
                 <FormField
                 control={form.control}
                 name='code'
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Two Factor Code</FormLabel>
                     <FormControl>
                       <Input
                         {...field}
                         type='text'
                         disabled={isPending}
                       />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
              ) : (
                <React.Fragment>
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
                        <Button className='px-0 font-normal' size='sm' variant='link' asChild>
                          <Link href={'/auth/reset'}>
                            Forgot Password
                          </Link>
                        </Button>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </React.Fragment>
              )
              }
            </div>

            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <Button
              type='submit'
              className='w-full'
              disabled={
                !form.formState.isValid ||
                isPending
              }
            >
              {isPending ? (<BeatLoader color='bg-slate-200' />) : 'Login'}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </React.Fragment>
  )
}

export default LoginForm