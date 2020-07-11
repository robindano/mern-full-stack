const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
require('./config/mongoose.config')
require('./routes/person.routes')(app);

app.listen(port, ()=> console.log('Listening on port: ${port}'));

app.use(express.json())
app.use(express.urlencoded({extended: true}));



