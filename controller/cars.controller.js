const carModel = require("../model/cars.model");

const createCar = async(req , res)=>{
  const {car , userID , images} = req.body;

  try {
    await carModel.create({...car , userID: userID , images});
    res.send({
        status: true , 
        message : 'car added successfull'
    })
  } catch (error) {
    res.send({
        message : error.message,
        status: false
    })
  }
}

const delCar = async(req , res)=>{
    const {id} = req.params;
    try {
      await carModel.findByIdAndDelete(id)
      res.send({
          status: true , 
          message : 'car deleted successfull'
      })
    } catch (error) {
      res.send({
          message : error.message,
          status: false
      })
    }
  }


  const delMulCar = async(req , res)=>{
    const {id} = req.params;
    const arr = id.split(',')
    try {
       for(let x of arr){
            async function delCar(id){
             await  carModel.findByIdAndDelete(id)
            }
            delCar(x)
       }
      res.send({
          status: true , 
          message : 'car deleted successfull'
      })
    } catch (error) {
      res.send({
          message : error.message,
          status: false
      })
    }
  }

  const editCar = async(req , res)=>{
    const {id} = req.params;

    try {
      await carModel.findByIdAndUpdate(id , {
        ...req.body.car
      })
      res.send({
          status: true , 
          message : 'car updated successfull'
      })
    } catch (error) {
      res.send({
          message : error.message,
          status: false
      })
    }
  }



  module.exports = {createCar , delCar , delMulCar , editCar}