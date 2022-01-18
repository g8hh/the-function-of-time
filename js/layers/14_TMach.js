addLayer("tmach", {
    tabFormat: {
        "Time Machine": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b>" + format(player["f"].points) + " f(t)</b></h2>" },],
                "blank",
                "clickables",
                "buyables"
            ],
        },
        "Infos": {
            content:[
                ["display-text", function() { return "You Have <h2><b>" + format(getBuyableAmount("tmach", 21)) + " Warp Warp Time" },],
                ["display-text", function() { 
                    if (getBuyableAmount("tmach", 21).gte(32)) {
                        return "You have greater than 32 Warp Warp Time,<br> its effect additive is changed from +0.33... to <h2>+0.25</h2>"
                    } 
                    else if (getBuyableAmount("tmach", 21).gte(16)) {
                        return "You have greater than 16 Warp Warp Time,<br> its effect additive is changed from +0.5 to <h2>+0.33...</h2><br>Next effect additive change is at 32 Warp Warp Time"
                    } 
                    else {
                        return "Warp Warp Time effect additive is <h2>+0.5</h2><br>Next effect additive change is at 16 Warp Warp Time"
                    }
                },],
                "blank",
                ["display-text", function() { if (hasUpgrade("p", 12)){return "You Have <h2><b>" + format(getBuyableAmount("tmach", 22)) + " T.M.G.E."} else {return "<h2>Locked..."} },],
                ["display-text", function() { 
                    if (getBuyableAmount("tmach", 22).gte(32)) {
                        return "You have greater than 32 T.M.G.E.,<br> its effect additive is changed from +0.5 to <h2>+0.33...</h2>"
                    } 
                    else if (getBuyableAmount("tmach", 22).gte(16)) {
                        return "You have greater than 16 T.M.G.E.,<br> its effect additive is changed from +0.66... to <h2>+0.5</h2><br>Next effect additive change is at 32 T.M.G.E."
                    } 
                    else if (hasUpgrade("p", 12)){
                        return "T.M.G.E. effect additive is <h2>+0.66...</h2><br>Next effect additive change is at 16 T.M.G.E."
                    }
                    else {
                        return ""
                    }
                },],
            ],
        }
    },
    name: "time machine", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "TM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
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
    layerShown(){return hasUpgrade("res", 15) || hasAchievement("A", 41)}, 
    branches: ["f"],
    clickables: {
        11: {
            display() {return "Buy Max <br> (Only Time Machine Generator and Time Warp)"},
            canClick() {return true},
            onClick() {
                if (getClickableState("tmach", 11) == false) 
                    {setClickableState("tmach", 11, true)}
                else if (getClickableState("tmach", 11) == true) 
                    {setClickableState("tmach", 11, false)}
                //return buyMaxBuyable("f", 22),  buyMaxBuyable("f", 21),  buyMaxBuyable("f", 12),  buyMaxBuyable("f", 11)
            },
            style() {
                if (getClickableState("tmach", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("tmach", 11) == true) 
                    return {'background-color': '#D0B49F',}
            },
            unlocked() {
                return hasUpgrade("pu", 11)
            }
        }
    },
    buyables: {
        11: {
            title() {return "Time Machine Generator"},
            cost(x) { return new Decimal(1e16).mul(new Decimal(10).pow(x)) },
            display() { return "Increase Time Machine Fragments gained <br> Currently: " + format(tmp.tmach.buyables[11].effect) + " (bought:" + format(getBuyableAmount("tmach", 11)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("tmach", 11)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("tmach", 11) == false) {
                    player["f"].points = player["f"].points.sub(this.cost())
                    setBuyableAmount("tmach", 11, getBuyableAmount("tmach", 11).add(1))
                }
                else if (getClickableState("tmach", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["f"].points, this.cost(), 10)
                    subCost(10, getBuyableAmount("tmach", 11), 1e16)
                    player["f"].points = player["f"].points.sub(sub)
                    setBuyableAmount("tmach", 11, getBuyableAmount("tmach", 11).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("tmach", 11).sub(1)).pow(tmp.tmach.buyables[22].effect)
                return eff
            },
        },
        12: {
            title() {return "Warp Time"},
            cost(x) { return new Decimal(1).mul(new Decimal(2).pow(x))},
            display() { return "Use Time Machine Fragments to speed up time <br> Currently: " + format(tmp.tmach.buyables[12].effect) + " (bought:" + format(getBuyableAmount("tmach", 12)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("tmach", 12))) + " Time Fragments"},
            canAfford() { return player["tmach"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("tmach", 11) == false) {
                    player["tmach"].points = player["tmach"].points.sub(this.cost())
                    setBuyableAmount("tmach", 12, getBuyableAmount("tmach", 12).add(1))
                }
                else if (getClickableState("tmach", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["tmach"].points, this.cost(), 2)
                    subCost(2, getBuyableAmount("tmach", 12), 1)
                    player["tmach"].points = player["tmach"].points.sub(sub)
                    setBuyableAmount("tmach", 12, getBuyableAmount("tmach", 12).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("tmach", 12)).pow(tmp.tmach.buyables[21].effect)
                return eff
            },
        },
        21: {
            title() {return "Warp Warp Time"},
            cost(x) { return new Decimal(5).add(new Decimal(5).mul(x))},
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
                eff = new Decimal(1)
                if (getBuyableAmount("tmach", 21).gte(32)) {
                    eff = eff.add(40/3).add((getBuyableAmount("tmach", 21).sub(32)).mul(0.25))
                }
                else if (getBuyableAmount("tmach", 21).gte(16)) {
                    eff = eff.add(8).add((getBuyableAmount("tmach", 21).sub(16)).mul(1/3))
                }
                else {
                    eff = eff.add((getBuyableAmount("tmach", 21)).mul(0.5))
                }
                return eff
            },
        },
        22: {
            title() {return "T.M.G.E."},
            cost(x) { return new Decimal(15).add(new Decimal(6).mul(x))},
            display() { return "Name is too long, so I acronymed it. Basically increase the power of Time Machine Generator.<br><b>WARNING: Resets 'Time Fragments', 'f(t) value', 'Time Machine Generator' Buyable, & 'Warp Time' Buyable</b><br> Currently: " + format(tmp.tmach.buyables[22].effect) + " (bought:" + format(getBuyableAmount("tmach", 22)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("tmach", 22))) + " Time Machine Generators"},
            canAfford() { return getBuyableAmount("tmach", 11).gte(this.cost()) },
            buy() {
                player["f"].points = player["f"].points.mul(0)
                player["tmach"].points = player["tmach"].points.mul(0)
                setBuyableAmount("tmach", 11, getBuyableAmount("tmach", 11).mul(0))
                setBuyableAmount("tmach", 12, getBuyableAmount("tmach", 12).mul(0))
                setBuyableAmount("tmach", 22, getBuyableAmount("tmach", 22).add(1))
            },
            effect() { 
                eff = new Decimal(2)
                if (getBuyableAmount("tmach", 22).gte(32)) {
                    eff = eff.add(56/3).add((getBuyableAmount("tmach", 22).sub(32)).mul(1/3))
                }
                else if (getBuyableAmount("tmach", 22).gte(16)) {
                    eff = eff.add(32/3).add((getBuyableAmount("tmach", 22).sub(16)).mul(0.5))
                }
                else {
                    eff = eff.add((getBuyableAmount("tmach", 22)).mul(2/3))
                }
                return eff
            },
            unlocked() {return hasUpgrade("p", 12)},
        },
    }
})