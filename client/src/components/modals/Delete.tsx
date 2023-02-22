import { FcHighPriority } from 'react-icons/fc'

interface RemoveProps {
    removeIsOpen: boolean;
    toggleRemove: () => void;
    removeProduct: () => void
  }

export default function (props: RemoveProps) {
    return(
        <>
        {props.removeIsOpen && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none dark:text-white ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                    <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative dark:bg-gray-800">
                    <div className="md:flex items-center">
                        <div className="rounded-full flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                        <FcHighPriority size={50}/>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <p className="font-bold">Delete Product</p>
                        <p className="text-sm text-gray-700 mt-1">You will lose this Product. This action cannot be undone.
                        </p>
                        </div>
                    </div>
                    <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                        <button
                            onClick={props.removeProduct}
                            className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-700 text-red-200 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                            Delete
                        </button>
                        <button 
                            onClick={props.toggleRemove}
                            className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 dark:bg-gray-700 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
                            Cancel
                        </button>
                    </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        )}
        </>
    )
}