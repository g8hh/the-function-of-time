addLayer("h", {
    tabFormat: {
        "Variables": {
            content:[
                "main-display",
                ["display-text", function() {
                    if (player["h"].points.gte(new Decimal(2).pow(infinity()))) {
                        return "<h1>INFINITY</h1>"
                    }
                    else return "You Are Gaining <h2><b>" + format(getResetGain("h")) + "</b></h2> h(t) Per Second" 
                },],
                "blank",
                ["display-text", function() {
                    if ((hasUpgrade("h",12)||hasUpgrade("h",13)||hasUpgrade("h",14)) && hasUpgrade("ab",14)) {
                        return "h(time+WT) = h(time) + Aₕ⋅othersₕ <br> othersₕ = aU⋅log(WT+9)^sqrt(log(log(WT+9)+10))⋅" + format(tmp.h.upgrades[12].effect.mul(tmp.h.upgrades[13].effect).mul(tmp.h.upgrades[14].effect)) + " <br> log(WT+9)^sqrt(log(log(WT+9)+10)) = " + format(modWT())
                    }
                    else if (hasUpgrade("h",12)||hasUpgrade("h",13)||hasUpgrade("h",14)) {
                        return "h(time+WT) = h(time) + Aₕ⋅othersₕ <br> othersₕ = aU⋅log(WT+9)⋅" + format(tmp.h.upgrades[12].effect.mul(tmp.h.upgrades[13].effect).mul(tmp.h.upgrades[14].effect)) + " <br> log(WT+9) = " + format(modWT())
                    }
                    else if (hasUpgrade("ab",14)) {
                        return "h(time+WT) = h(time) + Aₕ⋅othersₕ <br> othersₕ = aU⋅log(WT+9)^sqrt(log(log(WT+9)+10)) <br> log(WT+9)^sqrt(log(log(WT+9)+10)) = " + format(modWT())
                    }
                    else if (tmp["au"].layerShown) {
                        return "h(time+WT) = h(time) + Aₕ⋅othersₕ <br> othersₕ = aU⋅log(WT+9) <br> log(WT+9) = " + format(modWT())
                    }
                    return "h(time+WT) = h(time) + Aₕ⋅othersₕ <br> othersₕ = log(WT+9) <br> log(WT+9) = " + format(modWT())
                }],
                "blank",
                ["clickables", [1]],
                ["buyables", [1,2,3,4,5,6,7,8]],
            ],
        },
        "hInfinity": {
            content:[
                ["display-text", function() { return "You Have <h1><span style='color:#808080'>" + format(player["h"].infpoints) + " </h1>IP</span>" },],
                "blank",
                ["display-text", function() { 
                    if (player["h"].points.gte(new Decimal(2).pow(infinity()))) {
                        return "You Have <h2> INFINITY </h2> h(t)"
                    }
                    else return "You Have <h2>" + format(player["h"].points) + "</h2> h(t)" },],
                "blank",
                ["buyables", [9]],
                ["clickables", [2]],
                "blank",
                ["display-text", function() { return "Total Infinitied multiplies max h(t) <br> Currently: " + format(new Decimal(2).pow(infinity())) + " h(t) = INFINITY" },],
                "blank",
                ["microtabs", "stuff"],
            ],
            unlocked() {return hasAchievement("A", 103)}
        },
    },
    microtabs: {
        stuff: {
            "Automations": {
                buttonStyle() { return {'border-color': '#808080'} },
                content: [
                    "blank",
                    ["upgrades", [11, 12, 13]],
                    "blank",
                    ["display-text", function() { return "I recommend for you to buy 2.4 first then 2.3 then 2.2... if you hate scrolling down." },],
                    "blank",
                ]
            },
            "hInf-Upgrades": {
                buttonStyle() { return {'border-color': '#808080'} },
                content: [
                    "blank",
                    ["upgrades", [1,2]],
                    ["buyables", [10]],
                    "blank",
                ]
            },
        },
    },
    name: "g of t", 
    symbol: "h",
    color: "#808080",
    resource: "h(t)",
    baseResource: "Lives",
    requires: new Decimal(1), 
    baseAmount() {return player["ab"].points},
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
		apoints: new Decimal(0),
		bpoints: new Decimal(0),
		cpoints: new Decimal(0),
		dpoints: new Decimal(0),
		epoints: new Decimal(0),
		fpoints: new Decimal(0),
		gpoints: new Decimal(0),
	    hpoints: new Decimal(0),
        infpoints: new Decimal(0)
    }},
    passiveGeneration() { return true }, 
    type: "normal",
    clickables: {
        11: {
            display() {return "Buy Max"},
            canClick() {return true},
            onClick() {
                if (getClickableState("h", 11) == false)
                    {setClickableState("h", 11, true)}
                else if (getClickableState("h", 11) == true)
                    {setClickableState("h", 11, false)}
                },
            style() {
                if (getClickableState("h", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("h", 11) == true) 
                    return {'background-color': '#808080',}
            },
            unlocked() {return hasAchievement("A", 118)}
        },
        21: {
            display() {return "Reset hInfinity"},
            canClick() {return true},
            onClick() {
                    setBuyableAmount("h", 91, getBuyableAmount("h", 91).mul(0))
                },
            unlocked() {return hasMilestone("ab",12) && !hasUpgrade("h",24)}
        },
    },
    buyables: {
        11: {
            title() {return "'Aₕ' Variable"},
            cost(x) { return new Decimal(1).mul(new Decimal(2).pow(x))},
            display() { return "Increase the value of 'Aₕ' Variable <br> Aₕ = " + format(player["h"].apoints) + " (bought:" + format(getBuyableAmount("h", 11)) + ")" + "<br> Multiplier: x" + format(tmp.h.buyables[11].effect) + "<br> Cost: " + format(this.cost(getBuyableAmount("h", 11))) + " h(t)"},
            canAfford() { return player["h"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("h", 11) == false) {
                    player["h"].points = player["h"].points.sub(this.cost())
                    player["h"].apoints = player["h"].apoints.add(1)
                    setBuyableAmount("h", 11, getBuyableAmount("h", 11).add(1))
                }
                else if (getClickableState("h", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["h"].points.abs(), this.cost(), 2)
                    subCost(2, getBuyableAmount("h", 11), 1)
                    player["h"].points = player["h"].points.sub(new Decimal(sub))
                    player["h"].apoints = player["h"].apoints.add(new Decimal(max))
                    setBuyableAmount("h", 11, getBuyableAmount("h", 11).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(htBuyMult())
                eff = eff.pow(getBuyableAmount("h", 11))
                return eff
            },
            style(){ 
                if (player["h"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
                else {
                    return {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
            }
        },
        21: {
            title() {return "'Bₕ' Variable"},
            cost(x) { return new Decimal(1000).mul(new Decimal(3).pow(x))},
            display() { return "Increase the value of 'Bₕ' Variable <br> Aₕ = Aₕ + Bₕ⋅othersₕ <br> Bₕ = " + format(player["h"].bpoints) + " (bought:" + format(getBuyableAmount("h", 21)) + ")" + "<br> Multiplier: x" + format(tmp.h.buyables[21].effect) + "<br> Cost: " + format(this.cost(getBuyableAmount("h", 21))) + " h(t)"},
            canAfford() { return player["h"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("h", 11) == false) {
                    player["h"].points = player["h"].points.sub(this.cost())
                    player["h"].bpoints = player["h"].bpoints.add(1)
                    setBuyableAmount("h", 21, getBuyableAmount("h", 21).add(1))
                }
                else if (getClickableState("h", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["h"].points.abs(), this.cost(), 3)
                    subCost(3, getBuyableAmount("h", 21), 1000)
                    player["h"].points = player["h"].points.sub(new Decimal(sub))
                    player["h"].bpoints = player["h"].bpoints.add(new Decimal(max))
                    setBuyableAmount("h", 21, getBuyableAmount("h", 21).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(htBuyMult())
                eff = eff.pow(getBuyableAmount("h", 21))
                return eff
            },
            style(){ 
                if (player["h"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
                else {
                    return {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
            }
        },
        31: {
            title() {return "'Cₕ' Variable"},
            cost(x) { return new Decimal(1000000).mul(new Decimal(5).pow(x))},
            display() { return "Increase the value of 'Cₕ' Variable <br> Bₕ = Bₕ + Cₕ⋅othersₕ <br> Cₕ = " + format(player["h"].cpoints) + " (bought:" + format(getBuyableAmount("h", 31)) + ")" + "<br> Multiplier: x" + format(tmp.h.buyables[31].effect) + "<br> Cost: " + format(this.cost(getBuyableAmount("h", 31))) + " h(t)"},
            canAfford() { return player["h"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("h", 11) == false) {
                    player["h"].points = player["h"].points.sub(this.cost())
                    player["h"].cpoints = player["h"].cpoints.add(1)
                    setBuyableAmount("h", 31, getBuyableAmount("h", 31).add(1))
                }
                else if (getClickableState("h", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["h"].points.abs(), this.cost(), 5)
                    subCost(5, getBuyableAmount("h", 31), 1000000)
                    player["h"].points = player["h"].points.sub(new Decimal(sub))
                    player["h"].cpoints = player["h"].cpoints.add(new Decimal(max))
                    setBuyableAmount("h", 31, getBuyableAmount("h", 31).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(htBuyMult())
                eff = eff.pow(getBuyableAmount("h", 31))
                return eff
            },
            style(){ 
                if (player["h"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
                else {
                    return {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
            }
        },
        41: {
            title() {return "'Dₕ' Variable"},
            cost(x) { return new Decimal(1e12).mul(new Decimal(8).pow(x))},
            display() { return "Increase the value of 'Dₕ' Variable <br> Cₕ = Cₕ + Dₕ⋅othersₕ <br> Dₕ = " + format(player["h"].dpoints) + " (bought:" + format(getBuyableAmount("h", 41)) + ")" + "<br> Multiplier: x" + format(tmp.h.buyables[41].effect) + "<br> Cost: " + format(this.cost(getBuyableAmount("h", 41))) + " h(t)"},
            canAfford() { return player["h"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("h", 11) == false) {
                    player["h"].points = player["h"].points.sub(this.cost())
                    player["h"].dpoints = player["h"].dpoints.add(1)
                    setBuyableAmount("h", 41, getBuyableAmount("h", 41).add(1))
                }
                else if (getClickableState("h", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["h"].points.abs(), this.cost(), 8)
                    subCost(8, getBuyableAmount("h", 41), 1e12)
                    player["h"].points = player["h"].points.sub(new Decimal(sub))
                    player["h"].dpoints = player["h"].dpoints.add(new Decimal(max))
                    setBuyableAmount("h", 41, getBuyableAmount("h", 41).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(htBuyMult())
                eff = eff.pow(getBuyableAmount("h", 41))
                return eff
            },
            style(){ 
                if (player["h"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
                else {
                    return {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
            }
        },
        51: {
            title() {return "'Eₕ' Variable"},
            cost(x) { return new Decimal(1e24).mul(new Decimal(13).pow(x))},
            display() { return "Increase the value of 'Eₕ' Variable <br> Dₕ = Dₕ + Eₕ⋅othersₕ <br> Eₕ = " + format(player["h"].epoints) + " (bought:" + format(getBuyableAmount("h", 51)) + ")" + "<br> Multiplier: x" + format(tmp.h.buyables[51].effect) + "<br> Cost: " + format(this.cost(getBuyableAmount("h", 51))) + " h(t)"},
            canAfford() { return player["h"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("h", 11) == false) {
                    player["h"].points = player["h"].points.sub(this.cost())
                    player["h"].epoints = player["h"].epoints.add(1)
                    setBuyableAmount("h", 51, getBuyableAmount("h", 51).add(1))
                }
                else if (getClickableState("h", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["h"].points.abs(), this.cost(), 13)
                    subCost(13, getBuyableAmount("h", 51), 1e24)
                    player["h"].points = player["h"].points.sub(new Decimal(sub))
                    player["h"].epoints = player["h"].epoints.add(new Decimal(max))
                    setBuyableAmount("h", 51, getBuyableAmount("h", 51).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(htBuyMult())
                eff = eff.pow(getBuyableAmount("h", 51))
                return eff
            },
            style(){ 
                if (player["h"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
                else {
                    return {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
            }
        },
        61: {
            title() {return "'Fₕ' Variable"},
            cost(x) { return new Decimal(1e48).mul(new Decimal(21).pow(x))},
            display() { return "Increase the value of 'Fₕ' Variable <br> Eₕ = Eₕ + Fₕ⋅othersₕ <br> Fₕ = " + format(player["h"].fpoints) + " (bought:" + format(getBuyableAmount("h", 61)) + ")" + "<br> Multiplier: x" + format(tmp.h.buyables[61].effect) + "<br> Cost: " + format(this.cost(getBuyableAmount("h", 61))) + " h(t)"},
            canAfford() { return player["h"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("h", 11) == false) {
                    player["h"].points = player["h"].points.sub(this.cost())
                    player["h"].fpoints = player["h"].fpoints.add(1)
                    setBuyableAmount("h", 61, getBuyableAmount("h", 61).add(1))
                }
                else if (getClickableState("h", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["h"].points.abs(), this.cost(), 21)
                    subCost(21, getBuyableAmount("h", 61), 1e48)
                    player["h"].points = player["h"].points.sub(new Decimal(sub))
                    player["h"].fpoints = player["h"].fpoints.add(new Decimal(max))
                    setBuyableAmount("h", 61, getBuyableAmount("h", 61).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(htBuyMult())
                eff = eff.pow(getBuyableAmount("h", 61))
                return eff
            },
            style(){ 
                if (player["h"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
                else {
                    return {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
            }
        },
        71: {
            title() {return "'Gₕ' Variable"},
            cost(x) { return new Decimal(1e96).mul(new Decimal(34).pow(x))},
            display() { return "Increase the value of 'Gₕ' Variable <br> Fₕ = Fₕ + Gₕ⋅othersₕ <br> Gₕ = " + format(player["h"].gpoints) + " (bought:" + format(getBuyableAmount("h", 71)) + ")" + "<br> Multiplier: x" + format(tmp.h.buyables[71].effect) + "<br> Cost: " + format(this.cost(getBuyableAmount("h", 71))) + " h(t)"},
            canAfford() { return player["h"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("h", 11) == false) {
                    player["h"].points = player["h"].points.sub(this.cost())
                    player["h"].gpoints = player["h"].gpoints.add(1)
                    setBuyableAmount("h", 71, getBuyableAmount("h", 71).add(1))
                }
                else if (getClickableState("h", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["h"].points.abs(), this.cost(), 34)
                    subCost(34, getBuyableAmount("h", 71), 1e96)
                    player["h"].points = player["h"].points.sub(new Decimal(sub))
                    player["h"].gpoints = player["h"].gpoints.add(new Decimal(max))
                    setBuyableAmount("h", 71, getBuyableAmount("h", 71).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(htBuyMult())
                eff = eff.pow(getBuyableAmount("h", 71))
                return eff
            },
            style(){ 
                if (player["h"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
                else {
                    return {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
            }
        },
        81: {
            title() {return "'Hₕ' Variable"},
            cost(x) { return new Decimal(1e192).mul(new Decimal(55).pow(x))},
            display() { return "Increase the value of 'Hₕ' Variable <br> Gₕ = Gₕ + Hₕ⋅othersₕ <br> Hₕ = " + format(player["h"].hpoints) + " (bought:" + format(getBuyableAmount("h", 81)) + ")" + "<br> Multiplier: x" + format(tmp.h.buyables[81].effect) + "<br> Cost: " + format(this.cost(getBuyableAmount("h", 81))) + " h(t)"},
            canAfford() { return player["h"].points.gte(this.cost()) },
            buy() {
                if (getClickableState("h", 11) == false) {
                    player["h"].points = player["h"].points.sub(this.cost())
                    player["h"].hpoints = player["h"].hpoints.add(1)
                    setBuyableAmount("h", 81, getBuyableAmount("h", 81).add(1))
                }
                else if (getClickableState("h", 11) == true) {
                    max = new Decimal(0)
                    getMax(player["h"].points.abs(), this.cost(), 55)
                    subCost(55, getBuyableAmount("h", 81), 1e192)
                    player["h"].points = player["h"].points.sub(new Decimal(sub))
                    player["h"].hpoints = player["h"].hpoints.add(new Decimal(max))
                    setBuyableAmount("h", 81, getBuyableAmount("h", 81).add(new Decimal(max)))
                }
            },
            effect() { 
                eff = new Decimal(htBuyMult())
                eff = eff.pow(getBuyableAmount("h", 81))
                return eff
            },
            style(){ 
                if (player["h"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
                else {
                    return {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
            }
        },
        91: {
            title() {return "hInfinity <br> Reset for Infinity Point (IP)"},
            cost(x) { return new Decimal(2).pow(infinity())},
            display() { return "+ " + format(hinfReset()) + " IP <br> hInfinitied:" + format(getBuyableAmount("h", 91)) + "<br> Cost: INFINITY h(t)"},
            canAfford() { return player["h"].points.gte(this.cost()) },
            buy() {
                if (!hasMilestone("ab",11)) {
                    player["h"].points = player["h"].points.pow(0)
                    player["h"].apoints = player["h"].apoints.mul(0)
                    player["h"].bpoints = player["h"].bpoints.mul(0)
                    player["h"].cpoints = player["h"].cpoints.mul(0)
                    player["h"].dpoints = player["h"].dpoints.mul(0)
                    player["h"].epoints = player["h"].epoints.mul(0)
                    player["h"].fpoints = player["h"].fpoints.mul(0)
                    player["h"].gpoints = player["h"].gpoints.mul(0)
                    player["h"].hpoints = player["h"].hpoints.mul(0)
                    setBuyableAmount("h", 11, getBuyableAmount("h", 11).mul(0))
                    setBuyableAmount("h", 21, getBuyableAmount("h", 21).mul(0))
                    setBuyableAmount("h", 31, getBuyableAmount("h", 31).mul(0))
                    setBuyableAmount("h", 41, getBuyableAmount("h", 41).mul(0))
                    setBuyableAmount("h", 51, getBuyableAmount("h", 51).mul(0))
                    setBuyableAmount("h", 61, getBuyableAmount("h", 61).mul(0))
                    setBuyableAmount("h", 71, getBuyableAmount("h", 71).mul(0))
                    setBuyableAmount("h", 81, getBuyableAmount("h", 81).mul(0))
                }
                player["h"].infpoints = player["h"].infpoints.add(new Decimal(1).mul(hinfReset()))
                setBuyableAmount("h", 91, getBuyableAmount("h", 91).add(1))
            },
            effect() { 
                eff = new Decimal(1)
                return eff
            },
            style(){ 
                if (player["h"].points.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
                else {
                    return {"border-radius": "15px 15px 15px 15px", "width": "540px", "height": "120px"}
                }
            }
        },
        101: {
            title() {return "hInf-Upgrade n.1"},
            cost(x) { return new Decimal(10).mul(new Decimal(10).pow(x))},
            display() { return "x2 gained IP <br> Currently: x" + format(tmp.h.buyables[101].effect) + " (bought:" + format(getBuyableAmount("h", 101)) + ")<br> Cost: " + format(this.cost(getBuyableAmount("h", 101))) + " IP"},
            canAfford() { return player["h"].infpoints.gte(this.cost()) },
            buy() {
                player["h"].infpoints = player["h"].infpoints.sub(this.cost())
                setBuyableAmount("h", 101, getBuyableAmount("h", 101).add(1))
            },
            effect() { 
                eff = new Decimal(2)
                eff = eff.pow(getBuyableAmount("h", 101))
                return eff
            },
            style(){ 
                if (player["h"].infpoints.gte(this.cost())) {
                    return {'background-color': '#808080', "border-radius": "20px 20px 20px 20px", "width": "480px", "height": "120px"}
                }
                else {
                    return {"border-radius": "20px 20px 20px 20px", "width": "480px", "height": "120px"}
                }
            },
            unlocked() {return hasAchievement("A",104)}
        },
    },
    upgrades: {
        11: {
            title: "hInf-Upgrade 1.1",
            description: "Increase base of h(t) variables multiplier base (+0.01)",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",12)) cost = cost.mul(2)
                if (hasUpgrade("h",13)) cost = cost.mul(2)
                if (hasUpgrade("h",14)) cost = cost.mul(2)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
        },
        12: {
            title: "hInf-Upgrade 1.2",
            description: "Multiply othersₕ based on unspent IP",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",11)) cost = cost.mul(2)
                if (hasUpgrade("h",13)) cost = cost.mul(2)
                if (hasUpgrade("h",14)) cost = cost.mul(2)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["h"].infpoints.add(1))
                if (hasUpgrade("res",172)) eff = eff.pow(1.5)
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("h", 12))
            },
        },
        13: {
            title: "hInf-Upgrade 1.3",
            description: "x1.5 othersₕ based on bought h(t) variables automation",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",11)) cost = cost.mul(2)
                if (hasUpgrade("h",12)) cost = cost.mul(2)
                if (hasUpgrade("h",14)) cost = cost.mul(2)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                if (hasUpgrade("h",111)) eff = eff.mul(1.5)
                if (hasUpgrade("h",112)) eff = eff.mul(1.5)
                if (hasUpgrade("h",113)) eff = eff.mul(1.5)
                if (hasUpgrade("h",114)) eff = eff.mul(1.5)
                if (hasUpgrade("h",121)) eff = eff.mul(1.5)
                if (hasUpgrade("h",122)) eff = eff.mul(1.5)
                if (hasUpgrade("h",123)) eff = eff.mul(1.5)
                if (hasUpgrade("h",124)) eff = eff.mul(1.5)
                if (hasUpgrade("h",131)) eff = eff.mul(1.5)
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("h", 13))
            },
        },
        14: {
            title: "hInf-Upgrade 1.4",
            description: "Multiply othersₕ based on hInfinitied",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",11)) cost = cost.mul(2)
                if (hasUpgrade("h",12)) cost = cost.mul(2)
                if (hasUpgrade("h",13)) cost = cost.mul(2)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(getBuyableAmount("h",91).add(1))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("h", 14))
            },
        },
        21: {
            title: "hInf-Upgrade 2.1",
            description: "+0.001 base of h(t) multiplier base based on bought hInf-Upgrades",
            cost() {
                cost = new Decimal(10000)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(0)
                if (hasUpgrade("h", 11)) eff = eff.add(0.001)
                if (hasUpgrade("h", 12)) eff = eff.add(0.001)
                if (hasUpgrade("h", 13)) eff = eff.add(0.001)
                if (hasUpgrade("h", 14)) eff = eff.add(0.001)
                if (hasUpgrade("h", 21)) eff = eff.add(0.001)
                if (hasUpgrade("h", 22)) eff = eff.add(0.001)
                if (hasUpgrade("h", 23)) eff = eff.add(0.001)
                if (hasUpgrade("h", 24)) eff = eff.add(0.001)
                eff = eff.add(new Decimal(0.001).mul(getBuyableAmount("h",101)))
                return eff
            },
            effectDisplay() {
                return "+" + format(upgradeEffect("h", 21))
            },
            unlocked() {return hasMilestone("ab",12)}
        },
        22: {
            title: "hInf-Upgrade 2.2",
            description: "Multiply IP gain based on hInfinitied",
            cost() {
                cost = new Decimal(100000)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(getBuyableAmount("h",91).div(100).add(1).pow(0.5))
                return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("h", 22))
            },
            unlocked() {return hasMilestone("ab",12)}
        },
        23: {
            title: "hInf-Upgrade 2.3",
            description: "Multiply IP gain based on unspent IP",
            cost() {
                cost = new Decimal(1000000)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
            effect() {
                eff = new Decimal(1)
                eff = eff.mul(player["h"].infpoints.abs().div(10000).add(1).pow(1/3))
                if (eff.gte(10)) {
                    eff = new Decimal(10)
                    eff = eff.mul(player["h"].infpoints.abs().div(10000).add(1).pow(1/3).div(10).add(10).log10())
                    return eff
                }
                else return eff
            },
            effectDisplay() {
                return "x" + format(upgradeEffect("h", 23))
            },
            unlocked() {return hasMilestone("ab",12)}
        },
        24: {
            title: "hInf-Upgrade 2.4",
            description: "x10 IP gain <br> Passively gain IP <br> Remove reset hInfinity data",
            cost() {
                cost = new Decimal(10000000)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
            unlocked() {return hasMilestone("ab",12)}
        },
        //Automate
        111: {
            title: "Automate Upgrade 1.1",
            description: "Automate 'Aₕ' Variable",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",112)) cost = cost.add(1)
                if (hasUpgrade("h",113)) cost = cost.add(1)
                if (hasUpgrade("h",114)) cost = cost.add(1)
                if (hasUpgrade("h",121)) cost = cost.add(1)
                if (hasUpgrade("h",122)) cost = cost.add(1)
                if (hasUpgrade("h",123)) cost = cost.add(1)
                if (hasUpgrade("h",124)) cost = cost.add(1)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
        },
        112: {
            title: "Automate Upgrade 1.2",
            description: "Automate 'Bₕ' Variable",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",111)) cost = cost.add(1)
                if (hasUpgrade("h",113)) cost = cost.add(1)
                if (hasUpgrade("h",114)) cost = cost.add(1)
                if (hasUpgrade("h",121)) cost = cost.add(1)
                if (hasUpgrade("h",122)) cost = cost.add(1)
                if (hasUpgrade("h",123)) cost = cost.add(1)
                if (hasUpgrade("h",124)) cost = cost.add(1)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
        },
        113: {
            title: "Automate Upgrade 1.3",
            description: "Automate 'Cₕ' Variable",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",111)) cost = cost.add(1)
                if (hasUpgrade("h",112)) cost = cost.add(1)
                if (hasUpgrade("h",114)) cost = cost.add(1)
                if (hasUpgrade("h",121)) cost = cost.add(1)
                if (hasUpgrade("h",122)) cost = cost.add(1)
                if (hasUpgrade("h",123)) cost = cost.add(1)
                if (hasUpgrade("h",124)) cost = cost.add(1)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
        },
        114: {
            title: "Automate Upgrade 1.4",
            description: "Automate 'Dₕ' Variable",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",111)) cost = cost.add(1)
                if (hasUpgrade("h",112)) cost = cost.add(1)
                if (hasUpgrade("h",113)) cost = cost.add(1)
                if (hasUpgrade("h",121)) cost = cost.add(1)
                if (hasUpgrade("h",122)) cost = cost.add(1)
                if (hasUpgrade("h",123)) cost = cost.add(1)
                if (hasUpgrade("h",124)) cost = cost.add(1)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
        },
        121: {
            title: "Automate Upgrade 2.1",
            description: "Automate 'Eₕ' Variable",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",111)) cost = cost.add(1)
                if (hasUpgrade("h",112)) cost = cost.add(1)
                if (hasUpgrade("h",113)) cost = cost.add(1)
                if (hasUpgrade("h",114)) cost = cost.add(1)
                if (hasUpgrade("h",122)) cost = cost.add(1)
                if (hasUpgrade("h",123)) cost = cost.add(1)
                if (hasUpgrade("h",124)) cost = cost.add(1)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
        },
        122: {
            title: "Automate Upgrade 2.2",
            description: "Automate 'Fₕ' Variable",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",111)) cost = cost.add(1)
                if (hasUpgrade("h",112)) cost = cost.add(1)
                if (hasUpgrade("h",113)) cost = cost.add(1)
                if (hasUpgrade("h",114)) cost = cost.add(1)
                if (hasUpgrade("h",121)) cost = cost.add(1)
                if (hasUpgrade("h",123)) cost = cost.add(1)
                if (hasUpgrade("h",124)) cost = cost.add(1)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
        },
        123: {
            title: "Automate Upgrade 2.3",
            description: "Automate 'Gₕ' Variable",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",111)) cost = cost.add(1)
                if (hasUpgrade("h",112)) cost = cost.add(1)
                if (hasUpgrade("h",113)) cost = cost.add(1)
                if (hasUpgrade("h",114)) cost = cost.add(1)
                if (hasUpgrade("h",121)) cost = cost.add(1)
                if (hasUpgrade("h",122)) cost = cost.add(1)
                if (hasUpgrade("h",124)) cost = cost.add(1)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
        },
        124: {
            title: "Automate Upgrade 2.4",
            description: "Automate 'Hₕ' Variable",
            cost() {
                cost = new Decimal(1)
                if (hasUpgrade("h",111)) cost = cost.add(1)
                if (hasUpgrade("h",112)) cost = cost.add(1)
                if (hasUpgrade("h",113)) cost = cost.add(1)
                if (hasUpgrade("h",114)) cost = cost.add(1)
                if (hasUpgrade("h",121)) cost = cost.add(1)
                if (hasUpgrade("h",122)) cost = cost.add(1)
                if (hasUpgrade("h",123)) cost = cost.add(1)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
        },
        131: {
            title: "Automate Upgrade 3.1",
            description: "Automate Infinity",
            cost() {
                cost = new Decimal(100)
                return cost
            },
            currencyDisplayName: "IP",
            currencyInternalName: "infpoints",
            currencyLayer: "h",
            unlocked() {return hasAchievement("A", 104)}
        },
    },
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("h", keep);
        }
        player["h"].points = player["h"].points.pow(0)
        player["h"].apoints = player["h"].apoints.mul(0)
        player["h"].bpoints = player["h"].bpoints.mul(0)
        player["h"].cpoints = player["h"].cpoints.mul(0)
        player["h"].dpoints = player["h"].dpoints.mul(0)
        player["h"].epoints = player["h"].epoints.mul(0)
        player["h"].fpoints = player["h"].fpoints.mul(0)
        player["h"].gpoints = player["h"].gpoints.mul(0)
        player["h"].hpoints = player["h"].hpoints.mul(0)
        setBuyableAmount("h", 11, getBuyableAmount("h", 11).mul(0))
        setBuyableAmount("h", 21, getBuyableAmount("h", 21).mul(0))
        setBuyableAmount("h", 31, getBuyableAmount("h", 31).mul(0))
        setBuyableAmount("h", 41, getBuyableAmount("h", 41).mul(0))
        setBuyableAmount("h", 51, getBuyableAmount("h", 51).mul(0))
        setBuyableAmount("h", 61, getBuyableAmount("h", 61).mul(0))
        setBuyableAmount("h", 71, getBuyableAmount("h", 71).mul(0))
        setBuyableAmount("h", 81, getBuyableAmount("h", 81).mul(0))
    },
    update(diff) {
        player["h"].apoints = player["h"].apoints.add((player["h"].bpoints.mul(buyableEffect("h", 21)).mul(new Decimal(othersh())).mul(new Decimal(abMs2())).mul(diff)))
        player["h"].bpoints = player["h"].bpoints.add((player["h"].cpoints.mul(buyableEffect("h", 31)).mul(new Decimal(othersh())).mul(new Decimal(abMs2())).mul(diff)))
        player["h"].cpoints = player["h"].cpoints.add((player["h"].dpoints.mul(buyableEffect("h", 41)).mul(new Decimal(othersh())).mul(new Decimal(abMs2())).mul(diff)))
        player["h"].dpoints = player["h"].dpoints.add((player["h"].epoints.mul(buyableEffect("h", 51)).mul(new Decimal(othersh())).mul(new Decimal(abMs2())).mul(diff)))
        player["h"].epoints = player["h"].epoints.add((player["h"].fpoints.mul(buyableEffect("h", 61)).mul(new Decimal(othersh())).mul(new Decimal(abMs2())).mul(diff)))
        player["h"].fpoints = player["h"].fpoints.add((player["h"].gpoints.mul(buyableEffect("h", 71)).mul(new Decimal(othersh())).mul(new Decimal(abMs2())).mul(diff)))
        player["h"].gpoints = player["h"].gpoints.add((player["h"].hpoints.mul(buyableEffect("h", 81)).mul(new Decimal(othersh())).mul(new Decimal(abMs2())).mul(diff)))
        if (player["h"].points.gte(new Decimal(2).pow(infinity()))) player["h"].points = new Decimal(2).pow(infinity())
        if (hasUpgrade("h",24)) player["h"].infpoints = player["h"].infpoints.add(hinfReset().mul(diff))
    },
    automate() {
       return (getClickableState("auto", 51) ? buyBuyable("h", 11) : false), (getClickableState("auto", 52) ? buyBuyable("h", 21) : false), (getClickableState("auto", 53) ? buyBuyable("h", 31) : false), (getClickableState("auto", 54) ? buyBuyable("h", 41) : false), (getClickableState("auto", 61) ? buyBuyable("h", 51) : false), (getClickableState("auto", 62) ? buyBuyable("h", 61) : false), (getClickableState("auto", 63) ? buyBuyable("h", 71) : false), (getClickableState("auto", 64) ? buyBuyable("h", 81) : false), (getClickableState("auto", 71) ? buyBuyable("h", 91) : false)
    },
    getResetGain() {
        gain = new Decimal(0)
        gain = gain.add(player["h"].apoints.mul(buyableEffect("h", 11)).mul(new Decimal(othersh())).mul(new Decimal(abMs2())))
        gain = gain.mul(tmp.h.gainMult)
        gain = gain.pow(tmp.h.gainExp)
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
    position: 2, 
    row: 2, 
    displayRow: 3,
    branches: ["ab", "g"],
    layerShown() {return  player["ab"].best.gte(1) || hasAchievement("A", 111)},
})

function othersh() {
    others = new Decimal(1) 
    others = others.mul(new Decimal(modWT()).mul(player["au"].points))
    if (hasUpgrade("h",12)) others = others.mul(upgradeEffect("h",12))
    if (hasUpgrade("h",13)) others = others.mul(upgradeEffect("h",13))
    if (hasUpgrade("h",14)) others = others.mul(upgradeEffect("h",14))
    return others
}

function modWT() {
    modif = new Decimal(1) 
    modif = modif.mul(tmp.tmach.buyables[12].effect.add(9).log(10))
    if (hasUpgrade("ab",14)) modif = modif.pow(tmp.tmach.buyables[12].effect.add(9).log10().add(10).log10().pow(0.5))
    return modif
}

function htBuyMult() {
    buyMult = new Decimal(1.1)
    if (hasUpgrade("h",11)) buyMult = buyMult.add(0.01)
    if (hasUpgrade("res",182)) buyMult = buyMult.add(0.02)
    if (hasUpgrade("h",21)) buyMult = buyMult.add(upgradeEffect("h",21))
    return buyMult
}

function abMs2() {
    boost = new Decimal(1)
    if (hasMilestone("ab",3)) boost = boost.add(player["ab"].total)
    if (hasUpgrade("ab",13)) boost = boost.pow(2)
    return boost
}

function hinfReset() {
    res = new Decimal(1)
    res = res.mul(buyableEffect("h",101))
    if (hasUpgrade("res",181)) res = res.mul(4)
    if (hasUpgrade("h",22)) res = res.mul(upgradeEffect("h",22))
    if (hasUpgrade("h",23)) res = res.mul(upgradeEffect("h",23))
    if (hasUpgrade("h",24)) res = res.mul(new Decimal(10))
    return res
}

function infinity() {
    inf = new Decimal(1024)
    inf = inf.add(getBuyableAmount("h",91).mul(1))
    return inf
}