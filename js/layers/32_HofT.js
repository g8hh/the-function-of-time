addLayer("h", {
    tabFormat: {
        "Variables": {
            content:[
                "main-display",
                ["display-text", function() {         
                    if (player["h"].points.gte(new Decimal(2).pow(1024))) {
                        return "<h1>INFINITY</h1>"
                    }
                    else return "You Are Gaining <h2><b>" + format(getResetGain("h")) + "</b></h2> h(t) Per Second" 
                },],
                "blank",
                ["display-text", function() {
                    if (hasUpgrade("ab",14)) {
                        return "h(time+WT) = h(time) + Aₕ⋅othersₕ <br> othersₕ = aU⋅log(WT+9)^sqrt(log(log(WT+9)+10)) <br> log(WT+9)^sqrt(log(log(WT+9)+10)) = " + format(modWT())
                    }
                    else if (tmp["au"].layerShown) {
                        return "h(time+WT) = h(time) + Aₕ⋅othersₕ <br> othersₕ = aU⋅log(WT+9) <br> log(WT+9) = " + format(modWT())
                    }
                    return "h(time+WT) = h(time) + Aₕ⋅othersₕ <br> othersₕ = log(WT+9) <br> log(WT+9) = " + format(modWT())
                }],
                "blank",
                "clickables",
                "buyables"
            ],
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
        }
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
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.1).pow(getBuyableAmount("h", 11)))
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
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.1).pow(getBuyableAmount("h", 21)))
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
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.1).pow(getBuyableAmount("h", 31)))
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
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.1).pow(getBuyableAmount("h", 41)))
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
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.1).pow(getBuyableAmount("h", 51)))
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
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.1).pow(getBuyableAmount("h", 61)))
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
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.1).pow(getBuyableAmount("h", 71)))
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
                eff = new Decimal(1)
                eff = eff.mul(new Decimal(1.1).pow(getBuyableAmount("h", 81)))
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
        if (player["h"].points.gte(new Decimal(2).pow(1024))) {
            return player["h"].points = new Decimal(2).pow(1024)
        }
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
    return others
}

function modWT() {
    modif = new Decimal(1) 
    modif = modif.mul(tmp.tmach.buyables[12].effect.add(9).log(10))
    if (hasUpgrade("ab",14)) modif = modif.pow(tmp.tmach.buyables[12].effect.add(9).log10().add(10).log10().pow(0.5))
    return modif
}

function abMs2() {
    boost = new Decimal(1)
    if (hasMilestone("ab",3)) boost = boost.add(player["ab"].total)
    if (hasUpgrade("ab",13)) boost = boost.pow(2)
    return boost
}