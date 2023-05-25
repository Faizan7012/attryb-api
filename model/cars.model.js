const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  userID : {
    type :Schema.Types.ObjectId,
    ref : 'user',
    required : true
  },
  name: { type: String, required: true },
  mileage: { type: Number, required: true },
  power: { type: String, required: true },
  max_speed: { type: String, required: true },
  model_year: { type: Number, required: true },
  price: { type: Number, required: true },
  colors : {type : Array , required : true },
  inventry : {type : Object },

});

const carModel = model("cars", carSchema);

module.exports = carModel;