import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config();

//Initiate express
const app = express();

//HTTP Middleware
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

//Routes
app.use('/posts', postRoutes);

//Server settings
const PORT = process.env.PORT || 5000;

//Connection to the database
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, () => console.log(`Server on: ${PORT}`));
})
.catch((err) => {
    console.log(err);
});

mongoose.set('useFindAndModify', false);
