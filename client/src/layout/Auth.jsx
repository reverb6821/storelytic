import React from 'react';

import  HeaderAuth  from '../Components/Header/HeaderAuth';
import  AuthForm  from '../Pages/AuthForm/AuthForm';

const Auth = () => {
    return (
        <>
            <HeaderAuth />
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                    ></div>
                    <AuthForm />
                </section>
            </main>
        </>
    )
}
export default Auth;