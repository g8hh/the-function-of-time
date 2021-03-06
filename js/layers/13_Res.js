addLayer("res", {
    tabFormat: {
        "Research": {
            content:[
                "main-display",
                ["display-text", function() { return "You Are Gaining <h2><b>" + format(getResetGain("res")) + "</b></h2> Knowledge Per Second" },],
                "blank",
                ["display-text", function() { return "You Have <h2><b>" + format(player["f"].points) + " f(t)</b></h2>" },],
                "blank",
                ["clickables", [1]],
                ["buyables", [1,2,3,4]],
            ],
        },
        "Res-Upgrades": {
            content:[
                "main-display",
                "blank",
                ["clickables", [3]],
                ["upgrades", [1,2,3]],
            ],
        },
        "Study Tree": {
            buttonStyle() { return {'border-color': '#FFE77B'}},
            unlocked() {return hasAchievement("A", 91)},
            content:[
                ["display-text", function() { return "You Have <h1><span style='color:#FFE77B'>" + format(player["res"].sPoints) + " </h1>Study Points</span>" },],
                "blank",
                ["display-text", function() { return "<span style='color:red'> Note: Converting does not cost anything. Its only a Requirement (Req).</span>" },],
                ["clickables", [2]],
                ["buyables", [5]],
                ["clickables", [4]],
                ["display-text", function() { return "<span style='color:#FFFFFF'>Normal Branch</span><br><span style='color:#FF7F7F'>Requires Branch</span><br><span style='color:#FFA500'>Decision Branch</span>" },],
                "blank",
                ["upgrades", [11]],
                "blank",
                ["upgrades", [12]],
                "blank",
                ["upgrades", [13]],
                "blank",
                ["upgrades", [14]],
                "blank",
                ["upgrades", [15]],
                "blank",
                ["upgrades", [16]],
                "blank",
                ["upgrades", [17]],
                "blank",
                ["upgrades", [18]],
                "blank",
                ["upgrades", [19]],
                "blank",
                ["upgrades", [20]],
                "blank",
                ["upgrades", [21]],
            ],
        },
    },
    name: "research", 
    symbol: "R",
    color: "#234F1E",
    nodeStyle() {
        if (hasAchievement("A", 91)) {
            return {"background": "radial-gradient(#FFE77B, #234F1E)", "background-origin": "border-box"}
        }
    },
    resource: "Knowledge", 
    baseResource: "f(t)", 
    requires: new Decimal(1),
    baseAmount() {return player.points},
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        sPoints: new Decimal(0),
    }},
    passiveGeneration() { return true },
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
            unlocked() {return hasAchievement("A", 34)}
        },
        21: {
            display() {return "Something Buy Max"},
            canClick() {return true},
            onClick() {
                if (getClickableState("res", 21) == false)
                    {setClickableState("res", 21, true)}
                else if (getClickableState("res", 21) == true)
                    {setClickableState("res", 21, false)}
                else {setClickableState("res", 21, false)}
                },
            style() {
                if (getClickableState("res", 21) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("res", 21) == true) 
                    return {'background-color': '#FFE77B',}
            },
            unlocked() {return hasAchievement("A",101)}
        },
        31: {
            display() {return "Buy All"},
            canClick() {return true},
            onClick() {
                buyUpgrade("res", 11) & buyUpgrade("res", 12) & buyUpgrade("res", 13) & buyUpgrade("res", 14) & buyUpgrade("res", 15)
                buyUpgrade("res", 21) & buyUpgrade("res", 22) & buyUpgrade("res", 23) & buyUpgrade("res", 24) & buyUpgrade("res", 25)
                buyUpgrade("res", 31) & buyUpgrade("res", 32) & buyUpgrade("res", 33) & buyUpgrade("res", 34) & buyUpgrade("res", 35)
            },
            style() {return {'background-color': '#234F1E',}},
            unlocked() {return hasAchievement("A",91)}
        },
        41: {
            display() {return "Reset Tree <br> <b> Warning: resets layer 1"},
            canClick() {return true},
            onClick() { layer1reset() },
            style() {return {'background-color': '#FFE77B',}},
            unlocked() {return true}
        },
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
                    return "Increase the value of knowlege gain multiplicatively (x" + format(tmp.res.upgrades[25].effect.add(1.05)) + ") <br> Cap: ^" + format(new Decimal(0.5).add(upgradeEffect("res", 111))) + " at 10,000. <br> Currently: " + format(tmp.res.buyables[12].effect) + " (bought:" + format(getBuyableAmount("res", 12)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("res", 12)))
                }
                else if (getBuyableAmount("res", 12).gte(10000)) {
                    return "Increase the value of knowlege gain multiplicatively (x" + format(tmp.res.upgrades[25].effect.add(1.05).pow(new Decimal(0.5).add(upgradeEffect("res",111)))) + ")<br> Cap: ^" + format(new Decimal(0.5).add(upgradeEffect("res", 111))) + " at 10,000. <br> Currently: " + format(tmp.res.buyables[12].effect) + " (bought:" + format(getBuyableAmount("res", 12)) + ")" + "<br> Cost: -f(t) = " + format(this.cost(getBuyableAmount("res", 12)))
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
                    eff = eff.mul((new Decimal(1.05).add(upgradeEffect("res", 25))).pow(10000)).mul(((new Decimal(1.05).add(upgradeEffect("res", 25))).pow(new Decimal(0.5).add(upgradeEffect("res",111)))).pow(getBuyableAmount("res", 12).sub(10000)))
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
                    return "x" + format(new Decimal(2).add(tmp.res.upgrades[22].effect).pow(new Decimal(0.5).add(upgradeEffect("res",35)))) +" 'U' variable value <br> Cap: ^" + format(new Decimal(0.5).add(upgradeEffect("res",35))) + " at 1,000 <br> Currently: " + format(tmp.res.buyables[21].effect) + " (bought:" + format(getBuyableAmount("res", 21)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 21))) + " Knowledge"
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
                base = new Decimal(2)
                if (hasUpgrade("res", 22)) base = new Decimal(2).add(upgradeEffect("res", 22))
                if (getBuyableAmount("res", 21).lte(1000)) {
                    eff = eff.mul(new Decimal(base)).pow(getBuyableAmount("res", 21))
                }
                if (getBuyableAmount("res", 21).gte(1000)) {
                    eff = eff.mul((new Decimal(base)).pow(1000)).mul((new Decimal(base).pow(new Decimal(0.5).add(upgradeEffect("res",35)))).pow(getBuyableAmount("res", 21).sub(1000)))
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
                    return "x" + format(new Decimal(2).pow(new Decimal(0.5).add(upgradeEffect("res",35)))) + " 'pU' variable value <br> Cap: ^" + format(new Decimal(0.5).add(upgradeEffect("res",35))) + " at 1,000 <br> Currently: " + format(tmp.res.buyables[22].effect) + " (bought:" + format(getBuyableAmount("res", 22)) + ")" + "<br> Cost: " + format(this.cost(getBuyableAmount("res", 22))) + " Knowledge"
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
                if (hasUpgrade("res", 21)) eff = eff.add(upgradeEffect("res", 21))
                if (hasUpgrade("res", 24)) eff = eff.add(upgradeEffect("res", 24))
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
                if (hasUpgrade("res", 21)) eff = eff.add(upgradeEffect("res", 21))
                if (hasUpgrade("res", 24)) eff = eff.add(upgradeEffect("res", 24))
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
                if (hasUpgrade("res", 21)) eff = eff.add(upgradeEffect("res", 21))
                if (hasUpgrade("res", 24)) eff = eff.add(upgradeEffect("res", 24))
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
                if (hasUpgrade("res", 21)) eff = eff.add(upgradeEffect("res", 21))
                if (hasUpgrade("res", 24)) eff = eff.add(upgradeEffect("res", 24))
                eff = eff.mul((getBuyableAmount("res", 42)).mul(0.01)).add(1)
                return eff
            },
            unlocked() {
                if (inChallenge("inf", 22)) {return false}
                else {return true}
            },
            style(){ if (player["res"].points.gte(this.cost())) return {'background-color': '#63C5DA',} }
        },
        51: {
            title() {return "Knowledge Conversion"},
            cost(x) { return new Decimal(10).pow(new Decimal(20000)).mul(new Decimal(10).pow(new Decimal(20000)).pow(new Decimal(x)))},
            display() { return "Convert Knowledge into a Study Point <br> + 1 Study Point <br> <br> <b> Req: " + format(this.cost()) + " Knowledge </b>"},
            canAfford() { return player["res"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 21) == false) {
                    player["res"].sPoints = player["res"].sPoints.add(1)
                    setBuyableAmount("res", 51, getBuyableAmount("res", 51).add(1))
                }
                else if (getClickableState("res", 21) == true) {
                    max = new Decimal(0)
                    getMax(player["res"].points.abs(), this.cost(), new Decimal(10).pow(new Decimal(20000)))
                    subCost(new Decimal(10).pow(new Decimal(20000)), getBuyableAmount("res", 51), new Decimal(10).pow(new Decimal(20000)))
                    player["res"].sPoints = player["res"].sPoints.add(new Decimal(max))
                    setBuyableAmount("res", 51, getBuyableAmount("res", 51).add(new Decimal(max)))
                }
            },
            unlocked() {return true},
            style(){ 
                if (player["res"].points.gte(this.cost())) {
                    return {'background-color': '#FFE77B', "width": "180px", "height": "180px"}
                }
                else {
                    return {"width": "180px", "height": "180px"}
                }
            }
        },
        52: {
            title() {return "Distortion Conversion"},
            cost(x) { return new Decimal(10).pow(new Decimal(1000).mul(2/3)).mul(new Decimal(10).pow(new Decimal(1000).mul(1/3)).pow(new Decimal(x)))},
            display() { return "Convert Distortion into a Study Point <br> + 1 Study Point <br> <br> <b> Req: " + format(this.cost()) + " Distortion </b>"},
            canAfford() { return player["four"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("res", 21) == false) {
                    player["res"].sPoints = player["res"].sPoints.add(1)
                    setBuyableAmount("res", 52, getBuyableAmount("res", 52).add(1))
                }
                else if (getClickableState("res", 21) == true) {
                    max = new Decimal(0)
                    getMax(player["four"].points.abs(), this.cost(), new Decimal(10).pow(new Decimal(1000).mul(1/3)))
                    subCost(new Decimal(10).pow(new Decimal(1000).mul(1/3)), getBuyableAmount("res", 52), new Decimal(10).pow(new Decimal(1000).mul(2/3)))
                    player["res"].sPoints = player["res"].sPoints.add(new Decimal(max))
                    setBuyableAmount("res", 52, getBuyableAmount("res", 52).add(new Decimal(max)))
                }
            },
            unlocked() {return true},
            style(){ 
                if (player["four"].points.gte(this.cost())) {
                    return {'background-color': '#FFE77B', "width": "180px", "height": "180px"}
                }
                else {
                    return {"width": "180px", "height": "180px"}
                }
            }
        },
        53: {
            title() {return "Life Conversion"},
            cost(x) { return (new Decimal(2).div(upgradeEffect("ab",12)).mul(new Decimal(2).pow(x))).sub(0.1)},
            display() { 
                if (hasUpgrade("ab",11)) return "Convert Lives into a Study Point <br> + 1 Study Point <br><br> You have " + format(player.ab.total) + " Total Lives<br><br> <b> Req: " + format(this.cost().add(0.1)) + " Lives </b>"
                else  return "Convert Lives into a Study Point <br> + 1 Study Point <br><br> <b> Req: " + format(this.cost().add(0.1)) + " Lives </b>"
            },
            canAfford() { 
                if (hasUpgrade("ab",11)) return player["ab"].total.gte(this.cost())
                else return player["ab"].points.gte(this.cost())
            },
            buy() {
                if (hasUpgrade("ab",11)) {
                    if (getClickableState("res", 21) == false) {
                        player["res"].sPoints = player["res"].sPoints.add(1)
                        setBuyableAmount("res", 53, getBuyableAmount("res", 53).add(1))
                    }
                    else if (getClickableState("res", 21) == true) {
                        max = new Decimal(0)
                        getMax(player["ab"].total, this.cost().sub(0.1), new Decimal(2))
                        subCost(new Decimal(2), getBuyableAmount("res", 53), new Decimal(2).div(upgradeEffect("ab",12)))
                        player["res"].sPoints = player["res"].sPoints.add(new Decimal(max))
                        setBuyableAmount("res", 53, getBuyableAmount("res", 53).add(new Decimal(max)))
                    }
                }
                else {
                    if (getClickableState("res", 21) == false) {
                        player["res"].sPoints = player["res"].sPoints.add(1)
                        setBuyableAmount("res", 53, getBuyableAmount("res", 53).add(1))
                    }
                    else if (getClickableState("res", 21) == true) {
                        max = new Decimal(0)
                        getMax(player["ab"].points, this.cost(), new Decimal(2))
                        subCost(new Decimal(2), getBuyableAmount("res", 53), new Decimal(2).div(upgradeEffect("ab",12)))
                        player["res"].sPoints = player["res"].sPoints.add(new Decimal(max))
                        setBuyableAmount("res", 53, getBuyableAmount("res", 53).add(new Decimal(max)))
                    }
                }
            },
            unlocked() {return hasMilestone("ab",4)},
            style(){ 
                if (hasUpgrade("ab",11)) {
                    if (player["ab"].total.gte(this.cost())) {
                        return {'background-color': '#FFE77B', "width": "180px", "height": "180px"}
                    }
                    else {
                        return {"width": "180px", "height": "180px"}
                    }
                }
                else {
                    if (player["ab"].points.gte(this.cost())) {
                        return {'background-color': '#FFE77B', "width": "180px", "height": "180px"}
                    }
                    else {
                        return {"width": "180px", "height": "180px"}
                    }
                }
            }
        },
    },
    upgrades: {
        11: {
            title: "Res-Upgrade 1.1",
            description: "x3 your Knowledge gain",
            cost: new Decimal(10),
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(3)
                return eff
            }
        },
        12: {
            title: "Res-Upgrade 1.2",
            description: "Multiply your Knowledge gain based on time",
            cost: new Decimal(100),
            effect() {
                eff = new Decimal(1)
                eff = eff.mul((player.points.abs().add(10)).log10())
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
                eff = eff.mul((player["f"].points.abs().add(10)).log10().pow(0.5))
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
                eff = eff.mul((((player["res"].points.abs()).pow(0.8)).add(10)).log10())
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
                if (hasUpgrade("res", 21)) eff = eff.add(1)
                if (hasUpgrade("res", 22)) eff = eff.add(1)
                if (hasUpgrade("res", 23)) eff = eff.add(1)
                if (hasUpgrade("res", 24)) eff = eff.add(1)
                if (hasUpgrade("res", 25)) eff = eff.add(1)
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
                eff = eff.add(0.5)
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
                eff = eff.mul((player["tmach"].points.abs().add(10)).log10())
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
            description() {return "+ x0.0001 Multiplicative Research Upgrade every Additive Research Upgrade. <br> Max = + x" + format(new Decimal(0.1).add(new Decimal(0.0001).mul(upgradeEffect("res",142))))},
            cost: new Decimal(10000000000),
            effect() {
                eff = new Decimal(0)
                if (getBuyableAmount("res", 11).lte(new Decimal(1000))) {
                    if (hasUpgrade("res", 25)) eff = eff.add(getBuyableAmount("res", 11).mul(0.0001))
                }
                else if (getBuyableAmount("res", 11).gte(new Decimal(1000))) {
                    if (hasUpgrade("res", 25)) eff = eff.add(new Decimal(1000).mul(0.0001))
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
                if (hasUpgrade("res", 31)) eff = eff.add(3)
                if (hasUpgrade("res", 32)) eff = eff.add(3)
                if (hasUpgrade("res", 33)) eff = eff.add(3)
                if (hasUpgrade("res", 34)) eff = eff.add(3)
                if (hasUpgrade("res", 35)) eff = eff.add(3)
                if (hasUpgrade("res",132)) eff = eff.mul(upgradeEffect("res",132))
                eff = eff
                return eff
            },
            effectDisplay() {
                return "+ ^" + format(upgradeEffect("res", 31))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        32: {
            title: "Res-Upgrade 3.2",
            description() {
                if (hasAchievement("A", 91)) {
                    return "Multiply gained Knowledge based on Distorion. <br> Cap = x1.80e308 <br> Max = x1e150,000" 
                }
                else {
                    return "Multiply gained Knowledge based on Distorion. <br> Cap = x1.80e308" 
                }
            },
            cost: new Decimal(2).pow(2304),
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["four"].points.abs().pow(player["four"].points.abs().add(10).log10())).add(1)
                if (eff.lte(new Decimal(2).pow(1024))){
                    return eff
                }
                else if (eff.gte(new Decimal(2).pow(1024))){
                    eff = new Decimal(2).pow(1024)
                    eff = eff.mul(((player["four"].points.abs().pow(player["four"].points.abs().add(10).log10())).add(1).div(new Decimal(2).pow(1024))).log10().pow(player["four"].points.abs().add(10).log10().pow(0.75)))
                    if (eff.lte(new Decimal(10).pow(150000))) {
                        return eff
                    }
                    else if (eff.gte(new Decimal(10).pow(150000))) {
                        eff = new Decimal(10).pow(150000)
                        return eff
                    }
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 32))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        33: {
            title: "Res-Upgrade 3.3",
            description: "Multiply gained PP based on Knowledge <br> Max = x1e15,000",
            cost: new Decimal(2).pow(5184),
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["res"].points.abs().add(1))
                if (eff.lte(new Decimal(10).pow(15000))) {
                    return eff
                }
                else if (eff.gte(new Decimal(10).pow(15000))) {
                    eff = new Decimal(10).pow(15000)
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 33))
            },
            unlocked() {return hasUpgrade("four", 12)},
        },
        34: {
            title: "Res-Upgrade 3.4",
            description() {
                if (hasAchievement("A", 91)) {
                    return "x1.001 Knowledge gain based on variable upgrade bought. <br> Cap = x1.80e308 <br> Max = x1e150,000" 
                }
                else {
                    return "x1.001 Knowledge gain based on variable upgrade bought. <br> Cap = x1.80e308" 
                }
            },
            cost: new Decimal(2).pow(11664),
            unlocked() {return hasUpgrade("four", 12)},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.001).pow(getBuyableAmount("res",31).add(getBuyableAmount("res",32)).add(getBuyableAmount("res",41)).add(getBuyableAmount("res",42))))
                if (eff.lte(new Decimal(2).pow(1024))){
                    return eff
                }
                else if (eff.gte(new Decimal(2).pow(1024))){
                    eff = new Decimal(2).pow(1024)
                    eff = eff.mul(((new Decimal(1.001).pow(getBuyableAmount("res",31).add(getBuyableAmount("res",32)).add(getBuyableAmount("res",41)).add(getBuyableAmount("res",42)))).div(new Decimal(2).pow(1024))).pow(0.5))
                    if (eff.lte(new Decimal(10).pow(150000))) {
                        return eff
                    }
                    else if (eff.gte(new Decimal(10).pow(150000))) {
                        eff = new Decimal(10).pow(150000)
                        return eff
                    }
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
        // study tree
        111: {
            title: "Study 1.1 <br> R",
            description: "Change Multiplicative Research Upgrade Cap to ^0.575",
            cost: new Decimal(1),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(1))},
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("res",111)) eff = eff.add(0.075)
                return eff
            },
            style(){ 
                if (tmp.res.upgrades[111].canAfford && !hasUpgrade("res",111)) return {'background-color': '#FFE77B', 'margin-left': '185px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '185px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        112: {
            title: "Study 1.n <br> f",
            description: "Unlock 'e'",
            cost: new Decimal(5),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(5)) && hasUpgrade("res", 111)},
            branches: [[111, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[112].canAfford && !hasUpgrade("res",112)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        121: {
            title: "Study 2.1 <br> U",
            description: "Multiply 'U' variable value based on real time from last reset. <br> Faster based on total Study Points <br> Max = x1e10,000",
            cost: new Decimal(1),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(1)) && hasUpgrade("res", 111)},
            effect() {
                if (hasMilestone("ab",7)) eff = new Decimal(10).pow(10000)
                else eff = new Decimal(1)
                eff = eff.mul(player["f"].pTime.mul(16).abs().add(1).pow(player["f"].pTime.mul(16).abs().add(1).pow(0.9)))
                if (eff.lte(new Decimal(10).pow(10000))) {
                    return eff
                }
                else if (eff.gte(new Decimal(10).pow(10000))) {
                    eff = new Decimal(10).pow(10000)
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 121))
            },
            branches: [[111, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[121].canAfford && !hasUpgrade("res",121)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        122: {
            title: "Study 2.2 <br> R",
            description: "g(t) affects Knowledge gain <br> Max = x1e150,000",
            cost: new Decimal(2),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(2)) && hasUpgrade("res", 111)},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.625).pow(player["g"].points.abs().add(10).log10()))
                if (eff.lte(new Decimal(10).pow(150000))) {
                    return eff
                }
                else if (eff.gte(new Decimal(10).pow(150000))) {
                    eff = new Decimal(10).pow(150000)
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 122))
            },
            branches: [[111, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[122].canAfford && !hasUpgrade("res",122)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        123: {
            title: "Study 2.3 <br> TM",
            description: "Multiply gained Time Fragments bsaed on Knowledge <br> Weaker in 4th Dimension <br> Max = x1e150,000",
            cost: new Decimal(1),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(1)) && hasUpgrade("res", 111)},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["res"].points.add(1))
                if (inChallenge("four",11)) eff = eff.pow(0.125)
                if (eff.lte(new Decimal(10).pow(150000))) {
                    return eff
                }
                else if (eff.gte(new Decimal(10).pow(150000))) {
                    eff = new Decimal(10).pow(150000)
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 123))
            },
            branches: [[111, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[123].canAfford && !hasUpgrade("res",123)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        131: {
            title: "Study 3.1 <br> U",
            description: "+ ^0.15 'U' variable value",
            cost: new Decimal(2),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(2)) && hasUpgrade("res", 121)},
            effect() {
                eff = new Decimal(0)
                eff = eff.add(0.15)
                return eff
            },
            branches: [[121, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[131].canAfford && !hasUpgrade("res",131)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        132: {
            title: "Study 3.2 <br> R",
            description: "Multiply Res-Upgrade 3.1 power based on study points converted <br> Max = x250",
            cost: new Decimal(2),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(2)) && hasUpgrade("res", 122)},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1).add(getBuyableAmount("res",51)).add(getBuyableAmount("res",52)).add(getBuyableAmount("res",53))).pow(1.625)
                if (eff.gte(250)) {
                    eff = new Decimal(250)
                    return eff
                }
                else {
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 132))
            },
            branches: [[122, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[132].canAfford && !hasUpgrade("res",132)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        133: {
            title: "Study 3.3 <br> TM",
            description: "Decrease Time Machine Generator and Warp Time cost increase",
            cost: new Decimal(2),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(2)) && hasUpgrade("res", 123)},
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("res",133)) eff = new Decimal(0.375)
                return eff
            },
            branches: [[123, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[133].canAfford && !hasUpgrade("res",133)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        141: {
            title: "Study 4.1 <br> U",
            description: "'pU' affects 'U' variable value <br> Max = x1e150,000",
            cost: new Decimal(3),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(3)) && hasUpgrade("res", 131)},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(2).pow(player["pu"].points.abs().add(10).log10()))
                if (eff.lte(new Decimal(10).pow(150000))) {
                    return eff
                }
                else if (eff.gte(new Decimal(10).pow(150000))) {
                    eff = new Decimal(10).pow(150000)
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 141))
            },
            branches: [[131, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[141].canAfford && !hasUpgrade("res",141)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        142: {
            title: "Study 4.2 <br> R",
            description: "'pU' affects Knowledge gain <br> Max = x1e150,000",
            cost: new Decimal(2),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(2)) && hasUpgrade("res", 132)},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(2).pow(player["pu"].points.abs().add(10).log10()))
                if (eff.lte(new Decimal(10).pow(150000))) {
                    return eff
                }
                else if (eff.gte(new Decimal(10).pow(150000))) {
                    eff = new Decimal(10).pow(150000)
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 142))
            },
            branches: [[132, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[142].canAfford && !hasUpgrade("res",142)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        143: {
            title: "Study 4.3 <br> TM",
            description: "'pU' affects Time Fragments gain <br> Max = x1e150,000",
            cost: new Decimal(3),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(3)) && hasUpgrade("res", 133)},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(2).pow(player["pu"].points.abs().add(10).log10()))
                if (eff.lte(new Decimal(10).pow(150000))) {
                    return eff
                }
                else if (eff.gte(new Decimal(10).pow(150000))) {
                    eff = new Decimal(10).pow(150000)
                    return eff
                }
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("res", 143))
            },
            branches: [[133, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[143].canAfford && !hasUpgrade("res",143)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        151: {
            title: "Study 5.1 <br> Ab & aU",
            description: "Unlock Abdicate <br> x10 'aU' Value",
            cost: new Decimal(5),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(5)) && (hasUpgrade("res", 141) && hasUpgrade("res", 142) && hasUpgrade("res", 143))},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(10)
                return eff
            },
            branches: [[141, "#FF7F7F"],[142, "#FF7F7F"],[143, "#FF7F7F"]],
            style(){ 
                if (tmp.res.upgrades[151].canAfford && !hasUpgrade("res",151)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        161: {
            title: "Study 6.1 <br> f",
            description: "g(t) in f(t) is raised based on g(t) value",
            cost: new Decimal(15),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(15)) && hasUpgrade("res", 151)},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["g"].points.add(10).log10().add(10).log(10).pow(0.25))
                return eff
            },
            effectDisplay() {
                return "^" + format(upgradeEffect("res", 161))
            },
            branches: [[151, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[161].canAfford && !hasUpgrade("res",161)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        162: {
            title: "Study 6.2 <br> g",
            description: "Unlock '??'",
            cost: new Decimal(15),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(15)) && hasUpgrade("res", 151)},
            branches: [[151, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[162].canAfford && !hasUpgrade("res",162)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        171: {
            title: "Study 7.1 <br> aU",
            description: "+ ^0.25 'aU' value.",
            cost: new Decimal(30),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(30)) && hasUpgrade("res", 161) && !hasUpgrade("res", 172)},
            effect() {
                eff = new Decimal(0)
                eff = eff.add(0.25)
                return eff
            },
            branches: [[161, "#FFA500"]],
            style(){ 
                if (tmp.res.upgrades[171].canAfford && !hasUpgrade("res",171)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        172: {
            title: "Study 7.2 <br> h",
            description: "+ ^0.5 hInf-Upgrade 1.2 power",
            cost: new Decimal(30),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(30)) && hasUpgrade("res", 161) && !hasUpgrade("res", 171)},
            branches: [[161, "#FFA500"]],
            style(){ 
                if (tmp.res.upgrades[172].canAfford && !hasUpgrade("res",172)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        173: {
            title: "Study 7.3 <br> Ab",
            description: "x1.5 gained Lives",
            cost: new Decimal(30),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(30)) && hasUpgrade("res", 162)},
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(1.5)
                return eff
            },
            branches: [[162, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[173].canAfford && !hasUpgrade("res",173)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        181: {
            title: "Study 8.1 <br> h",
            description: "x4 gained IP",
            cost: new Decimal(30),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(30)) && (hasUpgrade("res", 171) || hasUpgrade("res", 172))},
            branches: [[171, "#FFFFFF"],[172, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[181].canAfford && !hasUpgrade("res",181)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        182: {
            title: "Study 8.2 <br> h",
            description: "Increase base of h(t) variables multiplier base (+0.02)",
            cost: new Decimal(30),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(30)) && hasUpgrade("res",173)},
            branches: [[173, "#FFFFFF"]],
            style(){ 
                if (tmp.res.upgrades[182].canAfford && !hasUpgrade("res",182)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
        191: {
            title: "Study 9.1 <br> ??? & Ab",
            description: "Unlock ??? <br> x4 gained Lives",
            cost: new Decimal(450),
            currencyDisplayName: "Study Points",
            currencyInternalName: "sPoints",
            currencyLayer: "res",
            canAfford() {return player["res"].sPoints.gte(new Decimal(450)) && (hasUpgrade("res",181)&&hasUpgrade("res",182))},
            branches: [[181, "#FF7F7F"],[182, "#FF7F7F"]],
            style(){ 
                if (tmp.res.upgrades[191].canAfford && !hasUpgrade("res",191)) return {'background-color': '#FFE77B', 'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
                else return {'margin-left': '15px', 'margin-right': '15px', 'height': '140px', 'width': '140px'} 
            },
            unlocked() {return true},
        },
    },
    automate() {
        return (getClickableState("auto", 31) ? (buyBuyable("res", 11),buyBuyable("res", 12)) : false), 
        (getClickableState("auto", 32) ? buyBuyable("res", 21) : false), 
        (getClickableState("auto", 33) ? buyBuyable("res", 22) : false), 
        (getClickableState("auto", 34) ? (buyBuyable("res", 31),buyBuyable("res", 32),buyBuyable("res", 41),buyBuyable("res", 42)) : false), 
        (getClickableState("auto", 81) ? buyBuyable("res", 51) : false), 
        (getClickableState("auto", 82) ? buyBuyable("res", 52) : false), 
        (getClickableState("auto", 83) ? buyBuyable("res", 53) : false),
        (buyTreeBol(1011) ? buyUpgrade("res", 111) : false),
        (buyTreeBol(1012) ? buyUpgrade("res", 112) : false),
        (buyTreeBol(1021) ? buyUpgrade("res", 121) : false),
        (buyTreeBol(1022) ? buyUpgrade("res", 122) : false),
        (buyTreeBol(1023) ? buyUpgrade("res", 123) : false),
        (buyTreeBol(1031) ? buyUpgrade("res", 131) : false),
        (buyTreeBol(1032) ? buyUpgrade("res", 132) : false),
        (buyTreeBol(1033) ? buyUpgrade("res", 133) : false),
        (buyTreeBol(1041) ? buyUpgrade("res", 141) : false),
        (buyTreeBol(1042) ? buyUpgrade("res", 142) : false),
        (buyTreeBol(1043) ? buyUpgrade("res", 143) : false),
        (buyTreeBol(1051) ? buyUpgrade("res", 151) : false),
        (buyTreeBol(1061) ? buyUpgrade("res", 161) : false),
        (buyTreeBol(1062) ? buyUpgrade("res", 162) : false),
        (buyTreeBol(1071) ? buyUpgrade("res", 171) : false),
        (buyTreeBol(1072) ? buyUpgrade("res", 172) : false),
        (buyTreeBol(1073) ? buyUpgrade("res", 173) : false),
        (buyTreeBol(1081) ? buyUpgrade("res", 181) : false),
        (buyTreeBol(1082) ? buyUpgrade("res", 182) : false),
        (buyTreeBol(1091) ? buyUpgrade("res", 191) : false),
        (getClickableState("auto", 84) ? (buyUpgrade("res", 11) & buyUpgrade("res", 12) & buyUpgrade("res", 13) & buyUpgrade("res", 14) & buyUpgrade("res", 15)) : false),
        (getClickableState("auto", 84) ? (buyUpgrade("res", 21) & buyUpgrade("res", 22) & buyUpgrade("res", 23) & buyUpgrade("res", 24) & buyUpgrade("res", 25)) : false),
        (getClickableState("auto", 84) ? (buyUpgrade("res", 31) & buyUpgrade("res", 32) & buyUpgrade("res", 33) & buyUpgrade("res", 34) & buyUpgrade("res", 35)) : false)
    },
    update() {
        if (tmp.res.clickables[11].unlocked && getClickableState("auto", 11) == true) {
            setClickableState("res", 11, true)
        }
        if (tmp.res.clickables[21].unlocked && getClickableState("auto", 11) == true) {
            setClickableState("res", 21, true)
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
        if (hasUpgrade("res", 11)) mult = mult.mul(tmp.res.upgrades[11].effect)
        if (hasUpgrade("res", 12)) mult = mult.mul(tmp.res.upgrades[12].effect)
        if (hasUpgrade("res", 13)) mult = mult.mul(tmp.res.upgrades[13].effect)
        if (hasUpgrade("res", 14)) mult = mult.mul(tmp.res.upgrades[14].effect)
        if (hasUpgrade("res", 23)) mult = mult.mul(tmp.res.upgrades[23].effect)
        if (hasUpgrade("res", 32)) mult = mult.mul(tmp.res.upgrades[32].effect)
        if (hasUpgrade("res", 34)) mult = mult.mul(tmp.res.upgrades[34].effect)
        if (hasUpgrade("res",122)) mult = mult.mul(tmp.res.upgrades[122].effect)
        if (hasUpgrade("res",142)) mult = mult.mul(tmp.res.upgrades[142].effect)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (inChallenge("inf", 81)) exp = exp.mul(0.25)
        return exp
    },
    exponent: 1, 
    position: 4, 
    row: 0, 
    displayRow: 1,
    branches: ["f"],
    layerShown(){ 
        if (inChallenge("inf", 51)) return "ghost"
        else if (hasUpgrade("u", 14) || hasAchievement("A", 31)) return true
        else return false
    }, 
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("res", keep);
        if (hasAchievement("A", 51)) player[this.layer].upgrades = player[this.layer].upgrades.concat([15]);
        }
    },
})

function buyTreeBol(x) {
    bol = getClickableState("auto", 1001) && getClickableState("auto", x)
    return bol
}