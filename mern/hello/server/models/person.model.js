const mongoose = require('mongoose');

const PersonSchema = new Mongoose.Schema({
    firstName: {type: String},
    lastName: {type:String},
    }, {timestamps:true});

module.exportsPerson = mongoose.model("Person", PersonSchema)