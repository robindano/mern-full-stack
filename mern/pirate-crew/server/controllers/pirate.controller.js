const { Pirate } = require('../models/pirate.model')

module.exports.list = (request, response) => {
    Pirate.find({})
    .then(pirate => {
        response.json(pirate);
    })
    .catch(err=>{
        response.status(400).json(err);
    })
}

module.exports.create = (request, response) =>{
    const {name, imageUrl, treasureChests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand} = request.body;
    Pirate.create({
        name, 
        imageUrl,
        treasureChests,
        catchPhrase,
        crewPosition,
        pegLeg,
        eyePatch,
        hookHand
    })
        .then(pirate => {
            response.json(pirate)
        })
        .catch(err=>{
            response.status(400).json(err)
        })
}   

module.exports.detail = (request, response) => {
    const {id}= request.params;
    Pirate.findOne({_id:id})
    .then(pirate => {
        response.json(pirate)
    })
    .catch(err => {
        response.status(400).json(err)
    })
}

module.exports.update = (request, response) => {
    const { id } = request.params;
    const {name, imageUrl, treasureChests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand} = request.body;
    Pirate.findOneAndUpdate({_id: id},{
        name, 
        imageUrl,
        treasureChests,
        catchPhrase,
        crewPosition,
        pegLeg,
        eyePatch,
        hookHand
    },
        {
            new: true,
            useFundAndModify: true
        })
        .then(pirate =>{
            response.json(pirate)
        })
        .catch(err => {
            response.status(400).json(err)
        })
}
module.exports.delete = (request, response) => {
    const {id} = request.params;
    Pirate.deleteOne({_id:id})
    .then(deleteConfirmation => {
        response.json(deleteConfirmation);
    })
    .catch(err=>{
        response.json(err)
    })
}