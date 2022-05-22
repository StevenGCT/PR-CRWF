import express from "express";
import config from './config';
import categoryRoute from './routes/categoryRoute';
import userRoute from './routes/userRoute';
import fundingRoute from './routes/fundingRoute';
import commentRoute from './routes/commentRoute';


const app = express();

//Setting
app.set('port', config.port);

//Middelwars
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(categoryRoute);
app.use(fundingRoute);
app.use(userRoute);
app.use(commentRoute);

export default app;