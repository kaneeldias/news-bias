var mysql = require('mysql');
var environment = require("./environment.js");

var con = mysql.createConnection({
    host: environment.database.host,
    user: environment.database.user,
    password: environment.database.password,
    database: environment.database.database
});
con.connect(function(err) {
    if (err) {
        console.log(err);
    }
    else{
        console.log("Connected!");
    }
    console.log("HOST: " + environment.database.host);
});

module.exports = {
    runSelectQuery: function(sql, callback){
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            callback(result);
        });
    },

    runInsertQuery: function(sql, values){
        con.query(sql, values, function (err, result, fields) {
            if (err) throw err;
        });
    }
}