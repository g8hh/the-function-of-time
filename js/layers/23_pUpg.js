addLayer("pu", {
    tabFormat: {
        "Upgrades": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b>" + format(player["g"].points) + " g(t)</b></h2>" },],
                "blank",
                ["clickables", [1]],
                "upgrades",
            ],
        },
    },
    name: "'pU'upgrades",
    symbol: "pU",
    color: "#970439", 
    resource: "pU",
    baseResource: "g(t)", 
    requires: new Decimal(1), 
    baseAmount() {return player.points}, 
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    passiveGeneration() { return true },
    type: "normal",
    clickables: {
        11: {
            display() {return "Buy All"},
            canClick() {return true},
            onClick() {
                buyUpgrade("pu", 11) & buyUpgrade("pu", 12) & buyUpgrade("pu", 13) & buyUpgrade("pu", 14) & buyUpgrade("pu", 15)
                buyUpgrade("pu", 21) & buyUpgrade("pu", 22) & buyUpgrade("pu", 23) & buyUpgrade("pu", 24) & buyUpgrade("pu", 25)
            },
            style() {return {'background-color': '#970439',}},
            unlocked() {return hasMilestone("ab",8)}
        },
    },
    upgrades: {
        11: {
            title: "'pU' Upgrade 1.1",
            description: "The 'Buy Max' in Time Machine will work on Warp Warp Time and T.M.G.E. You lazy lazy lazy goose...",
            cost: new Decimal(1e24),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
        },
        12: {
            title: "'pU' Upgrade 1.2",
            description: "x1,000 'pU' value",
            cost: new Decimal(1e30),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("pu", 12)) eff = eff.mul(1000)
                return eff
            }
        },
        13: {
            title: "'pU' Upgrade 1.3",
            description: "x1.01 'pU' value every 'w, x, y & z' Variable bought <br> Cap = x1e80",
            cost: new Decimal(1e36),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("g", 11).add(getBuyableAmount("g", 12)).add(getBuyableAmount("g", 21)).add(getBuyableAmount("g", 22))))
                if (eff.lte(1e80)){
                    return eff
                }
                else if (eff.gte(1e80)){
                    eff = new Decimal(1e80)
                    eff = eff.mul((new Decimal(1.01).pow(getBuyableAmount("g", 11).add(getBuyableAmount("g", 12)).add(getBuyableAmount("g", 21)).add(getBuyableAmount("g", 22)))).div(1e80).pow(0.1))
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("pu", 13))
            }
        },
        14: {
            title: "'pU' Upgrade 1.4",
            description: "+ ^0.002 'U' value every Time Machine Generator and Time Warp <br> Max = + ^2",
            cost: new Decimal(1e42),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            effect() {
                eff = new Decimal(0)
                if ((getBuyableAmount("tmach", 11).add(getBuyableAmount("tmach", 12))).lte(1000)) {
                    if (hasUpgrade("pu", 14)) eff = eff.add(new Decimal(0.002).mul(getBuyableAmount("tmach", 11).add(getBuyableAmount("tmach", 12))))
                }
                else if ((getBuyableAmount("tmach", 11).add(getBuyableAmount("tmach", 12))).gte(1000)) {
                    if (hasUpgrade("pu", 14)) eff = eff.add(2)
                }
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("pu", 14))
            }
        },
        15: {
            title: "'pU' Upgrade 1.5",
            description: "Unlock 'pU' Variable Upgrade in Research",
            cost: new Decimal(1e48),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
        },
        21: {
            title: "'pU' Upgrade 2.1",
            description: "Multiply 'pU' value based on Distorion <br> Cap = x1e80 <br> Max = x1.8e308",
            cost: new Decimal(2).pow(1024),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("pu", 21)) eff = eff.mul(player["four"].points.abs().pow(player["four"].points.add(4).log10().div(new Decimal(4).log10()))).add(1)
                if (eff.lte(1e80)){
                    return eff
                }
                else if (eff.gte(1e80)){
                    eff = new Decimal(1e80)
                    eff = eff.mul(((player["four"].points.abs().pow(player["four"].points.add(4).log10().div(new Decimal(4).log10()))).add(1).div(1e80)).pow(0.0225))
                    if (eff.lte(new Decimal(2).pow(1024))){
                        return eff
                    }
                    else if (eff.gte(new Decimal(2).pow(1024))){
                        eff = new Decimal(2).pow(1024)
                        return eff
                    }
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("pu", 21))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        22: {
            title: "'pU' Upgrade 2.2",
            description: "Keep 'U' Upgrade 3.3 on reset and change it's max to 1e150",
            cost: new Decimal(2).pow(2048),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            unlocked() {return hasUpgrade("four", 12)},
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("pu", 22)) eff = eff.mul(new Decimal(1e100))
                return eff
            },
        },
        23: {
            title: "'pU' Upgrade 2.3",
            description: "Increase 'U' Upgrade 3.2 power.<br>(+ ^0.015)",
            cost: new Decimal(2).pow(4096),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("pu", 23)) eff = eff.add(0.015)
                return eff
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        24: {
            title: "'pU' Upgrade 2.4",
            description: "Increase 'U' Upgrade 3.1 power.<br>(+ ^0.01)",
            cost: new Decimal(2).pow(8192),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("pu", 24)) eff = eff.add(0.01)
                return eff
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        25: {
            title: "'pU' Upgrade 2.5",
            description: "Remove Max Distortion and unlock 'Buy Max' in Distortion",
            cost: new Decimal(2).pow(16384),
            currencyDisplayName: "g(t)",
            currencyInternalName: "points",
            currencyLayer: "g",
            unlocked() {return hasUpgrade("four", 12)},
        },
    },
    update() {
        player["pu"].points = new Decimal(1)
        if (hasUpgrade("pu", 11)) player["pu"].points = player["pu"].points.mul(tmp.pu.upgrades[12].effect)
        if (hasUpgrade("pu", 13)) player["pu"].points = player["pu"].points.mul(tmp.pu.upgrades[13].effect)
        if (hasUpgrade("pu", 21)) player["pu"].points = player["pu"].points.mul(tmp.pu.upgrades[21].effect)
        player["pu"].points = player["pu"].points.mul(buyableEffect("res", 22))
        player["pu"].points = player["pu"].points.pow(new Decimal(puPow()))
    },
    getResetGain() {
        gain = new Decimal(0)
        return gain
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1) 
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    exponent: 1,
    position: 0, 
    row: 1, 
    displayRow: 2,
    branches: ["g"],
    layerShown(){return hasUpgrade("u", 35) || hasAchievement("A", 28)}, 
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("pu", keep);
        if (hasAchievement("A", 101)) player[this.layer].upgrades = player[this.layer].upgrades.concat([11,15,25]);
        }
        player["pu"].points = player["pu"].points.pow(0)
    },
})

function puPow(){
    pow = new Decimal(1)
    if (hasUpgrade("pu", 14)) pow = pow.add(upgradeEffect("pu",14))
    return pow
}