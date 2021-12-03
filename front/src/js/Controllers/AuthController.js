// interface
// login, logout -> sqlite + passport

import { Modal } from "../export";

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
    .then((data) => {
        // TODO Improve this 
        if(data.error) {
            Modal.clearModal();
            Modal.populateModal("Error", `Server responded with: <u>${data.error}</u>`, "");
            Modal.show();
        } else {
            Modal.clearModal();
            Modal.populateModal("Notification", "You have been successfully registered!", "");
            Modal.show();
        }
    })
    .catch((err) => err.json());


}

return {
    login, 
    logout, 
    register
}

})();


export default AuthController;