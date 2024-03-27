const mongoose = require("mongoose");

const connect = ()=>{
    mongoose.connect("mongodb+srv://kanakmakwana:kanak2023@cluster0.l8mcnpw.mongodb.net/")
    .then(console.log("database is connected "));
}

module.exports={
    connect
}