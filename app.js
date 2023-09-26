import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env
import { connectDB } from './config/database.js';
const app = express();
const port = process.env.PORT || 8000;
import productRouter from './routes/productRoutes.js';
import uploadController from './controllers/uploadController.js';
import uploadRouter from './routes/uploadRoutes.js';


//use mongodb file
connectDB()


// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// Mount the productRouter to a specific path
app.use('/api/product', productRouter)


// Mount the uploadRouter to a specific path
app.use('/api/upload', uploadRouter);


// multer error
app.use(uploadController.errHandler)


// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
