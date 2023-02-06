import { Outlet } from "react-router-dom"
// import Navbar from '../components/partials/Navbar'
import Sidebar from '../components/partials/Sidebar/Sidebar'

const Main =()=>{
return(
    <div className="flex h-full">
        <Sidebar />
        <div className="h-full w-full xs:w-[calc(100%-7rem)] lg:w-[calc(100%-14rem)] pb-16 xs:pb-0">
            <Outlet />
        </div>
    </div>
)
}

export default Main