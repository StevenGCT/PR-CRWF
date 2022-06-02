import { getConnection, sql, queries } from '../database'


export const createUser = async(req, res) => {
    try {
        if (req.body == null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields'});
        } else {
            const pool = await getConnection();
            var result = await pool.request()
                .input("name", sql.VarChar, req.body.name)
                .input("lastName", sql.VarChar, req.body.lastName)
                .input("email", sql.VarChar, req.body.email)
                .input("password", sql.VarChar, req.body.password)
                .input("username", sql.VarChar, req.body.username)
                .query(queries.createNewUser);
            console.log(result.rowsAffected);
            res.json(req.body);
        }
    } catch (err) {
        res.status(500);
        res.send(error.message);
    }
}

export const getLoginUser = async(req, res) => {
    try {
        console.log(res);
        const pool = await getConnection();
        const result = await pool.request()
            .input('email', sql.VarChar, req.body.email)
            .input('password', sql.VarChar, req.body.password)
            .query(queries.getLoginUser)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getUserById = async(req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getUserById)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const getTypeUserById = async(req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getTypeUserById)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const deleteUserById = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.deleteUserById)
        console.log(result);
        res.status(200);
        res.json(result.rowsAffected);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const updateUserById = async(req, res) => {
    try {
        const pool = await getConnection();
        const { User } = req.body;
        const { id } = req.params;
        if (User == null || id == null) {
            res.status(400).json(msg, "Bad Request undefined Category Or id");
        } else {
            const result = await pool.request()
                .input('user', sql.VarChar, User)
                .input('id', sql.Int, id)
                .query(queries.updateUserById);
            res.status(200);
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getUserEditList = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getUserCommandlist);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}