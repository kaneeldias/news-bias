const express = require('express');
const cors = require('cors')
const app = express();
const session = require('express-session');
const environment = require("./environment.js");


app.use(express.json())    // <==== parse request body as JSON
app.use(session({secret: 'secret', saveUninitialized: true, resave: true}));

app.use(cors({origin: [
    environment.clientUrl
  ], credentials: true}));

require('./article/article.js')(app);
require('./auth/auth.js')(app);

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
