// connect to postgesql
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'react_gallery',
    host: 'localhost', 
    port: 5432,        
    max: 10,           
    idleTimeoutMillis: 30000
});

// listeners for troubleshooting
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;