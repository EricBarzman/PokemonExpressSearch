const { Client } = require('pg');
const client = new Client(process.env.PG_ULR);

client.connect();

module.exports = client;