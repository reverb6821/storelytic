import {TbBuildingWarehouse} from 'react-icons/tb'

import SignInForm from '../components/SignInForm'

const SignInPage =()=>{
    return(
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <TbBuildingWarehouse className="w-8 h-8 mr-2 text-[30px] text-blue-600"/>
                StoreLytic
            </a>
            <SignInForm/>
            </div>
        </section>

    )
}

export default SignInPage