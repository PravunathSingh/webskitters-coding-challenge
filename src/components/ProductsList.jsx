import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from './productsSlice';

const ProductsList = () => {
  const { products } = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const productList = products.map((product) => {
    return (
      <div className='row'>
        <div className='col mb-4 shadow-sm'>
          <div className='card'>
            <div className='card-body p-3'>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <h5>
                  Product Name: <strong>{product.name}</strong>
                </h5>
                <h5>
                  Price:{' '}
                  <strong style={{ textDecoration: 'lineThrough' }}>
                    {product.price}
                  </strong>
                </h5>
                <h5>
                  Offer Price: <strong>{product.offerPrice}</strong>
                </h5>
                {/* <div className='d-flex justify-content-between align-items-center'>
                  
                </div> */}
                <Link to={`/editProduct/${product.id}`}>
                  <i className='fa fa-pencil text-info'></i>
                </Link>
                <div onClick={() => handleDelete(product.id)}>
                  <i className='fa fa-trash text-danger me-3'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='container mt-5'>
      <div className='my-5'>
        <Link to='/addProduct'>
          <button className='btn btn-primary'>Add Product</button>
        </Link>
      </div>
      {loading ? 'loading' : productList}
    </div>
  );
};

export default ProductsList;
