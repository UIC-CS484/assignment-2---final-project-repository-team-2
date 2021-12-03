import { Hero } from "../../Models/Hero";
import { Item } from "../../Models/Item";
import { Heroes as HeroUI } from "./Heroes";
import { Items } from "./Items";
import { ModalProcedures } from "./ModalProcedures";

const Trader = (function() {

    async function traderReloadBtnHandler(e) {
        // refetch items
        const randomItemsData = await Item.fetchRandomItems(3);
        const randomHeroesData = await Hero.fetchRandomHeroes(3);
        // update the trader window items
        $("#traderItems").html( randomItemsData.map(item => Items.ItemsHtml.itemTraderHTML(item)).join('') );
        $("#traderHeroes").html( randomHeroesData.map((heroData) => HeroUI.HeroHtml.heroTraderHTML(heroData)).join("") );
    }


    async function traderBtnHandler(e) {
        e.preventDefault();

        ModalProcedures.showTraderWindow();
    }


    return {
        traderReloadBtnHandler,
        traderBtnHandler
    };
})();

export { Trader };