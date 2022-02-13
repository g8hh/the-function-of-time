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
	num: "1.4.n+",
	name: "Transdimensional Update",
}

let changelog = `<h1>Changelog:</h1><br><br>
	<h3 style="color: #FF7F7F">v1.4.n+</h3><br>
		- Added how many time fragments gained per second<br>
		- Added Maxes and Caps in various upgrades and buyables<br>
		- Added 12 Achievements<br>
		- Added 8 working autobuyers<br>
		- Completed 8 working Automation Challenges<br>
		- Added 25 various Upgrades<br>
		- Buffed pres-Upgrade 1.5<br>
		- Changed current endgame [ 1e666 Distortion ]<br><br>
	<h3 style="color: #FF7F7F">v1.4.0</h3><br>
		- Added 4th Dimension<br><br>
	<h2 style="color: #FF7F7F">Transdimensional Update</h2><br><br>
	<h3 style="color: #FFFFFF">v1.3.22+</h3><br>
		- Fixed some stuffs I can't remember<br>
		- Added an achievement<br>
		- Added 4 working autobuyers<br>
		- Completed 4 working Automation Challenges<br>
		- Added 12 Automation Challenges<br>
		- Changed current endgame [ Complete all f(t) Automation Challenge ]<br><br>
	<h3 style="color: #FFFFFF">v1.3.0</h3><br>
		- Added Automation<br>
		- Added Infinity Layer<br><br>
	<h2 style="color: #FFFFFF">Automation Update</h2><br><br>
	<h3 style="color: #970439">v1.2.17</h3><br>
		- Added 5 'pU' Upgrades as usual...<br>
		- Changed tree design<br>
		- Time Machine buy max button<br>
		- Added additional Research and Time Machine content<br>
		- Added caps to various upgrades<br>
		- Added more achievements<br>
		- Changed current endgame [ f(t) = 1.79e308 ]<br><br>
	<h3 style="color: #970439">v1.2.0</h3><br>
		- Added 'pU' Upgrades<br><br>
	<h2 style="color: #970439">Another Upgrade Update</h2><br><br>
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
		- Added current endgame. [ f(t) = 1e18 ]<br>
		- Fixed Warp Warp Time bug.<br>
		- Added Warp Warp Time.<br>
		- Res-Upgrade 1.4 is boosted.<br>
		- Fixed f(t) layer formula display.<br>
		- Added Time Machine Generator.<br>
		- Added Wrap Time.<br><br>
	<h3 style="color: #D0B49F">v0.3.0</h3><br>
		- Added Time Machine Layer.<br><br>
	<h2 style="color: #D0B49F">Time Machine Update</h2><br><br>
	<h3 style="color: #234F1E">v0.2.17</h3><br>
		- Added 5 Research Upgrades.<br>
		- Added 5 Upgrades.<br>
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

let winText = `WOWERS!!!`

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
	return player["four"].points.gte(new Decimal(10).pow(666))
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