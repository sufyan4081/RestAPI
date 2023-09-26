import mongoose from "mongoose";

// MongoDB connection setup
export const connectDB = () =>{
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('MongoDB connected');
        })
        .catch((error) => {
            console.error('MongoDB connection error:', error);
        });
    
}