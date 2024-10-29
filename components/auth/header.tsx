import * as React from 'react'

interface HeaderProps {
  label: string
}

const Header: React.FC<HeaderProps> = (props) => (
  <React.Fragment>
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
        <h1 className='text-3xl font-semibold'>
          📦 StoreLytic
        </h1>
        <p className='text-muted-foreground text-sm'>
            {props.label}
        </p>
    </div>
  </React.Fragment>
)

export default Header