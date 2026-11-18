const mongoose = require('mongoose')

async function connectDB ({ host, port, dbname } = {}) {
  if (!host || !port || !dbname) {
    throw new Error('Configuración incompleta: define db_host, db_port y db_name en .env')
  }

  const uri = `mongodb://${host}:${port}/${encodeURIComponent(dbname)}`
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  console.log('MongoDB conectado')
}

module.exports = connectDB
