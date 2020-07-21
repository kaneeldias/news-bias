const googleAuth = require("./google_auth.js");

module.exports = function(app){

    app.post('/auth', async function (req, res) {
        let access_token;
        try {
            let data = await googleAuth.getAccessTokenFromCode(req.body.code);
            access_token = data.access_token;
        }
        catch (err){
            console.log(err);
            return res.status(500).send("Error in authentication");
        }

        let info;
        try {
            info = await googleAuth.getInfo(access_token);
        }
        catch (err){
            console.log(err);
            return res.status(500).send("Error getting info");
        }

        req.session.logged = true;
        req.session.info = {
            access_token: access_token,
            email: info.email,
            name: info.name,
            picture: info.picture
        };

        res.send(info);
    })

    app.get('/auth/check', function (req, res) {
        if (!req.session.logged) res.send(false)
        else res.send(true);
    });

    app.get('/auth/info', function (req, res) {
        res.send(req.session.info);
    });
}