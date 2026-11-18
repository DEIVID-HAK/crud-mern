const appPort = Number(process.env.app_port || 8080)
const dbPort = Number(process.env.db_port || 27017)

if (!Number.isInteger(appPort) || appPort < 1 || appPort > 65535) {
  throw new Error('app_port debe ser un puerto válido (1-65535)')
}

if (!Number.isInteger(dbPort) || dbPort < 1 || dbPort > 65535) {
  throw new Error('db_port debe ser un puerto válido (1-65535)')
}

const config = {
  appconfig: {
    port: appPort
  },
  db: {
    host: process.env.db_host,
    port: dbPort,
    dbname: process.env.db_name
  }
}

module.exports = config
