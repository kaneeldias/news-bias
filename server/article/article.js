const database = require("../database.js");

module.exports = function(app){

    app.get('/fetch', function (req, res) {
        sql = "SELECT url, headline, content FROM articles ORDER BY RAND() LIMIT 1";
        try {
            database.runSelectQuery(sql, function(result){
                let article = {
                    url: result[0].url,
                    title: result[0].headline,
                    content: result[0].content
                }
                res.status(200).send(article);
            });
        }
        catch(error) {
            console.log(error);
            return res.status(500).send("Error retrieving article");
        }
    })

    app.post('/rate', function (req, res) {
        let email = req.session.info.email;

        if(req.body.rating.category) {
            let sql = "INSERT INTO category_ratings (url, email, `domain`) VALUES (?, ?, ?)"
            let values = [req.body.url, email, req.body.rating.category];

            try {
                database.runInsertQuery(sql, values);
            }
            catch (error) {
                console.log(error);
                return res.status(500).send("Error inserting category rating");
            }
        }

        if(req.body.rating.polarity || req.body.rating.polarity === 0) {
            let sql = "INSERT INTO polarity_ratings (url, email, polarity) VALUES (?, ?, ?)";
            let values = [req.body.url, email, req.body.rating.polarity];

            try {
                database.runInsertQuery(sql, values);
            }
            catch (error) {
                console.log(error);
                return res.status(500).send("Error inserting category rating");
            }
        }

        res.status(200).send("Rating inserted");
    })
}