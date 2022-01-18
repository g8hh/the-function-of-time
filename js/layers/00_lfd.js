//layers for display
addLayer("ln1", {
    name: "ln1", 
    symbol: "", 
    position: 3,
    canclick(){return false},
    row: 2,
    color: "#000000",
    layerShown() {return (tmp["pu"].layerShown)?"ghost":false;}
})

addLayer("ln2", {
    name: "ln2", 
    symbol: "", 
    position: 0,
    canclick(){return false},
    row: 0,
    color: "#000000",
    layerShown() {return (tmp["pu"].layerShown)?"ghost":false;}
})

function getMax(points, cost, expo) {
    max = max.add(Decimal.floor((((points.div(cost).mul(new Decimal(expo).sub(1)).add(1)).log10()).div(new Decimal(expo).log10()))))
    return max
}

function subCost(expo, bAmt, baseC) {
    sub = (new Decimal(expo).pow(new Decimal(bAmt).add(max)).sub(1).div(new Decimal(expo).sub(1)).sub(new Decimal(expo).pow(bAmt).sub(1).div(new Decimal(expo).sub(1)))).mul(new Decimal(baseC))
    return sub
}