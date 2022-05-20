//layers for display
addLayer("ln1", {
    name: "ln1", 
    symbol: "", 
    position: 4,
    canclick(){return false},
    row: 2,
    color: "#000000",
    layerShown() {
        if (tmp["four"].layerShown)
            {return false}
        else if (tmp["pu"].layerShown)
            {return "ghost"}
        else 
            {return false}
    }
})

addLayer("ln2", {
    name: "ln2", 
    symbol: "", 
    position: 5,
    canclick(){return false},
    row: 1,
    color: "#000000",
    layerShown() {
        if (inChallenge("inf", 61))
            {return "ghost"}
        else 
            {return false}
    }
})

addLayer("ln31", {
    name: "ln31", 
    symbol: "", 
    position: 3,
    canclick(){return false},
    row: 0,
    color: "#000000",
    layerShown() {return (tmp["inf"].layerShown)?"ghost":false;}
})

addLayer("ln32", {
    name: "ln32", 
    symbol: "", 
    position: 2,
    canclick(){return false},
    row: 0,
    color: "#000000",
    layerShown() {return (tmp["inf"].layerShown)?"ghost":false;}
})

addLayer("ln4", {
    name: "ln4", 
    symbol: "", 
    position: 4,
    canclick(){return false},
    row: 3,
    color: "#000000",
    layerShown() {return (tmp["h"].layerShown)?"ghost":false;}
})

addLayer("ln5", {
    name: "ln5", 
    symbol: "", 
    position: 3,
    canclick(){return false},
    row: 1,
    color: "#000000",
    layerShown() {return (tmp["res"].layerShown)?"ghost":false;}
})

addLayer("ln6", {
    name: "ln6", 
    symbol: "", 
    position: 4,
    canclick(){return false},
    row: 2,
    color: "#000000",
    layerShown() {return (tmp["g"].layerShown)?"ghost":false;}
})

addLayer("ln7", {
    name: "ln7", 
    symbol: "", 
    position: 5,
    canclick(){return false},
    row: 3,
    color: "#000000",
    layerShown() {return (tmp["au"].layerShown)?"ghost":false;}
})

addLayer("ln81", {
    name: "ln81", 
    symbol: "", 
    position: 2,
    canclick(){return false},
    row: 2,
    color: "#000000",
    layerShown() {
        if (inChallenge("inf", 91))
            {return "ghost"}
        else 
            {return false}
    }
})

addLayer("ln82", {
    name: "ln82", 
    symbol: "", 
    position: 4,
    canclick(){return false},
    row: 2,
    color: "#000000",
    layerShown() {
        if (inChallenge("inf", 91))
            {return "ghost"}
        else 
            {return false}
    }
})

function layer1reset() {
    player.points = player.points.pow(0)
    player["g"].points = player["g"].points.pow(0)
    player["pu"].points = player["pu"].points.pow(0)
    let keep=[];
    {layerDataReset("f", keep);}
    {layerDataReset("u", keep);
    if (hasAchievement("A", 51)) player["u"].upgrades = player["u"].upgrades.concat([14]);
    if (hasAchievement("A", 28)) player["u"].upgrades = player["u"].upgrades.concat([35]);
    if (hasUpgrade("pu", 22)) player["u"].upgrades = player["u"].upgrades.concat([33]);}
    {layerDataReset("res", keep);
    if (hasAchievement("A", 51)) player["res"].upgrades = player["res"].upgrades.concat([15]);}
    {layerDataReset("tmach", keep);}
}

function layer2reset() {
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
    let keep=[];
    {layerDataReset("g", keep);}
    {layerDataReset("pu", keep);
    if (hasAchievement("A", 101)) player["pu"].upgrades = player["pu"].upgrades.concat([11,15,25]);}
    {layerDataReset("p", keep);
    if (hasAchievement("A", 101)) player["p"].upgrades = player["p"].upgrades.concat([11,13,22,23]);}
    {layerDataReset("four", keep);
    if (hasAchievement("A", 101)) player["four"].upgrades = player["four"].upgrades.concat([12,14]);}
    layer1reset()
}

function getMax(points, cost, expo) {
    max = max.add(Decimal.floor((((new Decimal(points).div(cost).mul(new Decimal(expo).sub(1)).add(1)).log10()).div(new Decimal(expo).log10()))))
    return max
}

function subCost(expo, bAmt, baseC) {
    sub = (new Decimal(expo).pow(new Decimal(bAmt).add(max)).sub(1).div(new Decimal(expo).sub(1)).sub(new Decimal(expo).pow(bAmt).sub(1).div(new Decimal(expo).sub(1)))).mul(new Decimal(baseC))
    return sub
}