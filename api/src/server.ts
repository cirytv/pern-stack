import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors';

// db connection
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.magenta('successful database connection'));
  } catch (error) {
    console.log(colors.red.bold('error in the data base connection...'));
  }
}
connectDB();

const server = express();
server.use('/api/products', router);

export default server;
