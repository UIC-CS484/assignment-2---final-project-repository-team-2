const crypto = require("crypto");

const db = {
    users: {
    },
    sessions: {
    }
}

// User Model
function updateUsername(oldUsername, newUsername) {
    db.users[newUsername] = {...db.users[oldUsername]};
    delete db.users[oldUsername];
}

function removeUser(username) {
    delete db.users[username];
}

function getUser(username) {
    return db.users.hasOwnProperty(username) ? { username: username, password: db.users[username].password } : null;
}

function userExists(username) {
    return getUser(username) !== null;
}

function createUser(username, pass) {
    db.users[username] = {
        password: hashPass(pass)
    };

    return {
        username,
        password: db.users[username].password
    };
}

// Auth Model
function checkPass(username, pass) {
    if( hashPass(pass) === getUser(username).password ) 
        return true;

    return false;
}

function hashPass(pass) {
    return crypto.createHash("sha256").update(pass).digest('hex');
}

// Sessions Model
function sessionExists(sessionID) {
    return db.sessions.hasOwnProperty(sessionID);
}

function getSessionUsername(sessionID) {
    return sessionExists(sessionID) === true ? db.sessions[sessionID].username : null;
}

function createSession(username) {
    // TODO: HIDE SALT
    const salt = "PeakyBlinders";
    const saltedUsername = `${salt}${username}`;
    const sessionID = crypto.createHash("sha256").update(saltedUsername).digest('hex');

    db.sessions[sessionID] = {
        username,
        expires: "to implement" 
    };

    return sessionID;
}

function removeSession(sessionID) {
    delete db.sessions[sessionID];
}



const dbInterface = {
    getUser,
    userExists,
    createUser,
    updateUsername,
    removeUser,

    checkPass,
    hashPass,

    sessionExists,
    getSessionUsername,
    createSession,
    removeSession,

    db
}

module.exports = dbInterface