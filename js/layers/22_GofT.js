addLayer("g", {
    tabFormat: {
        "Variables": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b>" + format(getResetGain("g")) + "</b></h2> g(t) Per Second" },],
                "blank",
                ["display-text", function() { return "You Have <h2><b>" + format(player["p"].points) + " PP</b></h2>" },],
                "blank",
                ["display-text", function() {
                    if (hasUpgrade("u", 35)) {
                        return "g(time+WT) = f(time) + wxyz⋅pU⋅WT" 
                    }
                    else if (hasUpgrade("p", 14)) {
                        return "g(time+WT) = f(time) + wxyz⋅WT" 
                    }
                    return "g(time+WT) = f(time) + wxyz⋅WT⋅0.01"
                }],
                "blank",
                "buyables"
            ],
        },
    },
    name: "g of t", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "g", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#BF40BF",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "g(t)", // Name of prestige currency
    baseResource: "PP", // Name of resource prestige is based on
    baseAmount() {return player["p"].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    getResetGain() {
        gain = new Decimal(1)
        gain = gain.mul(tmp.p.upgrades[14].effect)
        gain = gain.mul(tmp.g.gainMult)
        gain = gain.pow(tmp.g.gainExp)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(0)
        mult = mult.add(tmp.g.buyables[11].effect)
        mult = mult.mul(tmp.g.buyables[12].effect)
        mult = mult.mul(tmp.g.buyables[21].effect)
        mult = mult.mul(tmp.g.buyables[22].effect)
        mult = mult.mul(player["pu"].points)
        mult = mult.mul(tmp.tmach.buyables[12].effect)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    passiveGeneration() { return true },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    displayRow: 2,
    layerShown(){return player["f"].best.gte(1e18) || player["p"].total.gte(1)},
    branches: ["p","f"],
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("g", keep);
        }
        player["g"].points = player["g"].points.pow(0)
    },
    buyables: {
        11: {
            title() {return "'w' Variable"},
            cost(x) { return new Decimal(1).mul(new Decimal(2).pow(x))},
            display() { return "Increase the value of 'w' Variable <br> w = " + format(tmp.g.buyables[11].effect) + " (bought:" + format(getBuyableAmount("g", 11)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("g", 11))) + " PP"},
            canAfford() { return player["p"].points.gte(this.cost()) },
            buy() {
                player["p"].points = player["p"].points.sub(this.cost())
                setBuyableAmount("g", 11, getBuyableAmount("g", 11).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("g", 11).sub(1))
                return eff
            },
        },
        12: {
            title() {return "'x' Variable"},
            cost(x) { return new Decimal(100).mul(new Decimal(2).pow(x))},
            display() { return "Increase the value of 'x' Variable <br> x = " + format(tmp.g.buyables[12].effect) + " (bought:" + format(getBuyableAmount("g", 12)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("g", 12))) + " PP"},
            canAfford() { return player["p"].points.gte(this.cost()) },
            buy() {
                player["p"].points = player["p"].points.sub(this.cost())
                setBuyableAmount("g", 12, getBuyableAmount("g", 12).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("g", 12))
                return eff
            },
        },
        21: {
            title() {return "'y' Variable"},
            cost(x) { return new Decimal(10000).mul(new Decimal(2).pow(x))},
            display() { return "Increase the value of 'y' Variable <br> y = " + format(tmp.g.buyables[21].effect) + " (bought:" + format(getBuyableAmount("g", 21)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("g", 21))) + " PP"},
            canAfford() { return player["p"].points.gte(this.cost()) },
            buy() {
                player["p"].points = player["p"].points.sub(this.cost())
                setBuyableAmount("g", 21, getBuyableAmount("g", 21).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("g", 21))
                return eff
            },
        },
        22: {
            title() {return "'z' Variable"},
            cost(x) { return new Decimal(1000000).mul(new Decimal(2).pow(x))},
            display() { return "Increase the value of 'z' Variable <br> z = " + format(tmp.g.buyables[22].effect) + " (bought:" + format(getBuyableAmount("g", 22)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("g", 22))) + " PP"},
            canAfford() { return player["p"].points.gte(this.cost()) },
            buy() {
                player["p"].points = player["p"].points.sub(this.cost())
                setBuyableAmount("g", 22, getBuyableAmount("g", 22).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("g", 22))
                return eff
            },
        },
    }
})