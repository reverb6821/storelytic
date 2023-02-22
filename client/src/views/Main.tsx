import { Outlet } from "react-router-dom"
import Navbar from '../components/partials/Navbar'

const Main: React.FC =()=>{
return(
    <div className="w-full bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="mx-auto sm:px-4 mt-3">
            <section className='text-gray-600 body-font overflow-hidden'>
                <div className='container px-5 py-24 mx-auto'>
                    <Outlet />
                </div>
            </section>
        </div>
    </div>
)
}

export default Main