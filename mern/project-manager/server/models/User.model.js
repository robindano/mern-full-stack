const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    userName: {
        type:String,
        minlength:[ 2, 'Please enter a first name of 2 or more characters.']
    },
    email: {
        type:String,
        unique:true,
        validate:[
            val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        minlength:[
            8,
            'please enter a password of atleast 8 characters.'
        ]
    }
}, {timestamps:true});

UserSchema.virtual('confirmPassword', {
    get: () => this._confirmPassword,
    set: val => this._confirmPassword = val
});

UserSchema.pre('validate', function(next){
    if(this.password !==this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});



module.exports = mongoose.model('User', UserSchema);


