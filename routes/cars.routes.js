const express = require("express");
const { createCar, delCar, delMulCar, editCar } = require("../controller/cars.controller");
const { getSingleCar, getAllCars, getCarsHondaForEveryOne } = require("../controller/getcars");
const carRoute = express.Router();

// get all cars available
carRoute.get('/', getAllCars)

// get single car details
carRoute.get('/single/:id', getSingleCar)

// get honda city 2015 model cars
carRoute.get('/all/honda', getCarsHondaForEveryOne)

// add new second hand cars
carRoute.post('/create' , createCar)

// del multiple cars in one go
carRoute.delete('/manydel/:id' , delMulCar)

// del single car
carRoute.delete('/del/:id' , delCar)

// edit a car
carRoute.put('/edit/:id' , editCar)


module.exports = carRoute;