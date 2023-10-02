require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('../config/db');
const userRoute = require('../routes/user.routes');
const carRoute = require('../routes/cars.routes');
const formModel = require('../model/form.model');
const OemRouter = require('../routes/oem.routes');
const Oem_model = require('../model/oem.model');
const newsModel = require('../model/news.model');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/user',userRoute)
app.use('/car',carRoute)
app.use('/oem',OemRouter)


app.get('/', async(req , res)=>{
    
    res.send('welcome to buycars api')
});

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

 app.get('/favnews/:id' , async(req,res)=>{
    try {
        let news = await newsModel.find({userId : req.params.id});
        res.send({
            status: true, 
            data : news
        })
    } catch (error) {
        res.send({
            status:false,
            message : error.message
        })
    }
 })
 app.post('/favnews' , async(req,res)=>{
    try {
        let ans = await newsModel.find({title : req.body.title});
        if(ans.length == 0){ 
            let news = await newsModel.create(req.body);
            res.send({
                status: true, 
            })
        }
        else{
            res.send({
                status: false, 
                message : 'Allready added in Favourite'
            })
        }
    } catch (error) {
        res.send({
            status:false,
            message : error.message
        })
    }
 })
 app.delete('/favnews' , async(req,res)=>{
    try {
        let news = await newsModel.findByIdAndDelete(req.params.id)
        res.send({
            status: true,
            })
    } catch (error) {
        res.send({
            status:false,
            message : error.message
        })
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