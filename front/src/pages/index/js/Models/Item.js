const Item = {
    sellItem,
    buyItem,
    fetchRandomItems
}


async function sellItem(data) { 
    // /game/user/items/sell
    const res = await fetch("/game/user/items/sell", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
}
async function buyItem(record_id) { 
    const payload = {record_id};
    // /game/user/items/sell
    const res = await fetch("/game/user/items/buy", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const resData = await res.json();
    return resData;
}

async function fetchRandomItems(num = 3) {
    const res = await fetch(`/game/user/items/random?num=${num}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const resData = await res.json();
    return resData;
}


export { Item };