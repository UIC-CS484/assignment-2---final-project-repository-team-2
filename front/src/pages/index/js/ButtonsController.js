import { AuthController, Loader, Modal, StateController } from "../../../js/export"
import UIController from "./UIController";

const { logout } = AuthController;



const ButtonsController = (function() {
    const BTNS = {
        logoutBtn: document.getElementById('logoutBtn'),
        updateBtn: document.getElementById('updateBtn'),
        deleteBtn: document.getElementById('deleteBtn'),
        sendHeroBtn: document.getElementById('sendHeroBtn'),
    }

    // user related 
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

    // game related
    const sendHeroScenario = {
        heroNameSelected: async (e) => {
            // get user_id
            const { profile } = StateController.get();
            const user_id = profile.id;
            // get hero_id
            const hero_record_id = $(e.target).data("record_id");
            // construct data
            const data = {
                user_id, hero_record_id
            }
            // send to back the heroName + hero_id to back
            const sendHeroRes = await fetch("/game/user/heroes/send", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const adventureResult = await sendHeroRes.json();
            // TODO show item to user later
            // close modal + reload items
            Modal.hideAndClear();
            // TODO improve into separate controller for calls
            const itemsRes = await fetch("/game/user/items");
            const items = await itemsRes.json();
            StateController.set({items});
        }
    }

    function sendHeroHandler(e) {
        // Get Heroes
        const { heroes } = StateController.get();
        console.log(heroes);
        // Prepare Modal
        Modal.clearModal();
        const singleHeroHTML = (hero) => `
        <div class="col-lg-3">
            <p class="hero-name-p" data-record_id="${hero.hero_record_id}">${hero.name}</p>
        </div>`;
        const title = "Select Hero to Send";
        const contentHtml = `
            <div class="row">
                ${heroes.map(data => singleHeroHTML(data)).join("")}
            </div>
        `;
        // const btnsHtml = `<button>Send</button>`;


        // Show Modal
        Modal.populateModal(title, contentHtml, ``);
        Modal.show();
    }

    // btn events
    BTNS.logoutBtn.addEventListener("click", logout);
    BTNS.updateBtn.addEventListener("click", updateBtnHandler);
    BTNS.deleteBtn.addEventListener("click", deleteBtnHandler);
    BTNS.sendHeroBtn.addEventListener("click", sendHeroHandler);

    // future events
    // TODO: improve
    $("body").on('click', ".hero-name-p", sendHeroScenario.heroNameSelected);
})();



export default ButtonsController;
