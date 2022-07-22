const userModel = require('../models/user');
const mongoose =require ("mongoose");

exports.createUser = async (req,res) => {
    console.log('req.....',req.body);
    const user = await userModel.create(req.body)
    console.log('user',user);
    // if(!user) {
    //     return res.status(400).send({
    //         message: "Error encountered while creating a user",
    //         success: false
    //     })
    // }

    // return res.status(200).send({
    //     message: "User created",
    //     status: true
    // })
}