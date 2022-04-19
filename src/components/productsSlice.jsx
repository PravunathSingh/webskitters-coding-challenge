import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebaseConfig';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const productsCollectionRef = collection(db, 'products');

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await getDocs(productsCollectionRef);
    const resData = response.docs;

    const arr = resData.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(arr);
    return arr;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: true,
  },
  reducers: {
    addProduct(state, action) {
      addDoc(productsCollectionRef, action.payload);
      state.products.push(action.payload);
      alert('New Product Added');
      window.location.reload();
    },

    editProductDetails(state, action) {
      const { id, name, price, offerPrice } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.price = price;
        existingProduct.offerPrice = offerPrice;
      }
      const productDoc = doc(db, 'products', id);
      updateDoc(productDoc, action.payload);
    },

    deleteProduct(state, action) {
      const { id } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        state.products = state.products.filter((product) => product.id !== id);
      }
      console.log(state.products);
      const productDoc = doc(db, 'products', id);
      deleteDoc(productDoc);
    },
  },

  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = [...state.products, ...action.payload];
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { addProduct, deleteProduct, editProductDetails } =
  productsSlice.actions;

export default productsSlice.reducer;
