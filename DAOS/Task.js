const { Task } = require("../db/models");

function createTaskDAO(task) {
    return Task.create(task)
}

function getTasksDAO() {
    return Task.findAll()
}

function getTasksForUserDAO(userId) {
    return Task.findAll({
        where: {
            userId,
        },
        include: ["user", "labels"],
    })
}

module.exports = {
    createTaskDAO,
    getTasksDAO,
    getTasksForUserDAO,
}