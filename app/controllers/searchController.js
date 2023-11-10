const { log } = require("console");
const dataMapper = require("../dataMapper.js")

const searchController = {

    searchName : async (req, res) => {
        const name = req.query.name
        const pokemonsFound = await dataMapper.getPokemonByName(name);
        res.render("home", { pokedex : pokemonsFound })
    },

    searchType : async (req, res) => {
        const targetTypes = req.query.type
        const pokemonsFound = await dataMapper.getPokemonByTypes(targetTypes);
        res.render("home", { pokedex : pokemonsFound })
    }

}

module.exports = searchController;