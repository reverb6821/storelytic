/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {TbBuildingWarehouse} from 'react-icons/tb'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'

import {
  retrieveProducts,
  deleteProduct,
  deleteAllProducts,
} from '../slices/product';

const Product = (props) => {
  const [showModeratorItem, setShowModeratorItem] = useState(false);
  const [showAdminItem, setShowAdminItem] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const products = useSelector((state) => state.products);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retrieveProducts());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const refreshData = () => {
    setCurrentProduct(null);
    setCurrentIndex(-1);
  };

  const setActiveProduct = (product, index) => {
    setCurrentProduct(product);
    setCurrentIndex(index);
  };

  const removeProduct = () => {
    dispatch(deleteProduct({ id: currentProduct.id }))
      .unwrap()
      .then(() => {
        props.history.push('/');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removeAllProducts = () => {
    dispatch(deleteAllProducts())
      .then((response) => {
        refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (currentUser) {
      setShowModeratorItem(currentUser.roles.includes('ROLE_MODERATOR'));
      setShowAdminItem(currentUser.roles.includes('ROLE_ADMIN'));
    } else {
      setShowModeratorItem(false);
      setShowAdminItem(false);
    }
  }, [currentUser]);
  return (
    <>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <div className='lg:w-1/2 w-full'>
              <div className='overflow-x-auto relative'>
                <div className='flex items-start justify-between p-5 rounded-t'>
                  <div className='flex items-center mb-6 text-2xl font-semibold text-gray-900  '>

                    <TbBuildingWarehouse className="w-8 h-8 mr-2 text-[30px] text-blue-600"/>
                    
                    Storelytic | Product List
                  </div>
                  {showModeratorItem && (
                  <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                    <Link to={'/addproduct'}>
                      ADD
                    </Link>
                  </div>
                  )}
                </div>
                <table className='w-full text-sm text-left text-gray-500  '>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50    '>
                    <tr>
                      <th scope='col' className='py-3 px-6'>
                        #
                      </th>
                      <th scope='col' className='py-3 px-6'>
                        Name
                      </th>
                      <th scope='col' className='py-3 px-6'>
                        Qta
                      </th>
                      <th scope='col' className='py-3 px-6'>
                        Stock
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products && products.map((product, index) => (
                        <tr
                          className={
                            'bg-white border-b  ' +
                            (index === currentIndex ? 'bg-blue-300' : '')
                          }
                          onClick={() => setActiveProduct(product, index)}
                          key={index}
                        >
                          <th
                            scope='row'
                            className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap  '
                          >
                            {product.id}
                          </th>
                          <td className='py-4 px-6'>{product.name}</td>
                          <td className='py-4 px-6'>{product.quantity}</td>

                          <td className='py-4 px-6 text-gray-900  '>
                            {product.stock ? 'STOCK' : 'OUT OF STOCK'}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>

                {showModeratorItem && (
                <div className='m-2 p-2'>
                  <button
                    type='button'
                    onClick={removeAllProducts}
                    className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
                  >
                    Remove All
                  </button>
                </div>
                )}
              </div>
            </div>
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              {currentProduct ? (
                <>
                  <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                    Product:
                  </h2>
                  <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                    {currentProduct.name}
                  </h1>

                  <p className='leading-relaxed'>
                    {currentProduct.description}
                  </p>

                  <div className='mb-2 mt-2 pt-2'>
                    <label>
                      <strong>Qta:</strong>
                    </label>{' '}
                    {currentProduct.quantity}
                  </div>
                  

                  <div className='mb-2 pb-2'>
                    <label>
                      <strong>Status:</strong>
                    </label>{' '}
                    {currentProduct.stock ? 'STOCK' : 'OUT OF STOCK'}
                  </div>

                  {showModeratorItem && (
                    <div className='flex'>
                      <Link
                        to={'/product/' + currentProduct.id}
                        className='rounded-full w-10 h-10 bg-yellow-500 p-0 border-0 inline-flex items-center justify-center text-yellow-800 ml-4'
                      >
                        <AiOutlineEdit className='w-5 h-5 text-lg text-white' />
                      </Link>

                      <button
                        onClick={removeProduct}
                        className='rounded-full w-10 h-10 bg-red-500 p-0 border-0 inline-flex items-center justify-center text-red-800 ml-4'
                      >
                        <AiOutlineDelete className='w-5 h-5 text-lg text-white' />
                      
                      </button>
                    </div>
                  )}
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
};

export default Product;
