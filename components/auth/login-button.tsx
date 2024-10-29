'use client'

import * as React from 'react'

import { useRouter } from 'next/navigation'

// import { Button } from '../ui/button'

interface LoginButtonProps {
    children: React.ReactNode
    mode?: 'modal' | 'redirect'
    asChild?: boolean
}

const LoginButton: React.FC<LoginButtonProps> = (props) => {
    const router = useRouter();
    const onClick = () => {
        router.push('/auth/login')
    }

    if(props.mode === 'modal'){
        return(
            <React.Fragment>
                <span>TODO: IMPLEMENT MODAL</span>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <span onClick={onClick} className='cursor-pointer'>
                {props.children}
            </span>
        </React.Fragment>
    )
}

export default LoginButton