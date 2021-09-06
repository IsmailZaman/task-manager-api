///Users/Infin/mongodb/bin/mongod --dbpath=/Users/Infin/mongodb-data

const express = require('express');
const mongoose = require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

// app.use((req,res,next)=>{
    
//     res.status(503).send("Under maintainence. We will be back soon");

// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


const port = process.env.PORT;



app.listen(port, ()=>{
    console.log("App is up on " + port);
})