module.exports = (req, res, next) => {
    console.log(`Acceso de un request a las ${new Date()}`)
    next()
}