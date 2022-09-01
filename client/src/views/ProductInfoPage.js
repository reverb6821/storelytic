import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import productService from '../services/productService';

const EditProduct = (props) => {

    const { id } = useParams();
    let navigate = useNavigate();

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

      const deleteProduct = () => {
        productService.remove(currentProduct.id)
          .then(response => {
            console.log(response.data);
            navigate("/product");
          })
          .catch(e => {
            console.log(e);
          });
      };

      return (
        <div>
          {currentProduct ? (
            <div className="edit-form">
              <h4>Product</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={currentProduct.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={currentProduct.description}
                    onChange={handleInputChange}
                  />
                </div>
    
                <div className="form-group">
                  <label>
                    <strong>Status:</strong>
                  </label>
                  {currentProduct.shipped ? "Shipped" : "Pending"}
                </div>
              </form>
    
              {currentProduct.shipped ? (
                <button
                  className="badge badge-primary mr-2"
                  onClick={() => updateShipped(false)}
                >
                 No Shipped
                </button>
              ) : (
                <button
                  className="badge badge-primary mr-2"
                  onClick={() => updateShipped(true)}
                >
                  Shipped
                </button>
              )}
    
              <button className="badge badge-danger mr-2" onClick={deleteProduct}>
                Delete
              </button>
    
              <button
                type="submit"
                className="badge badge-success"
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
      );

}

export default EditProduct;