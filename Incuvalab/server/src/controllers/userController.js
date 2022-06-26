import { getConnection, sql, queries } from '../database'
import { generateCodeVerification } from '../extras/confirmNumber';

const nodemaller = require("nodemailer");

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
        const { id } = req.params;
        if (req.body == null || id == null) {
            res.status(400).json(msg, "Bad Request undefined Category Or id");
        } else {
            const result = await pool.request()
                .input("name", sql.VarChar, req.body.name)
                .input("lastname", sql.VarChar, req.body.lastname)
                .input("secondlastname", sql.VarChar,req.body.secondlastname)
                .input("username", sql.VarChar, req.body.username)
                .input("phonenumber", sql.VarChar, req.body.phonenumber)
                .input("address",sql.VarChar, req.body.address)
                .input('id', sql.Int, id)
                .query(queries.updateUserById);
            res.status(200);
            res.json(result.rowsAffected);
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
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getUserDonateFunding = async(req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool
            .request().input('idFunding', id)
            .query(queries.getUserDonateFunding);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const getEmailVerification = async(req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('email', req.body.email)
            .query(queries.getExistEmailVerification)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const restoreForgetPassword = async(req, res) => {
    try {
        var codeVerfication = generateCodeVerification(7);

        var transporter = nodemaller.createTransport({
            host:"smtp.ethereal.email",
            post:587,
            secure: false,
            auth:{
                user:"ruthie.nikolaus44@ethereal.email",
                pass:"k6Hk9rnUBCUdFRt5Vu"
            }
        });

        var mailOptions ={
            from:"Incuva Lab",
            to: req.body.email,
            subject: "Enviado desde node malle",
            text: "<h1>Tu código de verificación es: </h1>"+codeVerfication
        }

        transporter.sendMail(mailOptions, (error, info) =>{
            if(error){
                res.status(500).send(error.message);
            }
        })

        const code = {codeV: codeVerfication}
        res.json(code);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const setPasswordForget = async(req, res) => {
    try {
        if (req.body == null) {
            res.status(400).json({ msg: 'Bad Request. Please fill all fields'});
        } else {
            const pool = await getConnection();
            var result = await pool.request()
                .input("email", sql.VarChar, req.body.email)
                .input("password", sql.VarChar, req.body.password)
                .query(queries.setPasswordUpdate);
            res.json(result.rowsAffected);
        }
    } catch (err) {
        res.status(500);
        res.send(error.message);
    }
}

