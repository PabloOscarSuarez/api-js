
module.exports = async (req, res, next) => {
    res.send({ code: 200, user: req.user})

    next()
    
}
