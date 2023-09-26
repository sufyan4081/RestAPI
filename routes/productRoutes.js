// routes/productRoutes.js

import express from 'express';
import productController from '../controllers/productController.js';
const productRouter = express.Router();

// Create a new product
productRouter.post('/createProduct', productController.createProduct);

// Fetch all products
productRouter.get('/fetchAllProduct', productController.fetchAllProduct);

// Update a product
productRouter.put('/updateProduct/:id', productController.updateProduct);

// Delete a product
productRouter.delete('/deleteProduct/:id', productController.deleteProduct);

// Fetch a single product by ID
productRouter.get('/findById/:id', productController.fetchProductById);

export default productRouter;
