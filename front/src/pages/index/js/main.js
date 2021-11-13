// boostrap js
import 'bootstrap';
// css
import "core-js/stable";
import "regenerator-runtime/runtime";



import { StateController } from '../../../js/export';
import ButtonsController from './ButtonsController';
// all ui components
import UIController from './UIController';
StateController.subscribe(UIController.stateChanged, UIController);

// on bootup
// fetch items
async function bootup() {

    const profileRes = await fetch("/profile");
    const profile = await profileRes.json();
    
    const itemsRes = await fetch("/game/user/items");
    const items = await itemsRes.json();

    console.log(items);
    
    const heroesRes = await fetch("/game/user/heroes");
    const heroes = await heroesRes.json();

    StateController.set({ items, profile, heroes });
}

bootup();
