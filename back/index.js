// TODO: Place localstrategy somewhere else
const LocalStrategy = require('passport-local').Strategy
const cookieParser = require('cookie-parser');
const passport = require('passport');
const express = require('express');
const cors = require('cors');
const path = require('path');

// Middlewares
const { 
    SessionMiddleware
} = require('./middlewares');

// Controllers
const {
    Auth,
    Profile
} = require("./controllers/export");

// DB
const { 
    userExists, 
    checkPass,
    getUser,
} = require('./DB');


// create express instance
const app = express()
const port = 3000

// CORS
app.use(cors())
// cookie
app.use(cookieParser());
// json
app.use(express.json())
// passport
app.use(passport.initialize());

// check auth form middleware
passport.use(new LocalStrategy(
    (username, password, done) => {
        // done = done.bind(this, null)
        // check user
        if(!userExists(username)) return done(null, false);

        console.log("USER", getUser(username));
        // check pass
        // return done(checkPass(username, password))

        return checkPass(username, password) === true 
            ? done(null, true) 
            : done(null, false);
     }
))

// AUTH
    // login
    app.post('/auth/login', passport.authenticate('local', { session:false }), Auth.login);
    // register
    app.post('/auth/register', Auth.register);
    // logout
    app.get('/auth/logout', Auth.logout);
    // login/register page
    app.get('/auth', Auth.index);

// PROFILE
    // delete profile
    app.delete('/profile', SessionMiddleware, Profile.delete_);
    // get profile
    app.get('/profile', SessionMiddleware, Profile.getData);
    // update profile
    app.put('/profile', SessionMiddleware, Profile.update);

// Home 
app.get('/', SessionMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// For serving static files 
app.use(express.static(path.join(__dirname, 'public')));

// 404 redirect
app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});