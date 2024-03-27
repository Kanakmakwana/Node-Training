const express = require("express");

const app = express();
const data = require("./MOCK");
const {connect} = require("./DB");


app.use(express.json());
connect();
app.get('/api',(req,res)=>{
    res.send(data);
})

app.post("/",(req,res)=>{
    const newData =req.body;
    data.push(newData);
    res.send(data);
    console.log(data)
})

app.put('/api/:id', (req, res) => {
    const { id, name, email } = req.body;
    const user = data.find((user) => user.id === Number(req.params.id));
    user.id = id;
    user.name = name;
    user.email = email;
    res.send(data);
})

app.delete('/api/:id', (req, res) => {
    const userId = Number(req.params.id); // Corrected typo in Number()
    const userIndex = data.findIndex((user) => user.id === userId); // Using findIndex() to get the index
    if (userIndex !== -1) {
        data.splice(userIndex, 1); // Using splice() to remove the user
        res.send({ message: 'User deleted successfully' });
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

app.listen(3000,()=>{
    console.log("server running at port 3000");
})
