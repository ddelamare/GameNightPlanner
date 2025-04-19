import {Connection, ConnectionConfiguration, Request}  from 'tedious'
import dbConfig from '../config/config';
import { error } from 'console';
import sql from 'mssql'

const sqlConfig : sql.config = {
  server: dbConfig.dbServer,
  authentication: {
    type: 'default',
    options: {
      userName: dbConfig.dbUser,
      password: dbConfig.dbPass
    }
  }
}; 

// Sets us a shared connection pool
const poolPromise = new sql.ConnectionPool(sqlConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

// Grabs a connection from the pool
export const getConnection = async () => (await poolPromise)?.request();

