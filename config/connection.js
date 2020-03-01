'use strict';

const mysql = require(`mysql`);

const connection = mysql.createConnection({
  host: `localhost`,
  port: 3306,
  user: `root`,
  password: `testing123`,
  database: `burgers_db`
});

connection.connect(err => {
  if (err) {
    console.log(`Error connecting`, err.stack);
    return;
  }
  console.log(`Connected with id ${connection.threadId}`);
});

module.exports = connection;
