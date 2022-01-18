import express from "express";
import mongoose from "mongoose";
import Cards from "./models/cardsModel.js";
import Cors from "cors"

// App Config
const app = express();
const port = process.env.PORT || 5000;
const connectionURL = "mongodb+srv://dannyboy:danboy12@cluster0.uedyl.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middlewares
// built-in midddleware that parses incoming requests with JSON payloads
app.use(express.json());
// Cors adds headers to every request(safety prerequisites) 
app.use(Cors())

// Db Config
mongoose.connect(connectionURL)
    .then(() => {
        console.log("connected to db");
    })

// API endpoints
app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

// Create cards on the db
app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;
    // create contents through the model into the db
    Cards.create(dbCard)
        .then((data) => {
            // a new resource has been successfully created on the server due to a post request
            res.status(201).send(data)
        })
        .catch((err) => {
            // internal server error
            res.status(500).send(err)
        })
})

// Get the data(cards) in the db
app.get("/tinder/cards", (req, res) => {
    Cards.find()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
})




// Listeners
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
