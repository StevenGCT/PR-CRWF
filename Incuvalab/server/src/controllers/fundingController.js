import { getConnection, sql} from '../database'
import { fundqueries } from '../database/querys'

export const getFunding = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.getAllFunding);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getFundingById = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.getFundingById)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}