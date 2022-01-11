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
	num: "1.1.30",
	name: "Upgradey pdate",
}

let changelog = `<h1>Changelog:</h1><br><br>
	<h3 style="color: #BF40BF">v1.1.30</h3><br>
		- Added 5 Upgrades<br>
		- Added 5 Res-Upgrades<br>
		- Added 5 Pres-Upgrades<br>
		- Added another Time Machine content<br>
		- Added buy max button in Research and f(t) layer<br>
		- Added more achievements<br>
		- Changed current endgame to 'purchase 'U' Upgrade 3.5'<br><br>
	<h3 style="color: #BF40BF">v1.1.0</h3><br>
		- Added Pres-Upgrades<br><br>
	<h2 style="color: #BF40BF">g(t) & Prestige Update II: <br> Upgradey Update</h2><br><br>
	<h3 style="color: #BF40BF">v1.0.10</h3><br>
		- Added 4 variables.<br>
		- Added achievement for prestige.<br>
		- Changed current endgame. [ f(t) = 1e30 ]<br><br>
	<h3 style="color: #BF40BF">v1.0.0</h3><br>
		- Added g(t) Layer.<br>
		- Added Prestige Layer.<br><br>
	<h2 style="color: #BF40BF">Function of 'g' <br> and Prestige Update</h2><br><br>
	<h3 style="color: #FFE4B5">v0.4.21</h3><br>
		- Added 21 achievements.<br><br>
	<h3 style="color: #FFE4B5">v0.4.0</h3><br>
		- Added Achievements.<br><br>
	<h2 style="color: #FFE4B5">Achievements Update</h2><br><br>
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
		- Added Time Machine Layer.<br><br>
	<h2 style="color: #D0B49F">Time Machine Update</h2><br><br>
	<h3 style="color: #234F1E">v0.2.17</h3><br>
		- Added 5 Research Upgrades.<br>
		- Added 5 Upgrades.<br><br>
	<h3 style="color: #234F1E">v0.2.7</h3><br>
		- Added 2 'Research' Upgrade Buyable.<br>
		- Added 1 'Upgrade' Upgrade Buyable.<br>
		- Added 4 'Variable' Upgrade Buyable.<br><br>
	<h3 style="color: #234F1E">v0.2.0</h3><br>
		- Added Research Layer.<br><br>
	<h2 style="color: #234F1E">Research Update</h2><br><br>
	<h3 style="color: #FFE338">v0.1.5</h3><br>
		- Added 5 Upgades.<br><br>
	<h3 style="color: #FFE338">v0.1.0</h3><br>
		- Added Upgrade Layer.<br><br>
	<h2 style="color: #FFE338">Upgrade Update</h2><br><br>
	<h3 style="color: #63C5DA">v0.0.4</h3><br>
		- Added 4 variables.<br><br>
	<h3 style="color: #63C5DA">v0.0.0</h3><br>
		- Added f(t) Layer.<br><br>
	<h2 style="color: #63C5DA">The Beginning</h2><br><br>`

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
	return hasUpgrade("u", 35)
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