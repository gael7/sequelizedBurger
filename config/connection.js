//Code to setup the connection between Node and MySQL
var mysql      = require('mysql');
var connection;

if(process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user     : 'gael',
    password : '07G15a92',
    database : 'burger_db'
  });
}

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;