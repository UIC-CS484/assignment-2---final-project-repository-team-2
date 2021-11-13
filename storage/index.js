const express = require('express');
const { _jsonError } = require('../back/misc');

const items = require('./test1');
let heroes = require('./heroes.json')

heroes = heroes.masculine.dwarf.map((imageName) => {
  return {
    name: imageName.split(".")[0],
    image: `https://www.herebetaverns.com/images/characters/dmheroes/masculine/dwarf/${imageName}`
  }
});


const app = express()
const port = 3001

// Items
app.get('/items', (req, res) => {
  // return all data shortened
  res.json(items.map((el, idx) => {
        const { name, type, rarity, image } = el;
        return {
            id: idx,
            name, type, rarity, image
        }
  }));
});

app.get('/items/random', (req, res) => {
  // generate idx
  const idx = generateRandNum(0, items.length - 1);
  console.log(idx);
  res.json({...items[idx], id: idx});
})

app.get('/items/:id', (req, res) => {
    let idx = -1;
    if(req.params.id) idx = parseInt(req.params.id);
    idx = idx > items.length - 1 ? -1 : idx;
    idx = idx < 0 ? -1 : idx;

    res.json(idx === -1 ? _jsonError("No such item in the storage!") : items[idx]);
})



// Heroes
app.get('/heroes', (req, res) => {
  // return all dwarf names
  res.json(heroes);
});

// Heroes
app.get('/heroes/random', (req, res) => {
  // return all dwarf names
  const idx = generateRandNum(0, heroes.length - 1);
  res.json({...heroes[idx], id: idx});
});

app.get('/heroes/:id', (req, res) => {
  // return dwarf particular name 
  res.json(heroes[req.params.id]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



// helper
function generateRandNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}
