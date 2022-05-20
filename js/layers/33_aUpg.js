addLayer("au", {
    tabFormat: {
        "Upgrades": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b>" + format(player["h"].points) + " h(t)</b></h2>" },],
                "blank",
                "upgrades",
            ],
        },
    },
    name: "'aU'upgrades",
    symbol: "aU",
    color: "#2E8980", 
    resource: "aU",
    baseResource: "h(t)", 
    requires: new Decimal(1), 
    baseAmount() {return player.points}, 
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    passiveGeneration() { return true },
    type: "normal",
    upgrades: {
        11: {
            title: "'aU' Upgrade 1.1",
            description: "x3 'aU' Value",
            cost: new Decimal(1e36),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(3)
                return eff
            },
        },
        12: {
            title: "'aU' Upgrade 1.2",
            description: "x1.5 'aU' Value every 'aU' Upgrades bought",
            cost: new Decimal(1e48),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("au", 11)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 12)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 13)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 14)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 15)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 21)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 22)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 23)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 24)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 25)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 31)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 32)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 33)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 34)) eff = eff.mul(1.5)
                if (hasUpgrade("au", 35)) eff = eff.mul(1.5)
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 12))
            },
        },
        13: {
            title: "'aU' Upgrade 1.3",
            description: "Multiply 'aU' Value based on unspent Study Points",
            cost: new Decimal(1e60),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["res"].sPoints.add(1))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 13))
            },
        },
        14: {
            title: "'aU' Upgrade 1.4",
            description: "Multiply 'aU' Value based on h(t) value",
            cost: new Decimal(1e72),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["h"].points.abs().add(10).log10().add(10).log10().pow(2))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 14))
            },
        },
        15: {
            title: "'aU' Upgrade 1.5",
            description: "h(t) in g(t) formula is raised based on h(t) value",
            cost: new Decimal(1e84),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["h"].points.abs().add(10).log10())
                return eff
            },
            effectDisplay() {
                return "^" + format(upgradeEffect("au", 15))
            },
        },
        21: {
            title: "'aU' Upgrade 2.1",
            description: "Multiply 'aU' value based on Distortion",
            cost: new Decimal(1e120),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["four"].points.abs().add(10).log10().div(1000).add(1))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 21))
            },
            unlocked() {return hasMilestone("ab",6)},
        },
        22: {
            title: "'aU' Upgrade 2.2",
            description: "x3 'aU' Value every Abdi-Upgrades bought",
            cost: new Decimal(1e135),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("ab", 11)) eff = eff.mul(3)
                if (hasUpgrade("ab", 12)) eff = eff.mul(3)
                if (hasUpgrade("ab", 13)) eff = eff.mul(3)
                if (hasUpgrade("ab", 14)) eff = eff.mul(3)
                if (hasUpgrade("ab", 15)) eff = eff.mul(3)
                if (hasUpgrade("ab", 21)) eff = eff.mul(3)
                if (hasUpgrade("ab", 22)) eff = eff.mul(3)
                if (hasUpgrade("ab", 23)) eff = eff.mul(3)
                if (hasUpgrade("ab", 24)) eff = eff.mul(3)
                if (hasUpgrade("ab", 25)) eff = eff.mul(3)
                if (hasUpgrade("ab", 31)) eff = eff.mul(3)
                if (hasUpgrade("ab", 32)) eff = eff.mul(3)
                if (hasUpgrade("ab", 33)) eff = eff.mul(3)
                if (hasUpgrade("ab", 34)) eff = eff.mul(3)
                if (hasUpgrade("ab", 35)) eff = eff.mul(3)
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 22))
            },
            unlocked() {return hasMilestone("ab",6)},
        },
        23: {
            title: "'aU' Upgrade 2.3",
            description: "Multiply 'aU' value based on PP",
            cost: new Decimal(1e165),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["p"].points.abs().add(10).log10().div(1000).add(1).pow(0.5))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 23))
            },
            unlocked() {return hasMilestone("ab",6)},
        },
        24: {
            title: "'aU' Upgrade 2.4",
            description: "Multiply 'aU' value based on Time Fragments",
            cost: new Decimal(1e210),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["tmach"].points.abs().add(10).log10().div(1000).add(1).pow(0.5))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 24))
            },
            unlocked() {return hasMilestone("ab",6)},
        },
        25: {
            title: "'aU' Upgrade 2.5",
            description: "+ ^0.05 'aU' value.",
            cost: new Decimal(1e270),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(0)
                eff = eff.add(0.05)
                return eff
            },
            unlocked() {return hasMilestone("ab",6)},
        },
        31: {
            title: "'aU' Upgrade 3.1",
            description: "Multiply 'aU' value based on Lives",
            cost: new Decimal(10).pow(1567),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.add(player["ab"].points.abs())
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 31))
            },
            unlocked() {return hasUpgrade("ab",35)},
        },
        32: {
            title: "'aU' Upgrade 3.2",
            description: "Unlock third row of hInf-Upgrades and Multiply 'aU' value based on IP",
            cost: new Decimal(10).pow(1678),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.add(player["h"].infpoints.abs().pow(1/3))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 32))
            },
            unlocked() {return hasUpgrade("ab",35)},
        },
        33: {
            title: "'aU' Upgrade 3.3",
            description: "Multiply 'aU' value based on sine value of time spent in this Abdicate",
            cost: new Decimal(10).pow(1900),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(50.5)
                eff = eff.add(player["p"].aTime.div(4).sin().mul(49.5))
                if (hasUpgrade("au",34)) eff = eff.pow(new Decimal(1).add(upgradeEffect("au",34)))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("au", 33))
            },
            unlocked() {return hasUpgrade("ab",35)},
        },
        34: {
            title: "'aU' Upgrade 3.4",
            description: "Increase 'aU' Upgrade 3.3 power based on IP",
            cost: new Decimal(10).pow(2233),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(0)
                eff = eff.add(player["h"].infpoints.abs().log10().pow(0.275))
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("au", 34))
            },
            unlocked() {return hasUpgrade("ab",35)},
        },
        35: {
            title: "'aU' Upgrade 3.5",
            description: "+ ^0.01 'aU' value every hInf-Upgrade n.1 and Abdi-Upgrade n.1",
            cost: new Decimal(10).pow(2677),
            currencyDisplayName: "h(t)",
            currencyInternalName: "points",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(0)
                eff = eff.add(new Decimal(0.01).mul(getBuyableAmount("ab",11).add(getBuyableAmount("h",101))))
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("au", 35))
            },
            unlocked() {return hasUpgrade("ab",35)},
        },
    },
    update() {
        player["au"].points = new Decimal(1)
        if (hasUpgrade("au", 11)) player["au"].points = player["au"].points.mul(upgradeEffect("au",11))
        if (hasUpgrade("au", 12)) player["au"].points = player["au"].points.mul(upgradeEffect("au",12))
        if (hasUpgrade("au", 13)) player["au"].points = player["au"].points.mul(upgradeEffect("au",13))
        if (hasUpgrade("au", 14)) player["au"].points = player["au"].points.mul(upgradeEffect("au",14))
        if (hasUpgrade("au", 21)) player["au"].points = player["au"].points.mul(upgradeEffect("au",21))
        if (hasUpgrade("au", 22)) player["au"].points = player["au"].points.mul(upgradeEffect("au",22))
        if (hasUpgrade("au", 23)) player["au"].points = player["au"].points.mul(upgradeEffect("au",23))
        if (hasUpgrade("au", 24)) player["au"].points = player["au"].points.mul(upgradeEffect("au",24))
        if (hasUpgrade("au", 31)) player["au"].points = player["au"].points.mul(upgradeEffect("au",31))
        if (hasUpgrade("au", 32)) player["au"].points = player["au"].points.mul(upgradeEffect("au",32))
        if (hasUpgrade("au", 33)) player["au"].points = player["au"].points.mul(upgradeEffect("au",33))
        if (hasUpgrade("res", 151)) player["au"].points = player["au"].points.mul(upgradeEffect("res",151))
        player["au"].points = player["au"].points.pow(new Decimal(auPow()))
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
    position: 1, 
    row: 2, 
    displayRow: 3,
    branches: ["h"],
    layerShown(){return  hasMilestone("ab", 2)}, 
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("pu", keep);
        if (hasAchievement("A", 101)) player[this.layer].upgrades = player[this.layer].upgrades.concat([11,15]);
        }
        player["au"].points = player["au"].points.pow(0)
    },
})

function auPow() {
    pow = new Decimal(1)
    if (hasUpgrade("au", 25)) pow = pow.add(tmp.u.upgrades[25].effect)
    if (hasUpgrade("au", 35)) pow = pow.add(tmp.u.upgrades[35].effect)
    if (hasUpgrade("res", 171)) pow = pow.add(tmp.res.upgrades[171].effect)
    return pow
}