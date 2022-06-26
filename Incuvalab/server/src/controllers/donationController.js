import { getConnection, sql, donationQuery } from '../database'
import { uploadDocumentDonation, deleteImage } from '../libs/myCloudinary';
import fs from 'fs-extra';

export const getAllDonationFromBd = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(donationQuery.getAllDonation);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const InsertDonation = async(req, res) => {
    try {
        const { Mount, IdUser, IdFunding } = req.body;
        console.log(req.files);
        if (Mount == null || req.files== null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
        } else {
            const resultC =await uploadDocumentDonation(req.files.document.tempFilePath);
            await fs.remove(req.files.document.tempFilePath);
            console.log(resultC);
            const document ={
                url: resultC.secure_url,
                public_id: resultC.public_id
            }
            //console.log(Category);
            const pool = await getConnection();
            var result = await pool.request()
                .input("PublicIDDocument", sql.VarChar, document.public_id)
                .input("VoucherDocument",sql.VarChar, document.url)
                .input("Mount",sql.Decimal , Mount)
                .input("IDUser",sql.Int , IdUser)
                .input("IDFunding",sql.Int , IdFunding)
                .query(donationQuery.createDonation);
            console.log(result.rowsAffected);
            var rowsAfecct = result.rowsAffected;
            res.json({ rowsAfecct });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getDonationByID = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.VarChar, id)
            .query(donationQuery.getDonationyId)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteDonation = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result2 = await pool.request()
            .input('id', id)
            .query(donationQuery.getDonationyId)
        console.log(result2);
        const DonationFromBd = result2;
        console.log(DonationFromBd.recordset[0].PublicIDDocument);
        const resultCloudinary = await deleteImage(DonationFromBd.recordset[0].PublicIDDocument);
        console.log(resultCloudinary);
        const result = await pool.request()
            .input('id', id)
            .query(donationQuery.deleteDonation)
        console.log(result);
        res.status(200);
        res.json(result.rowsAffected);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateDonation = async(req, res) => {
    try {
        const pool = await getConnection();
        const { Mount, IdUser, IdFunding } = req.body;
        const { id } = req.params;
        if (Mount == null || id == null ||  req.files == null) {
            res.status(400).json(msg, "Bad Request undefined Category Or id Or File");
        } else {
            const result2 = await pool.request()
            .input('id', id)
            .query(donationQuery.getDonationyId)
            console.log(result2);
            const DonationFromBd = result2;
            console.log(DonationFromBd.recordset[0].PublicIDDocument);
            const resultC =await uploadDocumentDonation(req.files.document.tempFilePath);
            await deleteImage(DonationFromBd.recordset[0].PublicIDDocument);
            await fs.remove(req.files.document.tempFilePath)
            console.log(resultC);
            const document ={
                url: resultC.secure_url,
                public_id: resultC.public_id
            }
            const result = await pool.request()
                .input("PublicIDDocument", sql.VarChar, document.public_id)
                .input("VoucherDocument",sql.VarChar, document.url)
                .input("Mount",sql.Decimal , Mount)
                .input("IDUser",sql.Int , IdUser)
                .input("IDFunding",sql.Int , IdFunding)
                .input("id",sql.Int , id)
                .query(donationQuery.updateDonation);
            res.status(200);
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}