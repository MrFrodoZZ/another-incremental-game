// Opening comment
const moneySpan = document.querySelector("span#spnMoneyValue")
let moneyValue = 0

const Slots = {
    Material: document.querySelector("div#firstSlot div.processSlot"),
    Quality: document.querySelector("div#secondSlot div.processSlot"),
    Temper: document.querySelector("div#thirdSlot div.processSlot"),
    Balance: document.querySelector("div#fourthSlot div.processSlot"),
    Enchant: document.querySelector("div#fifthSlot div.processSlot")
}

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

class ItemManager {
    constructor() {
        this.Items = []
        this.Crafted = []
    }

    AddCrafted(item) {
        this.Crafted.push(item)
    }

    AddItem(item) {
        this.Items.push(item)
    }

    RemoveCrafted(item) {
        this.Crafted.filter(x => x.ID != item.ID)
    }

    RemoveItem(item) {
        this.Items.filter(x => x.ID != item.ID)
    }

    NextCraftStage(item, curr) {
        switch (curr) {
            case 0:
                Slots.Material.innerHTML = ""
                item.insertTo(Slots.Quality)
                break
            case 1:
                Slots.Quality.innerHTML = ""
                item.insertTo(Slots.Temper)
                break
            case 2:
                Slots.Temper.innerHTML = ""
                item.insertTo(Slots.Balance)
                break
            case 3:
                Slots.Balance.innerHTML = ""
                item.insertTo(Slots.Enchant)
                break
            case 4:
                Slots.Enchant.innerHTML = ""
                break;
        }
        item.CraftStage++
    }

    ItemExists(item) {
        if (this.Items.find(x => x.ID == item)) {
            return true
        }
        return false
    }
    
    BeginCrafting() {
        var newItem = new Item()
        var timer = newItem.timeSpan
        this.AddItem(newItem)
    }
}

class Item {
    constructor() {
        this.ID = Date.now()
        this.CraftStage = 0
        this.nMaterial = 0
        this.tMaterial = Materials[0]
        this.nQuality = 0
        this.tQuality = Qualities[0]
        this.nTemper = 0
        this.tTemper = Tempers[0]
        this.nBalance = 0
        this.tBalance = Balances[0]
        this.nEnchant = 0
        this.tEnchant = Enchants[0]
        this.timeLeft = 5
        this.timeSpan = document.createElement('span', {id: `spnTimer${this.ID}`, style: "color: white; margin-top: 5px;"})
    }

    getCard() {
        return `<div class="itemCard${this.ID}">
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
                    <div class="itemPerkRow">
                        ${this.timeSpan}
                    </div>
                </div>`
    }

    insertTo(div) {
        div.innerHTML = this.getCard()
    }
}

const IM = new ItemManager()

function updateMoneyValue() {
    moneySpan.innerHTML = '$' + moneyValue
}

function startCraft() {
    IM.BeginCrafting()
}