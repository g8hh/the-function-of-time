addLayer("u", {
    tabFormat: {
        "Upgrades": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b>" + format(player["f"].points) + " f(t)</b></h2>" },],
                "blank",
                "upgrades",
            ],
        },
    },
    name: "'U' upgrades", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "U", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#FFE338",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "U", // Name of prestige currency
    baseResource: "f(t)", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    update() {
        player["u"].points = new Decimal(1)
        player["u"].points = player["u"].points.mul(tmp.u.upgrades[11].effect)
        player["u"].points = player["u"].points.mul(tmp.u.upgrades[12].effect)
        player["u"].points = player["u"].points.mul(tmp.u.upgrades[13].effect)
        player["u"].points = player["u"].points.mul(tmp.u.upgrades[15].effect)
        player["u"].points = player["u"].points.mul(tmp.u.upgrades[21].effect)
        player["u"].points = player["u"].points.mul(tmp.u.upgrades[22].effect)
        player["u"].points = player["u"].points.mul(tmp.u.upgrades[23].effect)
        player["u"].points = player["u"].points.mul(tmp.u.upgrades[24].effect)
        player["u"].points = player["u"].points.mul(tmp.u.upgrades[33].effect)
        player["u"].points = player["u"].points.mul(buyableEffect("res", 21))
        player["u"].points = player["u"].points.pow(new Decimal(1).add(tmp.u.upgrades[25].effect).add(tmp.u.upgrades[31].effect).add(tmp.u.upgrades[32].effect).add(tmp.u.upgrades[34].effect))
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
    passiveGeneration() { return true },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    displayRow: 1,
    layerShown(){return player["f"].best.gte(10000) || player["p"].total.gte(1)}, 
    branches: ["f"],
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("u", keep);
        if (player["p"].total.gte(1)) player[this.layer].upgrades = player[this.layer].upgrades.concat([14]);
        if (hasAchievement("A", 28)) player[this.layer].upgrades = player[this.layer].upgrades.concat([35])
        }
    },
    upgrades: {
        11: {
            title: "'U' Upgrade 1.1",
            description: "x3 'U' value",
            cost: new Decimal(100000),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 11)) eff = eff.mul(3)
                return eff
            }
        },
        12: {
            title: "'U' Upgrade 1.2",
            description: "x1.5 your 'U' value every 'U' Upgrades bought",
            cost: new Decimal(1000000),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 12)) {
                    if (hasUpgrade("u", 11)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 12)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 13)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 14)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 15)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 21)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 22)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 23)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 24)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 25)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 31)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 32)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 33)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 34)) eff = eff.mul(1.5)
                    if (hasUpgrade("u", 35)) eff = eff.mul(1.5)
                }
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 12))
            }
        },
        13: {
            title: "'U' Upgrade 1.3",
            description: "x1.01 'U' value every 'a' Variable bought.",
            cost: new Decimal(10000000),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 13)) eff = eff.mul(1.01**getBuyableAmount("f", 11))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 13))
            }
        },
        14: {
            title: "'U' Upgrade 1.4",
            description: "Unlock Research",
            cost: new Decimal(100000000),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
        },
        15: {
            title: "'U' Upgrade 1.5",
            description: "x1.01 'U' value every 'b' Variable bought.",
            cost: new Decimal(1e9),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 15)) eff = eff.mul(1.01**getBuyableAmount("f", 12))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 15))
            }
        },
        21: {
            title: "'U' Upgrade 2.1",
            description: "x1.002 'U' value every 'a, b, c & d' Variable Upgrade bought.",
            cost: new Decimal(1e10),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 21)) eff = eff.mul(1.002**(getBuyableAmount("res", 31).add(getBuyableAmount("res", 32)).add(getBuyableAmount("res", 41)).add(getBuyableAmount("res", 42))))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 21))
            },
            unlocked() {return hasUpgrade("p", 13) || hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15)},
        },
        22: {
            title: "'U' Upgrade 2.2",
            description: "x1.01 'U' value every 'c' Variable bought.",
            cost: new Decimal(1e11),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 22)) eff = eff.mul(1.01**getBuyableAmount("f", 21))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 22))
            },
            unlocked() {return hasUpgrade("p", 13) || hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15)},
        },
        23: {
            title: "'U' Upgrade 2.3",
            description: "x1.5 'U' value every Res-Upgrade bought.",
            cost: new Decimal(1e12),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 23)) {
                    if (hasUpgrade("res", 11)) eff = eff.mul(1.5)
                    if (hasUpgrade("res", 12)) eff = eff.mul(1.5)
                    if (hasUpgrade("res", 13)) eff = eff.mul(1.5)
                    if (hasUpgrade("res", 14)) eff = eff.mul(1.5)
                    if (hasUpgrade("res", 15)) eff = eff.mul(1.5)
                    if (hasUpgrade("res", 21)) eff = eff.mul(1.5)
                    if (hasUpgrade("res", 22)) eff = eff.mul(1.5)
                    if (hasUpgrade("res", 23)) eff = eff.mul(1.5)
                    if (hasUpgrade("res", 24)) eff = eff.mul(1.5)
                    if (hasUpgrade("res", 25)) eff = eff.mul(1.5)
                }
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 23))
            },
            unlocked() {return hasUpgrade("p", 13) || hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15)},
        },
        24: {
            title: "'U' Upgrade 2.4",
            description: "x1.01 'U' value every 'd' Variable bought.",
            cost: new Decimal(1e13),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 24)) eff = eff.mul(1.01**getBuyableAmount("f", 22))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 24))
            },
            unlocked() {return hasUpgrade("p", 13) || hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15)},
        },
        25: {
            title: "'U' Upgrade 2.5",
            description: "^1.05 'U' value.",
            cost: new Decimal(1e14),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("u", 25)) eff = eff.add(0.05)
                return eff
            },
            unlocked() {return hasUpgrade("p", 13) || hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15)},
        },
        31: {
            title: "'U' Upgrade 3.1",
            description: "+ ^0.015 'U' value every 'U' Upgrades bought in 3rd row.",
            cost: new Decimal(1e36),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("u", 31)) {
                    if (hasUpgrade("u", 31)) eff = eff.add(0.015)
                    if (hasUpgrade("u", 32)) eff = eff.add(0.015)
                    if (hasUpgrade("u", 33)) eff = eff.add(0.015)
                    if (hasUpgrade("u", 34)) eff = eff.add(0.015)
                    if (hasUpgrade("u", 35)) eff = eff.add(0.015)
                }
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("u", 31))
            },
            unlocked() {return hasUpgrade("p", 13)},
        },
        32: {
            title: "'U' Upgrade 3.2",
            description: "+ ^0.01 'U' value every Pres-Upgrades bought",
            cost: new Decimal(1e45),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("u", 32)) {
                    if (hasUpgrade("p", 11)) eff = eff.add(0.01)
                    if (hasUpgrade("p", 12)) eff = eff.add(0.01)
                    if (hasUpgrade("p", 13)) eff = eff.add(0.01)
                    if (hasUpgrade("p", 14)) eff = eff.add(0.01)
                    if (hasUpgrade("p", 15)) eff = eff.add(0.01)
                }
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("u", 32))
            },
            unlocked() {return hasUpgrade("p", 13)},
        },
        33: {
            title: "'U' Upgrade 3.3",
            description: "Multiply 'U' value based on unspent PP",
            cost: new Decimal(1e54),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 33)) eff = eff.mul(upgradeEffect("p", 15)**(player["p"].points.add(10)).log10())
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 33))
            },
            unlocked() {return hasUpgrade("p", 13)},
        },
        34: {
            title: "'U' Upgrade 3.4",
            description: "+ ^0.0008 'U' value every Warp Time bought <br> (Cap = + ^1)",
            cost: new Decimal(1e72),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(0)
                if (getBuyableAmount("tmach", 12).lte(1250)) {
                    if (hasUpgrade("u", 34)) eff = eff.add(new Decimal(0.0008).mul(getBuyableAmount("tmach", 12)))
                }
                else if (getBuyableAmount("tmach", 12).gte(1250)) {
                    if (hasUpgrade("u", 34)) eff = eff.add(1)
                }
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("u", 34))
            },
            unlocked() {return hasUpgrade("p", 13)},
        },
        35: {
            title: "'U' Upgrade 3.5",
            description: "Unlock 'pU' Upgrades",
            cost: new Decimal(1e90),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            unlocked() {return hasUpgrade("p", 13)},
        },
    },
})