const express = require("express");
const cors = require("cors");
//Router
const router = require("./routes");
//DB
require("./db/models");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.info("\n----- servidor prendido en el puerto:" + PORT + "----");
  console.info("\x1b[36m%s\x1b[0m", "\nhttp://localhost:" + PORT);
});
