// Create the connection to the database and export to be used by the O.R.M.
var mysql = require('mysql');

var connection;

    if (process.env.JAWSBD_URL) {
        connection = mysql.createConnection(process.env.JAWSBD_URL);
    } else {
        mysql.createConnection({
            port: 3306,
            host: 'localhost',
            user: 'root',
            password: 'monalisa79',
            database: 'burgers_db'
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
