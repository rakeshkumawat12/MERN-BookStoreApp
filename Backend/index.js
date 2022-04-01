const express = require("express")
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.json())
app.use(cors())
app.use('/books', router)        //http://localhost:3000/books

mongoose.connect(MongoDBURL)
    .then(() => console.log("Connected To Database"))
    .then(()=>{
        app.listen(3000);
    })
    .catch((err)=> console.log(err));