import { config } from 'dotenv';
import { Sequelize } from 'sequelize';


config();

const DB_HOST=process.env.DB_HOST;
const DB_USER=process.env.DB_USER;
const DB_PASSWORD=process.env.DB_PASSWORD;
const DB_NAME=process.env.DB_NAME;

const sequelizeConnection = new Sequelize({
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  dialect: 'mysql',
});

export default sequelizeConnection;