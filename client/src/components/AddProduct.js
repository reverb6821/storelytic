import React, { useState } from "react";
import productService from '../services/productService';

import { Link } from "react-router-dom";


const AddProduct = () => {

    const initialProductState = {
        id: null,
        name: "",
        description: "",
        published: false
    };

    const [product, setProduct] = useState(initialProductState);
    const [submitted, setSubmitted] = useState(false);

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
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newProduct}>
                Add
              </button>
              <Link to={"/home"} className="btn btn-info">
                Home
              </Link>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={product.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={product.description}
                  onChange={handleInputChange}
                  name="description"
                />
              </div>
    
              <button onClick={saveProduct} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );

}

export default AddProduct