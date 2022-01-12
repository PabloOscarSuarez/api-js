const c = require('../middlewares/authMiddleware')

const task = (router) => {
  // TODO: todas estas rutas tienen que pasar inicialmente por Task
  router.get("/", () => { 
    // TODO: devuelve todas las tareas
  });
  router.get("/:id", () => { 
    // TODO: devuelve el detalle de la tarea
  });
  router.post("/", () => { 
    // TODO: crear tarea 
  });
  router.put("/:id", () => { 
    // TODO: actualizar tarea 
  });
  router.delete("/:id", () => { 
    // TODO: eliminar tarea 
  });
};

module.exports = task;
