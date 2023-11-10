const { log } = require("console");
const dataMapper = require("../dataMapper.js")

const bookmarksController = {
    bookmarksPage : (req, res) => {
        if (!req.session.favoris)
            req.session.favoris = [];
        res.render("bookmarks", { pokemons : req.session.favoris})          
    },

    addBookmarks : async (req, res) => {
        if (!req.session.favoris)
            req.session.favoris = [];
        
        const targetId = parseInt(req.params.id);
        const hasFav = req.session.favoris.some(pokemon => pokemon.id === targetId);
        if (hasFav)
            res.redirect("/bookmarks");
        try {    
            const pokemon = await dataMapper.getPokemonById(targetId);
            if (pokemon) {
                req.session.favoris.push(pokemon)
                res.redirect('/bookmarks')
            }
            else res.status(404).send(`Card with id ${id} not found`);
        }
        catch (error) {
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    removeBookmarks : (req, res) => {
        const targetId = parseInt(req.params.id);
        req.session.favoris = req.session.favoris.filter(fav => fav.id !== targetId)
        res.redirect("/bookmarks");
    }
};

module.exports = bookmarksController;