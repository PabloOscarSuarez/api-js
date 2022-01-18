const { getTasksForUserDAO } = require('../../DAOS/Task')
const { taskView } = require('../../views/taskView')

async function getTasks(req, res) {
    try {
        const userId = req.user
        const tasks = await getTasksForUserDAO(userId)
        res.json(tasks.map(taskView))
    } catch(error) {
        console.log(error)
        res.status(500).send('error de sistema', error)
    }
}

module.exports = getTasks 