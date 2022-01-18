addLayer("f", {
    tabFormat: {
        "Variables": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b>" + format(getResetGain("f")) + "</b></h2> f(t) Per Second" },],
                "blank",
                ["display-text", function() {
                if (inChallenge("inf", 21)) {
                    return "f(time+WT) = f(time) + abd⋅U⋅WT⋅g(t)⋅0.001"
                }
                else if (inChallenge("inf", 12)) {
                    return "f(time+WT) = f(time) + abcd⋅U⋅WT⋅g(t)⋅0.001"
                }
                else if (player["f"].best.gte(100000) && player["p"].total.gte(1)) {
                    return "f(time+WT) = f(time) + abcd⋅U⋅WT⋅g(t)" 
                }
                else if (player["f"].best.gte(10000) && player["p"].total.gte(1)) {
                    return "f(time+WT) = f(time) + abc⋅U⋅WT⋅g(t)" 
                }
                else if (player["f"].best.gte(1000) && player["p"].total.gte(1)) {
                    return "f(time+WT) = f(time) + abc⋅WT⋅g(t)" 
                }
                else if (player["f"].best.gte(10) && player["p"].total.gte(1)) {
                    return "f(time+WT) = f(time) + ab⋅WT⋅g(t)" 
                }
                else if (player["p"].total.gte(1)) {
                    return "f(time+WT) = f(time) + a⋅WT⋅g(t)" 
                }
                else if (player["f"].best.gte(100000) && (hasUpgrade("res", 15))) {
                    return "f(time+WT) = f(time) + abcd⋅U⋅WT" 
                }
                else if (player["f"].best.gte(10000) && (hasUpgrade("res", 15))) {
                    return "f(time+WT) = f(time) + abc⋅U⋅WT" 
                }
                else if (player["f"].best.gte(1000) && (hasUpgrade("res", 15))) {
                    return "f(time+WT) = f(time) + abc⋅WT" 
                }
                else if (player["f"].best.gte(10) && (hasUpgrade("res", 15))) {
                    return "f(time+WT) = f(time) + ab⋅WT" 
                }
                else if (hasUpgrade("res", 15)) {
                    return "f(time+WT) = f(time) + a⋅WT" 
                }
                else if (player["f"].best.gte(100000)) {
                    return "f(time+1) = f(time) + abcd⋅U" 
                }
                else if (player["f"].best.gte(10000)) {
                    return "f(time+1) = f(time) + abc⋅U" 
                }
                else if (player["f"].best.gte(1000)) {
                    return "f(time+1) = f(time) + abc" 
                }
                else if (player["f"].best.gte(10)) {
                    return "f(time+1) = f(time) + ab" 
                }
                return "f(time+1) = f(time) + a"
                },],
                "blank",
                "clickables",
                "buyables"
            ],
        },
    },
    name: "f of t", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "f", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1.001),
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
        mult = mult.mul(tmp.tmach.buyables[12].effect)
        mult = mult.mul(player["g"].points)
        if (inChallenge("inf", 12)) mult = mult.mul(0.001)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    passiveGeneration() { return true },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    displayRow: 0,
    layerShown(){return true},
    clickables: {
        11: {
            display() {return "Buy Max"},
            canClick() {return true},
            onClick() {
                if (getClickableState("f", 11) == false) 
                    {setClickableState("f", 11, true)}
                else if (getClickableState("f", 11) == true) 
                    {setClickableState("f", 11, false)}
                //return buyMaxBuyable("f", 22),  buyMaxBuyable("f", 21),  buyMaxBuyable("f", 12),  buyMaxBuyable("f", 11)
            },
            style() {
                if (getClickableState("f", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("f", 11) == true) 
                    return {'background-color': '#63C5DA',}
            }
        }
    },
    automate() {
        return (getClickableState("auto", 11) ? buyBuyable("f", 11) : false), (getClickableState("auto", 12) ? buyBuyable("f", 12) : false), (getClickableState("auto", 13) ? buyBuyable("f", 21) : false), (getClickableState("auto", 14) ? buyBuyable("f", 22) : false)
    },
    buyables: {
        11: {
            title() {return "'a' Variable"},
            cost(x) { return new Decimal(1).mul(new Decimal(1.5).pow(x))},
            display() { return "Increase the value of 'a' Variable <br> a = " + format(tmp.f.buyables[11].effect) + " (bought:" + format(getBuyableAmount("f", 11)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("f", 11)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("f", 11) == false) {
                    player["f"].points = player["f"].points.sub(this.cost())
                    setBuyableAmount("f", 11, getBuyableAmount("f", 11).add(1))
                }
                else if (getClickableState("f", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["f"].points, this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("f", 11), 1)
                    player["f"].points = player["f"].points.sub(sub)
                    setBuyableAmount("f", 11, getBuyableAmount("f", 11).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 11).sub(1)).mul(buyableEffect("res", 31))
                return eff
            },
        },
        12: {
            title() {return "'b' Variable"},
            cost(x) { return new Decimal(100).mul(new Decimal(1.5).pow(x))},
            display() { return "Increase the value of 'b' Variable <br> b = " + format(tmp.f.buyables[12].effect) + " (bought:" + format(getBuyableAmount("f", 12)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("f", 12)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("f", 11) == false) {
                    player["f"].points = player["f"].points.sub(this.cost())
                    setBuyableAmount("f", 12, getBuyableAmount("f", 12).add(1))
                }
                else if (getClickableState("f", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["f"].points, this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("f", 12), 100)
                    player["f"].points = player["f"].points.sub(sub)
                    setBuyableAmount("f", 12, getBuyableAmount("f", 12).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 12)).mul(buyableEffect("res", 32))
                return eff
            },
            unlocked() {
                if (inChallenge("inf", 22)) {return false} 
                else {return player["f"].best.gte(10)}
            }
        },
        21: {
            title() {return "'c' Variable"},
            cost(x) { return new Decimal(10000).mul(new Decimal(1.5).pow(x))},
            display() { return "Increase the value of 'c' Variable <br> c = " + format(tmp.f.buyables[21].effect) + " (bought:" + format(getBuyableAmount("f", 21)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("f", 21)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("f", 11) == false) {
                    player["f"].points = player["f"].points.sub(this.cost())
                    setBuyableAmount("f", 21, getBuyableAmount("f", 21).add(1))
                }
                else if (getClickableState("f", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["f"].points, this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("f", 21), 10000)
                    player["f"].points = player["f"].points.sub(sub)
                    setBuyableAmount("f", 21, getBuyableAmount("f", 21).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 21)).mul(buyableEffect("res", 41))
                return eff
            },
            unlocked() {
                if (inChallenge("inf", 21)) {return false} 
                else if (inChallenge("inf", 22)) {return false} 
                else {return player["f"].best.gte(1000)}
            }
        },
        22: {
            title() {return "'d' Variable"},
            cost(x) { return new Decimal(1000000).mul(new Decimal(1.5).pow(x))},
            display() { return "Increase the value of 'd' Variable <br> d = " + format(tmp.f.buyables[22].effect) + " (bought:" + format(getBuyableAmount("f", 22)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("f", 22)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("f", 11) == false) {
                    player["f"].points = player["f"].points.sub(this.cost())
                    setBuyableAmount("f", 22, getBuyableAmount("f", 22).add(1))
                }
                else if (getClickableState("f", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["f"].points, this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("f", 22), 1000000)
                    player["f"].points = player["f"].points.sub(sub)
                    setBuyableAmount("f", 22, getBuyableAmount("f", 22).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("f", 22)).mul(buyableEffect("res", 42))
                return eff
            },
            unlocked() {
                if (inChallenge("inf", 22)) {return false} 
                else {return player["f"].best.gte(100000)}
            }
        },
    }
})