const express = require("express");

// Création du routeur avec express
const router = express.Router();

const games = require("../games.json");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/game/:nameOfGame", (req, res) => {
  const gameName = req.params.nameOfGame;
  let foundGame;

  for (const game of games) {
    if (game.name === gameName) {
      foundGame += game;
      break;
    }
  }
  if (foundGame) {
    res.render(gameName, {
      gameData: foundGame,
    });
  } else {
    res.status("404");
  }
});

// Export du routeur
module.exports = router;
