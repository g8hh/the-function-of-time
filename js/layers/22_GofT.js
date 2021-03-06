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
                    if (hasUpgrade("res",162) && hasUpgrade("au",15)) {
                        return "g(time+WT) = g(time) + wxyz(φ^" + format(getBuyableAmount("g", 31)) + ")⋅pU⋅WT⋅h(t)^" + format(tmp.au.upgrades[15].effect)
                    }
                    else if (hasUpgrade("res",162)) {
                        return "g(time+WT) = g(time) + wxyz(φ^" + format(getBuyableAmount("g", 31)) + ")⋅pU⋅WT⋅h(t)"
                    }
                    else if (hasUpgrade("au",15)) {
                        return "g(time+WT) = g(time) + wxyz⋅pU⋅WT⋅h(t)^" + format(tmp.au.upgrades[15].effect)
                    }
                    else if (hasAchievement("A", 101)) {
                        return "g(time+WT) = g(time) + wxyz⋅pU⋅WT⋅h(t)" 
                    }
                    else if (hasUpgrade("u", 35)) {
                        return "g(time+WT) = g(time) + wxyz⋅pU⋅WT" 
                    }
                    else if (hasUpgrade("p", 14)) {
                        return "g(time+WT) = g(time) + wxyz⋅WT" 
                    }
                    return "g(time+WT) = g(time) + wxyz⋅WT⋅0.01"
                }],
                "blank",
                "clickables",
                "buyables"
            ],
        },
    },
    name: "g of t", 
    symbol: "g",
    color: "#BF40BF",
    resource: "g(t)",
    baseResource: "PP",
    requires: new Decimal(1), 
    baseAmount() {return player["p"].points},
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    passiveGeneration() { return true }, 
    type: "normal",
    clickables: {
        11: {
            display() {return "Buy Max"},
            canClick() {return true},
            onClick() {
                if (getClickableState("g", 11) == false) 
                    {setClickableState("g", 11, true)}
                else if (getClickableState("g", 11) == true) 
                    {setClickableState("g", 11, false)}
                //return buyMaxBuyable("f", 22),  buyMaxBuyable("f", 21),  buyMaxBuyable("f", 12),  buyMaxBuyable("f", 11)
            },
            style() {
                if (getClickableState("g", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("g", 11) == true) 
                    return {'background-color': '#BF40BF',}
            },
            unlocked() {return hasAchievement("A", 56)}
        }
    },
    buyables: {
        11: {
            title() {return "'w' Variable"},
            cost(x) { return new Decimal(1).mul(new Decimal(2).pow(x))},
            display() { return "Increase the value of 'w' Variable <br> w = " + format(tmp.g.buyables[11].effect) + " (bought:" + format(getBuyableAmount("g", 11)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("g", 11))) + " PP"},
            canAfford() { return player["p"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("g", 11) == false) {
                    player["p"].points = player["p"].points.sub(this.cost())
                    setBuyableAmount("g", 11, getBuyableAmount("g", 11).add(1))
                }
                else if (getClickableState("g", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["p"].points.abs(), this.cost(), 2)
                    subCost(2, getBuyableAmount("g", 11), 1)
                    player["p"].points = player["p"].points.sub(sub)
                    setBuyableAmount("g", 11, getBuyableAmount("g", 11).add(max))
                }
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
                if (getClickableState("g", 11) == false) {
                    player["p"].points = player["p"].points.sub(this.cost())
                    setBuyableAmount("g", 12, getBuyableAmount("g", 12).add(1))
                }
                else if (getClickableState("g", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["p"].points.abs(), this.cost(), 2)
                    subCost(2, getBuyableAmount("g", 12), 100)
                    player["p"].points = player["p"].points.sub(sub)
                    setBuyableAmount("g", 12, getBuyableAmount("g", 12).add(max))
                }
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
                if (getClickableState("g", 11) == false) {
                    player["p"].points = player["p"].points.sub(this.cost())
                    setBuyableAmount("g", 21, getBuyableAmount("g", 21).add(1))
                }
                else if (getClickableState("g", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["p"].points.abs(), this.cost(), 2)
                    subCost(2, getBuyableAmount("g", 21), 10000)
                    player["p"].points = player["p"].points.sub(sub)
                    setBuyableAmount("g", 21, getBuyableAmount("g", 21).add(max))
                }
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
                if (getClickableState("g", 11) == false) {
                    player["p"].points = player["p"].points.sub(this.cost())
                    setBuyableAmount("g", 22, getBuyableAmount("g", 22).add(1))
                }
                else if (getClickableState("g", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["p"].points.abs(), this.cost(), 2)
                    subCost(2, getBuyableAmount("g", 22), 1000000)
                    player["p"].points = player["p"].points.sub(sub)
                    setBuyableAmount("g", 22, getBuyableAmount("g", 22).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("g", 22))
                return eff
            },
        },
        31: {
            title() {return "Golden ratio"},
            cost(x) { return new Decimal(1).mul(new Decimal(1000).pow(x))},
            display() { return "Increase the exponent of 'φ' <br> Currently = " + format(tmp.g.buyables[31].effect) + " (bought:" + format(getBuyableAmount("g", 31)) + ") <br> Value = " + format(new Decimal(1.61803).pow(tmp.g.buyables[31].effect)) + "<br> Cost: " + format(this.cost(getBuyableAmount("g", 31))) + " PP"},
            canAfford() { return player["p"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("g", 11) == false) {
                    player["p"].points = player["p"].points.sub(this.cost())
                    setBuyableAmount("g", 31, getBuyableAmount("g", 31).add(1))
                }
                else if (getClickableState("g", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["p"].points.abs(), this.cost(), 1000)
                    subCost(1000, getBuyableAmount("g", 31), 1)
                    player["p"].points = player["p"].points.sub(new Decimal(sub))
                    setBuyableAmount("g", 31, getBuyableAmount("g", 31).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(0)
                eff = eff.add(getBuyableAmount("g", 31))
                return eff
            },
            unlocked() {
                if (inChallenge("inf",92)) return false 
                else if (hasUpgrade("res",162)) return true
                else return false
            }
        },
    },
    automate() {
        return (getClickableState("auto", 101) ? (buyBuyable("g", 11),buyBuyable("g", 12),buyBuyable("g", 21),buyBuyable("g", 22)) : false), (getClickableState("auto", 102) ? buyBuyable("g", 31) : false)
    },
    update() {
        if (tmp.g.clickables[11].unlocked && getClickableState("auto", 11) == true) {
            setClickableState("g", 11, true)
        }
    },
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
        if (hasUpgrade("res",162)) mult = mult.mul(new Decimal(1.61803).pow(tmp.g.buyables[31].effect))
        mult = mult.mul(player["pu"].points)
        mult = mult.mul(tmp.tmach.buyables[12].effect)
        mult = mult.mul(player["h"].points.pow(htPow()))
        if (inChallenge("inf",91)) mult = mult.mul(0)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    exponent: 1, 
    position: 2, 
    row: 1, 
    displayRow: 2,
    branches: ["p","f"],
    layerShown() {
        if (inChallenge("inf", 91)) return false
        else return player["f"].best.gte(1e18) || hasAchievement("A", 51)
    },
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("g", keep);
        }
        player["g"].points = player["g"].points.pow(0)
    },
})

function htPow() {
    pow = new Decimal(1)
    if (hasUpgrade("au", 15)) pow = pow.mul(upgradeEffect("au",15))
    return pow
}