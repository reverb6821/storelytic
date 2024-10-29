'use client'

import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {  PiEyeDuotone, PiEyeClosedDuotone, } from 'react-icons/pi';
import { BeatLoader } from 'react-spinners';
import * as z from 'zod'

import { register } from '@/actions/register'
import CardWrapper from '@/components/auth/card-wrapper'
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterSchema } from '@/schemas'


const RegisterForm: React.FC = () => {
  const [showPsw, setShowPsw] = React.useState(false)
  const [error, setError] = React.useState<string | undefined>('')
  const [success, setSuccess] = React.useState<string | undefined>('')
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    },
    mode: 'onChange'
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })

    })
  }
  
  return(
  <React.Fragment>
    <CardWrapper
      headerLabel='Create an Account'
      backButtonLabel='Already have an account?'
      backButtonHref='/login'
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
          <FormField
              control={form.control}
              name='name'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='John Doe'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({field}) => (
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
              render={({field}) => (
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
            {isPending ? (<BeatLoader color='bg-slate-200'/>) : 'Create an account'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  </React.Fragment>
)}

export default RegisterForm