import React, { useState, useEffect, ChangeEvent, useMemo } from "react";
import { FcDeployment, FcEditImage, FcSearch, FcEmptyTrash, FcRefresh } from 'react-icons/fc'
import { Link } from 'react-router-dom';

import IUser from '../../interfaces/IUser';
import IProduct from "../../interfaces/IProduct";

import * as authService from '../../services/auth.service';
import ProductService from "../../services/product.service";

import useProductModal from '../../components/modals/useProductModal';
import AddProduct from '../../components/modals/AddProduct';
import RemoveAll from '../../components/modals/RemoveAll';
import Delete from '../../components/modals/Delete';


const Products: React.FC =()=>{

    const [showSuperAdminBoard, setShowSuperAdminBoard] = useState<boolean>(false);
    const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
    const [showAdminAndSuperAdminBoard, setShowAdminAndSuperAdminBoard] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

    const [products, setProducts] = useState<Array<IProduct>>([]);
    const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [searchName, setSearchName] = useState<string>("");

    const { isOpen, toggle } = useProductModal();
    const { deleteIsOpen, toggleDelete } = useProductModal();
    const { removeIsOpen, toggleRemove } = useProductModal();

      const onChangeSearchName = (e: ChangeEvent<HTMLInputElement>) => {
        const searchName = e.target.value;
        setSearchName(searchName);
      };
    
      const retrieveProducts = () => {
        ProductService.getAll()
          .then((response: any) => {
            setProducts(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
    
      const refreshList = () => {
        retrieveProducts();
        setCurrentProduct(null);
        setCurrentIndex(-1);
      };
    
      const setActiveProduct = (product: IProduct, index: number) => {
        setCurrentProduct(product);
        setCurrentIndex(index);
      };

      const removeProduct = () => {
        ProductService.remove(currentProduct.id)
          .then((response: any) => {
            refreshList()
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
    
      const removeAllProducts = () => {
        ProductService.removeAll()
          .then((response: any) => {
            refreshList();
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
    
      const findByName = () => {
        ProductService.findByName(searchName)
          .then((response: any) => {
            setProducts(response.data);
            setCurrentProduct(null);
            setCurrentIndex(-1);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

      useEffect(() => {
        const user = authService.getCurrentUser();
        retrieveProducts();
        
        if (user) {
          setCurrentUser(user);
          setShowSuperAdminBoard(user.roles.includes("ROLE_SUPERADMIN"));
          setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
          setShowAdminAndSuperAdminBoard(user.roles.includes("ROLE_ADMIN") || user.roles.includes("ROLE_SUPERADMIN") );
        }
      }, []);

    return(
        <>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
        <div className='lg:w-1/2 w-full'>
          <div className='overflow-x-auto relative'>
            
            <div className='flex items-start justify-between p-5 rounded-t'>
              <div className='flex items-center text-2xl font-semibold text-gray-900  dark:text-white'>
                <FcDeployment className="w-8 h-8 mr-2 text-[30px] text-blue-600"/>
                Storelytic | Product List
              </div>
              <button
                onClick={refreshList}
                title='Refresh'
                className="text-white bg-gray-300 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                    <FcRefresh size={20}/>
                </button>
              {showSuperAdminBoard && (
                <button
                onClick={toggle}
                title='Add Product'
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                    ADD
                </button>
              )}
            </div>

            <div className='m-2 p-2'>
              <form>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FcSearch size={30}/>
                    </div>
                    <input 
                      type="text" 
                      id="default-search" 
                      value={searchName}
                      onChange={onChangeSearchName}
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products..." required />
                    <button type="submit" onClick={findByName} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Search
                    </button>
                </div>
              </form>
            </div>

            <table className='w-full text-sm text-left text-gray-500 shadow-lg '>
              <thead className='text-xs text-gray-700 uppercase bg-gray-200  dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
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
                        'bg-white dark:bg-gray-600 dark:border-gray-600 dark:text-gray-900  ' +
                        (index === currentIndex ? 'bg-blue-300 dark:bg-blue-500' : '')
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
                        {product.stock ? 
                        (
                          <span className="bg-green-600 text-green-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">STOCK</span>
                        ) :(
                          <span className="bg-red-600 text-red-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">OUT OF STOCK</span>
                        ) }
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {showSuperAdminBoard && (
            <div className='m-2 p-2'>
              <button
                type='button'
                onClick={toggleDelete}
                title='Remove All Products'
                className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
              >
                Remove All
              </button>
            </div>
            )}
          </div>
        </div>
        <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 '>
          {currentProduct ? (
            <>
              <h2 className='text-sm title-font text-gray-500 tracking-widest dark:text-white'>
                Product:
              </h2>
              <h1 className='text-gray-900 dark:text-white text-3xl title-font font-medium mb-1'>
                {currentProduct.name}
              </h1>

              <p className='leading-relaxed dark:text-white'>
                {currentProduct.description}
              </p>

              <div className='mb-2 mt-2 pt-2 dark:text-white'>
                <label>
                  <strong>Qta:</strong>
                </label>{' '}
                {currentProduct.quantity}
              </div>
              
              <div className='mb-2 mt-2 pt-2 dark:text-white'>
                <label>
                  <strong className='dark:text-white'>NOTE:</strong>
                </label>{' '}
                {currentProduct.note}
              </div>

              <div className='mb-2 pb-2'>
                <label>
                  <strong className='dark:text-white'>Status:</strong>
                </label>{' '}
                {currentProduct.stock ? 
                        (
                          <span className="bg-green-700 text-green-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">STOCK</span>
                        ) :(
                          <span className="bg-red-700 text-red-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">OUT OF STOCK</span>
                        ) }
              </div>
              {showAdminAndSuperAdminBoard && (
                <div className='flex'>
                  <Link
                    title='Edit Product'
                    to={'/product/' + currentProduct.id}
                  >
                    <FcEditImage size={40} />
                  </Link>
                  <button
                    onClick={toggleRemove}
                    title='Remove Product'
                    >
                    <FcEmptyTrash size={40} />
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
      <AddProduct isOpen={isOpen} toggle={toggle} />
      <RemoveAll 
        deleteIsOpen={deleteIsOpen} 
        toggleDelete={toggleDelete} 
        removeAllProducts={removeAllProducts} 
      />
      <Delete
        removeIsOpen={removeIsOpen}
        toggleRemove={toggleRemove}
        removeProduct={removeProduct}
      />
        </>
    )
}

export default Products