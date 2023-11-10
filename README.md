# Moteur de recherche de Pokemons sous Express

Ce site de recherche de Pokémon a été créé dans le cadre d'un exercice avec l'école de formation O'Clock, puis je l'ai perfectionné.

Il utilise les outils :
- HTML et CSS
- NodeJS
- PostGreSQL
- npm
- Express, EJS

L'exercice regroupe des compétences front-end et back-end.

## Front-end

Mise en place de trois pages en HTML, avec styles en CSS : homepage, page des détails d'un pokémon, et page des favoris.
La homepage présente l'ensemble des pokémons enregistrés dans la BDD. On peut y faire une recherche par nom.
On peut également cliquer sur une carte pokémon et accéder à la page détail, ou l'ajouter parmi les favoris.

La page détail présente les caractéristiques d'un pokémon. On peut ajouter le pokémon en favori.

La page favoris présente les pokémons enregistrés en favoris. On peut également accéder à la page détail de chacun, ou retirer chacun des favoris.

## Back-end

Un serveur sous Node.JS utilisant Express ainsi qu'une BDD SQL, comportant un routeur, des controllers et des dataMappers pour échanger avec la BDD sous format SQL.
Le serveur prend également en charge, sous forme de session, la liste des favoris.
