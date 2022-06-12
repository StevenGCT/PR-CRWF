import { getConnection, sql, qrqueris } from '../database'
import { uploadImageQr, deleteImage } from '../libs/myCloudinary';
import fs from 'fs-extra';

export const getCodeQr = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(qrqueris.getAllQr);
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createQr = async(req, res) => {
    try {
        const { Mount } = req.body;
        console.log(req.files);
        if (Mount == null || req.files== null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
        } else {
            const resultC =await uploadImageQr(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath)
            console.log(resultC);
            const image ={
                url: resultC.secure_url,
                public_id: resultC.public_id
            }
            //console.log(Category);
            const pool = await getConnection();
            var result = await pool.request()
                .input("PublicIDImage", sql.VarChar, image.public_id)
                .input("QrUrl",sql.VarChar, image.url)
                .input("Mount",sql.Decimal , Mount)
                .query(qrqueris.createQr);
            console.log(result.rowsAffected);
            res.json({ Mount });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getCodeQrById = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.VarChar, id)
            .query(qrqueris.getQrById)
        console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteQrCodeById = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result2 = await pool.request()
            .input('id', id)
            .query(qrqueris.getQrById)
        console.log(result2);
        const QrFromBd = result2;
        console.log(QrFromBd.recordset[0].PublicIDImage);
        const resultCloudinary = await deleteImage(QrFromBd.recordset[0].PublicIDImage);
        console.log(resultCloudinary);
        const result = await pool.request()
            .input('id', id)
            .query(qrqueris.deleteQrById)
        console.log(result);
        res.status(200);
        res.json(result.rowsAffected);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateQrCodeById = async(req, res) => {
    try {
        const pool = await getConnection();
        const { Mount } = req.body;
        const { id } = req.params;
        if (Mount == null || id == null ||  req.files == null) {
            res.status(400).json(msg, "Bad Request undefined Category Or id Or File");
        } else {
            const result2 = await pool.request()
            .input('id', id)
            .query(qrqueris.getQrById)
            console.log(result2);
            const QrFromBd = result2;
            console.log(QrFromBd.recordset[0].PublicIDImage);
            const resultC =await uploadImageQr(req.files.image.tempFilePath);
            await deleteImage(QrFromBd.recordset[0].PublicIDImage);
            await fs.remove(req.files.image.tempFilePath)
            console.log(resultC);
            const image ={
                url: resultC.secure_url,
                public_id: resultC.public_id
            }
            const result = await pool.request()
                .input('Mount', sql.Decimal, Mount)
                .input('id', sql.VarChar, id)
                .input('PublicIDImage', sql.VarChar, image.public_id)
                .input("QrUrl",sql.VarChar, image.url)
                .query(qrqueris.updateQrById);
            res.status(200);
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}