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
            .input('id', id)
            .query(queries.getUserById)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountFundingByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getCountFundingByUserId)
        res.status(200);
        res.json(result.recordset[0]['']);
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
        res.status(200);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountDonateByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getCountDonateByUserId)
        res.status(200);
        res.json(result.recordset[0]['']);
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
        res.status(200);
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
        res.status(200);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountFollowedFundingByUserId = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(queries.getCountFollowedFundingByUserId)
        res.status(200);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updatePasswordByUserId = async(req, res) => {
    try {
        const pool = await getConnection();
        const { NewPassword } = req.body;
        const { id } = req.params;
        if (NewPassword == null || id == null) {
            res.status(400).json(msg, "Bad Request undefined password Or id");
        } else {
            const result = await pool.request()
                .input('newPassword', sql.VarChar, NewPassword)
                .input('id', sql.Int, id)
                .query(queries.changePassword);
            res.status(200);
            res.json(result);
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
