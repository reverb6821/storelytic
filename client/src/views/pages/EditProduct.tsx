import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import IProduct from "../../interfaces/IProduct";
import { FcDeployment } from 'react-icons/fc'

import ProductService from "../../services/product.service";

const EditProduct: React.FC =()=>{
    const { id }= useParams();
    let navigate = useNavigate();

    const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);
    const [message, setMessage] = useState<string>("");

    const getProduct = (id: string) => {
        ProductService.get(id)
          .then((response: any) => {
            setCurrentProduct(response.data);
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

      useEffect(() => {
        if (id)
          getProduct(id);
      }, [id]);
    
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCurrentProduct({ ...currentProduct, [name]: value });
      };

      const updateStock = (status: boolean) => {
        var data = {
          id: currentProduct.id,
          name: currentProduct.name,
          description: currentProduct.description,
          quantity: currentProduct.quantity,
          note: currentProduct.note,
          stock: status
        };
    
        ProductService.update(currentProduct.id, data)
          .then((response: any) => {
            console.log(response.data);
            setCurrentProduct({ ...currentProduct, stock: status });
            setMessage("The status was updated successfully!");
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
    
      const updateProduct = () => {
        ProductService.update(currentProduct.id, currentProduct)
          .then((response: any) => {
            console.log(response.data);
            setMessage("The Product was updated successfully!");
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

      return(
        <section >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <FcDeployment className="w-8 h-8 mr-2 text-[30px] text-blue-600" />
            Storelytic
          </div>
          <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Update Product
              </h1>
              {currentProduct ? (
  
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <form className="space-y-4 md:space-y-6">
  
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                      <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="{currentProduct.name}"
                        required=""
                        value={currentProduct.name}
                        onChange={handleInputChange}
                      />
                    </div>
  
                    <div>
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <input 
                        type="text"
                        name="description"
                        id="description"
                        placeholder="{currentProduct.description} "
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
  
                        value={currentProduct.description}
                        onChange={handleInputChange}
                      />
                    </div>
  
                    <div>
                      <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 ">Quantity</label>
                      <input 
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="{currentProduct.quantity}"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        value={currentProduct.quantity}
                        onChange={handleInputChange}
                      />
                    </div>
  
                    <div>
                      <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
                      <input 
                        type="text"
                        name="note"
                        id="note"
                        placeholder="{currentProduct.note} "
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
  
                        value={currentProduct.note}
                        onChange={handleInputChange}
                      />
                    </div>
  
                    <div>
                      <label>
                        <strong className='text-gray-900  '>Status:</strong>
                      </label>
  
                    </div>
                  </form>
  
                  {currentProduct.stock ? (
                    <button
                      className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                      onClick={() => updateStock(false)}
                    >
                      IN STOCK
                    </button>
                  ) : (
                    <button
                      className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
                      onClick={() => updateStock(true)}
                    >
                      OUT OF STOCK
                    </button>
                  )}
  
                  <div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      onClick={updateProduct}
                    >
                      Update
                    </button>
                    {message &&(
                      <>
                        <div className='m-2 p-2'>
                          <p className='p-4 mb-4 text-sm bg-green-700 text-green-200 rounded'>{message}</p>
                        </div>
                      </>

                    )}
                   
                    
                    <Link to={"/"} className='m-2 p-2'>
                      <p className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Go Back
                      </p>
                    </Link>
  
                  </div>
                </div>
              ) : (
                <div>
                  <br />
                  <p>Please click on a Product...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      )
}

export default EditProduct