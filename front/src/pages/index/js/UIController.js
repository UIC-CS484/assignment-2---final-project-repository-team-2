import { Items } from "./UIComponents/Items";

class UIController {
    constructor() {
        this.elements = {
            usernameInput: document.getElementById("usernameInput"),
            heroesContainer: document.getElementById("heroes-container")
        }
    }

    // User Related Section
    setUsername(str) {
        this.elements.usernameInput.value = str;
    }
    getUsernameInputValue() {
        return this.elements.usernameInput.value;
    }
    // profile
    displayProfileInfo({username}) {
        document.getElementById(
            'WelcomeHeader'
        ).textContent = `Welcome! \n${username}`
    }
    // heroes
    displayHeroes(heroes) {
        console.log(heroes)
        const singleHeroHTML = (hero) => `
        <div class="single-hero-box col-lg-3">
            <img src='${hero.image}' />
            <p>${hero.name}</p>
            <small>${hero.is_available ? "Resting at home..." : "Having an adventure..."}</small>
        </div>`;
        // clear
        this.elements.heroesContainer.innerHTML = "";
        // display
        this.elements.heroesContainer.insertAdjacentHTML("beforeend", heroes.map(data => singleHeroHTML(data)).join(""));
    }



    // main stage changed handler
    stateChanged({ profile, items, heroes }) {
        items && this.itemsHandler(items);
        profile && this.profileHandler(profile)
        heroes && this.heroesHandler(heroes);
    }

    // Handlers for state change
    profileHandler(profile) {
        console.log(profile)
        this.displayProfileInfo(profile);
        this.setUsername(profile.username)
    }

    itemsHandler(items) {
        Items.populateItems(items);
    }

    heroesHandler(heroes) {
        /**
         * struct {
         *    image: str,
         *    name: str
         * }
         */
        this.displayHeroes(heroes);
    }

}


export default new UIController();