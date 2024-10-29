import * as React from 'react'

import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import CardWrapper from '@/components/auth/card-wrapper'

const ErrorCard: React.FC = () => (
  <React.Fragment>
    <CardWrapper
      headerLabel='Oops! Something went wrong'
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
    >
      <div className='w-full flex justify-center items-center'>
        <ExclamationTriangleIcon className='text-destructive'/>
      </div>
    </CardWrapper>

  </React.Fragment>
)

export default ErrorCard