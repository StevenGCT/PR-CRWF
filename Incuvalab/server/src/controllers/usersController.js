import { getConnection, sql, queries } from '../database'

// Get Category Of The database
// By: Yhonattan David Llanos Rivera
// Contact Number: +59169685120
export const getUsers = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getAllUsers);
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
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int , id)
            .query(queries.getUserById)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountFollowedByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int,id)
            .query(queries.getCountFollowedByUserId)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountDonationsByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int ,id)
            .query(queries.getCountDonationsByUserId)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const setUserFollowedInsert = async(req, res) => {

            const pool = await getConnection();
            var result = await pool.request()
                .input("idUser", sql.Int, req.body.idUser)
                .input("idFunding", sql.Int, req.body.idFunding)
                .query(queries.setUserFollowedInsert);
            res.json(result.rowsAffected);

}

export const getCountFundingsCreateByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int ,id)
            .query(queries.getCountFundingsCreateByUserId)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getTitleOfFollowedFundingByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getTitleFollowedFundingByUserId)
        console.log(result);
        res.status(200);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getTitleOfFundingDonateByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getTitleOfFundingDonateByUserId)
        console.log(result);
        res.status(200);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getTitleFundingByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getTitleFundingByUserId)
        console.log(result);
        res.status(200);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updatePasswordByUserId = async(req, res) => {
    try {
        const pool = await getConnection();
        const { id } = req.params;
        if (req.body == null || id == null) {
            res.status(400).json(msg, "Bad Request undefined password Or id");
        } else {
            const result = await pool.request()
                .input('email', sql.VarChar, req.body.email)
                .input('newPassword', sql.VarChar, req.body.newPassword)
                .input('id', sql.Int, id)
                .query(queries.changePassword);
            res.status(200);
            res.json(result.rowsAffected);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateImageProfile = async(req, res) => {
    try {
        const pool = await getConnection();
        const { NewImageProfile } = req.body;
        const { id } = req.params;
        if (NewImageProfile == null || id == null) {
            res.status(400).json(msg, "Bad Request undefined Category Or id");
        } else {
            const result = await pool.request()
                .input('newImageProfile', sql.VarChar, NewImageProfile)
                .input('id', sql.Int, id)
                .query(queries.changeImageProfile);
            res.status(200);
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
