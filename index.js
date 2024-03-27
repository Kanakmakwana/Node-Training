const express = require("express");

const app = express();
const data = require("./MOCK");
const {connect} = require("./DB");


app.use(express.json());
connect();
app.get('/api',(req,res)=>{
    res.send(data);
})
// const newData = req.body;
// data.push(newData);
// res.send(data);
// console.log(data);

// app.post("/",(req,res)=>{
//     const newData =req.body;
//     data.push(newData);
//     res.send(data);
//     console.log(data)
// })
app.listen(3000,()=>{
    console.log("server running at port 3000");
})