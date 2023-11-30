# Moteur de recherche de Pokémons - Node.JS / Express

Ce site de recherche de Pokémons a été créé dans le cadre d'un exercice avec l'école de formation O'Clock.
Je l'ai par la suite perfectionné pour pouvoir le présenter ici.

La partie front-end utilise :
- `HTML` et `CSS`

Le back-end est créé 
- en runtime `Node.js`
- avec le framework `Express`.

L'accès à la BDD se fait sous `PosGreSQL`.

## Front-end

Mise en place de trois pages en HTML et CSS : 
- homepage
- page des détails d'un pokémon
- page des types (caractéristique d'un pokémon)
- page des favoris.

Les trois premières pages sont visibles en statique dans le dossier intégration.

La *homepage* présente l'ensemble des pokémons de la BDD. On peut y faire une recherche par nom. On peut également cliquer sur une carte et accéder à la page détail d'un pokémon, ainsi que l'ajouter aux favoris.

La *page détail* présente les caractéristiques d'un pokémon. On peut ajouter le pokémon en favori.

La *page des types* présentent tous les types/catégories possibles pour un pokémon ("plante", "poison", "feu" etc.). Chaque type est cliquable et renvoit vers la page d'accueil en filtrant les résultats.

La *page favoris* (non présentée dans le dossier intégration) présente, à la manière de la page d'accueil, la liste des pokémons enregistrés en favoris. On peut également accéder à la page détail de chacun, ou retirer chacun des favoris.

## Back-end

Un serveur sous runtime Node.JS utilisant le framework Express, qui contient :
- un *routeur*
- une *BDD* PostgreSQL contenant les pokémons et leurs caractéristiques
- une *architecture MVC*
- un *pattern dataMapper*
  
Le serveur prend également en charge, sous forme de session, la liste des favoris.
