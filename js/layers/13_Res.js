addLayer("res", {
    tabFormat: {
        "Research": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b>" + format(getResetGain("res")) + "</b></h2> Knowledge Per Second" },],
                "blank",
                ["display-text", function() { return "You Have <h2><b>" + format(player["f"].points) + " f(t)</b></h2>" },],
                "blank",
                "clickables",
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
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
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
        mult = mult.mul(tmp.res.upgrades[23].effect)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    passiveGeneration() { return true },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    displayRow: 1,
    layerShown(){return hasUpgrade("u", 14) || hasAchievement("A", 31)}, 
    branches: ["f"],
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("res", keep);
        if  (player["p"].total.gte(1)) player[this.layer].upgrades = player[this.layer].upgrades.concat([15]);
        }
    },
    clickables: {
        11: {
            display() {return "Buy Max"},
            canClick() {return true},
            onClick() {
                if (getClickableState("res", 11) == false) 
                    {setClickableState("res", 11, true)}
                else if (getClickableState("res", 11) == true) 
                    {setClickableState("res", 11, false)}
                //return buyMaxBuyable("f", 22),  buyMaxBuyable("f", 21),  buyMaxBuyable("f", 12),  buyMaxBuyable("f", 11)
            },
            style() {
                if (getClickableState("res", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("res", 11) == true) 
                    return {'background-color': '#234F1E',}
            }
        }
    },
    buyables: {
        11: {
            title() {return "Additive Research Upgrade"},
            cost(x) { return new Decimal(100000000).mul(new Decimal(1.5).pow(x))},
            display() { return "Increase the value of knowlege gain additively (+0.01)<br> Currently: " + format(tmp.res.buyables[11].effect) + " (bought:" + format(getBuyableAmount("res", 11)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("res", 11)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["f"].points = player["f"].points.sub(this.cost())
                    setBuyableAmount("res", 11, getBuyableAmount("res", 11).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["f"].points, this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("res", 11), 100000000)
                    player["f"].points = player["f"].points.sub(sub)
                    setBuyableAmount("res", 11, getBuyableAmount("res", 11).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("res", 11).mul(0.01).sub(1))
                return eff
            },
        },
        12: {
            title() {return "Multiplicative Research Upgrade"},
            cost(x) { return new Decimal(100000000).mul(new Decimal(1.5).pow(x))},
            display() { return "Increase the value of knowlege gain multiplicatively (x" + format(tmp.res.upgrades[25].effect.add(1.05)) + ")<br> Currently: " + format(tmp.res.buyables[12].effect) + " (bought:" + format(getBuyableAmount("res", 12)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("res", 12)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["f"].points = player["f"].points.sub(this.cost())
                    setBuyableAmount("res", 12, getBuyableAmount("res", 12).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["f"].points, this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("res", 12), 100000000)
                    player["f"].points = player["f"].points.sub(sub)
                    setBuyableAmount("res", 12, getBuyableAmount("res", 12).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul((tmp.res.upgrades[25].effect.add(1.05))**(getBuyableAmount("res", 12)))
                return eff
            },
        },
        21: {
            title() {return "'U' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(10).pow(x))},
            display() { return "x" + format(tmp.res.upgrades[22].effect.add(2)) +" 'U' variable value  <br> Currently: " + format(tmp.res.buyables[21].effect) + " (bought:" + format(getBuyableAmount("res", 21)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 21))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["res"].points = player["res"].points.sub(this.cost())
                    setBuyableAmount("res", 21, getBuyableAmount("res", 21).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["res"].points, this.cost(), 10)
                    subCost(10, getBuyableAmount("res", 21), 1)
                    player["res"].points = player["res"].points.sub(sub)
                    setBuyableAmount("res", 21, getBuyableAmount("res", 21).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(2).add(tmp.res.upgrades[22].effect)).pow(getBuyableAmount("res", 21))
                return eff
            },
            style(){ if (player["res"].points.gte(this.cost())) return {'background-color': '#FFE338',} }
        },
        22: {
            title() {return "'pU' Variable Upgrade"},
            cost(x) { return new Decimal(1e60).mul(new Decimal(1000).pow(x))},
            display() { return "x2 'pU' variable value  <br> Currently: " + format(tmp.res.buyables[22].effect) + " (bought:" + format(getBuyableAmount("res", 22)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 22))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["res"].points = player["res"].points.sub(this.cost())
                    setBuyableAmount("res", 22, getBuyableAmount("res", 22).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["res"].points, this.cost(), 1000)
                    subCost(1000, getBuyableAmount("res", 22), 1e60)
                    player["res"].points = player["res"].points.sub(sub)
                    setBuyableAmount("res", 22, getBuyableAmount("res", 22).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(2).pow(getBuyableAmount("res", 22)))
                return eff
            },
            unlocked() {return hasUpgrade("pu", 15)},
            style(){ if (player["res"].points.gte(this.cost())) return {'background-color': '#970439',} }
        },
        31: {
            title() {return "'a' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(1.0964).pow(x))},
            display() { return "+" + format(tmp.res.upgrades[21].effect.add(tmp.res.upgrades[24].effect).add(1)) +"% 'a' variable value  <br> Currently: " + format(tmp.res.buyables[31].effect) + " (bought:" + format(getBuyableAmount("res", 31)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 31))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["res"].points = player["res"].points.sub(this.cost())
                    setBuyableAmount("res", 31, getBuyableAmount("res", 31).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["res"].points, this.cost(), 1.0964)
                    subCost(1.0964, getBuyableAmount("res", 31), 1)
                    player["res"].points = player["res"].points.sub(sub)
                    setBuyableAmount("res", 31, getBuyableAmount("res", 31).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(tmp.res.upgrades[21].effect)
                eff = eff.add(tmp.res.upgrades[24].effect)
                eff = eff.mul((getBuyableAmount("res", 31)).mul(0.01)).add(1)
                return eff
            },
            style(){ if (player["res"].points.gte(this.cost())) return {'background-color': '#63C5DA',} }
        },
        32: {
            title() {return "'b' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(1.0964).pow(x))},
            display() { return "+" + format(tmp.res.upgrades[21].effect.add(tmp.res.upgrades[24].effect).add(1)) +"% 'b' variable value  <br> Currently: " + format(tmp.res.buyables[32].effect) + " (bought:" + format(getBuyableAmount("res", 32)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 32))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["res"].points = player["res"].points.sub(this.cost())
                    setBuyableAmount("res", 32, getBuyableAmount("res", 32).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["res"].points, this.cost(), 1.0964)
                    subCost(1.0964, getBuyableAmount("res", 32), 1)
                    player["res"].points = player["res"].points.sub(sub)
                    setBuyableAmount("res", 32, getBuyableAmount("res", 32).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(tmp.res.upgrades[21].effect)
                eff = eff.add(tmp.res.upgrades[24].effect)
                eff = eff.mul((getBuyableAmount("res", 32)).mul(0.01)).add(1)
                return eff
            },
            unlocked() {
                if (inChallenge("inf", 22)) {return false}
                else {return true}
            },
            style(){ if (player["res"].points.gte(this.cost())) return {'background-color': '#63C5DA',} }
        },
        41: {
            title() {return "'c' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(1.0964).pow(x))},
            display() { return "+" + format(tmp.res.upgrades[21].effect.add(tmp.res.upgrades[24].effect).add(1)) +"% 'c' variable value  <br> Currently: " + format(tmp.res.buyables[41].effect) + " (bought:" + format(getBuyableAmount("res", 41)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 41))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["res"].points = player["res"].points.sub(this.cost())
                    setBuyableAmount("res", 41, getBuyableAmount("res", 41).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["res"].points, this.cost(), 1.0964)
                    subCost(1.0964, getBuyableAmount("res", 41), 1)
                    player["res"].points = player["res"].points.sub(sub)
                    setBuyableAmount("res", 41, getBuyableAmount("res", 41).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(tmp.res.upgrades[21].effect)
                eff = eff.add(tmp.res.upgrades[24].effect)
                eff = eff.mul((getBuyableAmount("res", 41)).mul(0.01)).add(1)
                return eff
            },
            unlocked() {
                if (inChallenge("inf", 21)) {return false}
                else if (inChallenge("inf", 22)) {return false}
                else {return true}
            },
            style(){ if (player["res"].points.gte(this.cost())) return {'background-color': '#63C5DA',} }
        },
        42: {
            title() {return "'d' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(1.0964).pow(x))},
            display() { return "+" + format(tmp.res.upgrades[21].effect.add(tmp.res.upgrades[24].effect).add(1)) +"% 'd' variable value  <br> Currently: " + format(tmp.res.buyables[42].effect) + " (bought:" + format(getBuyableAmount("res", 42)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 42))) + " Knowledge"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["res"].points = player["res"].points.sub(this.cost())
                    setBuyableAmount("res", 42, getBuyableAmount("res", 42).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["res"].points, this.cost(), 1.0964)
                    subCost(1.0964, getBuyableAmount("res", 42), 1)
                    player["res"].points = player["res"].points.sub(sub)
                    setBuyableAmount("res", 42, getBuyableAmount("res", 42).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(tmp.res.upgrades[21].effect)
                eff = eff.add(tmp.res.upgrades[24].effect)
                eff = eff.mul((getBuyableAmount("res", 42)).mul(0.01)).add(1)
                return eff
            },
            unlocked() {
                if (inChallenge("inf", 22)) {return false}
                else {return true}
            },
            style(){ if (player["res"].points.gte(this.cost())) return {'background-color': '#63C5DA',} }
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
        21: {
            title: "Res-Upgrade 2.1",
            description: "+1% 'a, b, c & d' Variable Upgrade boost every Res-Upgrades bought in 2nd row.",
            cost: new Decimal(1000000),
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("res", 21)) {
                    if (hasUpgrade("res", 21)) eff = eff.add(1)
                    if (hasUpgrade("res", 22)) eff = eff.add(1)
                    if (hasUpgrade("res", 23)) eff = eff.add(1)
                    if (hasUpgrade("res", 24)) eff = eff.add(1)
                    if (hasUpgrade("res", 25)) eff = eff.add(1)
                }
                return eff
            },
            effectDisplay() {
                return "+" + format(upgradeEffect("res", 21)) + "%"
            },
            unlocked() {return hasUpgrade("p", 11)},
        },
        22: {
            title: "Res-Upgrade 2.2",
            description: "Increase the boost of 'U' Variable Upgrade to x2.5",
            cost: new Decimal(10000000),
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("res", 22)) eff = eff.add(0.5)
                return eff
            },
            unlocked() {return hasUpgrade("p", 11)},
        },
        23: {
            title: "Res-Upgrade 2.3",
            description: "Multiply your Knowledge gain based on Time Fragments",
            cost: new Decimal(100000000),
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res", 23)) eff = eff.mul((player["tmach"].points.add(10)).log10())
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 23))
            },
            unlocked() {return hasUpgrade("p", 11)},
        },
        24: {
            title: "Res-Upgrade 2.4",
            description: "+0.2% 'a, b, c & d' Variable Upgrade boost every 'U' Variable Upgrade.",
            cost: new Decimal(1000000000),
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("res", 24)) eff = eff.add(getBuyableAmount("res", 21).mul(0.2))
                return eff
            },
            effectDisplay() {
                return "+" + format(upgradeEffect("res", 24)) + "%"
            },
            unlocked() {return hasUpgrade("p", 11)},
        },
        25: {
            title: "Res-Upgrade 2.5",
            description: "+ x0.0001 Multiplicative Research Upgrade every Additive Research Upgrade. <br> (Cap = + ^0.1)",
            cost: new Decimal(10000000000),
            effect() {
                eff = new Decimal(0)
                if (getBuyableAmount("res", 11).lte(1000)) {
                    if (hasUpgrade("res", 25)) eff = eff.add(getBuyableAmount("res", 11).mul(0.0001))
                }
                else if (getBuyableAmount("res", 11).gte(1000)) {
                    if (hasUpgrade("res", 25)) eff = eff.add(0.1)
                }
                return eff
            },
            effectDisplay() {
                return "+ x" + format(upgradeEffect("res", 25))
            },
            unlocked() {return hasUpgrade("p", 11)},
        },
    }
})