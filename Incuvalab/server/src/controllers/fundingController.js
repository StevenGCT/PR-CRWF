import { getConnection, sql, queries } from '../database'
import { fundqueries } from '../database/querys'
import { uploadImageProyect } from '../libs/myCloudinary';
import fs from 'fs-extra';

export const setRanckFunding = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.rankCategory);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createFunding = async (req, res) => {

    if (req.body == null) {
        res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
    }
    else {
        const resultCloudinaryf1 = await uploadImageProyect(req.files.fundingImage1.tempFilePath);
        const resultCloudinaryf2 = await uploadImageProyect(req.files.fundingImage2.tempFilePath);
        const resultCloudinaryf3 = await uploadImageProyect(req.files.fundingImage3.tempFilePath);

        await fs.remove(req.files.fundingImage1.tempFilePath)
        await fs.remove(req.files.fundingImage2.tempFilePath)
        await fs.remove(req.files.fundingImage3.tempFilePath)

        const pool = await getConnection();
        var result = await pool.request()
            .input("title", sql.VarChar, req.body.title)
            .input("question1", sql.VarChar, req.body.question1)
            .input("question2", sql.VarChar, req.body.question2)
            .input("question3", sql.VarChar, req.body.question3)
            .input("fastDescription", sql.VarChar, req.body.fastDescription)
            .input("description", sql.VarChar, req.body.description)
            .input("fundingImage1", sql.VarChar, resultCloudinaryf1.secure_url)
            .input("fundingImage2", sql.VarChar, resultCloudinaryf2.secure_url)
            .input("fundingImage3", sql.VarChar, resultCloudinaryf3.secure_url)
            .input("fundingVideo", sql.VarChar, req.body.fundingVideo)
            .input("accountNumber", sql.VarChar, req.body.accountNumber)
            .input("socialMedia", sql.VarChar, req.body.socialMedia)
            .input("idCategory", sql.TinyInt, req.body.idCategory)
            .input("goal", sql.Decimal, req.body.goal)
            .input("aprove", sql.TinyInt, 0)
            .query(fundqueries.createNewFunding);
        res.json(req.body);
    }
}


export const getFundingById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.getFundingById)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getFunding = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.getAllFunding);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getQuestionFunding = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.getAllNoAprobedFunding);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getOldFunding = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.getDeletedFunding);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getAllCompleteFunding = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(fundqueries.getCompleteFunding);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getFundingByCat = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.getAllFundingByCat)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deletePointedFunding = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.deleteFundingById)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deletePointedLogicalFunding = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.deleteFundingByLogical)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateFunding = async (req, res) => {
    try {
        let valueFunding1 = req.body.fundingImage1;
        let valueFunding2 = req.body.fundingImage2;
        let valueFunding3 = req.body.fundingImage3;
        
        if(req.files != null){
            if(req.files.fundingImage1 != undefined){
                const resultCloudinaryf1 = await uploadImageProyect(req.files.fundingImage1.tempFilePath);
                await fs.remove(req.files.fundingImage1.tempFilePath)
                valueFunding1 = resultCloudinaryf1.secure_url
            } else if(req.files.fundingImage2 != undefined){
                const resultCloudinaryf2 = await uploadImageProyect(req.files.fundingImage2.tempFilePath);
                await fs.remove(req.files.fundingImage2.tempFilePath)
                valueFunding2 = resultCloudinaryf2.secure_url
            }else if(req.files.fundingImage3 != undefined){
                const resultCloudinaryf3 = await uploadImageProyect(req.files.fundingImage3.tempFilePath);
                await fs.remove(req.files.fundingImage3.tempFilePath)
                valueFunding3 = resultCloudinaryf3.secure_url
            }
        }

        const pool = await getConnection();
        const result = await pool.request()
            .input('Id',sql.TinyInt ,req.body.idFunding)
            .input('Title', sql.VarChar,req.body.title)
            .input('Question1',sql.VarChar, req.body.question1)
            .input('Question2',sql.VarChar, req.body.question1)
            .input('Question3', sql.VarChar,req.body.question3)
            .input('FastDescription',sql.VarChar, req.body.fastDescription)
            .input('Description',sql.VarChar, req.body.description)
            .input('FundingImage1', sql.VarChar,valueFunding1)
            .input('FundingImage2',sql.VarChar, valueFunding2)
            .input('FundingImage3',sql.VarChar, valueFunding3)
            .input('FundingVideo',sql.VarChar, req.body.fundingVideo)
            .input('AccountNumber', sql.VarChar,req.body.accountNumber)
            .input('SocialMedia',sql.VarChar,req.body.socialMedia)
            .input('IdCategory',sql.TinyInt, req.body.idCategory)
            .input('Goal', sql.Decimal,req.body.goal)
            .query(fundqueries.updateFunding)
        res.json(result.rowsAffected);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const restoreBaultedFunding = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.restoreFunding)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const AproveFunding = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .query(fundqueries.aproveFundingById)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getAllFundingBySameName = async (req, res) => {
    try {
        console.log(res);
        const pool = await getConnection();
        const result = await pool.request()
            .input('search', sql.VarChar, req.body.search)
            .query(fundqueries.getFundingByName)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}



export const setRanckTop3 = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getRackFundingTop3);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

