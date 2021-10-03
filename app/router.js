const express = require('express');

 // Création du routeur avec express
 const router = express.Router();

 router.get('/', (req, res) => {
   res.render('index');
 });

 // Export du routeur
 module.exports = router; 