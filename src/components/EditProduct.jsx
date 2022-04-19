import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editProductDetails } from './productsSlice';

const EditProduct = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.products.products.find((product) => product.id === id)
  );
  const [editProduct, setEditProduct] = useState({
    id: id,
    name: user.name,
    price: user.price,
    offerPrice: user.offerPrice,
  });

  const dispatch = useDispatch();
  const history = useNavigate();

  const productChangeHandler = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  };

  const productEditHandler = (e) => {
    e.preventDefault();
    dispatch(editProductDetails(editProduct));
    setEditProduct({
      name: '',
      price: '',
      offerPrice: '',
    });
    history('/', { replace: true });
  };

  return (
    <div className='container'>
      <h2 className='text-center mt-5'>Edit Product Details</h2>
      <Link to='/' className='text-center mt-2'>
        <h6>Back To Home</h6>
      </Link>

      <div class='card mt-5 shadow-sm w-75 mx-auto'>
        <div class='card-body'>
          <form onSubmit={productEditHandler}>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='mb-4'>
                  <label htmlFor='productName' className='form-label'>
                    Product Name
                  </label>
                  <input
                    onChange={productChangeHandler}
                    name='name'
                    value={editProduct.name}
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
                    value={editProduct.price}
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
                    value={editProduct.offerPrice}
                    type='number'
                    className='form-control'
                    required
                  />
                </div>
              </div>
            </div>

            <div class='d-grid'>
              <button type='submit' class='btn btn-primary'>
                Edit Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
