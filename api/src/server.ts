import express from 'express'
import colors from 'colors'
import router from './router.ts'
import db from './config/db.ts'

// Conectar a base de datos
async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    console.log(colors.blue('successful database connection'))
  } catch (error) {
    // console.log(error)
    console.log(colors.red.bold('error in the data base connection...'))
  }
}
connectDB()

// Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json()) // habilita lectura de json

server.use('/api/afiliacion', router)

export default server
