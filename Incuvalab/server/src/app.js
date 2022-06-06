import express from "express";
import fileUpload from 'express-fileupload';
import config from './config'
import categoryRoute from './routes/categoryRoute';
import fundingRoute from './routes/fundingRoute';


const app = express();


//Setting
app.set('port', config.port);
//Middelwars
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}));
app.use(express.urlencoded({ extended: false }));
app.use(categoryRoute);
app.use(fundingRoute);

export default app;