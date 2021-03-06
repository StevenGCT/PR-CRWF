import { getConnection, sql, queries } from '../database'

// Get Category Of The database
// By: Yhonattan David Llanos Rivera
// Contact Number: +59169685120
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
        const { Category } = req.body;
        if (Category == null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
        } else {
            //console.log(Category);
            const pool = await getConnection();
            var result = await pool.request()
                .input("category", sql.VarChar, Category)
                .query(queries.createNewCategory);
            console.log(result.rowsAffected);
            res.json({ Category });
        }
    } catch (err) {
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
        if (Category == null || id == null) {
            res.status(400).json(msg, "Bad Request undefined Category Or id");
        } else {
            const result = await pool.request()
                .input('category', sql.VarChar, Category)
                .input('id', sql.Int, id)
                .query(queries.updateCategoryById);
            res.status(200);
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}