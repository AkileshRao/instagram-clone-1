const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {
    if (!req.body.username) res.status(400).json({ status: "error", message: "Cannot have empty username" })
    if (!req.body.password) res.status(400).json({ status: "error", message: "Cannot have empty password" })
    if (!req.body.email) res.status(400).json({ status: "error", message: "Cannot have empty email" })

    const user = {
        username: req.body.username,
        email: req.body.email,
        password: await hashPassword(req.body.password),
        dob: req.body.dob,
    }
    console.log('user',user)
    User.create(user).then(() => {
        res.status(200).json({
            message: {
                title: 'Account created.',
                description: "We've created your account for you.",
            },
            status: "success",
            isError: false
        })
    }).catch(err => {
        console.log('------------------------------------',err)
        res.status(400).json({
            status: "error",
            message: "Something went wrong!",
            error: err,
            isError: true
        })
    })
}


exports.signIn = async (req, res) => {
    if (!req.body.username) res.status(400).json({ status: "error", message: "Cannot have empty username" })
    if (!req.body.password) res.status(400).json({ status: "error", message: "Cannot have empty password" })

    const user = await User.findOne({ where: { username: req.body.username } })

    const passwordResult = await bcrypt.compare(req.body.password, user.password)

    if (!passwordResult) res.status(400).json({ status: "error", message: "Invalid password!" })

    const userPayload = {
        username: req.body.username,
        currentTime: new Date()
    }

    const token = await jwt.sign(userPayload, 'bsdk');

    res.status(200).json({
        status: "success",
        token: token
    })
}


const hashPassword = async (passwordString) => {
    const hashedP = await bcrypt.hash(passwordString, 10)
    return hashedP
}