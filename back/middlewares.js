const { sessionExists, getSessionUsername } = require("./models/Sessions");
const { getUser } = require("./models/Users");


// check session
async function SessionMiddleware(req, res, next) {
    const sessionID = req.cookies.sessionID;

    if(!sessionID) {
        res.redirect("/auth");
    } 
    else {
        // if such sessionid DO EXISTS
        const doesSessionExist = await sessionExists(sessionID);

        if(doesSessionExist) {
            // append user data to req
            const sessionUsername = await getSessionUsername(sessionID);

            req.sessionData = await getUser(sessionUsername);

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