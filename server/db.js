const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'zedricivan04',
  host: 'localhost',
  root: 5432,
  database: 'signup',
});

module.exports = pool;
