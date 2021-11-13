const { DBConfig, allQ, showAllRows, runQ } = require("../DB");
const { _jsonError } = require("../misc");
const { fetchUserHeroes, fetchHero, updateUserHero } = require("../models/Heroes");
const { fetchUserItemsIds, fetchItem, fetchRandomItem } = require("../models/Items");

const Game = {
    getUserItems,
    getUserHeroes,

    sendUserHero
}

async function getUserItems(req, res) {
    const fetchRes = await fetchUserItemsIds(req.sessionData.id);
    // const fetchRes = await fetchUserItemsIds(1);
    if(!fetchRes.success) res.json(_jsonError("Db issue!"));
    const { data } = fetchRes;
    const itemsData = await Promise.all(data.map(async ({ item_id }) => {
        const itemData = await fetchItem(item_id);
        return {
            ...itemData
        }
    }));
    
    res.json(itemsData);
}

async function saveUserItem(user_id, item_id) {
    const saveItemQuery = DBConfig.items.queries.insert(user_id, item_id);
    const saveQRes = await runQ(saveItemQuery);

    if(!saveQRes.success) console.log(saveQRes.err);
    // TODO return result of query
    return true;
}

async function getUserHeroes(req, res) {

    const fetchRes = await fetchUserHeroes(req.sessionData.id);
    // const fetchRes = await fetchUserHeroes(1);

    if(!fetchRes.success) res.json(_jsonError("Db issue!"));

    const { data } = fetchRes;
    console.log(data);
    const heroesData = await Promise.all(data.map(async ({ id, hero_id, is_available }) => {
        const heroData = await fetchHero(hero_id);
        return {
            ...heroData,
            is_available,
            hero_record_id: id
        }
    }));
    
    res.json(heroesData);
}   

async function sendUserHero(req, res) {
    // helper
    const generateRandNum = (min, max) => Math.floor(Math.random() * max) + min;
    // TODO Get user_id from req.sessionData
    const { user_id, hero_record_id } = req.body;
    // update hero record using hero model
    // hero is in adventure
    let uptRes = await updateUserHero(user_id, hero_record_id, 0);
    // TODO Check uptRes for errors

    // find some item or no?
    const bounty_data = { item: null };
    // if(generateRandNum(0, 101) > 50) {
    const fetchedItem = await fetchRandomItem();
    console.log(fetchedItem);
    bounty_data.item = fetchedItem;
    // update user items with this new item
    const itemSaved = await saveUserItem(user_id, fetchedItem.id);
    // TODO itemSaved error check
    // } 
    // hero finished adventure
    uptRes = await updateUserHero(user_id, hero_record_id, 1);
    // TODO Check uptRes for errors
    
    res.json(bounty_data);

    showAllRows("items");
}
  

module.exports = Game;