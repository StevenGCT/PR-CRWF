const imagePreview = document.getElementById('img-preview');
const imageUploader = document.getElementById('img-uploader');
const imageUploadbar = document.getElementById('img-upload-bar');

//Link to upload the image
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dkcbaydkh/image/upload`;
//password to the count
const CLOUDINARY_UPLOAD_PRESET = 'p1t3k3xt';

imageUploader.addEventListener('change', async (e) => {
    // console.log(e);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {

            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress (e) {
                let progress = Math.round((e.loaded * 100.0) / e.total);
                console.log(progress);
                imageUploadbar.setAttribute('value', progress);
            }
        }
    );
    console.log(res.data.public_id);
    const publicId = res.data.pu
    const postImgaeRequest = async (publicId) => await axios.post('/imageURL', publicId)
    imagePreview.src = res.data.secure_url;
});

//Upload to the DataBase server - NEW TABLE Image
export const LoadImage = async(req, res) => {
    try {
        if (req.body == null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields'});
        } else {
            const pool = await getConnection();
            var result = await pool.request()
                .input("urlImage", sql.VarChar, req.body.name)
                .query(queries.PostImageCloudynari);
            console.log(result.rowsAffected);
            res.json(req.body);
        }
    } catch (err) {
        res.status(500);
        res.send(error.message);
    }
}