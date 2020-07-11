module.exports.index = (request, response) =>{
    response.json({
        message: "Hello World"
    })
}

module.exports.createPerson = (request, response) =>{
    const { firstName, lastName } = request.body;
    personalbar.create({
        firstName,
        lastName
    })
    .then(person => response.json(person))
    .catch(err => responsejson(err));
}
