addLayer("res", {
    tabFormat: {
        "Research": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b>" + format(getResetGain("res")) + "</b></h2> Knowledge Per Second" },],
                "blank",
                ["display-text", function() { return "You Have <h2><b>" + format(player["f"].points) + " f(t)</b></h2>" },],
                "blank",
                "buyables"
            ],
        },
        "Res-Upgrades": {
            content:[
                "main-display",
                "blank",
                "upgrades",
            ],
        },
    },
    name: "research", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: -1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#234F1E",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Knowledge", // Name of prestige currency
    baseResource: "f(t)", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    update() {
    },
    getResetGain() {
        gain = new Decimal(0)
        gain = gain.add(tmp.res.buyables[11].effect)
        gain = gain.mul(tmp.res.gainMult)
        gain = gain.pow(tmp.res.gainExp)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1) 
        mult = mult.mul(tmp.res.buyables[12].effect)
        mult = mult.mul(tmp.res.upgrades[11].effect)
        mult = mult.mul(tmp.res.upgrades[12].effect)
        mult = mult.mul(tmp.res.upgrades[13].effect)
        mult = mult.mul(tmp.res.upgrades[14].effect)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    passiveGeneration() { return true },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    displayRow: 1,
    layerShown(){return hasUpgrade("u", 14)}, 
    branches: ["f"],
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("res", keep);
        if  (player["p"].total.gte(1)) player[this.layer].upgrades = player[this.layer].upgrades.concat([15]);
        }
    },
    buyables: {
        11: {
            title() {return "Additive Research Upgrade"},
            cost(x) { return new Decimal(100000000).mul(1.5**x)},
            display() { return "Increase the value of knowlege gain additively <br> Currently: " + format(tmp.res.buyables[11].effect) + " (bought:" + format(getBuyableAmount("res", 11)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("res", 11)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("res", 11, getBuyableAmount("res", 11).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("res", 11).mul(0.01).sub(1))
                return eff
            },
        },
        12: {
            title() {return "Multiplicative Research Upgrade"},
            cost(x) { return new Decimal(100000000).mul(1.5**x)},
            display() { return "Increase the value of knowlege gain multiplicatively <br> Currently: " + format(tmp.res.buyables[12].effect) + " (bought:" + format(getBuyableAmount("res", 12)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("res", 12)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("res", 12, getBuyableAmount("res", 12).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul((1.05)**(getBuyableAmount("res", 12)))
                return eff
            },
        },
        21: {
            title() {return "'U' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(10**x)},
            display() { return "x2 'U' variable value  <br> Currently: " + format(tmp.res.buyables[21].effect) + " (bought:" + format(getBuyableAmount("res", 21)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 21))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 21, getBuyableAmount("res", 21).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul((2)**(getBuyableAmount("res", 21)))
                return eff
            },
        },
        31: {
            title() {return "'a' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(1.0964**x)},
            display() { return "+1% 'a' variable value  <br> Currently: " + format(tmp.res.buyables[31].effect) + " (bought:" + format(getBuyableAmount("res", 31)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 31))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 31, getBuyableAmount("res", 31).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul((getBuyableAmount("res", 31)).mul(0.01)).add(1)
                return eff
            },
        },
        32: {
            title() {return "'b' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(1.0964**x)},
            display() { return "+1% 'b' variable value  <br> Currently: " + format(tmp.res.buyables[32].effect) + " (bought:" + format(getBuyableAmount("res", 32)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 32))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 32, getBuyableAmount("res", 32).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul((getBuyableAmount("res", 32)).mul(0.01)).add(1)
                return eff
            },
        },
        41: {
            title() {return "'c' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(1.0964**x)},
            display() { return "+1% 'c' variable value  <br> Currently: " + format(tmp.res.buyables[41].effect) + " (bought:" + format(getBuyableAmount("res", 41)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 41))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 41, getBuyableAmount("res", 41).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul((getBuyableAmount("res", 41)).mul(0.01)).add(1)
                return eff
            },
        },
        42: {
            title() {return "'d' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(1.0964**x)},
            display() { return "+1% 'd' variable value  <br> Currently: " + format(tmp.res.buyables[42].effect) + " (bought:" + format(getBuyableAmount("res", 42)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 42))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                player["res"].points = player["res"].points.sub(this.cost())
                setBuyableAmount("res", 42, getBuyableAmount("res", 42).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul((getBuyableAmount("res", 42)).mul(0.01)).add(1)
                return eff
            },
        },
    },
    upgrades: {
        11: {
            title: "Res-Upgrade 1.1",
            description: "x3 your Knowledge gain",
            cost: new Decimal(10),
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res", 11)) eff = eff.mul(3)
                return eff
            }
        },
        12: {
            title: "Res-Upgrade 1.2",
            description: "Multiply your Knowledge gain based on time",
            cost: new Decimal(100),
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res", 12)) eff = eff.mul((player.points.add(10)).log10())
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 12))
            }
        },
        13: {
            title: "Res-Upgrade 1.3",
            description: "Multiply your Knowledge gain based on f(t)",
            cost: new Decimal(1000),
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res", 13)) eff = eff.mul((player["f"].points.add(10)).log10().pow(0.5))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 13))
            }
        },
        14: {
            title: "Res-Upgrade 1.4",
            description: "Multiply your Knowledge gain based on Knowledge",
            cost: new Decimal(10000),
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res", 14)) eff = eff.mul((((player["res"].points).pow(0.8)).add(10)).log10())
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 14))
            }
        },
        15: {
            title: "Res-Upgrade 1.5",
            description: "Unlock Time Machine",
            cost: new Decimal(100000),
        },
    }
})