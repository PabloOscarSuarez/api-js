const { Label } = require("../db/models");

function createLabelDAO(label) {
    return Label.create(label)
}

function getLabelsDAO() {
    return Label.findAll({
        include: 'tasks',
    })
}

module.exports = {
    createLabelDAO,
    getLabelsDAO,
}