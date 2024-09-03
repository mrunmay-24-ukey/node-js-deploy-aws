const express = require("express");
const app = express();

app.get('/api/get' , (req , res) => {
    res.send({message: "Hello from node.js "})
})

app.listen(4000 , () => console.log("server started at port 4000"));