import { Modal } from "../../../../../js/export";
import { Hero } from "../../Models/Hero";
import { Item } from "../../Models/Item";
import { Heroes as HeroUI } from "./Heroes";
import { Items as ItemsUI } from "./Items";

// Modals for actions
export const ModalProcedures = (function() {

    function showWelcomeMessage() {
        Modal.clearModal();
        const ModalContent = `
            <h3>Helpful Tips</h3>
            <p class="mt-3 mb-0"><i class="bi bi-box-arrow-left" style="font-size:1.6em"></i> for logout.</p>
            <p class="mb-0"><i class="bi bi-wrench" style="font-size:1.6em"></i> to edit your username.</p>
            <p class="mb-0"><i class="bi bi-trash" style="font-size:1.6em"></i> to delete your account.</p>
            <p class="mb-0"><i class="bi bi-coin" style="font-size:1.6em"></i> as a local currency.</p>
            <p class="mb-0"><i class="bi bi-info-circle" style="font-size:1.6em"></i> for item information.</p>
            <p class="mb-0 mt-5">Go ahead and have an adventure with your Hero!</p>
        
        `;
        const ModalButtons = ``;
        Modal.populateModal("Welcome User!", ModalContent, ModalButtons);
        Modal.show();
    }

    function HeroClaimed(BountyData) {
        function __foundGoldHTML(gold) {
            return `<p>Your hero brought ${gold} <i class="bi bi-coin"></i></p>`
        }
        
        const { item, gold } = BountyData;
        const ModalContent = [];
        const ModalButtons = `<button class="btn btn-warning" id="okayBtn">Okay</button>`;
        const ModalTitle = "Your Bounty";

        // Modal Okay handler
        
        if(gold) {
            ModalContent.push(__foundGoldHTML(gold));
        }

        if(item) {
            ModalContent.push(ItemsUI.ItemsHtml.singleItem(item, true));
        }

        if(!item && !gold) {
            ModalContent.push(`<h4>Your Hero didn't bring anything...<h4>`);
        }

        Modal.clearModal();
        Modal.populateModal(ModalTitle, ModalContent.join(''), ModalButtons);
        Modal.show();
    }

    function ItemInfo(Item) {
        let ModalTitle, ModalContent, ModalButtons;

        ModalTitle = Item.name;
        ModalContent = ItemsUI.ItemsHtml.itemInfoHTML(Item);
        ModalButtons = `<button class="btn btn-warning" id="okayBtn">Okay</button>`;

        Modal.clearModal();
        Modal.populateModal(ModalTitle, ModalContent, ModalButtons);
        Modal.show();
    }

    async function showTraderWindow() {
        let ModalTitle, ModalContent, ModalButtons;

        ModalTitle = `<div class="d-flex flex-row">Trader <i style="margin-left: 10px" id="reloadTraderItemsBtn" class="bi bi-arrow-clockwise"></i></div>`;
        // pull 3 random items from back
        // data -> []
        const randomItemsData = await Item.fetchRandomItems(3);
        const randomHeroesData = await Hero.fetchRandomHeroes(3);
        const itemsHTML = randomItemsData.map((itemData) => ItemsUI.ItemsHtml.itemTraderHTML(itemData)).join("");
        const heroesHTML = randomHeroesData.map((heroData) => HeroUI.HeroHtml.heroTraderHTML(heroData)).join("");
        ModalContent = `
            <div id="traderHeroes" class="row">${heroesHTML}</div>
            <div id="traderItems" class="row mt-3">${itemsHTML}</div>
        `;
        ModalButtons = `<button class="btn btn-warning" id="okayBtn">Okay</button>`;

        Modal.clearModal();
        Modal.populateModal(ModalTitle, ModalContent, ModalButtons);
        Modal.show();
    }


    async function showErrorMessage(msg) {
        const modalIsOpened = Modal.isOpened();
        // populate modal like error
        Modal.clearModal();
        Modal.populateModal(`Error`, `${msg}`, "", false);
        // show modal if not opened
        !modalIsOpened && Modal.show();
        // remove modal
        setTimeout(Modal.hideAndClear, 1500);
    }


    return {
        HeroClaimed,
        ItemInfo,
        showTraderWindow,
        showErrorMessage,
        showWelcomeMessage
    }
})();