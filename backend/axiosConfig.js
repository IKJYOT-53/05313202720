const axios = require("axios")
require("dotenv").config();
axios.defaults.headers.common['Authorization'] = process.env.BEARER_TOKEN;

exports.getAuth = async ()=> {
    try{

    
    let result = await axios.post("http://104.211.219.98/train/register",{
        "companyName":"Train Central",
    "ownerName":"Ikjyot",
    "rollNo":"05313202720",
    "ownerEmail":"ikjyot.cse1@gmail.com",
    "accessCode":"uzytMO"
    })
    if(result.clientID && result.clientSecret){
        return {clientID:result.clientID,clientSecret:result.clientSecret}
    }
}catch(err){
    console.log(err)
}
}
exports.getToken = async () => {
    try{
    let result = await axios.post("http://104.211.219.98/train/auth",{
        "companyName":"Train Central",
    "clientID":process.env.CLIENT_ID,
    "ownerName":"Ikjyot",
    "ownerEmail":"ikjyot.cse1@gmail.com",
    "rollNo":"05313202720",
    "clientSecret":process.env.CLIENT_SECRET
    })
    if(result.data.access_token){
        return {token:result.data.access_token}
    }
}catch(err){
    console.log(err)
}
}