const path = require('path');

const { 
    createUser, 
    getUser, 
    getSessionUsername, 
    sessionExists, 
    createSession, 
    userExists ,
    removeSession
} = require("../DB");

const { _jsonError } = require("../misc");

const Auth = {
    index,
    login,
    logout,
    register,
}


function index(req, res) {
    const sessionID = req.cookies.sessionID; 
    
    // check if session is already in place
    if(sessionExists(sessionID)) {
        req.sessionData = getUser(getSessionUsername(sessionID));
        res.redirect("/");
    } 
    // if no session is present 
    else {
        res.sendFile(path.join(__dirname + '/../public/auth.html'));
    }
};

function login(req, res) {
    // set new session id associated with username
    const sessionID = createSession(req.body.username);
    // set cookie
    res.cookie("sessionID", sessionID, { maxAge: 300000 }); // 5 mins
    // send response
    res.redirect("/");
};

function register(req, res) {
    let userData;
    // check for needed fields
    if (req.body?.password === undefined || req.body?.username === undefined) {
        res.status(404).json(_jsonError("Wrong credentials or user does not exist!"));
        return;
    }

    const { username, password } = req.body;

    if(userExists(username)) {
        res.status(404).json(_jsonError("User alredy exists!"));
        return;
    }

    userData = createUser(username, password);

    res.json(userData);
}

function logout(req, res) {
    // get session id 
    const sessionID = req.cookies.sessionID; 
    // remove from db
    removeSession(sessionID);
    // redirect to auth
    res.redirect("/auth");
}

module.exports = Auth;