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
    name: "research", 
    symbol: "R",
    color: "#234F1E",
    resource: "Knowledge", 
    baseResource: "f(t)", 
    requires: new Decimal(1),
    baseAmount() {return player.points},
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration() { return true },
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("res", keep);
        if (player["p"].total.gte(1)) player[this.layer].upgrades = player[this.layer].upgrades.concat([15]);
        }
    },
    type: "normal", 
    clickables: {
        11: {
            display() {return "Buy Max"},
            canClick() {return true},
            onClick() {
                if (getClickableState("res", 11) == false)
                    {setClickableState("res", 11, true)}
                else if (getClickableState("res", 11) == true)
                    {setClickableState("res", 11, false)}
                else {setClickableState("res", 11, false)}
                },
            style() {
                if (getClickableState("res", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("res", 11) == true) 
                    return {'background-color': '#234F1E',}
            },
            unlocked() {return hasAchievement("A", 37)}
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
                    getMax(player["f"].points.abs(), this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("res", 11), 100000000)
                    player["f"].points = player["f"].points.sub(new Decimal(sub))
                    setBuyableAmount("res", 11, getBuyableAmount("res", 11).add(new Decimal(max)))
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
            display() { 
                if (getBuyableAmount("res", 12).lte(10000)) {
                    return "Increase the value of knowlege gain multiplicatively (x" + format(tmp.res.upgrades[25].effect.add(1.05)) + ") <br> Cap: ^0.5 at 10,000. <br> Currently: " + format(tmp.res.buyables[12].effect) + " (bought:" + format(getBuyableAmount("res", 12)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("res", 12)))
                }
                else if (getBuyableAmount("res", 12).gte(10000)) {
                    return "Increase the value of knowlege gain multiplicatively (x" + format(tmp.res.upgrades[25].effect.add(1.05).pow(0.5)) + ")<br> Cap: ^0.5 at 10,000. <br> Currently: " + format(tmp.res.buyables[12].effect) + " (bought:" + format(getBuyableAmount("res", 12)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("res", 12)))
                }
            },
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["f"].points = player["f"].points.sub(this.cost())
                    setBuyableAmount("res", 12, getBuyableAmount("res", 12).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["f"].points.abs(), this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("res", 12), 100000000)
                    player["f"].points = player["f"].points.sub(new Decimal(sub))
                    setBuyableAmount("res", 12, getBuyableAmount("res", 12).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(1)
                if (getBuyableAmount("res", 12).lte(10000)) {
                    eff = eff.mul((new Decimal(1.05).add(upgradeEffect("res", 25))).pow(getBuyableAmount("res", 12)))
                }
                else if (getBuyableAmount("res", 12).gte(10000)) {
                    eff = eff.mul((new Decimal(1.05).add(upgradeEffect("res", 25))).pow(10000)).mul(((new Decimal(1.05).add(upgradeEffect("res", 25))).pow(0.5)).pow(getBuyableAmount("res", 12).sub(10000)))
                }
                return eff
            },
        },
        21: {
            title() {return "'U' Variable Upgrade"},
            cost(x) { return new Decimal(1).mul(new Decimal(10).pow(x))},
            display() { 
                if (getBuyableAmount("res", 21).lte(1000)) {
                    return "x" + format(new Decimal(2).add(tmp.res.upgrades[22].effect)) + " 'U' variable value <br> Cap: ^" + format(new Decimal(0.5).add(upgradeEffect("res",35))) + " at 1,000 <br> Currently: " + format(tmp.res.buyables[21].effect) + " (bought:" + format(getBuyableAmount("res", 21)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 21))) + " Knowledge"
                }
                if (getBuyableAmount("res", 21).gte(1000)) {
                    return "x" + format(new Decimal(2).add(tmp.res.upgrades[22].effect).pow(0.5)) +" 'U' variable value <br> Cap: ^" + format(new Decimal(0.5).add(upgradeEffect("res",35))) + " at 1,000 <br> Currently: " + format(tmp.res.buyables[21].effect) + " (bought:" + format(getBuyableAmount("res", 21)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 21))) + " Knowledge"
                }
            },
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["res"].points = player["res"].points.sub(this.cost())
                    setBuyableAmount("res", 21, getBuyableAmount("res", 21).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["res"].points.abs(), this.cost(), 10)
                    subCost(10, getBuyableAmount("res", 21), 1)
                    player["res"].points = player["res"].points.sub(new Decimal(sub))
                    setBuyableAmount("res", 21, getBuyableAmount("res", 21).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(1)
                if (getBuyableAmount("res", 21).lte(1000)) {
                    eff = eff.mul(new Decimal(2).add(upgradeEffect("res", 22))).pow(getBuyableAmount("res", 21))
                }
                if (getBuyableAmount("res", 21).gte(1000)) {
                    eff = eff.mul((new Decimal(2).add(upgradeEffect("res", 22))).pow(1000)).mul((new Decimal(2).add(upgradeEffect("res", 22)).pow(new Decimal(0.5).add(upgradeEffect("res",35)))).pow(getBuyableAmount("res", 21).sub(1000)))
                }
                return eff
            },
            unlocked() {
                if (inChallenge("inf", 42)) {return false} 
                else {return true}
            },
            style(){ if (player["res"].points.gte(this.cost())) return {'background-color': '#FFE338',} }
        },
        22: {
            title() {return "'pU' Variable Upgrade"},
            cost(x) { return new Decimal(1e60).mul(new Decimal(1000).pow(x))},
            display() { 
                if (getBuyableAmount("res", 22).lte(1000)) {
                    return "x" + format(new Decimal(2)) + " 'pU' variable value <br> Cap: ^" + format(new Decimal(0.5).add(upgradeEffect("res",35))) + " at 1,000 <br> Currently: " + format(tmp.res.buyables[22].effect) + " (bought:" + format(getBuyableAmount("res", 22)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 22))) + " Knowledge"
                }
                if (getBuyableAmount("res", 22).gte(1000)) {
                    return "x" + format(new Decimal(2).pow(0.5)) + " 'pU' variable value <br> Cap: ^" + format(new Decimal(0.5).add(upgradeEffect("res",35))) + " at 1,000 <br> Currently: " + format(tmp.res.buyables[22].effect) + " (bought:" + format(getBuyableAmount("res", 22)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 22))) + " Knowledge"
                }
            },
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 11) == false) {
                    player["res"].points = player["res"].points.sub(this.cost())
                    setBuyableAmount("res", 22, getBuyableAmount("res", 22).add(1))
                }
                else if (getClickableState("res", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["res"].points.abs(), this.cost(), 1000)
                    subCost(1000, getBuyableAmount("res", 22), 1e60)
                    player["res"].points = player["res"].points.sub(new Decimal(sub))
                    setBuyableAmount("res", 22, getBuyableAmount("res", 22).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(1)
                if (getBuyableAmount("res", 22).lte(1000)) {
                    eff = eff.mul(new Decimal(2).pow(getBuyableAmount("res", 22)))
                }
                if (getBuyableAmount("res", 22).gte(1000)) {
                    eff = eff.mul(new Decimal(2).pow(1000)).mul((new Decimal(2).pow(new Decimal(0.5).add(upgradeEffect("res",35)))).pow(getBuyableAmount("res", 22).sub(1000)))
                }
                return eff
            },
            unlocked() {
                if (inChallenge("inf", 41)) {return false} 
                else if (hasUpgrade("pu", 15)) {return true} 
                else {return false}
            },
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
                    getMax(player["res"].points.abs(), this.cost(), 1.0964)
                    subCost(1.0964, getBuyableAmount("res", 31), 1)
                    player["res"].points = player["res"].points.sub(new Decimal(sub))
                    setBuyableAmount("res", 31, getBuyableAmount("res", 31).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(upgradeEffect("res", 21))
                eff = eff.add(upgradeEffect("res", 24))
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
                    getMax(player["res"].points.abs(), this.cost(), 1.0964)
                    subCost(1.0964, getBuyableAmount("res", 32), 1)
                    player["res"].points = player["res"].points.sub(new Decimal(sub))
                    setBuyableAmount("res", 32, getBuyableAmount("res", 32).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(upgradeEffect("res", 21))
                eff = eff.add(upgradeEffect("res", 24))
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
                    getMax(player["res"].points.abs(), this.cost(), 1.0964)
                    subCost(1.0964, getBuyableAmount("res", 41), 1)
                    player["res"].points = player["res"].points.sub(sub)
                    setBuyableAmount("res", 41, getBuyableAmount("res", 41).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(upgradeEffect("res", 21))
                eff = eff.add(upgradeEffect("res", 24))
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
                    getMax(player["res"].points.abs(), this.cost(), 1.0964)
                    subCost(1.0964, getBuyableAmount("res", 42), 1)
                    player["res"].points = player["res"].points.sub(sub)
                    setBuyableAmount("res", 42, getBuyableAmount("res", 42).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(upgradeEffect("res", 21))
                eff = eff.add(upgradeEffect("res", 24))
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
                if (hasUpgrade("res", 12)) eff = eff.mul((player.points.abs().add(10)).log10())
                if (hasUpgrade("res", 31)) eff = eff.pow(upgradeEffect("res", 31))
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
                if (hasUpgrade("res", 13)) eff = eff.mul((player["f"].points.abs().add(10)).log10().pow(0.5))
                if (hasUpgrade("res", 31)) eff = eff.pow(upgradeEffect("res", 31))
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
                if (hasUpgrade("res", 14)) eff = eff.mul((((player["res"].points.abs()).pow(0.8)).add(10)).log10())
                if (hasUpgrade("res", 31)) eff = eff.pow(upgradeEffect("res", 31))
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
                if (hasUpgrade("res", 23)) eff = eff.mul((player["tmach"].points.abs().add(10)).log10())
                if (hasUpgrade("res", 31)) eff = eff.pow(upgradeEffect("res", 31))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 23))
            },
            unlocked() {return hasUpgrade("p", 11)},
        },
        24: {
            title: "Res-Upgrade 2.4",
            description() {return "+" + format(new Decimal(0.2)) + "% 'a, b, c & d' Variable Upgrade boost every 'U' Variable Upgrade."},
            cost: new Decimal(1000000000),
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("res", 24)) eff = eff.add(getBuyableAmount("res", 21).mul(new Decimal(0.2)))
                return eff
            },
            effectDisplay() {
                return "+" + format(upgradeEffect("res", 24)) + "%"
            },
            unlocked() {return hasUpgrade("p", 11)},
        },
        25: {
            title: "Res-Upgrade 2.5",
            description: "+ x0.0001 Multiplicative Research Upgrade every Additive Research Upgrade. <br> Cap = + ^0.1",
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
        31: {
            title: "Res-Upgrade 3.1",
            description: "+ ^3 Res-Upgrade 1.2, 1.3, 1.4, and 2.3 power every 3rd row Res-Upgrade bought.",
            cost: new Decimal(2).pow(1024),
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res", 31)) {
                    if (hasUpgrade("res", 31)) eff = eff.add(3)
                    if (hasUpgrade("res", 32)) eff = eff.add(3)
                    if (hasUpgrade("res", 33)) eff = eff.add(3)
                    if (hasUpgrade("res", 34)) eff = eff.add(3)
                    if (hasUpgrade("res", 35)) eff = eff.add(3)
                }
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("res", 31))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        32: {
            title: "Res-Upgrade 3.2",
            description: "Multiply gained Knowledge based on Distorion. <br> Cap = x1.80e308",
            cost: new Decimal(2).pow(2304),
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res", 32)) eff = eff.mul(player["four"].points.abs().pow(player["four"].points.abs().add(10).log10())).add(1)
                if (eff.lte(new Decimal(2).pow(1024))){
                    return eff
                }
                else if (eff.gte(new Decimal(2).pow(1024))){
                    eff = new Decimal(2).pow(1024)
                    eff = eff.mul(((player["four"].points.abs().pow(player["four"].points.abs().add(10).log10())).add(1).div(new Decimal(2).pow(1024))).log10().pow(player["four"].points.abs().add(10).log10().pow(0.75)))
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 32))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        33: {
            title: "Res-Upgrade 3.3",
            description: "Multiply gained PP based on Knowledge",
            cost: new Decimal(2).pow(5184),
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res", 33)) eff = eff.mul(player["res"].points.abs().add(1))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 33))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        34: {
            title: "Res-Upgrade 3.4",
            description: "x1.001 Knowledge gain based on variable upgrade.",
            cost: new Decimal(2).pow(11664),
            unlocked() {return hasUpgrade("four", 12)},
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res", 34)) eff = eff.mul(new Decimal(1.001).pow(getBuyableAmount("res",31).add(getBuyableAmount("res",32)).add(getBuyableAmount("res",41)).add(getBuyableAmount("res",42))))
                if (eff.lte(new Decimal(2).pow(1024))){
                    return eff
                }
                else if (eff.gte(new Decimal(2).pow(1024))){
                    eff = new Decimal(2).pow(1024)
                    eff = eff.mul(((new Decimal(1.001).pow(getBuyableAmount("res",31).add(getBuyableAmount("res",32)).add(getBuyableAmount("res",41)).add(getBuyableAmount("res",42)))).div(new Decimal(2).pow(1024))).pow(0.5))
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 34))
            },
        },
        35: {
            title: "Res-Upgrade 3.5",
            description: "Change 'U' and 'pU' variable upgrade's cap to ^0.67",
            cost: new Decimal(2).pow(26244),
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("res",35)) eff = eff.add(1/6)
                return eff
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
    },
    automate() {
        return (getClickableState("auto", 31) ? (buyBuyable("res", 11),buyBuyable("res", 12)) : false), (getClickableState("auto", 32) ? buyBuyable("res", 21) : false), (getClickableState("auto", 33) ? buyBuyable("res", 22) : false), (getClickableState("auto", 34) ? (buyBuyable("res", 31),buyBuyable("res", 32),buyBuyable("res", 41),buyBuyable("res", 42)) : false)
    },
    update() {
        if (tmp.res.clickables[11].unlocked && getClickableState("auto", 11) == true) {
            setClickableState("res", 11, true)
        }
        if (inChallenge("inf", 72)) {
            player["res"].points = player["res"].points.mul(player["res"].points.pow(-0.38)).add(1)
        }
    },
    getResetGain() {
        gain = new Decimal(0)
        gain = gain.add(tmp.res.buyables[11].effect)
        gain = gain.mul(tmp.res.gainMult)
        gain = gain.pow(tmp.res.gainExp)
        if (inChallenge("inf", 51)) gain = gain.mul(0)
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
        mult = mult.mul(tmp.res.upgrades[32].effect)
        mult = mult.mul(tmp.res.upgrades[34].effect)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    exponent: 1, 
    position: 1, 
    row: 0, 
    displayRow: 1,
    branches: ["f"],
    layerShown(){ 
        if (inChallenge("inf", 51)) return "ghost"
        else if (hasUpgrade("u", 14) || hasAchievement("A", 31)) return true
        else return false
    }, 
})