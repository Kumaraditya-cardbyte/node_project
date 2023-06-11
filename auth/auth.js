const GoogleStrategy = require('passport-google-oauth2').Strategy;
const {LocalStorage} = require('node-localstorage')


const passport = require('passport')
const clientId = '973494226749-1hrgtpt6hmu1ljvdbte6s29kgh7mbfhm.apps.googleusercontent.com'
const clientSecret = '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'
const callBackUrl = 'http://localhost:5000/google/auth/callback'


passport.use(new GoogleStrategy({
    clientID: clientId, clientSecret: clientSecret, callbackURL: callBackUrl, passReqToCallback: true
}, function (request, accessToken, refreshToken, profile, done) {
    return done(null, profile)
}));

passport.serializeUser(function (user, done) {
    console.log("serializing the user data")
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    console.log("deserializing the user data")
    done(null, user)
})