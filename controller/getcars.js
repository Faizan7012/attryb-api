const carModel = require("../model/cars.model");

const getCars = async(req , res)=>{
    const {price , color , mileage , } = req.query;
    const {id} = req.params;
    let userID = id;
     try {
        let cars = await carModel.find();
        if(price){
           cars = await carModel.find({userId : userID, price : {$lte : price}})
           if(color){
               cars = await carModel.find({userId : userID, price : {$lte : price} , colors : color})
               if(mileage){
                   cars = await carModel.find({userId : userID, price : {$lte : price} , colors : color , mileage : {$gte : mileage}})
               }
           }
           if(mileage){
            cars = await carModel.find({userId : userID, price : {$lte : price} , mileage : {$gte : mileage}})
           }
        }
        else if(color){
            cars = await carModel.find({userId : userID,  colors : color});
            if(mileage){
            cars = await carModel.find({userId : userID, colors : color , mileage : {$gte : mileage}})
    
            }
        }
        else if(mileage){
            cars = await carModel.find({userId : userID,  mileage : {$gte : mileage}})
    
        }
    
        res.send({
            status:true , 
            cars
        })
     } catch (error) {
        res.status(404).json({
            message: error.message,
            status: false,
          });
     }

}

const getAllCars = async(req , res)=>{
    const {price , color , mileage , } = req.query;
     try {
        let cars = await carModel.find();
        if(price){
           cars = await carModel.find({ price : {$lte : price}})
           if(color){
               cars = await carModel.find({ price : {$lte : price} , colors : color})
               if(mileage){
                   cars = await carModel.find({ price : {$lte : price} , colors : color , mileage : {$gte : mileage}})
               }
           }
           if(mileage){
            cars = await carModel.find({ price : {$lte : price} , mileage : {$gte : mileage}})
           }
        }
        else if(color){
            cars = await carModel.find({  colors : color});
            if(mileage){
            cars = await carModel.find({ colors : color , mileage : {$gte : mileage}})
    
            }
        }
        else if(mileage){
            cars = await carModel.find({  mileage : {$gte : mileage}})
    
        }
    
        res.send({
            status:true , 
            cars
        })
     } catch (error) {
        res.status(404).json({
            message: error.message,
            status: false,
          });
     }

}

const getCarsHonda = async (req , res)=>{
    const {id} = req.params;
    let userID = id;

    try {
        const car = await carModel.find({userId : userID, model_year :'2015' , name :'Honda City'});
        
        res.send({
            cars : car ,
            status : true
        })

    } catch (error) {
        res.status(404).json({
            message: error.message,
            status: false,
          });
    }
}

const getSingleCar = async (req , res)=>{
    const {id} = req.params

    try {
        const car = await carModel.find({ _id : id});
        res.send({
            cars : car[0] ,
            status : true
        })

    } catch (error) {
        res.status(404).json({
            message: error.message,
            status: false,
          });
    }
}


const getCarsHondaForEveryOne = async (req , res)=>{

    try {
        const car = await carModel.find({ model_year :2015 , name :'Honda City'});
        
        res.send({
            cars : car ,
            status : true
        })

    } catch (error) {
        res.status(404).json({
            message: error.message,
            status: false,
          });
    }
}



module.exports = {getCars , getCarsHonda , getSingleCar , getAllCars , getCarsHondaForEveryOne}