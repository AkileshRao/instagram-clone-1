const userModel = require('../models/user');

exports.createUser = async (req,res) => {
    console.log('req.....',req.body);
    try {
        const user = await userModel.create(req.body)
        console.log('user',user);
        res.status(200).json({
            isError: false,
            data: user
        })
    }
    catch(error) {
        console.log('error.error',error.errors);
        console.log('error.message',error._message)
        res.send({
            isError: true,
            error: error.error,
            message: error.message
        })
    }
}