import React, { useState } from "react";

import productService from '../services/productService';

const AddProductModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const initialProductState = {
        id: null,
        name: "",
        description: "",
        published: false
    };

    const [product, setProduct] = useState(initialProductState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const saveProduct = () => {
        var data = {
            name: product.name,
            description: product.description
        };


        productService.create(data)
            .then(response => {
                setProduct({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    shipped: response.data.shipped
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };

    
    const newProduct = () => {
        setProduct(initialProductState);
        setSubmitted(false);
    };

    return (
        <>
        <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add
      </button>
      {showModal ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative flex flex-col w-full  outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 rounded-t">
                        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                            Storelytic
                        </div>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                            </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Add New Product
                                </h1>
                            </div>
                            {submitted ? (
                                <div>
                                <h4>You submitted successfully!</h4>
                                <button className="btn btn-success" onClick={newProduct}>
                                    Add
                                </button>
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                </div>
                            ) : (
                                <form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Product Name"
                                        required=""
                                        value={product.name}
                                        onChange={handleInputChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="description" name="description" id="description" placeholder="Add Product Description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                            value={product.description}
                                            onChange={handleInputChange}
                                            />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        onClick={saveProduct}
                                    >
                                        Add
                                    </button>
                                </form>
                            )}
                        </div>
      
                    </div> 
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            
                        </div>
                </div>
            </div>
        </div>
        </>
        ) : null}
        </>
    )
}

export default AddProductModal