
module.exports = {
    client: 'postgresql',
    connection: {
      database: 'doc-jobs',
      user:     'postgres',
      password: '951753'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  

};
