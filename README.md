## Webskitters Coding Round

#### Task: Create an APP for multi add product, edit product and delete product fields for adding the product fields are mentioned here (Name, Image, Price, Offer Price). User will be able to add product from the user panel, edit product and delete. For the frontend user panel need to done in React JS/Redux Saga and for the DB use firebase

## Installation

Clone the repo `cd` into the project and run the following commands.

```bash
  npm install
  npm run dev
```

### Implemented Features:

- ADD Product
- GET All Products
- UPDATE Product
- DELETE Product

### Notes:

- The `firebaseConfig` file in the root directory is where the firebase SDK has been initialized
- The `store.jsx` file is where the redux store resides.
- The `productsSlice.jsx` file in the components directory is where all the actions and reducers logic has been defined.
