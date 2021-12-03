import { Loader, Modal, StateController } from "../../../../../js/export";
import { Hero as HeroModel } from "../../Models/Hero";
import { Heroes as HeroUI } from "../../UI/Components/Heroes";
import { ModalProcedures } from "../../UI/Components/ModalProcedures";
import UIController from "../../UI/UIController";


const Hero = {
    sendHeroHandler,
    claimHeroHandler,
    buyHeroHandler,
    addHeroHandler
}

async function addHeroHandler(e) {
    // TODO: change to only heroes displayed in the window
    await ModalProcedures.showTraderWindow();
}

async function buyHeroHandler(e) {
    const hero_id = $(e.target).data("hero_id") ? $(e.target).data("hero_id") : $($(e.target).parent()).data("hero_id");
    // console.log(hero_id)
    const { success } = await HeroModel.buyHero(hero_id);
    // show error modal
    if(!success) {
        ModalProcedures.showErrorMessage("Not enough money!");
    } else {
        // TODO add flag check for buyRes
        Modal.hideAndClear();
        // reload items & profile data
        UIController.reload();
    }
  
}

async function sendHeroHandler(e) {
    // get user_id
    const { profile } = StateController.get();
    const user_id = profile.id;
    // capture hero db id
    const hero_record_id = $(e.target).data("record_id");
    // construct data
    const payload = {
        user_id, hero_record_id
    }

    // start adventure -> timestamp and so on
    // send to back the heroName + hero_id to back
    let res = await HeroModel.sendHero(payload);
    // TODO reflect success or error on front
    // UIController.show success message
    

    // reload content and update the front
    UIController.refetchHeroes();
}


async function claimHeroHandler(e) {

    
    // // get user_id
    const { profile } = StateController.get();
    const user_id = profile.id;
    // get hero_id
    const hero_record_id = $(e.target).data("record_id");
    // construct data
    const payload = {
        user_id, hero_record_id
    }
    // get data from res
    const res = await HeroModel.claimHero(payload);
    // TODO reflect error
    if(!res.success) {
        return;
    } 
    
    // res.data will contain the bounty
    ModalProcedures.HeroClaimed(res.data);

    
    // all good
    // update hero info in state
    UIController.reload();
}

export default Hero;