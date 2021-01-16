// connect to postgesql
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'react_gallery', // database name (this will change)
    host: 'localhost', // where to find the database
    port: 5432,        // port for finding the database
    max: 10,           // max number of connections for the pool
    idleTimeoutMillis: 30000, // 30 seconds before timeout/cancel query
});

// listeners for troubleshooting
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;