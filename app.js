// Opening comment
const moneySpan = document.getElementById("spnMoneyValue")
let moneyValue = 0

const Materials = {
    0: "None",
    1: "Grass",
    2: "Wood",
    3: "Stone",
    4: "Copper",
    5: "Bronze",
    6: "Iron",
    7: "Silver",
    8: "Steel",
    9: "Hardened Steel",
    10: "Elven Steel",
    11: "Damask",
    12: "Dragonyte",
    13: "Heaven Steel",
    14: "Heaven Damask",
    15: "Universium"
}

const Qualities = {
    0: "None",
    1: "Broken",
    2: "Common",
    3: "Uncommon",
    4: "Improved",
    5: "Rare",
    6: "Epic",
    7: "Elite",
    8: "Legendary",
    9: "Mythical",
    10: "Divine",
    11: "Artifact",
    12: "Heroic",
    13: "Eternal",
    14: "Unreal",
    15: "Universal"
}

const Tempers = {
    0: "None",
    1: "Raw",
    2: "Substantard",
    3: "Standart",
    4: "Tempered",
    5: "Hardened",
    6: "High-end",
    7: "Rare Earth",
    8: "Ancient",
    9: "Corrosion-resistant",
    10: "Doped",
    11: "Dragon Temper",
    12: "Heaven Temper",
    13: "Eternal Temper",
    14: "Divine Temper",
    15: "Flawless"
}

const Balances = {
    0: "None",
    1: "Unchecked",
    2: "Weak",
    3: "Moderate",
    4: "Good",
    5: "Optimized",
    6: "Perfect",
    7: "Light",
    8: "Heavy",
    9: "Aerodynamic",
    10: "Master",
    11: "Elven Balance",
    12: "Dragon Balance",
    13: "Heaven Balance",
    14: "Divine Balance",
    15: "Flawless"
}

const Enchants = {
    0: "None"
}

class Item {
    constructor() {
        this.nMaterial = 0,
        this.tMaterial = Materials[0],
        this.nQuality = 0,
        this.tQuality = Qualities[0],
        this.nTemper = 0,
        this.tTemper = Tempers[0],
        this.nBalance = 0,
        this.tBalance = Balances[0],
        this.nEnchant = 0,
        this.tEnchant = Enchant[0]
    }

    getCard() {
        return `<div class="itemCard">
                    <div class="itemPerkRow">
                        <p class="numThing">[${this.nMaterial}]</p>
                        <p class="txtThing">${this.tMaterial}</p>
                    </div>
                    <div class="itemPerkRow">
                        <p class="numThing">[${this.nQuality}]</p>
                        <p class="txtThing">${this.tQuality}</p>
                    </div>
                    <div class="itemPerkRow">
                        <p class="numThing">[${this.nTemper}]</p>
                        <p class="txtThing">${this.tTemper}</p>
                    </div>
                    <div class="itemPerkRow">
                        <p class="numThing">[${this.nBalance}]</p>
                        <p class="txtThing">${this.tBalance}</p>
                    </div>
                </div>`
    }
}

function updateMoneyValue() {
    moneySpan.innerHTML = '$' + moneyValue
}

function startCraft() {
    var newItem = Item()
}

setInterval(updateMoneyValue, 100)