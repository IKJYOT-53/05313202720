const express = require("express")
const app = express();
require("dotenv").config();
const axios = require("axios");
axios.defaults.headers.common['Authorization'] = process.env.BEARER_TOKEN;

app.listen(5000,() => {
    console.log("Server started on 5000")
})