
import { Time } from "../../../../../js/Modules/Time";
import UIController from "../UIController";


const Heroes = (function() {
    const Selectors = {
        heroesContainer: document.getElementById("heroes-container")
    }

    const HeroHtml = {
        heroTraderHTML: (hero) => {
            return `<div class="single-hero-box col-md-4">
                <div class="hero-box-inner-details">
                    <img src='${hero.image}' class="img-thumbnail"/>
                    <p>${hero.name}</p>
                </div>
                <div class="d-grid gap-2 mt-2">
                    <button class="btn btn-warning buyHeroBtn" data-hero_id="${hero.id}"><i class="bi bi-coin"></i> ${hero.price}</button>
                </div>
            </div>`;
        }
    }
    const _singleHeroHTML = (hero) => `
    <div class="single-hero-box col-lg-3 col-md-6 col-sm-12">
        <div class="hero-box-inner-details">
            <img src='${hero.image}' class="img-thumbnail"/>
            <p>${hero.name}</p>
            <small>${__statusText(hero)}</small>
        </div>
        <div class="d-grid gap-2 mt-2">
            ${_heroBtn(hero)}
        </div>
    </div>`;
    const __statusText = ({ is_available, arrivalSeconds }) => {
        if(is_available) {
            return "Resting at home...";
        } 
        else if(!is_available && Time.stillInAdventure(arrivalSeconds)) {
            return "Having an adventure...";
        } 
        else {
            return "Waiting for you...";
        }
    }
    const _heroBtn = (hero) => {
        // hero is not available && in adventure
        if( hero.is_available === 0 
            && Time.stillInAdventure(hero.arrivalSeconds)) {
            const btnID = `${hero.hero_record_id}_user_hero`;
            // set interval
            var claimSecondsChecker =
                setInterval(() => {
                    if(Time.stillInAdventure(hero.arrivalSeconds)) {
                        $(`#${btnID}`).text(`Arrives in ${Time.getRemainingSeconds(hero.arrivalSeconds)} seconds...`);
                    } else {
                        UIController.refetchHeroes();
                        clearInterval(claimSecondsChecker);
                    }
                }, 1000);

            return `<button class="btn btn-warning disabled" id="${btnID}" data-record_id="${hero.hero_record_id}" type="button">Arrives in ${Time.getRemainingSeconds(hero.arrivalSeconds)} seconds...</button>`;
        } 
        // if hero is not available and came back
        else if( hero.is_available === 0 
                 && !Time.stillInAdventure(hero.arrivalSeconds)) {
            return `<button class="btn btn-warning claimHeroBtn" data-record_id="${hero.hero_record_id}" type="button">Claim Bounty</button>`
        } 
        else {
            return ` <button class="btn btn-warning sendHeroBtn" data-record_id="${hero.hero_record_id}" type="button">Send</button>`;
        }
    }
    // Main Display Handler on state change
    function display(heroes) {  
        // clear
        Selectors.heroesContainer.innerHTML = "";
        // display
        Selectors.heroesContainer.insertAdjacentHTML("beforeend", heroes.map(data => _singleHeroHTML(data)).join(""));
        // add plus sign 
        Selectors.heroesContainer.insertAdjacentHTML("beforeend", `<div class="single-hero-box col-lg-3 col-md-6 col-sm-12" id="addHeroBtn"><div class="hero-box-inner-details h-100"><i class="bi bi-plus-square" style="font-size: 3em;color: #ffc107;"></i></div></div>`)
    }

    return {
        display,
        HeroHtml
    };
})();

export { Heroes };