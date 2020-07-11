const{Athlete} = require("../models/athlete.model");

module.exports.list = (request, response) => {
    Athlete.find({})
        .then(athletes => {
            response.json(athletes);
        })
        .catch(err => {
            response.status(400).json(err);   
        })
    }

module.exports.create = (request, response) =>{
    const {firstName, lastName, sport, team} = request.body;
    Athlete.create({
        firstName,
        lastName,
        sport,
        team
    })
    .then(athlete => {
        response.json(athlete)
    })
    .catch(err => {
        response.status(400).json(err)
    })
}

module.exports.detail = (request, response) => {
    const {id} =request.params;
    Athlete.findOne({_id:id})
        .then(athlete =>{
            response.json(athlete)
        })
        .catch(err=>{
            response.status(400).json(err);
        })
}

module.exports.update = (request, response) =>{
    const {id} =request.params;
    const {firstName, lastName, sport, team} =request.body;
    Athlete.findOneAndUpdate({_id: id},{
        firstName,
        lastName,
        sport,
        team
    },
        {
            new:true,
            useFindAndModify:true
        })
    .then(athlete =>{
        response.json(athlete)
    })
    .catch(err=>{
        response.status(400).json(err);
    })
}

module.exports.delete = (request, response) =>{
    const { id } = request.params;
    Athlete.deleteOne({_id: id})
    .then(deleteConfirmation => {
        response.json(deleteConsfirmation);
    })
    .catch(err=>{
        response.status400.json(err)
    })

};