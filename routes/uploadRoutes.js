import express from 'express';
import multer from 'multer';
import { handleFileUpload } from '../controllers/uploadController.js'; 
import path from 'path';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload');
    },
    filename: function (req, file, cb) {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3000000 // 3 MB
    }
});

uploadRouter.use('/profile', express.static('./upload'));

// Use the controller function to handle the file upload route
uploadRouter.post('/upload', upload.single('upload'), handleFileUpload);

export default uploadRouter;
