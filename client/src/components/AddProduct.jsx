import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { createProduct } from '../slices/product'
import {TbBuildingWarehouse} from 'react-icons/tb'

const AddProduct = () => {

    const initialProductState = {
        id: null,
        name: "",
        description: "",
        quantity: "",
        note: "",
        stock: true,
    }

    const [product, setProduct] = useState(initialProductState)
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const saveProduct = () => {
        const { name, description, note, quantity, stock } = product
        dispatch(createProduct({ name, description, note, quantity, stock }))
            .unwrap()
            .then(data => {
                console.log(data);
                setProduct({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    quantity: data.quantity,
                    note: data.note,
                    stock: data.stock
                })
                setSubmitted(true);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const newProduct = () => {
        setProduct(initialProductState);
        setSubmitted(false);
    }

    return (
        <section >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white ">
                    <TbBuildingWarehouse className="w-8 h-8 mr-2 text-[30px] text-blue-600"/>
                    StoreLytic
                </a>
                <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-lg">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Add Product
                        </h1>
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
                                            Add New
                                        </button>
                                    </div>

                                    <div className='m-2 p-2'>
                                        <div className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center     dark:focus:ring-red-800">
                                            <Link to={'/'}>
                                                Go Back to Product
                                            </Link>
                                        </div>
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

                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center      "
                                        onClick={saveProduct}
                                    >
                                        Save Product
                                    </button>
                                    
                                    <Link to={"/"} className='m-2 p-2'>
                                        <p className="text-sm font-light text-gray-500  ">
                                        Go Back
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AddProduct