const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Le serveur est bien démarré sur http://localhost:${PORT}`);
});
