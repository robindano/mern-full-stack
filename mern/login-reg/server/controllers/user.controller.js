const { User } = require('../models/user.model')
const bcrypt = require('bcrypt');

module.exports.register = (request, response) => {
    User.create(req.body)
        .then(user => {
            response.json({
                msg: "success!", user:user
            });
        })
        .catch(err=>{
            response.status(400).json(err);
        })
}

module.exports.login = async(req, res) =>{
    const user = await User.findOne({email:req.body.email});

    if(user === null){
        return req.sendStatus(400);
    }

    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if(!correctPassword) {
        return res.sendStatus(400);
    }

    const userToken = jwt.sign({
        id:user._id
    }, process.env.SECRET_KEY);
    
    res
        .cookie("usertoken", userToken, secret, {
            httpOnly: true
        })
        .json({msg: "success!" });
}

module.exports.list = (request, response) => {
    User.find({})
    .then(user => {
        response.json(user);
    })
    .catch(err=>{
        response.status(400).json(err);
    })
}

module.exports.detail = (request, response) => {
    const {id}= request.params;
    User.findOne({_id:id})
    .then(user => {
        response.json(user)
    })
    .catch(err => {
        response.status(400).json(err)
    })
}

// module.exports.update = (request, response) => {
//     const { id } = request.params;
//     const {title, price, description} = request.body;
//     Product.findOneAndUpdate({_id: id},{
//         title,
//         price,
//         description
//     },
//         {
//             new:true,
//             useFundAndModify: true
//         })
//         .then(product =>{
//             response.json(product)
//         })
//         .catch(err => {
//             response.status(400).json(err)
//         })
// }

module.exports.delete = (request, response) => {
    const {id} = request.params;
    User.deleteOne({_id:id})
    .then(deleteConfirmation => {
        response.json(deleteConfirmation);
    })
    .catch(err=>{
        response.json(err)
    })
}