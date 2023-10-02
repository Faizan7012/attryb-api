const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
  title: { type: String, required: true },
  content: {type: String,required: true,},
  description: {type: String,required: true,},
  publishedAt: {type: String,required: true,},
  url: {type: String,required: true,},
  image: {type: String,required: true,},
  userId: {type: String,required: true,},
  source: {type: Object,required: true,}
});

const newsModel = model("favnews", newsSchema);

module.exports = newsModel;