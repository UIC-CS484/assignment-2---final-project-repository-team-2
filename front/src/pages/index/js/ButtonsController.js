import { AuthController, StateController } from "../../../js/export"
import UIController from "./UIController";

const { logout } = AuthController;



const ButtonsController = (function() {
    const BTNS = {
        logoutBtn: document.getElementById('logoutBtn'),
        updateBtn: document.getElementById('updateBtn'),
        deleteBtn: document.getElementById('deleteBtn'),
    }

    function updateBtnHandler(e) {
        const data = {
            newUsername: UIController.getUsernameInputValue()
        }

        fetch("/profile", {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(newProfileData => {
            StateController.set({ profile: newProfileData })
        })
        .catch(e => console.error(e))
    }

    function deleteBtnHandler(e) {

        e.preventDefault();

        fetch("/profile", {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })
        .then(res => res.json())
        .then(res => document.location.href = res.redirectUrl)
        .catch(e => console.error(e));
    }

    // events
    BTNS.logoutBtn.addEventListener("click", logout);
    BTNS.updateBtn.addEventListener("click", updateBtnHandler);
    BTNS.deleteBtn.addEventListener("click", deleteBtnHandler);
})();



export default ButtonsController;
