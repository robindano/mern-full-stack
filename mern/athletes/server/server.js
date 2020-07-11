const express = require ('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

require('./routes/athlete.routes')(app)



app.listen(8000, ()=>{
    console.log("listening at port 8000")
})

