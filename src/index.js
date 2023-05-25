require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('../config/db');
const userRoute = require('../routes/user.routes');
const carRoute = require('../routes/cars.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/user',userRoute)
app.use('/car',carRoute)


app.get('/', (req , res)=>{
    res.send('Welcome in Attryb Api')
})



app.listen(8080 , async()=>{
    try {
        await connection();
        console.log('listening on http://localhost:8080')
    } catch (error) {
        console.log(error)
    }
})