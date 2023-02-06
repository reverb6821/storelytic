import { Outlet } from "react-router-dom"
import Navbar from '../components/partials/Navbar'

const Main =()=>{
return(
    <div className="w-full bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="mx-auto sm:px-4 mt-3">
            <Outlet />
        </div>
    </div>
)
}

export default Main