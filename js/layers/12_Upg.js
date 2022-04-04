addLayer("u", {
    tabFormat: {
        "Upgrades": {
            content:[
                "main-display",
                ["display-text", function() { return "You Have <h2><b>" + format(player["f"].points) + " f(t)</b></h2>" },],
                "blank",
                ["clickables", [1]],
                "upgrades",
            ],
        },
    },
    name: "'U' upgrades", 
    symbol: "U",
    color: "#FFE338", 
    resource: "U",
    baseResource: "f(t)",
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
                buyUpgrade("u", 11) & buyUpgrade("u", 12) & buyUpgrade("u", 13) & buyUpgrade("u", 14) & buyUpgrade("u", 15)
                buyUpgrade("u", 21) & buyUpgrade("u", 22) & buyUpgrade("u", 23) & buyUpgrade("u", 24) & buyUpgrade("u", 25)
                buyUpgrade("u", 31) & buyUpgrade("u", 32) & buyUpgrade("u", 33) & buyUpgrade("u", 34) & buyUpgrade("u", 35)
                buyUpgrade("u", 41) & buyUpgrade("u", 42) & buyUpgrade("u", 43) & buyUpgrade("u", 44) & buyUpgrade("u", 45)
            },
            style() {return {'background-color': '#FFE338',}},
            unlocked() {return hasAchievement("A",91)}
        },
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
                eff = eff.mul(3)
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
                if (hasUpgrade("u", 41)) eff = eff.mul(1.5)
                if (hasUpgrade("u", 42)) eff = eff.mul(1.5)
                if (hasUpgrade("u", 43)) eff = eff.mul(1.5)
                if (hasUpgrade("u", 44)) eff = eff.mul(1.5)
                if (hasUpgrade("u", 45)) eff = eff.mul(1.5)
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 12))
            }
        },
        13: {
            title: "'U' Upgrade 1.3",
            description() {
                if (hasAchievement("A", 91)) {
                    return "x1.01 'U' value every 'a' Variable bought. <br> Max = x1e10,000" 
                }
                else {
                    return "x1.01 'U' value every 'a' Variable bought." 
                }
            },
            cost: new Decimal(10000000),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("f", 11)))
                if (eff.lte(new Decimal(10).pow(10000))) {
                    return eff
                }
                else {
                    eff = new Decimal(10).pow(10000)
                    return eff
                }
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
            description() {
                if (hasAchievement("A", 91)) {
                    return "x1.01 'U' value every 'b' Variable bought. <br> Max = x1e10,000" 
                }
                else {
                    return "x1.01 'U' value every 'b' Variable bought." 
                }
            },
            cost: new Decimal(1e9),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("f", 12)))
                if (inChallenge("inf", 22)) eff = eff.mul(new Decimal(1).add(getBuyableAmount("f", 11)).pow(5))
                if (eff.lte(new Decimal(10).pow(10000))) {
                    return eff
                }
                else {
                    eff = new Decimal(10).pow(10000)
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 15))
            }
        },
        21: {
            title: "'U' Upgrade 2.1",
            description() {
                if (hasAchievement("A", 91)) {
                    return "x1.002 'U' value every 'a, b, c & d' Variable Upgrade bought. <br> Max = x1e10,000" 
                }
                else {
                    return "x1.002 'U' value every 'a, b, c & d' Variable Upgrade bought." 
                }
            },
            cost: new Decimal(1e10),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.002).pow((getBuyableAmount("res", 31).add(getBuyableAmount("res", 32)).add(getBuyableAmount("res", 41)).add(getBuyableAmount("res", 42)))))
                if (eff.lte(new Decimal(10).pow(10000))) {
                    return eff
                }
                else {
                    eff = new Decimal(10).pow(10000)
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 21))
            },
            unlocked() {return hasUpgrade("p", 13) || hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15)},
        },
        22: {
            title: "'U' Upgrade 2.2",
            description() {
                if (inChallenge("inf", 21)) {
                    return "Multiply your 'U' value based on 'a, b, & d' Variable bought"
                }
                else if (hasAchievement("A", 91)) {
                    return "x1.01 'U' value every 'c' Variable bought. <br> Max = x1e10,000" 
                }
                else {
                    return "x1.01 'U' value every 'c' Variable bought." 
                }
            },
            cost: new Decimal(1e11),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("f", 21)))
                if (inChallenge("inf", 21)) eff = eff.mul((new Decimal(1).add(getBuyableAmount("f", 11)).add(getBuyableAmount("f", 12)).add(getBuyableAmount("f", 22))).pow(3))
                if (inChallenge("inf", 22)) eff = eff.mul(new Decimal(1).add(getBuyableAmount("f", 11)).pow(5))
                if (eff.lte(new Decimal(10).pow(10000))) {
                    return eff
                }
                else {
                    eff = new Decimal(10).pow(10000)
                    return eff
                }
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
                if (hasUpgrade("res", 31)) eff = eff.mul(1.5)
                if (hasUpgrade("res", 32)) eff = eff.mul(1.5)
                if (hasUpgrade("res", 33)) eff = eff.mul(1.5)
                if (hasUpgrade("res", 34)) eff = eff.mul(1.5)
                if (hasUpgrade("res", 35)) eff = eff.mul(1.5)
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 23))
            },
            unlocked() {return hasUpgrade("p", 13) || hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15)},
        },
        24: {
            title: "'U' Upgrade 2.4",
            description() {
                if (hasAchievement("A", 91)) {
                    return "x1.01 'U' value every 'd' Variable bought. <br> Max = x1e10,000" 
                }
                else {
                    return "x1.01 'U' value every 'd' Variable bought." 
                }
            },
            cost: new Decimal(1e13),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.01).pow(getBuyableAmount("f", 22)))
                if (inChallenge("inf", 22)) eff = eff.mul(new Decimal(1).add(getBuyableAmount("f", 11)).pow(5))
                if (eff.lte(new Decimal(10).pow(10000))) {
                    return eff
                }
                else {
                    eff = new Decimal(10).pow(10000)
                    return eff
                }
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
                eff = eff.add(0.05)
                return eff
            },
            unlocked() {return hasUpgrade("p", 13) || hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15)},
        },
        31: {
            title: "'U' Upgrade 3.1",
            description() { 
                if (hasUpgrade("u", 43)) {return "+ ^" + format(new Decimal(0.015).add(upgradeEffect("pu", 24))) + " 'U' value every 'U' Upgrades bought in 3rd row and above."}
                else {return "+ ^" + format(new Decimal(0.015).add(upgradeEffect("pu", 24))) + " 'U' value every 'U' Upgrades bought in 3rd row."}
            },
            cost: new Decimal(1e36),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("u", 31)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                if (hasUpgrade("u", 32)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                if (hasUpgrade("u", 33)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                if (hasUpgrade("u", 34)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                if (hasUpgrade("u", 35)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                if (hasUpgrade("u", 41) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                if (hasUpgrade("u", 42) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                if (hasUpgrade("u", 43) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                if (hasUpgrade("u", 44) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                if (hasUpgrade("u", 45) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.015).add(upgradeEffect("pu", 24)))
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("u", 31))
            },
            unlocked() {return hasUpgrade("p", 13)},
        },
        32: {
            title: "'U' Upgrade 3.2",
            description() {
                if (hasUpgrade("u", 43)) {return "+ ^" + format(new Decimal(0.01).add(upgradeEffect("pu", 23))) + " 'U' value every Pres-Upgrades and 'pU' Upgrades bought"}
                else {return "+ ^" + format(new Decimal(0.01).add(upgradeEffect("pu", 23))) +  " 'U' value every Pres-Upgrades bought"}
            } ,
            cost: new Decimal(1e45),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("p", 11)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("p", 12)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("p", 13)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("p", 14)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("p", 15)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("p", 21)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("p", 22)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("p", 23)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("p", 24)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("p", 25)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 11) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 12) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 13) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 14) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 15) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 21) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 22) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 23) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 24) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                if (hasUpgrade("pu", 25) && hasUpgrade("u", 43)) eff = eff.add(new Decimal(0.01).add(upgradeEffect("pu", 23)))
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("u", 32))
            },
            unlocked() {return hasUpgrade("p", 13)},
        },
        33: {
            title: "'U' Upgrade 3.3",
            description() {
                if (hasUpgrade("p", 25)) {
                    return "Multiply 'U' value based on unspent PP<br>Cap = x" + format(new Decimal(1e50).mul(upgradeEffect("pu", 22)))
                }
                else {
                    return "Multiply 'U' value based on unspent PP<br>Max = x" + format(new Decimal(1e50).mul(upgradeEffect("pu", 22)))
                }
            },
            cost: new Decimal(1e54),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(upgradeEffect("p", 15).pow((player["p"].points.abs().add(10)).log10()))
                if (eff.lte(new Decimal(1e50).mul(upgradeEffect("pu", 22)))){
                    return eff
                }
                else if (eff.gte(new Decimal(1e50).mul(upgradeEffect("pu", 22)))){
                    eff = new Decimal(1e50).mul(upgradeEffect("pu", 22))
                    if (hasUpgrade("p", 25)) eff = eff.mul((upgradeEffect("p", 15).pow((player["p"].points.abs().add(10)).log10()).div(new Decimal(1e50).mul(upgradeEffect("pu", 22)))).log10().pow(player["p"].points.abs().add(10).log10().pow(0.5)))
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 33))
            },
            unlocked() {return hasUpgrade("p", 13)},
        },
        34: {
            title: "'U' Upgrade 3.4",
            description: "+ ^0.0008 'U' value every Warp Time bought <br> Max = + ^1",
            cost: new Decimal(1e72),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(0)
                if (getBuyableAmount("tmach", 12).lte(1250)) {
                    eff = eff.add(new Decimal(0.0008).mul(getBuyableAmount("tmach", 12)))
                }
                else if (getBuyableAmount("tmach", 12).gte(1250)) {
                    eff = eff.add(1)
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
        41: {
            title: "'U' Upgrade 4.1",
            description: "Multiply 'U' value based on 'U'",
            cost: new Decimal(2).pow(1024),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("u", 45)) {
                    eff = eff.mul(player["u"].points.abs().add(10).log10().pow(player["u"].points.abs().add(10).log10().add(new Decimal(2)).log10().div(new Decimal(2).log10())))
                }
                else {
                    eff = eff.mul(player["u"].points.abs().add(10).log10().pow(player["u"].points.abs().add(10).log10().add(new Decimal(3)).log10().div(new Decimal(3).log10())))
                }
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 41))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        42: {
            title: "'U' Upgrade 4.2",
            description: "Multiply 'U' value based on g(t) value <br> Max = x1e10,000",
            cost: new Decimal(2).pow(1536),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.2).pow((player["g"].points.abs().add(10)).log10()))
                if (eff.gte(new Decimal(10).pow(10000))) {
                    eff = new Decimal(10).pow(10000)
                    return eff
                }
                else if (eff.lte(new Decimal(10).pow(10000))) {
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("u", 42))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        43: {
            title: "'U' Upgrade 4.3",
            description: "Include 4th row and above 'U' Upgrades in 'U' Upgrade 3.1 and 'pU' Upgrades in 'U' Upgrade 3.2",
            cost: new Decimal(2).pow(2304),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            unlocked() {return hasUpgrade("four", 12)},
        },
        44: {
            title: "'U' Upgrade 4.4",
            description: "+ ^0.001 'U' value every 'pU' Variable Upgrade bought <br> Max = + ^2",
            cost: new Decimal(2).pow(3456),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            effect() {
                eff = new Decimal(0)
                eff = eff.add(getBuyableAmount("res", 22)).mul(0.001)
                if (eff.lte(2)) {
                    return eff
                }
                else if (eff.gte(2)) {
                    eff = 2
                    return eff
                }
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("u", 44))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        45: {
            title: "'U' Upgrade 4.5",
            description: "Increase 'U' Upgrade 4.1 power",
            cost: new Decimal(2).pow(5184),
            currencyDisplayName: "f(t)",
            currencyInternalName: "points",
            currencyLayer: "f",
            unlocked() {return hasUpgrade("four", 12)},
        },
    },
    automate() {
        return (getClickableState("auto", 92) ? (buyUpgrade("u", 11) & buyUpgrade("u", 12) & buyUpgrade("u", 13) & buyUpgrade("u", 14) & buyUpgrade("u", 15)) : false),
        (getClickableState("auto", 92) ? (buyUpgrade("u", 21) & buyUpgrade("u", 22) & buyUpgrade("u", 23) & buyUpgrade("u", 24) & buyUpgrade("u", 25)) : false),
        (getClickableState("auto", 92) ? (buyUpgrade("u", 31) & buyUpgrade("u", 32) & buyUpgrade("u", 33) & buyUpgrade("u", 34) & buyUpgrade("u", 35)) : false),
        (getClickableState("auto", 92) ? (buyUpgrade("u", 41) & buyUpgrade("u", 42) & buyUpgrade("u", 43) & buyUpgrade("u", 44) & buyUpgrade("u", 45)) : false)
    },
    update() {
        player["u"].points = new Decimal(1)
        if (hasUpgrade("u", 11)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[11].effect)
        if (hasUpgrade("u", 12)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[12].effect)
        if (hasUpgrade("u", 13)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[13].effect)
        if (hasUpgrade("u", 15)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[15].effect)
        if (hasUpgrade("u", 21)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[21].effect)
        if (hasUpgrade("u", 22)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[22].effect)
        if (hasUpgrade("u", 23)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[23].effect)
        if (hasUpgrade("u", 24)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[24].effect)
        if (hasUpgrade("u", 33)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[33].effect)
        if (hasUpgrade("u", 41)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[41].effect)
        if (hasUpgrade("u", 42)) player["u"].points = player["u"].points.mul(tmp.u.upgrades[42].effect)
        if (hasUpgrade("res",121)) player["u"].points = player["u"].points.mul(tmp.res.upgrades[121].effect)
        if (hasUpgrade("res",141)) player["u"].points = player["u"].points.mul(tmp.res.upgrades[141].effect)
        player["u"].points = player["u"].points.mul(buyableEffect("res", 21))
        player["u"].points = player["u"].points.pow(new Decimal(uPow()))
        if (inChallenge("inf", 81)) player["u"].points = player["u"].points.pow(0.25)
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
    row: 0, // Row the layer is in on the tree (0 is the first row)
    displayRow: 1,
    branches: ["f"],
    layerShown(){return player["f"].best.gte(10000) || hasAchievement("A", 51)}, 
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("u", keep);
        if (hasAchievement("A", 51)) player[this.layer].upgrades = player[this.layer].upgrades.concat([14]);
        if (hasAchievement("A", 28)) player[this.layer].upgrades = player[this.layer].upgrades.concat([35]);
        if (hasUpgrade("pu", 22)) player[this.layer].upgrades = player[this.layer].upgrades.concat([33]);
        }
    },
})

function uPow(){
    pow = new Decimal(1)
    if (hasUpgrade("u", 25)) pow = pow.add(tmp.u.upgrades[25].effect)
    if (hasUpgrade("u", 31)) pow = pow.add(tmp.u.upgrades[31].effect)
    if (hasUpgrade("u", 32)) pow = pow.add(tmp.u.upgrades[32].effect)
    if (hasUpgrade("u", 34)) pow = pow.add(tmp.u.upgrades[34].effect)
    if (hasUpgrade("u", 44)) pow = pow.add(tmp.u.upgrades[44].effect)
    if (hasUpgrade("res",131)) pow = pow.add(tmp.res.upgrades[131].effect)
    return pow
}