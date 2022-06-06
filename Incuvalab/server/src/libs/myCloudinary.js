import {v2 as cloudinary} from 'cloudinary';

// 1:31:01
cloudinary.config({
    cloud_name: "dlannos0972",
    api_key: "691226718845354",
    api_secret: "q1_O8p0nQTgt_s4ttB-sFOdj594"
})

export const uploadImage = async filePath =>{
    return await cloudinary.uploader.upload(filePath, {
        folder: 'incuvalab/category'
    })
}