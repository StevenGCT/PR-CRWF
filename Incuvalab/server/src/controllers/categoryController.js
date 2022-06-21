import { getConnection, sql, queries } from '../database'

export const getCategorys = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getAllCategory);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createCategory = async(req, res) => {
    try {
        const { Category, Description} = req.body;
        console.log(req.files);
        if (Category == null || req.files== null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
        } else {
            const resultC =await uploadImageCategory(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath)
            console.log(resultC);
            const image ={
                url: resultC.secure_url,
                public_id: resultC.public_id
            }
            //console.log(Category);
            const pool = await getConnection();
            var result = await pool.request()
                .input("CategoryName", sql.VarChar, Category)
                .input("Description",sql.VarChar, Description)
                .input("ImageUrl",sql.VarChar,image.url)
                .input("PublicIDImage", sql.VarChar, image.public_id)
                .query(queries.createNewCategory);
            console.log(result.rowsAffected);
            res.json({ Category });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCategoryById = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getCategoryById)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteCategoryById = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result2 = await pool.request()
            .input('id', id)
            .query(queries.getCategoryById)
        console.log(result2);
        const categoryFromBd = result2;
        console.log(categoryFromBd.recordset[0].PublicIDImage);
        const resultCloudinary = await deleteImage(categoryFromBd.recordset[0].PublicIDImage);
        console.log(resultCloudinary);
        const result = await pool.request()
            .input('id', id)
            .query(queries.deleteCategoryById)
        console.log(result);
        res.status(200);
        res.json(result.rowsAffected);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountCategory = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getCountCategory)
        console.log(result);
        res.status(200);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateCategoryById = async(req, res) => {
    try {
        const pool = await getConnection();
        const { Category } = req.body;
        const { id } = req.params;
        if (Category == null || id == null || req.files == null) {
            res.status(400).json(msg, "Bad Request undefined Category Or id");
        } else {
            const resultC =await uploadImageCategory(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath)
            console.log(resultC);
            const image ={
                url: resultC.secure_url,
                public_id: resultC.public_id
            }
            const result = await pool.request()
                .input('CategoryName', sql.VarChar, Category)
                .input('id', sql.Int, id)
                .input("Description",sql.VarChar, Description)
                .input("ImageUrl",sql.VarChar,image.url)
                .input("PublicIDImage", sql.VarChar, image.public_id)
                .query(queries.updateCategoryById);
            res.status(200);
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}