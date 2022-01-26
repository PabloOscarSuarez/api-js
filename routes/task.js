const {
  createTask,
  getTasks,
} = require('../controllers/task')

const task = (router) => {
  router.post("/task", createTask);

  router.get("/task", getTasks);


  router.get("/:id", () => { 
    // TODO: devuelve el detalle de la tarea
  });
  
  router.put("/:id", () => { 
    // TODO: actualizar tarea 
  });
  router.delete("/:id", () => { 
    // TODO: eliminar tarea 
  });
};

module.exports = task;
