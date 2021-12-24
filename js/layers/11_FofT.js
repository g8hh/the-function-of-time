addLayer("f", {
    tabFormat: {
        "Variables": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b>" + format(getResetGain("f")) + "</b></h2> f(t) Per Second" },],
                "blank",
                ["display-text", function() { return "f(time+1) = f(time) + abcd(U)"},],
                "blank",
                "buyables"
            ],
        },
    },
    name: "f of t", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "f", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#63C5DA",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "f(t)", // Name of prestige currency
    baseResource: "time", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    getResetGain() {
        gain = new Decimal(1)
        gain = gain.mul(tmp.f.gainMult)
        gain = gain.pow(tmp.f.gainExp)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(0)
        mult = mult.add(tmp.f.buyables[11].effect)
        mult = mult.mul(tmp.f.buyables[12].effect)
        mult = mult.mul(tmp.f.buyables[21].effect)
        mult = mult.mul(tmp.f.buyables[22].effect)
        mult = mult.mul(player["u"].points)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    passiveGeneration() { return true },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    buyables: {
        11: {
            title() {return "'a' Variable"},
            cost(x) { return new Decimal(1).mul(1.5**x)},
            display() { return "Increase the value of 'a' Variable <br> a = " + format(tmp.f.buyables[11].effect) + " (bought:" + format(getBuyableAmount("f", 11)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("f", 11)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("f", 11, getBuyableAmount("f", 11).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 11).sub(1)).mul(buyableEffect("res", 31))
                return eff
            },
        },
        12: {
            title() {return "'b' Variable"},
            cost(x) { return new Decimal(100).mul(1.5**x)},
            display() { return "Increase the value of 'b' Variable <br> b = " + format(tmp.f.buyables[12].effect) + " (bought:" + format(getBuyableAmount("f", 12)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("f", 12)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("f", 12, getBuyableAmount("f", 12).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 12)).mul(buyableEffect("res", 32))
                return eff
            },
            unlocked() {return player["f"].best.gte(10)}
        },
        21: {
            title() {return "'c' Variable"},
            cost(x) { return new Decimal(10000).mul(1.5**x)},
            display() { return "Increase the value of 'c' Variable <br> c = " + format(tmp.f.buyables[21].effect) + " (bought:" + format(getBuyableAmount("f", 21)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("f", 21)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("f", 21, getBuyableAmount("f", 21).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 21)).mul(buyableEffect("res", 41))
                return eff
            },
            unlocked() {return player["f"].best.gte(1000)}
        },
        22: {
            title() {return "'d' Variable"},
            cost(x) { return new Decimal(1000000).mul(1.5**x)},
            display() { return "Increase the value of 'd' Variable <br> d = " + format(tmp.f.buyables[22].effect) + " (bought:" + format(getBuyableAmount("f", 22)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("f", 22)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("f", 22, getBuyableAmount("f", 22).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 22)).mul(buyableEffect("res", 42))
                return eff
            },
            unlocked() {return player["f"].best.gte(100000)}
        },
    }
})