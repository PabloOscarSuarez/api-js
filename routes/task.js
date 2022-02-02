const {
  createTask,
  getTasks,
} = require('../controllers/task')

const task = (router) => {
  router.post("/task", createTask);
  router.get("/task", getTasks);
};

module.exports = task;
