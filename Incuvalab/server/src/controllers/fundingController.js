import { getConnection, sql, queries } from '../database'
import { fundqueries} from '../database/querys'

export const setRanckFunding = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.rankCategory);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createFunding = async(req, res) => {
   
        if (req.body == null) 
        {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
        } 
        else 
        {
            const pool = await getConnection();
            var result = await pool.request()
                .input("title", sql.VarChar, req.body.title)
                .input("question1", sql.VarChar, req.body.question1)
                .input("question2", sql.VarChar, req.body.question2)
                .input("question3", sql.VarChar, req.body.question3)
                .input("fastDescription", sql.VarChar, req.body.fastDescription)
                .input("description", sql.VarChar, req.body.description)
                .input("fundingImage1", sql.VarChar, req.body.fundingImage1)
                .input("fundingImage2", sql.VarChar, req.body.fundingImage2)
                .input("fundingImage3", sql.VarChar, req.body.fundingImage3)
                .input("fundingVideo", sql.VarChar, req.body.fundingVideo)
                .input("accountNumber", sql.VarChar, req.body.accountNumber)
                .input("socialMedia", sql.VarChar, req.body.socialMedia)
                .input("idCategory", sql.TinyInt, req.body.idCategory)
                .input("goal", sql.Decimal, req.body.goal)
                .input("aprove", sql.TinyInt, 0)
                .query(fundqueries.createNewFunding);
            console.log(result.rowsAffected);
            res.json(req.body);
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

export const getQuestionFunding = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.getAllNoAprobedFunding);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getOldFunding = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.getDeletedFunding);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getAllCompleteFunding = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.getCompleteFunding);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getFundingByCat = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.getAllFundingByCat)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deletePointedFunding = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.deleteFundingById)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deletePointedLogicalFunding = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.deleteFundingByLogical)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateFunding = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('Id',sql.TinyInt ,req.body.IdFunding)
            .input('Title', sql.VarChar,req.body.Title)
            .input('Question1',sql.VarChar, req.body.Question1)
            .input('Question2',sql.VarChar, req.body.Question1)
            .input('Question3', sql.VarChar,req.body.Question3)
            .input('FastDescription',sql.VarChar, req.body.FastDescription)
            .input('Description',sql.VarChar, req.body.Description)
            .input('FundingImage1', sql.VarChar,req.body.FundingImage1)
            .input('FundingImage2',sql.VarChar, req.body.FundingImage2)
            .input('FundingImage3',sql.VarChar, req.body.FundingImage3)
            .input('FundingVideo',sql.VarChar, req.body.FundingVideo)
            .input('AccountNumber', sql.VarChar,req.body.AccountNumber)
            .input('SocialMedia',sql.VarChar,req.body.SocialMedia)
            .input('IdCategory',sql.TinyInt, req.body.IdCategory)
            .input('Goal', sql.Decimal,req.body.Goal)
            .query(fundqueries.updateFunding)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const restoreBaultedFunding = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.restoreFunding)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const AproveFunding = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.aproveFundingById)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getAllFundingBySameName = async(req, res) => {
    try {
        console.log(res);
        const pool = await getConnection();
        const result = await pool.request()
            .input('nameplace', sql.VarChar, req.body.nameplace)
            .query(fundqueries.getFundingByName)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}



export const setRanckTop3 = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getRackFundingTop3);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

