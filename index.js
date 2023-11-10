require('dotenv').config();

const express = require("express");
const app = express();
const session = require('express-session');

const PORT = process.env.PORT || 3000;
const router = require("./app/router.js")

app.use(express.static('public'));
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: 'discworld', // le "secret" qui sert à générer les identifiants de sessions uniques.
    resave: true, // sauvegarde automatique de la session à la fin de la requête
    saveUninitialized: true, // créer une session pour l'internaute dans tous les cas, mais si elle est vide.
    cookie: {
      secure: false,
      maxAge: (1000*60*60) // ça fait une heure
    }
  }));

app.use(router);

app.listen(PORT, () => console.log("Server listens on PORT : " + PORT));