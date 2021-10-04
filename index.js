const express = require("express");
const router = require("./app/router");

const listOfGames = require('./games.json');

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/app/views");

app.locals.myGames = listOfGames;

app.use(express.static(__dirname + "/public"));
app.use(router);
// Page d'erreur 404
app.use((req, res) => {
  res.status(404).render('error');
});

app.listen(PORT, () => {
  console.log(`Le serveur est bien démarré sur http://localhost:${PORT}`);
});
