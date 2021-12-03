import { StateController } from "../../../../js/export";

import { Heroes } from "./Components/Heroes";
import { Items } from "./Components/Items";
import { Profile } from "./Components/Profile";

class UIController {
    // reload
    reload() {
        const promisesArr = [ 
            fetch("/profile"), 
            fetch("/game/user/items"), 
            fetch("/game/user/heroes") 
        ];

        Promise.all(promisesArr)
            .then(res => Promise.all(res.map(r => r.json())))
            .then(resJson => {
                StateController.set({ items: resJson[1], profile: resJson[0], heroes: resJson[2] });
            })
            .catch((err) => console.error(err));
    }
    // refetch tools
    refetchHeroes() {
        fetch("/game/user/heroes")
            .then(res => res.json())
            .then(heroesData => {
                StateController.set({heroes: heroesData});
            });
    }

    refetchItems() {
        fetch("/game/user/items")
            .then(res => res.json())
            .then(itemsData => {
                StateController.set({items: itemsData});
            });
    }

    refetchProfile() {
        fetch("/profile")
            .then(res => res.json())
            .then(profileData => {
                StateController.set({profile: profileData});
            });
    }


    // main stage changed handler
    stateChanged({ profile, items, heroes }) {
        items && this.itemsHandler(items);
        profile && this.profileHandler(profile)
        heroes && this.heroesHandler(heroes);
    }

    // Handlers for state change
    profileHandler(profile) {
        Profile.display(profile);
        Profile.setUsername(profile.username)
    }

    itemsHandler(items) {
        Items.displayItems(items);
    }

    heroesHandler(heroes) {
        /**
         * struct {
         *    image: str,
         *    name: str
         * }
         */
        Heroes.display(heroes);
    }

}


export default new UIController();