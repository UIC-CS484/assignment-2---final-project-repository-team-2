import { StateController } from "../../../../../js/export";
import { ModalProcedures } from "./ModalProcedures";

const Items = (function() {
    const Selectors = {
        itemsContainer: document.getElementById("items-container")
    }

    const ItemsHtml = {
        singleItem: ({image, story, rarity, price, record_id}, minified = false, local_arr_idx = null) => {
            if(minified) {
                return `<div class="col-lg-4 col-sm-6 mb-4">
                <div class="${rarity} single-item-box p-4">
                    <img src='${image}' class="img-thumbnail"/>
                </div>
            </div>`;
            }
            return `
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="${rarity} single-item-box p-4">
                    <img src='${image}' class="img-thumbnail"/>
                    <p><i>${story ? story.substr(0, 50): "no story"}...</i></p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-warning showItemInfoBtn" data-local_arr_idx="${local_arr_idx}">
                            <i class="bi bi-info-circle"></i>
                        </button>
                        <button class="btn btn-warning sellItemBtn" data-local_arr_idx="${local_arr_idx}"  title="Sell">
                            ${price} <i class="bi bi-coin"></i>
                        </button>
                    </div>
                </div>
            </div>`;
        },
        itemInfoHTML: ({ image, desc, rarity, price, record_id }) => {
            return ` 
                <div class="row p-4">
                    <div class="col-md-4 d-flex justify-content-center align-items-center">
                        <img src='${image}' class="img-thumbnail"/>
                    </div>
                    <div class="col-md-8 d-flex justify-content-center flex-column">
                        <p><i>${desc}...</i></p>
                        <p>Rarity: ${rarity} </br> Price: ${price} <i class="bi bi-coin"></i></p>
                    </div>
                </div>`;
        },
        itemTraderHTML: ({ image, desc, rarity, price, id }) => {
            const record_id = id;
            return ` 
                <div class="col-md-4 d-flex flex-column justify-content-center">
                    <img src='${image}' class="img-thumbnail"/>
                    <p>Rarity: ${rarity} </br> Price: ${price} <i class="bi bi-coin"></i></p>
                    <button class="btn btn-warning buyItemBtn" data-record_id="${record_id}"><i class="bi bi-cart2"></i></button>
                </div>
            `;
        },
        itemsContainer: (singleItemsHtmlArr) => {
            return `${singleItemsHtmlArr.join("\n")}`;
        }
    }

    function showItemInfo(e) {
        // if no record_id data field on the target parent element 
        // -> take current element data field (<i> inside of <button> case)
        let local_arr_idx = 
            $($(e.target).parent()).data("local_arr_idx") === undefined
                ? $($(e.target)).data("local_arr_idx")
                : $($(e.target).parent()).data("local_arr_idx");
        // get Item from local state
        let ItemFromState = StateController.get().items[local_arr_idx];
        // show info modal for item
        ModalProcedures.ItemInfo(ItemFromState);
    }

    function displayItems(items) {
        Selectors.itemsContainer.innerHTML = "";
        const itemsHtmlArr = items.map((item, idx) => {
            return ItemsHtml.singleItem(item, false, idx);
        });
        Selectors.itemsContainer.insertAdjacentHTML("beforeend",ItemsHtml.itemsContainer(itemsHtmlArr));
    }

    return {
        ItemsHtml,
        displayItems,
        showItemInfo
    };
})();

export { Items };