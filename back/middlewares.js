const { 
    getSessionUsername,
    sessionExists, 
    getUser, 
 } = require("./DB");

// check session
function SessionMiddleware(req, res, next) {
    const sessionID = req.cookies.sessionID;

    if(!sessionID) {
        res.redirect("/auth");
    } 
    else {
        // if such sessionid DO EXISTS
        if(sessionExists(sessionID)) {
            // append user data to req
            req.sessionData = getUser(getSessionUsername(sessionID));
            next();
        } // if no such sessionid 
        else {
            res.redirect("/auth");
        }
    }
}

module.exports = {
    SessionMiddleware
}