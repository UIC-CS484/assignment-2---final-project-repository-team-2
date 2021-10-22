
class UIController {
    constructor() {
        this.elements = {
            usernameInput: document.getElementById("usernameInput")
        }
    }

    setUsername(str) {
        this.elements.usernameInput.value = str;
    }

    getUsernameInputValue() {
        return this.elements.usernameInput.value;
    }

    stateChanged({ profile }) {
        this.setUsername(profile.username);
    }

}


export default new UIController();