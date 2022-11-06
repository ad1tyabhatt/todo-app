const express = require("express");
const { Mongoose } = require("mongoose");
const apiRoute = require("./utils/api");
const mongoose = require("mongoose");
const { DB_CONNECT } = require("./utils/constants");
const app = express();
const PORT = 8000;

mongoose.connect(DB_CONNECT, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
},(e)=> console.log(e));

app.use(express.json());
app.use("/api/", apiRoute);

// adityabhatt
// Aditya123

// uri mongodb+srv://adityabhatt:<password>@cluster0.n0ud0ep.mongodb.net/?retryWrites=true&w=majority

app.listen(PORT, () => {
   console.log(`server running on ${PORT}`);
});
