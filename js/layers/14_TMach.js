addLayer("tmach", {
    tabFormat: {
        "Time Machine": {
            content:[
                "main-display",
                ["display-text", function() { return "You are gaining <h2><b>" + format(tmp.tmach.getResetGain) + "</b></h2> Time Fragments Per Second" },],
                "blank",
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
                    if (getBuyableAmount("tmach", 21).gte(64)) {
                        return "You have greater than 64 Warp Warp Time,<br> its effect additive is changing based on Warp Warp Time Bought. <br> Currently: <h2> " + format((new Decimal(0.5).mul(16)).add(new Decimal(1/3).mul(16)).add(new Decimal(0.25).mul(32)).add(1)) + " + " + format((getBuyableAmount("tmach", 21).sub(64)).mul(new Decimal(0.25).pow(getBuyableAmount("tmach", 21).sub(64).div(4).add(10).log10()))) + "</h2>"
                    } 
                    else if (getBuyableAmount("tmach", 21).gte(32)) {
                        return "You have greater than 32 Warp Warp Time,<br> its effect additive is changed from +" + format(new Decimal(1/3)) + " to <h2>+" + format(new Decimal(0.25)) + "</h2><br>Next effect additive change is at 64 Warp Warp Time"
                    } 
                    else if (getBuyableAmount("tmach", 21).gte(16)) {
                        return "You have greater than 16 Warp Warp Time,<br> its effect additive is changed from +" + format(new Decimal(0.5)) + " to <h2>+" + format(new Decimal(1/3)) + "</h2><br>Next effect additive change is at 32 Warp Warp Time"
                    } 
                    else {
                        return "Warp Warp Time effect additive is <h2>+0.5</h2><br>Next effect additive change is at 16 Warp Warp Time"
                    }
                },],
                "blank",
                ["display-text", function() { if (hasUpgrade("p", 12)){return "You Have <h2><b>" + format(getBuyableAmount("tmach", 22)) + " T.M.G.E."} else {return "<h2>Locked..."} },],
                ["display-text", function() { 
                    if (getBuyableAmount("tmach", 22).gte(64)) {
                        return "You have greater than 64 T.M.G.E.,<br> its effect additive is changing based on T.M.G.E. Bought. <br> Currently: <h2>" + format(new Decimal(88/3).add(2)) + " + " + format((getBuyableAmount("tmach", 22).sub(64)).mul(new Decimal(1/3).pow(getBuyableAmount("tmach", 22).sub(64).div(4).add(10).log10()))) + "</h2>"
                    } 
                    else if (getBuyableAmount("tmach", 22).gte(32)) {
                        return "You have greater than 32 T.M.G.E.,<br> its effect additive is changed from +0.5 to <h2>+0.33...</h2><br>Next effect additive change is at 64 T.M.G.E."
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
    name: "time machine", 
    symbol: "TM",
    color: "#D0B49F",
    resource: "Time Fragments",
    baseResource: "f(t)", 
    requires: new Decimal(1),
    baseAmount() {return player.points},
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration() { return true },
    type: "normal",
    clickables: {
        11: {
            display() {
                if (hasUpgrade("pu", 11)) {return "Buy Max"}
                else {return "Buy Max <br> (Only Time Machine Generator and Time Warp)"}
            },
            canClick() {return true},
            onClick() {
                if (getClickableState("tmach", 11) == false)
                    {setClickableState("tmach", 11, true)}
                else if (getClickableState("tmach", 11) == true) 
                    {setClickableState("tmach", 11, false)}
                },
            style() {
                if (getClickableState("tmach", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("tmach", 11) == true) 
                    return {'background-color': '#D0B49F',}
            },
            unlocked() {
                return hasAchievement("A", 48)
            }
        }
    },
    buyables: {
        11: {
            title() {return "Time Machine Generator"},
            cost(x) { return new Decimal(1e16).mul(new Decimal(10).pow(upgradeEffect("res",133)).pow(x)) },
            display() { return "Increase Time Machine Fragments gained <br> Currently: " + format(tmp.tmach.buyables[11].effect) + " (bought:" + format(getBuyableAmount("tmach", 11)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("tmach", 11)))},
            canAfford() { return player["f"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("tmach", 11) == false) {
                    player["f"].points = player["f"].points.sub(this.cost())
                    setBuyableAmount("tmach", 11, getBuyableAmount("tmach", 11).add(1))
                }
                else if (getClickableState("tmach", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["f"].points.abs(), this.cost(), new Decimal(10).pow(upgradeEffect("res",133)))
                    subCost(new Decimal(10).pow(upgradeEffect("res",133)), getBuyableAmount("tmach", 11), 1e16)
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
            cost(x) { return new Decimal(1).mul(new Decimal(2).pow(upgradeEffect("res",133)).pow(x))},
            display() { return "Use Time Machine Fragments to speed up time <br> Currently: " + format(tmp.tmach.buyables[12].effect) + " (bought:" + format(getBuyableAmount("tmach", 12)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("tmach", 12))) + " Time Fragments"},
            canAfford() { return player["tmach"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("tmach", 11) == false) {
                    player["tmach"].points = player["tmach"].points.sub(this.cost())
                    setBuyableAmount("tmach", 12, getBuyableAmount("tmach", 12).add(1))
                }
                else if (getClickableState("tmach", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["tmach"].points.abs(), this.cost(), new Decimal(2).pow(upgradeEffect("res",133)))
                    subCost(new Decimal(2).pow(upgradeEffect("res",133)), getBuyableAmount("tmach", 12), 1)
                    player["tmach"].points = player["tmach"].points.sub(sub)
                    setBuyableAmount("tmach", 12, getBuyableAmount("tmach", 12).add(max))
                }
            },
            effect() { 
                eff = new Decimal(1)
                eff = eff.add(getBuyableAmount("tmach", 12))
                if (hasUpgrade("four", 11)) eff = eff.mul(tmp.four.upgrades[11].effect)
                if (hasUpgrade("four", 15)) eff = eff.mul(tmp.four.upgrades[15].effect)
                if (hasUpgrade("four", 21)) eff = eff.mul(tmp.four.upgrades[21].effect)
                if (hasUpgrade("four", 22)) eff = eff.mul(tmp.four.upgrades[22].effect)
                if (hasUpgrade("four", 23)) eff = eff.mul(tmp.four.upgrades[23].effect)
                if (hasUpgrade("four", 24)) eff = eff.mul(tmp.four.upgrades[24].effect)
                if (hasUpgrade("four", 25)) eff = eff.mul(tmp.four.upgrades[25].effect)
                eff = eff.pow(tmp.tmach.buyables[21].effect)
                return eff
            },
        },
        21: {
            title() {return "Warp Warp Time"},
            cost(x) { return new Decimal(5).add(new Decimal(5).mul(x))},
            display() { 
                if (hasUpgrade("p", 23)) {
                    return "Warp the time warper to warp the warped time more.<br> Currently: " + format(tmp.tmach.buyables[21].effect) + " (bought:" + format(getBuyableAmount("tmach", 21)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("tmach", 21))) + " Time Warps"
                }
                else {
                    return "Warp the time warper to warp the warped time more.<br><b>WARNING: Resets 'Time Fragments', 'f(t) value', 'Time Machine Generator' Buyable, & 'Warp Time' Buyable</b><br> Currently: " + format(tmp.tmach.buyables[21].effect) + " (bought:" + format(getBuyableAmount("tmach", 21)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("tmach", 21))) + " Time Warps"
                }
            },
            canAfford() { return getBuyableAmount("tmach", 12).gte(this.cost()) },
            buy() {
                if ((getClickableState("tmach", 11) == false) && hasUpgrade("pu", 11)) {
                    setBuyableAmount("tmach", 21, getBuyableAmount("tmach", 21).add(1))
                }
                else if ((getClickableState("tmach", 11) == true) && hasUpgrade("pu", 11)) {
                    max = new Decimal(0)
                    max = max.add((Decimal.floor(getBuyableAmount("tmach", 12).sub(this.cost()).div(5))).add(1))
                    setBuyableAmount("tmach", 21, getBuyableAmount("tmach", 21).add(max))
                }
                else {
                    setBuyableAmount("tmach", 21, getBuyableAmount("tmach", 21).add(1))
                }
                if (!hasUpgrade("p", 23)) {
                    player["f"].points = player["f"].points.pow(0).add(1)
                    player["tmach"].points = player["tmach"].points.mul(0)
                    setBuyableAmount("tmach", 11, getBuyableAmount("tmach", 11).mul(0))
                    setBuyableAmount("tmach", 12, getBuyableAmount("tmach", 12).mul(0))
                }
            },
            effect() { 
                eff = new Decimal(1)
                if (getBuyableAmount("tmach", 21).gte(64)) {
                    eff = eff.add(new Decimal(0.5).mul(16)).add(new Decimal(1/3).mul(16)).add(new Decimal(0.25).mul(32)).add((getBuyableAmount("tmach", 21).sub(64)).mul(new Decimal(0.25).pow(getBuyableAmount("tmach", 21).sub(64).div(4).add(10).log10())))
                }
                else if (getBuyableAmount("tmach", 21).gte(32)) {
                    eff = eff.add(new Decimal(0.5).mul(16)).add(new Decimal(1/3).mul(16)).add((getBuyableAmount("tmach", 21).sub(32)).mul(new Decimal(0.25)))
                }
                else if (getBuyableAmount("tmach", 21).gte(16)) {
                    eff = eff.add(new Decimal(0.5).mul(16)).add((getBuyableAmount("tmach", 21).sub(16)).mul(new Decimal(1/3)))
                }
                else {
                    eff = eff.add((getBuyableAmount("tmach", 21)).mul(new Decimal(0.5)))
                }
                return eff
            },
        },
        22: {
            title() {return "T.M.G.E."},
            cost(x) { return new Decimal(15).add(new Decimal(6).mul(x))},
            display() { 
                if (hasUpgrade("p", 23))  {
                    return "Name is too long, so I acronymed it. Basically increase the power of Time Machine Generator.<br> Currently: " + format(tmp.tmach.buyables[22].effect) + " (bought:" + format(getBuyableAmount("tmach", 22)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("tmach", 22))) + " Time Machine Generators"
                }
                else {
                    return "Name is too long, so I acronymed it. Basically increase the power of Time Machine Generator.<br><b>WARNING: Resets 'Time Fragments', 'f(t) value', 'Time Machine Generator' Buyable, & 'Warp Time' Buyable</b><br> Currently: " + format(tmp.tmach.buyables[22].effect) + " (bought:" + format(getBuyableAmount("tmach", 22)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("tmach", 22))) + " Time Machine Generators"
                }
            },
            canAfford() { return getBuyableAmount("tmach", 11).gte(this.cost()) },
            buy() {
                if ((getClickableState("tmach", 11) == false) &&  hasUpgrade("pu", 11)) {
                    setBuyableAmount("tmach", 22, getBuyableAmount("tmach", 22).add(1))
                }
                else if ((getClickableState("tmach", 11) == true) &&  hasUpgrade("pu", 11)) {
                    max = new Decimal(0)
                    max = max.add((Decimal.floor(getBuyableAmount("tmach", 11).sub(this.cost()).div(6))).add(1))
                    setBuyableAmount("tmach", 22, getBuyableAmount("tmach", 22).add(max))
                }
                else {
                    setBuyableAmount("tmach", 22, getBuyableAmount("tmach", 22).add(1))
                }
                if (!hasUpgrade("p", 23)) {
                    player["f"].points = player["f"].points.pow(0).add(1)
                    player["tmach"].points = player["tmach"].points.mul(0)
                    setBuyableAmount("tmach", 11, getBuyableAmount("tmach", 11).mul(0))
                    setBuyableAmount("tmach", 12, getBuyableAmount("tmach", 12).mul(0))
                }
            },
            effect() { 
                eff = new Decimal(2)
                if (getBuyableAmount("tmach", 22).gte(64)) {
                    eff = eff.add(new Decimal(2/3).mul(16)).add(new Decimal(0.5).mul(16)).add(new Decimal(1/3).mul(32)).add((getBuyableAmount("tmach", 22).sub(64)).mul(new Decimal(1/3).pow(getBuyableAmount("tmach", 22).sub(64).div(4).add(10).log10())))
                }
                else if (getBuyableAmount("tmach", 22).gte(32)) {
                    eff = eff.add(new Decimal(2/3).mul(16)).add(new Decimal(0.5).mul(16)).add((getBuyableAmount("tmach", 22).sub(32)).mul(1/3))
                }
                else if (getBuyableAmount("tmach", 22).gte(16)) {
                    eff = eff.add(new Decimal(2/3).mul(16)).add((getBuyableAmount("tmach", 22).sub(16)).mul(0.5))
                }
                else {
                    eff = eff.add((getBuyableAmount("tmach", 22)).mul(2/3))
                }
                return eff
            },
            unlocked() {return hasUpgrade("p", 12)},
        },
    },
    automate() {
        return (getClickableState("auto", 41) ? (buyBuyable("tmach", 11)) : false),(getClickableState("auto", 42) ? (buyBuyable("tmach", 12)) : false),(getClickableState("auto", 43) ? (buyBuyable("tmach", 21)) : false),(getClickableState("auto", 44) ? (buyBuyable("tmach", 22)) : false)
    },
    update() {
        if (tmp.tmach.clickables[11].unlocked && getClickableState("auto", 11) == true) {
            setClickableState("tmach", 11, true)
        }
        if (inChallenge("inf", 72)) {
            player["tmach"].points = player["tmach"].points.mul(player["tmach"].points.pow(-0.38)).add(1)
        }
    },
    getResetGain() {
        gain = new Decimal(0)
        gain = gain.add(tmp.tmach.buyables[11].effect)
        gain = gain.pow(tmp.tmach.gainExp)
        if (hasUpgrade("res",123)) gain = gain.mul(upgradeEffect("res",123))
        if (hasUpgrade("res",143)) gain = gain.mul(upgradeEffect("res",143))
        if (inChallenge("inf", 61)) gain = gain.mul(0)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (inChallenge("inf", 81)) exp = exp.mul(0.25)
        return exp
    },
    exponent: 1, 
    position: 5, 
    row: 0,
    displayRow: 1,
    branches: ["res"],
    layerShown(){
        if (inChallenge("inf", 61)) return false
        else if (hasUpgrade("res", 15) || hasAchievement("A", 41)) return true
        else return false
    }, 
})