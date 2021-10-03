const express = require("express");
const router = require("./app/router");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/app/views");

app.use(express.static(__dirname + "/public"));
app.use(router);

app.listen(PORT, () => {
  console.log(`Le serveur est bien démarré sur http://localhost:${PORT}`);
});
