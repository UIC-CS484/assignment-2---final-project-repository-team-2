const Profile = (function() {
    const Selectors = {
        usernameInput: document.getElementById("usernameInput"),
        moneyBtn: $("#moneyBtn")
    }

    // User Related Section
    function setUsername(str) {
        Selectors.usernameInput.value = str;
    }
    function getUsername() {
        return Selectors.usernameInput.value;
    }
    // profile
    function display({username, money}) {
        document.getElementById(
            'WelcomeHeader'
        ).textContent = `Welcome! \n${username}`;

        // render money
        Selectors.moneyBtn.html(`${money} <i class="bi bi-coin"></i>`);
    }

    return {
        display, 
        getUsername,
        setUsername
    };
})();

export { Profile };