const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    project:{
        type: String,
        required: [
            true,
            "Name is required"
        ],
        unique:true,
        minlength:3
    },
    dueDate:{
        type: Date,
        required:[
            true,
            "Type is required"
        ],
        minlength:3
    },
    backlog:{
        type:Boolean,
        default:true
    },
    inProgress:{
        type:Boolean,
        default:false
    },
    completed:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})


module.exports.Project = mongoose.model('Project', ProjectSchema);

