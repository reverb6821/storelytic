import React, { useState, ChangeEvent } from "react";
import ProductService from "../../services/product.service";
import IProduct from '../../interfaces/IProduct';
import { FcDeployment } from 'react-icons/fc'

interface ModalType {
    isOpen: boolean;
    toggle: () => void;
  }

export default function (props: ModalType) {
    const initialProductState = {
        id: null,
        name: "",
        description: "",
        quantity: "",
        note: "",
        stock: true,
    }

    const [product, setProduct] = useState<IProduct>(initialProductState)
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
      };

      const saveProduct = () => {
        var data = {
          name: product.name,
          description: product.description,
          quantity: product.quantity,
          note: product.note,
          stock: product.stock
        };
    
        ProductService.create(data)
          .then((response: any) => {
            setProduct({
              id: response.data.id,
              name: response.data.name,
              description: response.data.description,
              quantity: response.data.quantity,
              note: response.data.note,
              stock: response.data.stock
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

      const newProduct = () => {
        setProduct(initialProductState);
        setSubmitted(false);
    }

    return(
        <>
        {props.isOpen && (
          <><div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none dark:text-white "
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-gray-800">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-solid border-slate-200 rounded-t">
                                <FcDeployment className="w-8 h-8 mr-2 text-[30px] text-blue-600" />
                                <h3 className="text-3xl font-semibold">
                                    StoreLytic
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                     onClick={props.toggle}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                            {submitted ? (
                            <div>
                                <div className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                   
                                    <span className="sr-only">  Info</span>
                                    <div>
                                        <span className="font-medium">Success!</span> You submitted successfully!

                                    </div>
                                </div>
                                <div>
                                    <div className='m-2 p-2'>
                                        <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center      " onClick={newProduct}>
                                            Add Another New
                                        </button>
                                    </div>

                                </div>

                                <div>

                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={product.name || ''}
                                            onChange={handleInputChange}
                                            placeholder="Insert Product Name"
                                            required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                        <input
                                            type="text"
                                            name="description"
                                            id="description"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={product.description || ''}
                                            onChange={handleInputChange}
                                            placeholder="Product description"
                                            required="" />
                                    </div>

                                    <div>
                                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product quantity</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            id="quantity"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={product.quantity || ''}
                                            onChange={handleInputChange}
                                            placeholder="Product description"
                                            required="" />
                                    </div>

                                    <div>
                                        <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Note</label>
                                        <input
                                            type="text"
                                            name="note"
                                            id="note"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={product.note || ''}
                                            onChange={handleInputChange}
                                            placeholder="Product Note"
                                            required="" />
                                    </div>
                                    
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                        <input 
                                            id="stock" 
                                            type="checkbox" 
                                            name="stock"
                                            value={product.stock || ''}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
                                            required=""
                                        />
                                        </div>
                                        <label htmlFor="stock" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stock</label>
                                    </div>                                  
                                </div>
                            </div>
                        )}
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                     onClick={props.toggle}
                                >
                                    Close
                                </button>
                                {submitted ? (
                                    <></>
                                ) : (
                                    <button
                                    onClick={saveProduct}
                                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Save Changes
                                </button>)}
                            </div>
                        </div>
                    </div>
                </div><div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>
          )}
          </>
    )
    
}
