let modInfo = {
	name: "The Function of Time Tree",
	id: "mymod",
	author: "mikosss",
	pointsName: "time",
	modFiles: ["tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.3.7",
	name: "Time Machine Update",
}

let changelog = `<h1>Changelog:</h1><br><br>
	<h3 style="color: #D0B49F">v0.3.7</h3><br>
		- Added current endgame. [ f(t) = 1e18 ]<br><br>
	<h3 style="color: #D0B49F">v0.3.6</h3><br>
		- Fixed Warp Warp Time bug.<br><br>
	<h3 style="color: #D0B49F">v0.3.5</h3><br>
		- Added Warp Warp Time.<br><br>
	<h3 style="color: #D0B49F">v0.3.4</h3><br>
		- Res-Upgrade 1.4 is boosted.<br><br>
	<h3 style="color: #D0B49F">v0.3.3</h3><br>
		- Fixed f(t) layer formula display.<br><br>
	<h3 style="color: #D0B49F">v0.3.2</h3><br>
		- Added Time Machine Generator.<br>
		- Added Wrap Time.<br><br>
	<h3 style="color: #D0B49F">v0.3.0</h3><br>
		- Added Time Machine Layer.<br><br><br>
	<h3 style="color: #234F1E">v0.2.17</h3><br>
		- Added 5 Research Upgrades.<br>
		- Added 5 Upgrades.<br><br>
	<h3 style="color: #234F1E">v0.2.7</h3><br>
		- Added 2 'Research' Upgrade Buyable.<br>
		- Added 1 'Upgrade' Upgrade Buyable.<br>
		- Added 4 'Variable' Upgrade Buyable.<br><br>
	<h3 style="color: #234F1E">v0.2.0</h3><br>
		- Added Research Layer.<br><br><br>
	<h3 style="color: #FFE338">v0.1.5</h3><br>
		- Added 5 Upgades.<br><br>
	<h3 style="color: #FFE338">v0.1.0</h3><br>
		- Added Upgrade Layer.<br><br><br>
	<h3 style="color: #63C5DA">v0.0.4</h3><br>
		- Added 4 variables.<br><br>
	<h3 style="color: #63C5DA">v0.0.0</h3><br>
		- Added f(t) Layer.`

let winText = `Shubadubidadamirunadudarinanawakawakahehenros...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}


// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	gain = gain.mul(tmp.tmach.buyables[12].effect)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player["f"].points.gte(new Decimal("1e18"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}