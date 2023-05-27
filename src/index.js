require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('../config/db');
const userRoute = require('../routes/user.routes');
const carRoute = require('../routes/cars.routes');
const formModel = require('../model/form.model');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/user',userRoute)
app.use('/car',carRoute)


app.get('/', (req , res)=>{
    res.send('Welcome in Attryb Api')
})

app.post('/form' , async(req , res)=>{
    try {
         let form = await formModel.create({...req.body});
         res.send({status:true , message : 'form submitted'})
    } catch (error) {
        res.send({status:false , message : error.message})
    }
})

app.get('/form' , async(req , res)=>{
    try {
         let forms = await formModel.find();
         res.send({status:true , data : forms});
    } catch (error) {
        res.send({status:false , message : error.message})
    }
})



app.listen(8080 , async()=>{
    try {
        await connection();
        console.log('listening on http://localhost:8080')
    } catch (error) {
        console.log(error)
    }
})