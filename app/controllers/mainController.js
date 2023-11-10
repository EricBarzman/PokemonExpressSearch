const { log } = require("console");
const dataMapper = require("../dataMapper.js")

const mainController = {

    homepage : async (req, res) => {
        try {
            const pokedex = await dataMapper.getPokemonsList();
            res.render("home", { pokedex })
        } catch(error) {
            res.status(500).send("Erreur avec notre base de données");
        }  
    },
    
    detailPage : async (req, res) => {
        const targetId = parseInt(req.params.id);
        try {
            const pokemon = await dataMapper.getPokemonById(targetId);
            const types = await dataMapper.getPokemonTypes(targetId);
            if (pokemon) { res.render("detail", { pokemon, types }) }
            else { res.status(404).send(`Pokemon with id ${targetId} not found`); }
        } catch(error) {
            res.status(500).send("Erreur avec notre base de données");
        }
    },

    typesPage : async (req, res) => {
        try {
            const types = await dataMapper.getTypesList();
            res.render("types", { types })
        } catch(error) {
            res.status(500).send("Erreur avec notre base de données");
        } 
    }
};

module.exports = mainController;