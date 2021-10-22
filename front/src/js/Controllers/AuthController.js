// interface
// login, logout -> sqlite + passport

import StateController from "./StateController";

const { 
    getCookie, 
    setCookie 
} = require("../Helpers/cookie");

const AuthController = (function() {
function login() {
    // setCookie("sessionID", "918827", 5);
    const username = prompt("Your Username:", "test");
    const password = prompt("Your Password:", "test");
    const data = { 
        username, 
        password 
    };

    fetch("/auth/login", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then((res) => {
        if(res.redirected === true) 
            document.location.href = res.url;
        else console.log(res);
    })
    .catch(err => console.error(err));

    // StateController.set({
    //     authenticated: true,
    // })
}

function logout() {
    document.location.href = "/auth/logout";
}

function register() {
    // get fields vals
    const username = document.getElementById("password").value;
    const password = document.getElementById("username").value;

    fetch("/auth/register", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            username,
            password
        }) // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => err.json())
    .catch(err => console.error(err));
}

return {
    login, 
    logout, 
    register
}

})();


export default AuthController;