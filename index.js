const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//Router
const router = require("./routes");
//DB
require("./db/models");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json({ limit: "100kb", parametersLimit: "10000" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.info("\n----- servidor prendido en el puerto:" + PORT + "----");
  console.info("\x1b[36m%s\x1b[0m", "\nhttp://localhost:" + PORT);
});
