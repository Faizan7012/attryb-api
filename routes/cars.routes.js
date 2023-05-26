const express = require("express");
const { createCar, delCar, delMulCar, editCar } = require("../controller/cars.controller");
const { getCars, getCarsHonda, getSingleCar, getAllCars, getCarsHondaForEveryOne } = require("../controller/getcars");
const carRoute = express.Router();

carRoute.get('/:id', getCars)
carRoute.get('/single/:id', getSingleCar)
carRoute.get('/allcars', getAllCars)
carRoute.get('/honda/:id', getCarsHonda)
carRoute.get('/all/honda', getCarsHondaForEveryOne)
carRoute.post('/create' , createCar)
carRoute.delete('/manydel/:id' , delMulCar)
carRoute.delete('/del/:id' , delCar)
carRoute.put('/edit/:id' , editCar)


module.exports = carRoute;