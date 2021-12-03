const Hero = {
    sendHero,
    claimHero,
    fetchRandomHeroes,
    buyHero
}

async function fetchRandomHeroes(num = 3) {
    const res = await fetch(`/game/user/heroes/random?num=${num}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const resData = await res.json();
    return resData;
}

async function sendHero(data) { 
    const res = await fetch("/game/user/heroes/send", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
}
async function claimHero(data) { 
    const res = await fetch("/game/user/heroes/claim", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
}
async function buyHero(hero_id) { 
    const payload = {hero_id};
    const res = await fetch("/game/user/heroes/buy", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const resData = await res.json();
    return resData;
}




export { Hero };