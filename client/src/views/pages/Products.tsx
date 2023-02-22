import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { FcDeployment } from 'react-icons/fc'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import ProductService from "../../services/product.service";
import IProduct from "../../interfaces/IProduct";
import { Link } from 'react-router-dom';
import AddProduct from '../../components/modals/AddProduct';
import useModal from '../../components/modals/useModal';
import * as authService from '../../services/auth.service';
import IUser from '../../interfaces/IUser';

const Products: React.FC =()=>{

    const [showSuperAdminBoard, setShowSuperAdminBoard] = useState<boolean>(false);
    const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
    const [showAdminAndSuperAdminBoard, setShowAdminAndSuperAdminBoard] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

    const [products, setProducts] = useState<Array<IProduct>>([]);
    const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [searchName, setSearchName] = useState<string>("");

    const { isOpen, toggle } = useModal();

    useEffect(() => {
        retrieveProducts();
      }, []);
    
      const onChangeSearchName = (e: ChangeEvent<HTMLInputElement>) => {
        const searchName = e.target.value;
        setSearchName(searchName);
      };
    
      const retrieveProducts = () => {
        ProductService.getAll()
          .then((response: any) => {
            setProducts(response.data);
            console.log(response.data);
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
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
    
      const removeAllProducts = () => {
        ProductService.removeAll()
          .then((response: any) => {
            console.log(response.data);
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
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

      useEffect(() => {
        const user = authService.getCurrentUser();
    
        if (user) {
          setCurrentUser(user);
          setShowSuperAdminBoard(user.roles.includes("ROLE_SUPERADMIN"));
          setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
          setShowAdminAndSuperAdminBoard(user.roles.includes("ROLE_ADMIN" || "ROLE_SUPERADMIN"));

        }
    
      }, []);

    return(
        <>
            <div className='lg:w-4/5 mx-auto flex flex-wrap'>
        <div className='lg:w-1/2 w-full'>
          <div className='overflow-x-auto relative'>
            <div className='flex items-start justify-between p-5 rounded-t'>
              <div className='flex items-center mb-6 text-2xl font-semibold text-gray-900  dark:text-white'>
                <FcDeployment className="w-8 h-8 mr-2 text-[30px] text-blue-600"/>
                Storelytic | Product List
              </div>
              {showSuperAdminBoard && (
                <button
                onClick={toggle}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                    ADD
                </button>
              )}
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
                onClick={removeAllProducts}
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
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                Product:
              </h2>
              <h1 className='text-gray-900 dark:text-gray-500 text-3xl title-font font-medium mb-1'>
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
              
              <div className='mb-2 mt-2 pt-2'>
                <label>
                  <strong>NOTE:</strong>
                </label>{' '}
                {currentProduct.note}
              </div>

              <div className='mb-2 pb-2'>
                <label>
                  <strong>Status:</strong>
                </label>{' '}
                {currentProduct.stock ? 
                        (
                          <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">STOCK</span>
                        ) :(
                          <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">OUT OF STOCK</span>
                        ) }
                        
              </div>

                <div className='flex'>
                  <Link
                    to={'/product/' + currentProduct.id}
                    className='rounded-full w-10 h-10 bg-yellow-500 p-0 border-0 inline-flex items-center justify-center text-yellow-800 ml-4'
                  >
                    <AiOutlineEdit className='w-5 h-5 text-lg text-white' />
                  </Link>
                  {showAdminAndSuperAdminBoard && (
                  <button
                    onClick={removeProduct}
                    className='rounded-full w-10 h-10 bg-red-500 p-0 border-0 inline-flex items-center justify-center text-red-800 ml-4'
                  >
                    <AiOutlineDelete className='w-5 h-5 text-lg text-white' />
                  </button>
                  )}
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
      <AddProduct isOpen={isOpen} toggle={toggle} />

        </>
    )
}

export default Products