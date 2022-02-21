import Sidebar from '../components/partials/sidebar/Sidebar'

export default function Main() {
    return (
        <>
         <div className="flex flex-no-wrap">
            <Sidebar/>
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                    TEST
                </div>
            </div>
         </div>
        </>
        )
}