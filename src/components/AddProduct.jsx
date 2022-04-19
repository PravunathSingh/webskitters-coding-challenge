import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from './productsSlice';
// import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    offerPrice: '',
  });

  const dispatch = useDispatch();
  // const history = useNavigate();

  const productChangeHandler = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const productSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    setNewProduct({
      name: '',
      price: '',
      offerPrice: '',
    });
    // history('/', { replace: true });
  };

  return (
    <div className='container'>
      <h2 className='text-center mt-5'>Add New Product</h2>
      <Link to='/' className='text-center mt-2'>
        <h6>Back To Home</h6>
      </Link>

      <div class='card mt-5 shadow-sm w-75 mx-auto'>
        <div class='card-body'>
          <form onSubmit={productSubmitHandler}>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='mb-4'>
                  <label htmlFor='productName' className='form-label'>
                    Product Name
                  </label>
                  <input
                    onChange={productChangeHandler}
                    name='name'
                    value={newProduct.name}
                    type='text'
                    className='form-control'
                    required
                  />
                </div>
              </div>

              <div className='col-sm-6'>
                <label htmlFor='productName' className='form-label'>
                  Product Price
                </label>
                <div className='mb-4 input-group'>
                  <span class='input-group-text'>Rs.</span>
                  <input
                    onChange={productChangeHandler}
                    name='price'
                    value={newProduct.price}
                    type='number'
                    className='form-control'
                    required
                  />
                </div>
              </div>

              <div className='col-sm-6'>
                <label htmlFor='productName' className='form-label'>
                  Product Offer Price
                </label>
                <div className='mb-4 input-group'>
                  <span class='input-group-text'>Rs.</span>
                  <input
                    onChange={productChangeHandler}
                    name='offerPrice'
                    value={newProduct.offerPrice}
                    type='number'
                    className='form-control'
                    required
                  />
                </div>
              </div>
            </div>

            <div class='d-grid'>
              <button type='submit' class='btn btn-primary'>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
