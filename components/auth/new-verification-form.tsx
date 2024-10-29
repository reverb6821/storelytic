'use client'

import * as React from 'react'

import { useSearchParams } from 'next/navigation'
import { BeatLoader } from 'react-spinners'

import { NewVerification } from '@/actions/new-verification'
import CardWrapper from '@/components/auth/card-wrapper'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'

const NewVerificationForm: React.FC = () => {
    const [error, setError] = React.useState<string | undefined>()
    const [success, setSuccess] = React.useState<string | undefined>()

    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const onSubmit = React.useCallback(() => {
        if(success || error) return

        if (!token){
            setError('Missing token!')
            return null
        }

        NewVerification(token).then((data) => {
            setSuccess(data.success)
            setError(data.error)
        }).catch(() =>{
            setError('Something went wrong!')
        })
    }, [token, success, error])

    React.useEffect(() => {
        onSubmit()
    }, [onSubmit])

    return (
        <React.Fragment>
            <CardWrapper
                headerLabel='Confirming your verification'
                backButtonLabel='Back to login'
                backButtonHref='/auth/login'
            >
                <div className='felx items-center w-full justify-center'>
                    {!success && !error && <BeatLoader />}
                    {!success && <FormSuccess message={success} />}
                    {!error && <FormError message={error} />}
                </div>
            </CardWrapper>
        </React.Fragment>
    )
}

export default NewVerificationForm