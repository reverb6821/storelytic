import * as React from 'react';

import LoginButton from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <React.Fragment>
      <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <p className='font-semibold'>
        Hello world
      </p>
      <Button size={'lg'} variant={'outline'}>
        <LoginButton>
          Sign In
        </LoginButton>
      </Button>
      </main>
      
    </React.Fragment>
   
  );
}
