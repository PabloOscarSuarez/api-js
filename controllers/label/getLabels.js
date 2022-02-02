const { getLabelsDAO } = require('../../DAOS/Label')
const { taskView } = require('../../views/taskView')

async function getLabels(req, res) {
    console.log('getLabels')
    try {
        const labels = await getLabelsDAO()
        res.json(labels)
    } catch(error) {
        console.log(error)
        res.status(500).send('error de sistema', error)
    }
}

module.exports = getLabels 