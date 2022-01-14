//layers for display
addLayer("ln1", {
    name: "ln1", 
    symbol: "", 
    position: 3,
    canclick(){return false},
    row: 2,
    color: "#000000",
    layerShown() {return "ghost";}
})