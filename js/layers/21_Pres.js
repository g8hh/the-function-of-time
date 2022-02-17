addLayer("p", {
    tabFormat: {
        "Prestige": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b>" + format(player["f"].points) + " f(t)</b></h2>" },],
                "blank",
                "prestige-button",
            ],
        },
        "Pres-Upgrades": {
            content:[
                "main-display",
                "blank",
                "upgrades",
            ],
        },
    },
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#BF40BF",
    requires: new Decimal(1e21), // Can be a function that takes requirement increases into account
    resource: "PP", // Name of prestige currency
    baseResource: "f(t)", // Name of resource prestige is based on
    baseAmount() {return player["f"].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    update() {
    },
    getNextAt(canMax=true) {
        canMax = new Decimal(1e21)
        canMax = canMax.mul(tmp.p.getResetGain.add(1).add(tmp.p.getResetGain.add(1).pow(2))).div(2)
        return canMax
    },
    getResetGain() {
        gain = new Decimal(0)
        //gain = gain.add((player["f"].points.mul(8).add(1)).sqrt().sub(1).div(2))
        gain = gain.add((player["f"].points.mul(8e21).add(1e42)).sqrt().sub(1e21).div(2e21))
        gain = Decimal.floor(gain)
        gain = gain.mul(tmp.p.gainMult)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        mult = mult.mul(upgradeEffect("res", 33))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    passiveGeneration() { return  false },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    displayRow: 2,
    layerShown(){return player["f"].best.gte(1e18) || player["p"].total.gte(1)},
    branches: ["f"],
    upgrades: {
        11: {
            title: "Pres-Upgrade 1.1",
            description: "Unlock the second row of Res-Upgrades",
            cost: new Decimal(1000),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
        },
        12: {
            title: "Pres-Upgrade 1.2",
            description: "Unlock Time Machine Genarator Enchancer (T.M.G.E.)",
            cost: new Decimal(1000000),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
        },
        13: {
            title: "Pres-Upgrade 1.3",
            description: "Unlock the third row of 'U' Upgrades",
            cost: new Decimal(1e12),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
        },
        14: {
            title: "Pres-Upgrade 1.4",
            description: "Remove 0.01 in g(t) formula",
            cost: new Decimal(1e21),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            effect() {
                eff = new Decimal(0.01)
                    if (hasUpgrade("p", 14)) eff = eff.pow(0)
                return eff
            },
        },
        15: {
            title: "Pres-Upgrade 1.5",
            description: "Increase 'U' Upgrade 3.3 base by 0.1 <br> 1.5^log(PP+10) -> 1.7^log(PP+10)",
            cost: new Decimal(1e33),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            effect() {
                eff = new Decimal(1.5)
                    if (hasUpgrade("p", 15)) eff = eff.add(0.2)
                return eff
            },
        },
        21: {
            title: "Pres-Upgrade 2.1",
            description: "The 'Buy Max' in Time Machine will work on Warp Warp Time and T.M.G.E. You lazy lazy lazy goose...",
            cost: new Decimal(2).pow(1024),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            unlocked() {return hasUpgrade("four", 12)},
        },
        22: {
            title: "Pres-Upgrade 2.2",
            description: "Unlock Research Automation Challenges",
            cost: new Decimal(2).pow(2560),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            unlocked() {return hasUpgrade("four", 12)},
        },
        23: {
            title: "Pres-Upgrade 2.3",
            description: "Warp Warp Time and T.M.G.E. will no longer do reset.",
            cost: new Decimal(2).pow(6400),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            unlocked() {return hasUpgrade("four", 12)},
        },
        24: {
            title: "Pres-Upgrade 2.4",
            description: "Multiply Distortion based on PP",
            cost: new Decimal(2).pow(16000),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("p", 24)) eff = eff.mul(player["p"].points.abs().add(10).log10().pow(player["p"].points.abs().add(10).log10().div(2500).add(1)))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("p", 24))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        25: {
            title: "Pres-Upgrade 2.5",
            description: "Change 'U' Upgrade 3.3 Max to Cap",
            cost: new Decimal(2).pow(40000),
            currencyDisplayName: "PP",
            currencyInternalName: "points",
            currencyLayer: "p",
            unlocked() {return hasUpgrade("four", 12)},
        },
    },
})