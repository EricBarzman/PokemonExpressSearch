# Moteur de recherche de Pokémons sous Express

Ce site de recherche de Pokémons a été créé dans le cadre d'un exercice avec l'école de formation O'Clock.
Je l'ai par la suite perfectionner pour pouvoir le présenter ici.

Il utilise les outils :
- `HTML` et `CSS`
- `NodeJS`
- `PostGreSQL`
- npm
- `Express`, EJS

L'exercice regroupe des compétences front-end et back-end.

## Front-end

Mise en place de trois pages en HTML et CSS : 
- homepage
- page des détails d'un pokémon
- page des favoris.

Ces trois pages sont visibles dans le dossier intégration en HTML et CSS pour donner une idée de leur aspect, sans être reliées à la base de données et le serveur.

La homepage présente l'ensemble des pokémons enregistrés dans la BDD. On peut y faire une recherche par nom.
On peut également cliquer sur une carte pokémon et accéder à la page détail, ou l'ajouter parmi les favoris.

La page détail présente les caractéristiques d'un pokémon. On peut ajouter le pokémon en favori.

La page favoris présente les pokémons enregistrés en favoris. On peut également accéder à la page détail de chacun, ou retirer chacun des favoris.

## Back-end

Un serveur sous Node.JS utilisant Express, qui contient :
- une BDD SQL
- un routeur
- des controllers
- des dataMappers pour échanger avec la BDD.
  
Le serveur prend également en charge, sous forme de session, la liste des favoris.
