import { AuthController, Loader, Modal, StateController } from "../../../../js/export"
import { Items as ItemsUI } from "../UI/Components/Items";
import { ModalProcedures } from "../UI/Components/ModalProcedures";
import { Trader } from "../UI/Components/Trader";
import UIController from "../UI/UIController";
import Hero from "./Controllers/Hero";
import Item from "./Controllers/Item";
import Profile from "./Controllers/Profile";




const ActionsController = (function() {
    const BTNS = {
        // Auth
        logoutBtn: document.getElementById('logoutBtn'),
        // Profile
        updateBtn: document.getElementById('updateBtn'),
        deleteBtn: document.getElementById('deleteBtn'),

        // Trader
        traderBtn: $("#traderBtn")
    }

    const FUTURE_BTNS_IDS = {
        // hero
        sendHeroBtn: "button.sendHeroBtn",
        claimHeroBtn: "button.claimHeroBtn",
        buyHeroBtn: "button.buyHeroBtn",
        addHeroBtn: "#addHeroBtn",
        // item
        showItemInfoBtn: "button.showItemInfoBtn",
        sellItemBtn: "button.sellItemBtn",
        buyItemBtn: "button.buyItemBtn",
        // trader 
        traderReloadBtn: "#reloadTraderItemsBtn"
    }

    // Auth events
    BTNS.logoutBtn.addEventListener("click", AuthController.logout);
    
    // Profile events
    BTNS.updateBtn.addEventListener("click", Profile.updateBtnHandler);
    BTNS.deleteBtn.addEventListener("click", Profile.deleteBtnHandler);

    // Hero 
    $("body").on('click', FUTURE_BTNS_IDS.sendHeroBtn, Hero.sendHeroHandler);
    $("body").on('click', FUTURE_BTNS_IDS.claimHeroBtn, Hero.claimHeroHandler);
    $("body").on("click", FUTURE_BTNS_IDS.buyHeroBtn, Hero.buyHeroHandler)
    $("body").on("click", FUTURE_BTNS_IDS.addHeroBtn, Hero.addHeroHandler)
    

    // Items
    $("body").on('click', FUTURE_BTNS_IDS.showItemInfoBtn, ItemsUI.showItemInfo);
    $("body").on('click', FUTURE_BTNS_IDS.sellItemBtn, Item.sellItemHandler);
    $("body").on('click', FUTURE_BTNS_IDS.buyItemBtn, Item.buyItemHandler);

    
    // Trader 
    BTNS.traderBtn.on("click", Trader.traderBtnHandler);
    $("body").on("click", FUTURE_BTNS_IDS.traderReloadBtn, Trader.traderReloadBtnHandler)
    
    
    // MODAL PROCEDURES
    $("body").on("click", "#okayBtn", Modal.hideAndClear);
})();



export default ActionsController;
