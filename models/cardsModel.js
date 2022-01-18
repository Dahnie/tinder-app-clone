// const mongoose = require("mongoose");
import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})
// The two parameters are 1.collection name 2. schema instance 
const Cards = mongoose.model("cards", cardSchema)

export default Cards;