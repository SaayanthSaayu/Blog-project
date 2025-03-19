const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();
const Blog = require("./");
const router = require("./routes/route.js")

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));


(async () => {
  mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log("MongoDB Connected..."))
 .catch(err => console.log("Connection error(mongodb)",err));
})();


app.use("/", router);



app.listen(5555,() => {
    console.log("server is running on 5555")
})