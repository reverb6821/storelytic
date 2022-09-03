import React, { useState, useEffect } from "react";
import productService from '../services/productService';
import AddProductModal from './AddProductModal'
import { Link } from "react-router-dom";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [setMessage] = useState("");
  // Used to toggle Modal on and off
  const [setShowModal] = useState(false);

  useEffect(() => {
    retrieveProducts();
  }, []);
  

  const retrieveProducts = () => {
    productService.getAll()
      .then(response => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const refreshList = () => {
    retrieveProducts();
    setCurrentProduct(null);
    setCurrentIndex(-1);
  };

  const setShippedProduct = (product, index) => {
    setCurrentProduct(product);
    setCurrentIndex(index);
  };

  const removeAllProducts = () => {
    productService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteProduct = () => {
    productService.remove(currentProduct.id)
      .then(response => {
        console.log(response.data);
        setMessage("The Product was deleted successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" >

              <div className="overflow-x-auto relative">

                <div className="flex items-start justify-between p-5 rounded-t">
                  <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Storelytic | Product List
                  </div>
                  <AddProductModal onClick={() => setShowModal(true)} className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" />
                </div>

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        #
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Shipped
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product && product.map((product, index) => (
                      <tr className={"bg-white border-b dark:bg-gray-800 dark:border-gray-700" + (index === currentIndex ? "bg-red-500" : "")}
                        onClick={() => setShippedProduct(product, index)}
                        key={index}
                      >

                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.id}
                        </th>
                        <td className="py-4 px-6">
                          {product.name}
                        </td>
                        <td className="py-4 px-6 text-gray-900 dark:text-white">
                          {product.shipped ? "Shipped" : "Pending"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="m-2 p-2">
                  <button type="button" onClick={removeAllProducts} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Remove All
                  </button>
                </div>
                
              </div>
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {currentProduct ? (
                <>

                  <h2 className="text-sm title-font text-gray-500 tracking-widest">Product:</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{currentProduct.title}</h1>

                  <p className="leading-relaxed">{currentProduct.description}</p>

                    <div className="mb-2 pb-2">
                      <label>
                        <strong>Status:</strong>
                      </label>{" "}
                      {currentProduct.shipped ? "Shipped" : "Pending"}
                    </div>

                  <div className="flex">
                    <Link
                        to={"/product/" + currentProduct.id}
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                    >
                        Edit
                    </Link>

                    {/* <EditProductModal 
                      isOpen={true}
                      value={currentProduct.id}
                      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    /> */}

                    <button onClick={deleteProduct} className="rounded-full w-10 h-10 bg-red-500 p-0 border-0 inline-flex items-center justify-center text-red-800 ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eraser w-5 h-5" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9" />
                        <line x1="18" y1="12.3" x2="11.7" y2="6" />
                      </svg>
                    </button>
                  
                  </div>
                </>

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
    </>
  );
}

export default ProductList;