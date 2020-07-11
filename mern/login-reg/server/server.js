const express = require('express');
const cors = require('cors');
const app= express();
const cookieParser=require('cookie-parser')
require('./config/mongoose.config');
require("dotenv").config();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./routes/user.route')(app);
app.listen(8000, ()=>{
    console.log("Listening at port 8000")
})
