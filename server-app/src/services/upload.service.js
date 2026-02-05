const cloudinary = require('cloudinary').v2;

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECREAT,
});

const uploadFilesOnCloudinary = async (fileBuffer) => {
        const fileBufferBase64= fileBuffer.toString("base64")
        const dataURI = `data:image/png;base64,${fileBufferBase64}`;
        const result = await cloudinary.uploader.upload(dataURI, {
            resource_type: "auto"
        });

        return result;  

};

module.exports = uploadFilesOnCloudinary