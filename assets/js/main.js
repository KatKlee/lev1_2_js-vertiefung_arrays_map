let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

/* Write all Drinks in Uppercase */
const drinksUpper = getraenke.map(words => { return words.toUpperCase() })
console.log(drinksUpper)