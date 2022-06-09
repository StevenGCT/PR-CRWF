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
    try {
        const { Title, 
            Question1, 
            Question2, 
            Question3, 
            FastDescription, 
            Description, 
            FundingImage1, 
            FundingImage2, 
            FundingImage3, 
            FundingVideo, 
            AccountNumber, 
            SocialMedia, 
            IdCategory, 
            Goal  } = req.body;
        if (Title == null 
            && Question1 == null 
            && Question2 == null 
            && Question3 == null 
            && FastDescription == null 
            && Description == null 
            && FundingImage1 == null 
            && FundingImage2 == null 
            && FundingImage3 == null 
            && FundingVideo == null 
            && AccountNumber == null 
            && SocialMedia == null 
            && IdCategory == null 
            && Goal == null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
        } else {
            //console.log(Title);
            const pool = await getConnection();
            var result = await pool.request()
                .input("Title", sql.VarChar, Title)
                .input("Question1", sql.VarChar, Question1)
                .input("Question2", sql.VarChar, Question2)
                .input("Question3", sql.VarChar, Question3)
                .input("FastDescription", sql.VarChar, FastDescription)
                .input("Description", sql.VarChar, Description)
                .input("FundingImage1", sql.VarChar, FundingImage1)
                .input("FundingImage2", sql.VarChar, FundingImage2)
                .input("FundingImage3", sql.VarChar, FundingImage3)
                .input("FundingVideo", sql.VarChar, FundingVideo)
                .input("AccountNumber", sql.VarChar, AccountNumber)
                .input("SocialMedia", sql.VarChar, SocialMedia)
                .input("IdCategory", sql.TinyInt, IdCategory)
                .input("Goal", sql.Decimal, Goal)
                .query(fundqueries.createNewFunding);
            console.log(result.rowsAffected);
            res.json({ Title, Question1, Question2,Question3, FastDescription, Description, FundingImage1, FundingImage2, FundingImage3, FundingVideo, AccountNumber, SocialMedia, IdCategory, Goal });
        }
    } catch (err) {
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
            .input('name', sql.VarChar, req.body.name)
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

