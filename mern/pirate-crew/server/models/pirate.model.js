const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "You are not joining Anonymous here, common add name"
        ]
    },
    imageUrl:{
        type: String,
        required:[
            true,
            "Selfie is required"
        ]
    },
    treasureChests:{
        type:String,
        required:[
            true,
            "Common, how much money you got ?, # of treasure Chests are required"
        ]
    },
    catchPhrase:{
        type: String,
        required:[
            true,
            "Gotta have a catch phrase"
        ]
    },
    crewPosition:{
        type:String,
        required:[
            true,
            "Select a position"
        ]
        // validate: {
        //     validator
        // }
    },
    pegLeg:{type: Boolean},
    eyePatch:{type: Boolean},
    hookHand:{type: Boolean}

}, {timestamps:true})

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);