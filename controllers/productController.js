import Product from '../model/product.js'; // import model file

// Create a new product
async function createProduct(req, res) {
    try {
        // for name required
        if (!req.body.name) {
            return res.status(400).json({
                success: false,
                message: 'name is required'
            });
        }


        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            product
        });

    } catch (error) {

        //for duplicate key
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'name must be unique'
            });
        }

        console.error('Error creating product:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Fetch all products
async function fetchAllProduct(req, res) { 
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            products
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Update a product
async function updateProduct(req, res) { 
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: true, runValidators: true });

        if (product) {
            res.status(200).json({
                success: true,
                product
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Delete a product
async function deleteProduct(req, res) { 

    try {
        const product = await Product.deleteOne({ _id: req.params.id });

        if (product.deletedCount > 0) {
            res.status(200).json({
                success: true,
                message: 'Product deleted successfully'
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Fetch a single product by ID
async function fetchProductById(req, res) { 
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.status(200).json({
                success: true,
                product
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export default{createProduct, fetchAllProduct,updateProduct,deleteProduct,fetchProductById}