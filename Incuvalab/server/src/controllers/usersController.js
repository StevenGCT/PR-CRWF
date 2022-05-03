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
            .input('id', id)
            .query(queries.getUserById)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountFundingByUserId = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getCountFundingByUserId)
        console.log(result);
        res.status(200);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getTitleFundingByUserId = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getTitleFundingByUserId)
        console.log(result);
        res.status(200);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCountDonateByUserId = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getCountDonateByUserId)
        console.log(result);
        res.status(200);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getTitleOfFundingDonateByUserId = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getTitleOfFundingDonateByUserId)
        console.log(result);
        res.status(200);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
