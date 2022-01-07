addLayer("tmach", {
    tabFormat: {
        "Time Machine": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b>" + format(player["f"].points) + " f(t)</b></h2>" },],
                "blank",
                "buyables"
            ],
        },
    },
    name: "time machine", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "TM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D0B49F",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Time Fragments", // Name of prestige currency
    baseResource: "f(t)", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    update() {
    },
    getResetGain() {
        gain = new Decimal(0)
        gain = gain.add(tmp.tmach.buyables[11].effect)
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
    row: 0, // Row the layer is in on the tree (0 is the first row)
    displayRow: 1,
    layerShown(){return hasUpgrade("res", 15)}, 
    branches: ["f"],
    buyables: {
        11: {
            title() {return "Time Machine Generator"},
            cost(x) { return new Decimal(1e16).mul(10**x)},
            display() { return "Increase Time Machine Fragments gained <br> Currently: " + format(tmp.tmach.buyables[11].effect) + " (bought:" + format(getBuyableAmount("tmach", 11)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("tmach", 11)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.sub(this.cost())
                setBuyableAmount("tmach", 11, getBuyableAmount("tmach", 11).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("tmach", 11).sub(1)).pow(2)
                return eff
            },
        },
        12: {
            title() {return "Warp Time"},
            cost(x) { return new Decimal(1).mul(2**x)},
            display() { return "Use Time Machine Fragments to speed up time <br> Currently: " + format(tmp.tmach.buyables[12].effect) + " (bought:" + format(getBuyableAmount("tmach", 12)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("tmach", 12))) + " Time Fragments"},
            canAfford() { return player["tmach"].points.gte(this.cost()) },
            buy() {
                player["tmach"].points = player["tmach"].points.sub(this.cost())
                setBuyableAmount("tmach", 12, getBuyableAmount("tmach", 12).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("tmach", 12)).pow(tmp.tmach.buyables[21].effect)
                return eff
            },
        },
        21: {
            title() {return "Warp Warp Time"},
            cost(x) { return new Decimal(5).add(5*x)},
            display() { return "Warp the time warper to warp the warped time more.<br><b>WARNING: Resets 'Time Fragments', 'f(t) value', 'Time Machine Generator' Buyable, & 'Warp Time' Buyable</b><br> Currently: " + format(tmp.tmach.buyables[21].effect) + " (bought:" + format(getBuyableAmount("tmach", 21)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("tmach", 21))) + " Time Warps"},
            canAfford() { return getBuyableAmount("tmach", 12).gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.mul(0)
                player["tmach"].points = player["tmach"].points.mul(0)
                setBuyableAmount("tmach", 11, getBuyableAmount("tmach", 11).mul(0))
                setBuyableAmount("tmach", 12, getBuyableAmount("tmach", 12).mul(0))
                setBuyableAmount("tmach", 21, getBuyableAmount("tmach", 21).add(1))
            },
            effect() { 
                eff = new Decimal(0)
                eff = eff.add(1).add((getBuyableAmount("tmach", 21)).mul(0.5))
                return eff
            },
        },
    }
})