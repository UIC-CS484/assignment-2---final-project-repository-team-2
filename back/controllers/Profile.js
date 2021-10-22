const { 
    getUser, 
    createSession, 
    removeSession, 
    updateUsername, 
    getSessionUsername, 
    removeUser 
} = require("../DB");


const Profile = {
    delete_,
    getData,
    update
}

function delete_(req, res) {
    removeSession(req.cookies.sessionID);
    removeUser(req.sessionData.username);
    res.json({ redirectUrl: "/auth" });
}


function getData(req, res) {
    res.json({...req.sessionData});
}

function update(req, res) {
    const sessionID = req.cookies.sessionID;
    const { newUsername } = req.body;
    // check old vs new username to not match
    if(getSessionUsername(sessionID) === newUsername) {
        res.status(500);
        res.end();
    } 
    else {
        // update username
        updateUsername(getSessionUsername(sessionID), newUsername);
        // remove old session
        removeSession(sessionID);
        // create new session
        const newSessionID = createSession(newUsername);
        // send new session id in a cookie
        res.cookie("sessionID", newSessionID, { maxAge: 300000 }); // 5 mins

        res.json({...getUser(newUsername)});
    }
}

module.exports = Profile;