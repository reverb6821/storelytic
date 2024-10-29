import * as React from 'react'

import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface FormErrorProps {
    message?: string
}

const FormError: React.FC<FormErrorProps> = (props) => {
    if (!props.message) return null
    return (
        <React.Fragment>
            <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
                <ExclamationTriangleIcon className='h-4 w-4' />
                <p>{props.message}</p>
            </div>
        </React.Fragment>
    )
}

export default FormError