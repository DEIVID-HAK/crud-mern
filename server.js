require('dotenv').config()
const express = require('express')
const connectDB = require('./db/mongodb')
const { appconfig, db } = require('./config')

const app = express()

async function startServer () {
  try {
    await connectDB(db)
  } catch (error) {
    console.error('No se pudo conectar a MongoDB:', error.message)
    console.error('Verifica que MongoDB esté iniciado y que db_host/db_port/db_name en .env sean correctos.')
    process.exit(1)
  }

  app.listen(appconfig.port, () => {
    console.log(`Servidor escuchando en el puerto ${appconfig.port}`)
  })
}

startServer()
