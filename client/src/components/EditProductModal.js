import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';

import productService from '../services/productService';

const EditProductModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  // let navigate = useNavigate();

  const initialProductState = {
    id: null,
    name: "",
    description: "",
    shipped: false
  };

  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");

  const getProduct = id => {
    productService.get(id)
      .then(response => {
        setCurrentProduct(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getProduct(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const updateShipped = status => {
    var data = {
      id: currentProduct.id,
      name: currentProduct.name,
      description: currentProduct.description,
      shipped: status
    };

    productService.update(currentProduct.id, data)
      .then(response => {
        setCurrentProduct({ ...currentProduct, shipped: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateProduct = () => {
    productService.update(currentProduct.id, currentProduct)
      .then(response => {
        console.log(response.data);
        setMessage("The Product was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  // const deleteProduct = () => {
  //   productService.remove(currentProduct.id)
  //     .then(response => {
  //       console.log(response.data);
  //       navigate("/product");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };
  return (
    <>
      <button
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        type="button"
        onClick={() => setShowModal(true)}
        href={"/product/" + currentProduct.id}
      >
        Edit
      </button>
      {showModal ? (
              <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative flex flex-col w-full  outline-none focus:outline-none">
                    {/*header*/}
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
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                      {currentProduct ? (
                        
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Update Product
                          </h1>
                          <form className="space-y-4 md:space-y-6">

                            <div>
                              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                              placeholder={currentProduct.name}
                              required=""
                              value={currentProduct.name}
                              onChange={handleInputChange}
                              />
                            </div>

                            <div>
                              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input type="description" name="description" id="description" placeholder={currentProduct.description} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                                value={currentProduct.description}
                                onChange={handleInputChange}
                                 />
                            </div>

                            <div>
                              <label>
                                <strong  className='text-gray-900 dark:text-white'>Status:</strong>
                              </label>
                              <p className='text-gray-900 dark:text-white'>{currentProduct.shipped ? "Shipped" : "Pending"}</p>
                              
                            </div>
                          </form>

                          {currentProduct.shipped ? (
                            <button
                              className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                              onClick={() => updateShipped(false)}
                            >
                             Shipped
                            </button>
                          ) : (
                            <button
                              className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
                              onClick={() => updateShipped(true)}
                            >
                              No Shipped
                            </button>
                          )}
                          <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            onClick={updateProduct}
                          >
                            Update
                          </button>
                          <p>{message}</p>
                        </div>
                      ) : (
                          <div>
                            <br />
                            <p>Please click on a Product...</p>
                          </div>
                        )}
                      </div>                     
                    </div>
                    {/*footer*/}
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
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
      ) : null}
    </>
  );
}

export default EditProductModal