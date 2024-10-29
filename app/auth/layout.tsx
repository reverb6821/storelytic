import * as React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => (
    <React.Fragment>
        <div className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
            {props.children}
        </div>
    </React.Fragment>
)

export default AuthLayout