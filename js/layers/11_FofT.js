addLayer("f", {
    tabFormat: {
        "Variables": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b>" + format(getResetGain("f")) + "</b></h2> f(t) Per Second" },],
                "blank",
                ["display-text", function() {
                if (inChallenge("inf", 21)) {
                    return "f(time+WT) = f(time) + abd⋅U⋅WT⋅g(t)"
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
    name: "f of t", 
    symbol: "f",
    color: "#63C5DA", 
    resource: "f(t)",
    baseResource: "time",
    requires: new Decimal(1),
    baseAmount() {return player.points}, 
    startData() { return {
        unlocked: true,
		points: new Decimal(1.001),
    }},
    passiveGeneration() { return true },
    type: "normal", 
    clickables: {
        11: {
            display() {return "Buy Max"},
            canClick() {return true},
            onClick() {
                if (getClickableState("f", 11) == false)
                    {setClickableState("f", 11, true)}
                else if (getClickableState("f", 11) == true)
                    {setClickableState("f", 11, false)}
                },
            style() {
                if (getClickableState("f", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("f", 11) == true) 
                    return {'background-color': '#63C5DA',}
            },
            unlocked() {return hasAchievement("A", 18)}
        }
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
                    getMax(player["f"].points.abs(), this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("f", 11), 1)
                    player["f"].points = player["f"].points.sub(new Decimal(sub))
                    setBuyableAmount("f", 11, getBuyableAmount("f", 11).add(new Decimal(max)))
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
                    getMax(player["f"].points.abs(), this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("f", 12), 100)
                    player["f"].points = player["f"].points.sub(new Decimal(sub))
                    setBuyableAmount("f", 12, getBuyableAmount("f", 12).add(new Decimal(max)))
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
                    getMax(player["f"].points.abs(), this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("f", 21), 10000)
                    player["f"].points = player["f"].points.sub(new Decimal(sub))
                    setBuyableAmount("f", 21, getBuyableAmount("f", 21).add(new Decimal(max)))
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
                    getMax(player["f"].points.abs(), this.cost(), 1.5)
                    subCost(1.5, getBuyableAmount("f", 22), 1000000)
                    player["f"].points = player["f"].points.sub(new Decimal(sub))
                    setBuyableAmount("f", 22, getBuyableAmount("f", 22).add(new Decimal(max)))
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
    },
    automate() {
        return (getClickableState("auto", 21) ? buyBuyable("f", 11) : false), (getClickableState("auto", 22) ? buyBuyable("f", 12) : false), (getClickableState("auto", 23) ? buyBuyable("f", 21) : false), (getClickableState("auto", 24) ? buyBuyable("f", 22) : false)
    },
    update() {
        if (tmp.f.clickables[11].unlocked && getClickableState("auto", 11) == true) {
            setClickableState("f", 11, true)
        }
        if (inChallenge("inf", 71)||inChallenge("inf", 72)) {
            player["f"].points = player["f"].points.mul(player["f"].points.pow(-0.5)).add(1)
        }
    },
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
        exp = new Decimal(1)
        if (inChallenge("four", 11)) exp = exp.mul(0.25)
        if (inChallenge("inf", 31)) exp = exp.mul(0.75)
        return exp
    },
    exponent: 1, 
    position: 1, 
    row: 0,
    displayRow: 0,
    layerShown(){return true},
})