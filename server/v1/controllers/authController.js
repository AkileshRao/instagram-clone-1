exports.authenticate = async(req,res) => {
    const token = req.headers.token;
    if(!token) {
        res.status(400).json({
            status: "error",
            message: "Token not provided, authentication failed!",
            isError: true
        })
        return false;
    }
    const decoded = await promisify(jwt.verify)(
        token,
        process.env.SECRET
    )
    const user = await user.findOne({
        where: {
            username: decoded.username
        }
    })
    if(!user){
        res.status(400).json({
            status: "error",
            message: "User not found!",
            isError: true
        })
        return false;
    }
    return true;
}