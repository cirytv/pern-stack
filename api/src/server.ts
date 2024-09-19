import express from 'express';
import router from './router';
import db from './config/db';

// db connection
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log('success connection');
  } catch (error) {
    console.log(error);
    console.log('error...');
  }
}
connectDB();

const server = express();
server.use('/api/products', router);

export default server;
