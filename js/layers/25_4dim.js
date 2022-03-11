addLayer("four", {
    tabFormat: {
        "4th Dimension": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b>" + format(getResetGain("four")) + "</b></h2> Distortion Per Second" },],
                ["display-text", function() { return "<h3>Enter the 4th Dimension to gain Distortion." },],
                "blank",
                "challenges",
                "blank",
                "clickables",
                "buyables",
                ["display-text", function() { 
                    if (getBuyableAmount("four", 11).gte(1024)) {
                        return "Cap is currently ^0.5" 
                    }
                    else if (getBuyableAmount("four", 11).gte(24)) {
                        return "Cap is currently ^0.88. Next cap change is at 1024 Distortion Power." 
                    }
                    else {
                        return "Cap change is at 24 Distortion Power." 
                    }
                },],
            ],
        },
        "4D-Upgrades": {
            content:[
                "main-display",
                "blank",
                "upgrades",
            ],
        },
    },
    name: "4th Dimension",
    symbol: "4",
    color: "#FF7F7F",
    nodeStyle: {
        background: "radial-gradient(#FF7F7F, #797EF6)", 
        "background-origin": "border-box",
    },
    resource: "Distortion", 
    baseResource: "PP", 
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
            display() {return "Buy Max"},
            canClick() {return true},
            onClick() {
                if (getClickableState("four", 11) == false)
                    {setClickableState("four", 11, true)}
                else if (getClickableState("four", 11) == true)
                    {setClickableState("four", 11, false)}
                },
            style() {
                if (getClickableState("four", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("four", 11) == true) 
                    return {'background-color': '#FF7F7F',}
            },
            unlocked() {return hasUpgrade("pu", 25)}
        }
    },
    challenges: {
        11: {
            name: "4th Dimension",
            challengeDescription: "Your production of f(t) is raised to 1/4 when in 4th Dimension. You can only gain Distorion when only in 4th Dimension and is based on Time gained.<br> Max = 1.80e308 Distortions",
            goalDescription: "Gain more f(t).",
            canComplete: function() {return false},
            rewardDescription: "Gain Distortion.",
            completionLimit: 1,
            onEnter() {
                player.points = player.points.pow(0)
                player["g"].points = player["g"].points.pow(0)
                player["pu"].points = player["pu"].points.pow(0)
                return layerDataReset("f"), layerDataReset("u", keep=[upgrades]), layerDataReset("res",  keep=[upgrades]), layerDataReset("tmach"), layerDataReset("g", keep=[buyables])
            },
            style: {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "300px"}
        },
    },
    buyables: {
        11: {
            title() {return "Distortion Power"},
            cost(x) { return new Decimal(1).mul(new Decimal(2).pow(x))},
            display() { return "Increase the power of Distortion by +0.01 <br> Distortion Power = " + format(tmp.four.buyables[11].effect) + " (bought:" + format(getBuyableAmount("four", 11)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("four", 11))) + " Distortion"},
            canAfford() { return player["four"].points.gte(this.cost())},
            buy() {
                if (getClickableState("four", 11) == false) {
                    player["four"].points = player["four"].points.sub(this.cost())
                    setBuyableAmount("four", 11, getBuyableAmount("four", 11).add(1))
                }
                else if (getClickableState("four", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["four"].points.abs(), this.cost(), new Decimal(2))
                    subCost(new Decimal(2), getBuyableAmount("four", 11), 1)
                    player["four"].points = player["four"].points.sub(new Decimal(sub))
                    setBuyableAmount("four", 11, getBuyableAmount("four", 11).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(0.01)
                if (getBuyableAmount("four", 11).gte(1024)) {
                    eff = eff.add(new Decimal(0.01).mul(24)).add(new Decimal(0.01).mul(new Decimal(1000).pow(0.88))).add(new Decimal(0.01).mul(getBuyableAmount("four", 11).sub(1024).pow(new Decimal(0.5))))
                }
                else if (getBuyableAmount("four", 11).gte(24)) {
                    eff = eff.add(new Decimal(0.01).mul(24)).add(new Decimal(0.01).mul(getBuyableAmount("four", 11).sub(24).pow(0.88)))
                }
                else {
                    eff = eff.add(new Decimal(0.01).mul(getBuyableAmount("four", 11)))
                }
                return eff
            },
        },
    },
    upgrades: {
        11: {
            title: "4D-Upgrade 1.1",
            description: "x1.1 time speed every 4D-Upgrades bought",
            cost: new Decimal(1),
            currencyDisplayName: "Distortion",
            currencyInternalName: "points",
            currencyLayer: "four",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("four", 11)) {
                    if (hasUpgrade("four", 11)) eff = eff.mul(1.1)
                    if (hasUpgrade("four", 12)) eff = eff.mul(1.1)
                    if (hasUpgrade("four", 13)) eff = eff.mul(1.1)
                    if (hasUpgrade("four", 14)) eff = eff.mul(1.1)
                    if (hasUpgrade("four", 15)) eff = eff.mul(1.1)
                }
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("four", 11))
            }
        },
        12: {
            title: "4D-Upgrade 1.2",
            description: "More rows...",
            cost: new Decimal(64),
            currencyDisplayName: "Distortion",
            currencyInternalName: "points",
            currencyLayer: "four",
        },
        13: {
            title: "4D-Upgrade 1.3",
            description: "Multiply Distortion gained based on completed Automation Challenges",
            cost: new Decimal(4096),
            currencyDisplayName: "Distortion",
            currencyInternalName: "points",
            currencyLayer: "four",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("four", 13)) {
                    if (hasChallenge("inf", 11)) eff = eff.mul(1.1)
                    if (hasChallenge("inf", 12)) eff = eff.mul(1.2)
                    if (hasChallenge("inf", 21)) eff = eff.mul(1.3)
                    if (hasChallenge("inf", 22)) eff = eff.mul(1.4)
                    if (hasChallenge("inf", 31)) eff = eff.mul(1.7)
                    if (hasChallenge("inf", 41)) eff = eff.mul(1.8)
                    if (hasChallenge("inf", 42)) eff = eff.mul(1.9)
                    if (hasChallenge("inf", 51)) eff = eff.mul(2)
                    if (hasChallenge("inf", 61)) eff = eff.mul(2.3)
                    if (hasChallenge("inf", 62)) eff = eff.mul(2.4)
                    if (hasChallenge("inf", 71)) eff = eff.mul(2.5)
                    if (hasChallenge("inf", 72)) eff = eff.mul(2.6)
                }
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("four", 13))
            }
        },
        14: {
            title: "4D-Upgrade 1.4",
            description: "Unlock Time Machine Automation Challenges",
            cost: new Decimal(16777216),
            currencyDisplayName: "Distortion",
            currencyInternalName: "points",
            currencyLayer: "four",
        },
        15: {
            title: "4D-Upgrade 1.5",
            description: "Multiply time speed based on time",
            cost: new Decimal(2).pow(48),
            currencyDisplayName: "Distortion",
            currencyInternalName: "points",
            currencyLayer: "four",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("four", 15)) eff = eff.mul(player.points.add(1).log10().add(1).log(10).add(1))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("four", 15))
            }
        },
    },
    update() {
        if (player["four"].points.gte(new Decimal(2).pow(1024))) {
            if (!hasUpgrade("pu",25)) {
                return player["four"].points = new Decimal(2).pow(1024)
            }
        }
    },
    getResetGain() {
        gain = new Decimal(1)
        gain = gain.mul(tmp.four.gainMult)
        gain = gain.pow(tmp.four.gainExp)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(0) 
        if (inChallenge("four", 11)) mult = mult.add(player.points.add(1).pow(tmp.four.buyables[11].effect).sub(1))
        mult = mult.mul(tmp.four.upgrades[13].effect)
        mult = mult.mul(tmp.p.upgrades[24].effect)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    exponent: 1, 
    position: 3,
    row: 1,
    displayRow: 2,
    branches: ["tmach"],
    layerShown(){
        if (hasAchievement("A", 72))
            {return true}
        else
            {return false}
    }, 
})