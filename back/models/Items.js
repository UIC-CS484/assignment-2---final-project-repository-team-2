const fetch = require('node-fetch');
const { DBConfig, allQ } = require('../DB');


const Items = {
    fetchAll,
    fetchItem,
    fetchUserItemsIds,
    fetchRandomItem
}

async function fetchAll() {
    const res = await fetch("http://localhost:3001/items");
    const data = await res.json();

    return data;
}

async function fetchItem(id) {
    const res = await fetch(`http://localhost:3001/items/${id}`);
    const data = await res.json();

    return data;
}

async function fetchRandomItem() {
    const res = await fetch(`http://localhost:3001/items/random`);
    const data = await res.json();

    return data;
}

async function fetchUserItemsIds(user_id) {
    // get all items associated with user
    const q = DBConfig.items.queries.getByUserId(user_id);
    const userItemsIds = await allQ(q);

    return userItemsIds;
}

module.exports = Items;