const express = require("express");
const { createCar, delCar, delMulCar, editCar } = require("../controller/cars.controller");
const { getCars, getCarsHonda, getSingleCar } = require("../controller/getcars");
const carRoute = express.Router();

carRoute.get('/', getCars)
carRoute.get('/:id', getSingleCar)
carRoute.get('/honda', getCarsHonda)
carRoute.post('/create' , createCar)
carRoute.delete('/manydel' , delMulCar)
carRoute.delete('/del/:id' , delCar)
carRoute.put('/edit/:id' , editCar)


module.exports = carRoute;