const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: '35.224.62.38',
  database: 'postgres',
  password: 'LGm2z.Ye>ISt@zoy',
  port: 5432,
});

module.exports = pool;