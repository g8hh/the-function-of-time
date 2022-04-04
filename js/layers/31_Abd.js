addLayer("ab", {
    tabFormat: {
        "Abdicate": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b>" + format(player["p"].points) + " PP</b></h2>" },],
                "blank",
                "prestige-button",
                "blank",
                ["display-text", function() { return "You have " + format(player.ab.total) + " Total Lives" },],
                "milestones",
            ],
        },
        "Abdi-Upgrades": {
            unlocked() {return hasMilestone("ab", 5)},
            content:[
                "main-display",
                "blank",
                "upgrades",
                "buyables",
            ],
        },
    },
    name: "abdicate", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Ab", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#808080",
    requires: new Decimal(10).pow(600000), // Can be a function that takes requirement increases into account
    resource: "Lives", // Name of prestige currency
    baseResource: "PP", // Name of resource prestige is based on
    baseAmount() {return player["p"].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    milestones: {
        1: {
            requirementDescription: "1 Total Life (1)",
            effectDescription() { return "Gain +1 PP per second <br>x log(h(t)+10) Distortion gained <br> Currently = x" + format(new Decimal(abMs1()))} ,
            done() { return player.ab.total.gte(1) }
        },
        2: {
            requirementDescription: "2 Total Lives (2)",
            effectDescription() { return "Unlock 'aU' Upgrades"} ,
            done() { return player.ab.total.gte(2) }
        },
        3: {
            requirementDescription: "3 Total Lives (3)",
            effectDescription() { return "Total amount of lives multiplies h(t), Aₕ, Bₕ, Cₕ, Dₕ, Eₕ, Fₕ, & Gₕ production <br> Currently = x" + format(new Decimal(abMs2()))} ,
            done() { return player.ab.total.gte(3) }
        },
        4: {
            requirementDescription: "4 Total Lives (4)",
            effectDescription() { return "Convert Lives"} ,
            done() { return player.ab.total.gte(4) }
        },
        5: {
            requirementDescription: "5 Total Lives (5)",
            effectDescription() { return "Unlock Abdi-Upgrades"} ,
            done() { return player.ab.total.gte(5) }
        },
        6: {
            requirementDescription: "7 Total Lives (6)",
            effectDescription() { return "Unlock the 2nd row of 'aU' Upgrades"} ,
            done() { return player.ab.total.gte(7) }
        },
        7: {
            requirementDescription: "10 Total Lives (7)",
            effectDescription() { return "Study 2.1 is always maxed"} ,
            done() { return player.ab.total.gte(10) }
        },
        8: {
            requirementDescription: "25 Total Lives (8)",
            effectDescription() { return "Unlock 'Buy All' button on 'pU' Upgrades and Pres-Upgrades"} ,
            done() { return player.ab.total.gte(25) }
        },
        9: {
            requirementDescription: "50 Total Lives (9)",
            effectDescription() { return "Unlock second row of 'Abdi-Upgrades'"} ,
            done() { return player.ab.total.gte(50) }
        },
        10: {
            requirementDescription: "100 Total Lives (10)",
            effectDescription() { return "Passively gain PP & Autobuy Study Points"} ,
            done() { return player.ab.total.gte(100) }
        },
        11: {
            requirementDescription: "250 Total Lives (11)",
            effectDescription() { return "hInfinity will no longer reset"} ,
            done() { return player.ab.total.gte(250) }
        },
        12: {
            requirementDescription: "500 Total Lives (12)",
            effectDescription() { return "Unlock the 2nd row of hInf-Upgrades and reset hInfinity data"} ,
            done() { return player.ab.total.gte(500) }
        },
        13: {
            requirementDescription: "1,000 Total Lives (13)",
            effectDescription() { return "Unlock Layer 2 Automation Challenges and Euler's Number Automation Challenge"} ,
            done() { return player.ab.total.gte(1000) }
        },
        14: {
            requirementDescription: "2,500 Total Lives (14)",
            effectDescription() { return "Unlock nth row and third row of 'Abdi-Upgrades'"} ,
            done() { return player.ab.total.gte(2500) }
        },
    },
    upgrades: {
        11: {
            title: "Abdi-Upgrade 1.1",
            description: "Total Lives is used in converting Lives",
            cost: new Decimal(5),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",5)},
        },
        12: {
            title: "Abdi-Upgrade 1.2",
            description: "Divide by 2 Lives Convertion base requirement ",
            cost: new Decimal(5),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("ab",12)) eff = new Decimal(2)
                return eff
            },
            unlocked() {return hasMilestone("ab",5)},
        },
        13: {
            title: "Abdi-Upgrade 1.3",
            description: "Square Live's Milestone 2 boost",
            cost: new Decimal(5),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",5)},
        },
        14: {
            title: "Abdi-Upgrade 1.4",
            description: "<span style='font-size: 9px'>log(WT+9) is raised to sqrt(log(log(WT+9)+10))</span>",
            cost: new Decimal(5),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",5)},
        },
        15: {
            title: "Abdi-Upgrade 1.5",
            description: "Milestone 1 boost is much powerful",
            cost: new Decimal(5),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",5)},
        },
        21: {
            title: "Abdi-Upgrade 2.1",
            description: "Passively gain Distortions but is weaker",
            cost: new Decimal(50),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",9)},
        },
        22: {
            title: "Abdi-Upgrade 2.2",
            description: "Unlock second row of 4D-Upgrades",
            cost: new Decimal(50),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",9)},
        },
        23: {
            title: "Abdi-Upgrade 2.3",
            description: "Buy All button on 4D-Upgrades",
            cost: new Decimal(50),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",9)},
        },
        24: {
            title: "Abdi-Upgrade 2.4",
            description: "Autobuy 'U' Upgrades",
            cost: new Decimal(50),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",9)},
        },
        25: {
            title: "Abdi-Upgrade 2.5",
            description: "Autobuy Res-Upgrades",
            cost: new Decimal(50),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",9)},
        },
        31: {
            title: "Abdi-Upgrade 3.1",
            description: "---",
            cost: new Decimal(2).pow(1024),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",14)},
        },
        32: {
            title: "Abdi-Upgrade 3.2",
            description: "---",
            cost: new Decimal(2).pow(1024),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",14)},
        },
        33: {
            title: "Abdi-Upgrade 3.3",
            description: "---",
            cost: new Decimal(2).pow(1024),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",14)},
        },
        34: {
            title: "Abdi-Upgrade 3.4",
            description: "---",
            cost: new Decimal(2).pow(1024),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",14)},
        },
        35: {
            title: "Abdi-Upgrade 3.5",
            description: "---",
            cost: new Decimal(2).pow(1024),
            currencyDisplayName: "Lives",
            currencyInternalName: "points",
            currencyLayer: "ab",
            unlocked() {return hasMilestone("ab",14)},
        },
    },
    buyables: {
        11: {
            title() {return "Abdi-Upgrade n.1"},
            cost(x) { return new Decimal(10).mul(new Decimal(10).pow(x))},
            display() { return "x2 gained Lives <br> Currently: x" + format(tmp.ab.buyables[11].effect) + "<br> (bought:" + format(getBuyableAmount("ab", 11)) + ")<br> Cost: " + format(this.cost(getBuyableAmount("ab", 11))) + " Lives"},
            canAfford() { return player["ab"].points.gte(this.cost()) },
            buy() {
                player["ab"].points = player["ab"].points.sub(this.cost())
                setBuyableAmount("ab", 11, getBuyableAmount("ab", 11).add(1))
            },
            effect() { 
                eff = new Decimal(2)
                eff = eff.pow(getBuyableAmount("ab", 11))
                return eff
            },
            style(){ 
                if (player["ab"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "20px 20px 20px 20px", "width": "600px", "height": "120px"}
                }
                else {
                    return {"border-radius": "20px 20px 20px 20px", "width": "600px", "height": "120px"}
                }
            },
            unlocked() {return hasMilestone("ab",14)}
        }
    },
    update() {
    },
    getNextAt(canMax=true) {
        canMax = new Decimal(10).pow(600000)
        canMax = canMax.mul(new Decimal(10).pow(new Decimal(150000).mul(tmp.ab.getResetGain.div(tmp.ab.gainMult).pow(0.75))))
        return canMax
    },
    getResetGain() {
        gain = new Decimal(0)
        if (player["p"].points.gte(new Decimal(10).pow(600000))) {
            gain = gain.add((player["p"].points.log10().sub(600000).div(150000).pow(new Decimal(1).div(0.75))).add(1))
            gain = Decimal.floor(gain)
            gain = gain.mul(tmp.ab.gainMult)
            gain = Decimal.floor(gain)
            return gain
        }
        else return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("res",173)) mult = mult.mul(upgradeEffect("res",173))
        mult = mult.mul(buyableEffect("ab",11))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    passiveGeneration() { return  false },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    displayRow: 3,
    position: 3,
    layerShown(){return hasUpgrade("res", 151) || hasAchievement("A", 101)},
    branches: ["p"],
})