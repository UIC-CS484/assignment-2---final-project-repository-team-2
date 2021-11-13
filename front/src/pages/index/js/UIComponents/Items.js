const Items = (function() {
    const Selectors = {
        itemsContainer: document.getElementById("items-container")
    }

    const ItemsHtml = {
        singleItem: (itemData) => {
            return `
            <div class="single-item-box">
                ${Object.keys(itemData).map((key) => `<p>${key}: ${itemData[key]}</p>`).join("")}
            </div>`;
        },
        itemsContainer: (singleItemsHtmlArr) => {
            return `${singleItemsHtmlArr.join("\n")}`;
        }
    }

    function populateItems(items) {
        Selectors.itemsContainer.innerHTML = "";
        const itemsHtmlArr = items.map(item => ItemsHtml.singleItem(item));
        Selectors.itemsContainer.insertAdjacentHTML("beforeend",ItemsHtml.itemsContainer(itemsHtmlArr));
    }

    return {
        populateItems
    };
})();

export { Items };