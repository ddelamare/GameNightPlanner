import {Connection, ConnectionConfiguration, Request}  from 'tedious'
import dbConfig from '../config/config';
import { error } from 'console';

const config : ConnectionConfiguration= {
  server: dbConfig.dbServer,
  authentication: {
    type: 'default',
    options: {
      userName: dbConfig.dbUser,
      password: dbConfig.dbPass
    }
  }
} 

const connection = new Connection(config)
console.log(config)
connection.on("error", (err) => {
    console.log("connected?")
  if (err) {
    console.log(err)
  } else {
    console.log("err'");
  }
})
connection.on('connect', (err) => {
    console.log("connected?")
  if (err) {
    console.log(err)
  } else {
    executeStatement()
  }
})

function executeStatement () {
  var request = new Request("select 123, 'hello world'", (err, rowCount) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`${rowCount} rows`)
    }
    connection.close()
  })

  request.on('row', (columns) => {
    columns.forEach((column) => {
      if (column.value === null) {
        console.log('NULL')
      } else {
        console.log(column.value)
      }
    })
  })

  connection.execSql(request)
}

export default function init() {
    connection.connect();
}