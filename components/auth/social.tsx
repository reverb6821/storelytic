'use client'

import * as React from 'react'

import { signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

import { Button } from '../ui/button'

const Social: React.FC = () => {
    const onClick = (provider: 'google' | 'github') => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    return(
    <React.Fragment>
        <div className='flex items-center w-full gap-x-2'>
            <Button
                size='lg'
                className='w-full'
                variant="outline"
                onClick={() => { onClick('google') }}
            >
                <FcGoogle className='h-5 w-5' />
            </Button>
            <Button
                size='lg'
                className='w-full'
                variant="outline"
                onClick={() => { onClick('github') }}
            >
                <FaGithub className='h-5 w-5' />
            </Button>
        </div>
    </React.Fragment>
)}

export default Social