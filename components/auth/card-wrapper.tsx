'use client'

import * as React from 'react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import BackButton from './back-button'
import Header from './header'
import Social from './social'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

const CardWrapper: React.FC<CardWrapperProps> = (props) => (
  <React.Fragment>
    <Card className='w-[400px] shadow-md'>
        <CardHeader>
            <Header label={props.headerLabel} />
        </CardHeader>
        <CardContent>
            {props.children}
        </CardContent>
        {props.showSocial && (
            <CardFooter>
            <Social />
        </CardFooter>
        )}
        <CardFooter>
            <BackButton
              label={props.backButtonLabel}
              href={props.backButtonHref}
            />
        </CardFooter>
    </Card>
  </React.Fragment>
)

export default CardWrapper