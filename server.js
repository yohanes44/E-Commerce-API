require("dotenv").config();
const express = require("express");
const app = express();


app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome to my E-commerce API"
    })
})


app.listen(process.env.PORT, (req, res) => {
    cpnsole.log(`server is listening on port ${process.env.PORT}`);
})