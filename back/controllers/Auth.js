const path = require('path');


const { _jsonError } = require("../misc");
const { giveUserHero, fetchRandomHero } = require('../models/Heroes');
const { sessionExists, getSessionUsername, createSession, removeSession } = require('../models/Sessions');
const { userExists, createUser, getUser } = require('../models/Users');

const Auth = {
    index,
    login,
    logout,
    register,
}


async function index(req, res) {
    const sessionID = req.cookies.sessionID; 
    
    // check if session is already in place
    if(await sessionExists(sessionID)) {
        req.sessionData = await getUser(getSessionUsername(sessionID));
        res.redirect("/");
    } 
    // if no session is present 
    else {
        res.sendFile(path.join(__dirname + '/../public/auth.html'));
    }
};

async function login(req, res) {
    // set new session id associated with username
    const sessionID = await createSession(req.body.username);
    // set cookie
    res.cookie("sessionID", sessionID, { maxAge: 300000 }); // 5 mins
    // send response
    res.redirect("/");
};

async function register(req, res) {
    let userData;
    // check for needed fields
    if (req.body?.password === undefined || req.body?.username === undefined) {
        res.status(404).json(_jsonError("Wrong credentials or user does not exist!"));
        return;
    }

    const { username, password } = req.body;

    if(await userExists(username)) {
        res.status(404).json(_jsonError("User alredy exists!"));
        return;
    }

    userData = await createUser(username, password);
    
    // give random hero to user
    const { id } = await getUser(username);
    // get random heroid
    const randHero = await fetchRandomHero();
    const result = await giveUserHero(id, randHero.id);


    res.json({...userData, id});
}

async function logout(req, res) {
    // get session id 
    const sessionID = req.cookies.sessionID; 
    // remove from db
    if(await removeSession(sessionID)) {
        // redirect to auth
        res.redirect("/auth");
    };
}

module.exports = Auth;