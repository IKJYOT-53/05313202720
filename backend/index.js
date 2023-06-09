const express = require("express")
const app = express();
const axios = require("axios");
const { getToken } = require("./axiosConfig");


app.get("/trains",async (req,res) => {
    let {token} = await getToken();
    axios.defaults.headers.common["Authorization"] = "Bearer "+token
    let trains = await axios.get("http://104.211.219.98/train/trains");
    if(trains.data){
        res.json(trains.data)
    }
})

app.listen(5000,() => {
    console.log("Server started on 5000")
})