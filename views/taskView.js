const { userView } = require('./userView')
function taskView(task) {
    return {
        id: task.id,
        description: task.description,
        createdAt: task.createdAt,
        user: userView(task.user),
        labels: task.labels,
    }
}

module.exports = {
    taskView,
}