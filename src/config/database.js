import Sequelize from 'sequelize';

const sequelize = new Sequelize('hoaxify', 'my-db-user', 'pass', {
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});

export { sequelize };
