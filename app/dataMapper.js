const { log } = require('console');
const db = require('./db_client');

const dataMapper = {

    getPokemonsList : async () => {
        const sql = "SELECT * FROM pokemon"
        const result = await db.query(sql);
        return result.rows;
    },

    getTypesList : async () => {
        const sql = "SELECT * FROM type"
        const result = await db.query(sql);
        return result.rows;
    },

    getPokemonById : async (id) => {
        const sql = {
            text : `SELECT * FROM pokemon WHERE "id" = $1`,
            values : [id]
        }
        // const sql = `SELECT * FROM pokemon WHERE "id" = ${id}`
        const result = await db.query(sql);
        return result.rows[0];
    },

    getPokemonByName : async (name) => {
        const sql = `SELECT * FROM pokemon WHERE "nom" ILIKE '%${name}%'`
        // const sql = `SELECT * FROM pokemon WHERE "id" = ${id}`
        const result = await db.query(sql);
        return result.rows;
    },

    getPokemonByTypes : async (type) => {
        const sql = `SELECT p.* FROM pokemon p JOIN pokemon_type pt ON p.numero = pt.pokemon_numero JOIN type t ON t.id = pt.type_id WHERE t.name ILIKE '${type}'`;
        const result = await db.query(sql);
        return result.rows;
    },

    getPokemonTypes : async (pokeId) => {
        const sql = `SELECT * FROM type t JOIN pokemon_type pt ON t.id = pt.type_id JOIN pokemon p ON pt.pokemon_numero = p.numero WHERE p.id = ${pokeId}`;
        const result = await db.query(sql);
        return result.rows;
    },

};

module.exports = dataMapper;