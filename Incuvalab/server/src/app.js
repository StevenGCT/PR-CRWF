import express from "express";
import config from './config'
import categoryRoute from './routes/categoryRoute';
import fundingRoute from './routes/fundingRoute';
import confirmRoute from './routes/confirmRoute';


const app = express();


//Setting
app.set('port', config.port);
//Middelwars
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(categoryRoute);
app.use(fundingRoute);
app.use(confirmRoute);

export default app;