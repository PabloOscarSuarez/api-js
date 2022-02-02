const { createTaskDAO } = require('../../DAOS/Task')
const badRequestError  = require('../../errors/badRequestError')

async function createTask(req, res) {
    try {
        const { description, labelIds } = req.body
        
        const userId = req.user

        if (!description) {
            return res.status(400).send(badRequestError('Por favor ingrese una descripcion'))
        }
        const labels = labelIds.split(",")
        const task = await createTaskDAO({ description, userId })
        await task.addLabels(labels)
        
        res.json(task)
    } catch(error) {
        console.log(error)
        res.status(500).send('error de sistema', error)
    }
}

module.exports = createTask 