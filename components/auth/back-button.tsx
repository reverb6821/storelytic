'use client'

import * as React from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface BackButtonProps {
  href: string
  label: string
}

const BackButton: React.FC<BackButtonProps> = (props) => (
  <React.Fragment>
    <Button
      variant='link'
      className='font-normal w-full'
      size='sm'
      asChild
    >
      <Link href={props.href}>
        {props.label}
      </Link>
    </Button>
  </React.Fragment>
)

export default BackButton