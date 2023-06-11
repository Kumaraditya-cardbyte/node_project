const express = require('express')
const app = express();
const session = require('express-session')
require('./config/MongoDBConnection')
require('./auth/auth')
const productRouter = require('./router/ProductRouter')
const passport = require('passport')
const store = require('store')
const {localStorage} = require('node-localstorage')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/product',isLoggedIn, productRouter)
app.use(require('cookie-parser')());
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','ejs')
app.set('views','./views')

function isLoggedIn(req,res,next){
    req.headers['cookie'] ? next(): res.sendStatus(401)
}

app.get('/', (req, res) => {
    const link = '<a href="/auth">Click here</a>';
    res.send(
       `Visit this page ${link}`
    ).end()
})

app.get('/fail',(req,res)=>{
    res.send("Unauthenticated user")
    res.end();
})

app.get('/auth', passport.authenticate('google', {scope: ['email', 'profile']}))

app.get('/google/auth/callback', passport.authenticate('google',{
    successRedirect: '/product/',
    failureRedirect: '/fail'
}))
app.listen(5000, () => {
    console.log("server running on 5000")
})