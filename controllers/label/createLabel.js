const { createLabelDAO } = require('../../DAOS/Label')
const badRequestError  = require('../../errors/badRequestError')

async function createLabel(req, res) {
    try {
        const { name } = req.body
        
        if (!name) {
            return res.status(400).send(badRequestError('Por favor ingrese una descripcion'))
        }

        const label = await createLabelDAO({ name })
        res.json(label)
    } catch(error) {
        console.log(error)
        res.status(500).send('error de sistema', error)
    }
}

module.exports = createLabel 