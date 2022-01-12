const { User } = require("../../db/models");
const badRequestError = require("../../errors/badRequestError")
const notFoundError = require("../../errors/notFoundError")
const { getJwt } = require('../../services/auth')


module.exports = async (req, res) => {
    const  { email, password } = req.body

    try {
        if (!email | !password) {
            throw badRequestError("campos requeridos");
        }

        // primero vamos a buscar el usuario en la bd

        const user = await User.findOne({ where: {
            email
        }})

        if (!user) {
            throw notFoundError("usuario no encontrado")
        }
        
        // devuelve un true si la comparación del pass con el hash es correcta
        if (!user.verifyPassword(password)) {
            throw badRequestError("password incorrecto");
        }
        
        const token = getJwt({
            id: user.id,
            email: user.email,
        })

        res.send({ code: 200, user, token })

    } catch(err) {
        return res.status(err.code || 500).send({
            code: err.code,
            text: err.text,
            detail: err.detail,
          });
    }
} 