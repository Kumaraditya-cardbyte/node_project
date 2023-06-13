const express = require('express')
const app = express();
const session = require('express-session')
require('./config/MongoDBConnection')
const pgPool = require("./db/pgWrapper");
const tokenDB = require("./db/tokenDB")(pgPool);
const userDB = require("./db/userDB")(pgPool);
const oAuthService = require("./auth/tokenService")(userDB, tokenDB);
const OAuth2Server = require("node-oauth2-server");

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.oauth = new OAuth2Server({
    model: oAuthService,
    grants: ["password"],
    debug: true,
    client_id: 'aditya',
    requireClientAuthentication: {password: false}
});

const authenticator = require("./auth/authenticator")(userDB);
const authRoutes = require("./router/AuthRouter")(express.Router(), app, authenticator);
const productRoutes = require("./router/ProductRouter")(express.Router(),app);

var allowJson = function(req, res, next) {
    if (req.is('json'))
        req.headers['content-type'] = 'application/x-www-form-urlencoded';

    next();
};
app.use('/oauth/token',allowJson,app.oauth.grant())
app.use("/auth", authRoutes);
app.use("/product",productRoutes)

app.listen(8080, () => {
    console.log("server running on 8080")
})