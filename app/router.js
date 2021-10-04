const express = require("express");

// Création du routeur avec express
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/game/fourchette", (req, res) => {
  res.render("fourchette");
});

router.get("/game/diceRoller", (req, res) => {
  res.render("diceRoller", {
    extraCss: "diceRoller.css",
  });
});

// Export du routeur
module.exports = router;
