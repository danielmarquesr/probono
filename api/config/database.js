const database = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'database_development',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: '0',
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'database_test',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: '0',
  },
  production: {
    username: 'postgres',
    password: 'postgres',
    database: 'database_production',
    host: 'db',
    dialect: 'postgres',
    operatorsAliases: '0',
  },
};

module.exports = database;
