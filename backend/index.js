const express = require("express")
const app = express();
const axios = require("axios");
const { getToken } = require("./axiosConfig");
const { filterTrains } = require("./helperFunctions");

// Get All Trains
app.get("/trains",async (req,res) => {
    try{

    
    let {token} = await getToken();
    axios.defaults.headers.common["Authorization"] = "Bearer "+token
    let trains = await axios.get("http://104.211.219.98/train/trains");
    // Sort Trains
    if(trains.data){
        let data = filterTrains(trains.data)
        res.json(data)
    }
}catch(err){
    console.log(err)
    
}
})

app.get("/trains/:id",async (req,res) => {
    try{
    let {token} = await getToken();
    axios.defaults.headers.common["Authorization"] = "Bearer "+token
    let trains = await axios.get("http://104.211.219.98/train/trains/"+req.params.id);
    if(trains.data){
        let data = filterTrains(trains.data);
        res.json(data)
    }
}catch(err){
    console.log(err)  
    res.json(err)        
}
})

app.listen(5000,() => {
    console.log("Server started on 5000")
})