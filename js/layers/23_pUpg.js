addLayer("pu", {
    tabFormat: {
        "Upgrades": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b>" + format(player["g"].points) + " g(t)</b></h2>" },],
                "blank",
                "upgrades",
            ],
        },
    },
    name: "'pU'upgrades", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "pU", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#970439",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "pU", // Name of prestige currency
    baseResource: "g(t)", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    update() {
        player["pu"].points = new Decimal(1)
        player["pu"].points = player["pu"].points.mul(tmp.pu.upgrades[12].effect)
        player["pu"].points = player["pu"].points.mul(tmp.pu.upgrades[13].effect)
        player["pu"].points = player["pu"].points.mul(buyableEffect("res", 22))
        player["pu"].points = player["pu"].points.pow(new Decimal(1).add(tmp.pu.upgrades[14].effect))
    
    },
    getResetGain() {
        gain = new Decimal(0)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1) 
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    passiveGeneration() { return true },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    displayRow: 2,
    layerShown(){return hasUpgrade("u", 35) || hasAchievement("A", 28)}, 
    branches: ["g"],
    upgrades: {
        11: {
            title: "'pU' Upgrade 1.1",
            description: "Unlock 'Buy Max' in Time Machine. You lazy goose...",
            cost: new Decimal(1e24),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
        },
        12: {
            title: "'pU' Upgrade 1.2",
            description: "x1,000 'pU' value",
            cost: new Decimal(1e30),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("pu", 12)) eff = eff.mul(1000)
                return eff
            }
        },
        13: {
            title: "'pU' Upgrade 1.3",
            description: "x1.01 'pU' value every 'w, x, y & z' Variable bought",
            cost: new Decimal(1e36),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("pu", 13)) eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("g", 11).add(getBuyableAmount("g", 12)).add(getBuyableAmount("g", 21)).add(getBuyableAmount("g", 22))))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("pu", 13))
            }
        },
        14: {
            title: "'pU' Upgrade 1.4",
            description: "+ ^0.002 'U' value every Time Machine Generator and Time Warp <br> (Cap = + ^2)",
            cost: new Decimal(1e42),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            effect() {
                eff = new Decimal(0)
                if ((getBuyableAmount("tmach", 11).add(getBuyableAmount("tmach", 12))).lte(1000)) {
                    if (hasUpgrade("pu", 14)) eff = eff.add(new Decimal(0.002).mul(getBuyableAmount("tmach", 11).add(getBuyableAmount("tmach", 12))))
                }
                if ((getBuyableAmount("tmach", 11).add(getBuyableAmount("tmach", 12))).gte(1000)) {
                    if (hasUpgrade("pu", 14)) eff = eff.add(2)
                }
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("pu", 14))
            }
        },
        15: {
            title: "'pU' Upgrade 1.5",
            description: "Unlock 'pU' Variable Upgrade in Research",
            cost: new Decimal(1e48),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
        },
    }
})