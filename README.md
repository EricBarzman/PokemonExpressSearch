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
- page des types (caractéristique d'un pokémon)
- page des favoris.

Les trois premières pages sont visibles dans le dossier intégration en HTML et CSS pour donner une idée de leur aspect, sans être reliées à la base de données et le serveur.

La *homepage* présente l'ensemble des pokémons de la BDD. On peut y faire une recherche par nom.
On peut également cliquer sur une carte et accéder à la page détail d'un pokémon, ainsi que l'ajouter aux favoris.

La *page détail* présente les caractéristiques d'un pokémon. On peut ajouter le pokémon en favori.

La *page des types* présentent tous les types possibles pour un pokémon ("plante", "poison", "feu" etc.). Chaque type est cliquable et renvoit vers la page d'accueil en filtrant les résultats.

La *page favoris* (non présentée dans le dossier intégration) présente, à la manière de la page d'accueil, la liste des pokémons enregistrés en favoris. On peut également accéder à la page détail de chacun, ou retirer chacun des favoris.

## Back-end

Un serveur sous Node.JS utilisant Express, qui contient :
- une BDD SQL des pokémons et leurs caractéristiques
- un routeur
- des controllers
- des dataMappers pour échanger avec la BDD.
  
Le serveur prend également en charge, sous forme de session, la liste des favoris.
