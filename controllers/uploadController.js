import multer from 'multer';

export const handleFileUpload = (req, res) => {
    try {
        console.log(req.file);
        console.log(req.body);

        res.status(200).json({
            success: true,
            profile_url: `http://localhost:8000/profile/${req.file.filename}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while processing the upload.',
        });
    }
};


// Handle multer errors globally
function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
            return res.status(400).json({
                success: false,
                message: 'File size exceeds the limit (3 MB)',
            })
    }
}


export default{handleFileUpload, errHandler}


