const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => {

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        setting: {
          client: 'postgres',
          host: config.host,
          port: config.port,
          database: config.database,
          username: config.user,
          password: config.password
        },
        option: {
          ssl: false
        }
      }
    }
  }
};