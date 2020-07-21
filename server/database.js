var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "news-bias"
});
con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
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