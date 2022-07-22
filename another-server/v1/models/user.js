const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        minLength: [3, 'Minimum length of username is 3'],
        maxLength: [15, 'Maximum length of username is 15']
    },
    email: {
        type: String,
        unique:true,
        required: [true, 'Email is required'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    dob: {
        type: Date,
        required: [true, 'DOB is required'],
    },
    isActive: {
        type: Boolean,
        default: true,
        select: false
    }
},{
    timestamps: true
})

const User = mongoose.model('users', userSchema);
module.exports = User