import "core-js/stable";
import "regenerator-runtime/runtime";

// TODO: 
// Send, info, sell [DONE!] 
// Trader, buy, claim reward, raspberry

import Core from '../../../js/Core';

import { Loader, StateController } from '../../../js/export';
import ActionsController from './Actions/ActionsController';
import { ModalProcedures } from "./UI/Components/ModalProcedures";
// all ui components
import UIController from './UI/UIController';
StateController.subscribe(UIController.stateChanged, UIController);

// on bootup
// fetch items
(async function bootup() {
    Core.load();
    // all fetch promises
    UIController.reload();
    // welcome message if the user is the first time in the game
    if(localStorage.getItem('first_time') === null) {
        ModalProcedures.showWelcomeMessage();
        localStorage.setItem('first_time', "false");
    }
})();
