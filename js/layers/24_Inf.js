addLayer("inf", {
    tabFormat: {
        "Layer 1 AC": {
            content:[
                ["display-text", function() { return "<h3>Do challenges to unlock automations." },],
                ["microtabs", "stuff1"],
            ],
        },
        "Layer 2 AC": {
            content:[
                ["display-text", function() { return "<h3>Do challenges to unlock automations." },],
                ["microtabs", "stuff2"],
            ],
            unlocked() {return hasMilestone("ab",13)},
        },
    },
    microtabs: {
        stuff1: {
            "Function of 'f'": {
                buttonStyle() { return {'border-color': '#63C5DA'} },
                content: [
                    ["display-text", function() { return "<h3>f(t) automation challenges.</h3><br>Note: When entering a challenge, prestige is done but note that it will not give you the PP." },],
                    "blank",
                    ["challenges", [1,2]],
                    ["challenges", [8]],
                    "blank",
                    ["display-text", function() { return "Complete all of f(t) automation challenges to unlock ???" },],
                    "blank",
                ]
            },
            "Research": {
                buttonStyle() { return {'border-color': '#234F1E'} },
                unlocked() {return hasUpgrade("p", 22)},
                content: [
                    ["display-text", function() { return "<h3>Research automation challenges.</h3><br>Note: When entering a challenge, prestige is done but note that it will not give you the PP.<br>" },],
                    "blank",
                    ["challenges", [3, 4, 5]],
                    "blank",
                ]
            },
            "Time Machine": {
                buttonStyle() { return {'border-color': '#D0B49F'} },
                unlocked() {return hasUpgrade("four", 14)},
                content: [
                    ["display-text", function() { return "<h3>Time Machine automation challenges.</h3><br>Note: When entering a challenge, prestige is done but note that it will not give you the PP.<br>" },],
                    "blank",
                    ["challenges", [6, 7]],
                    "blank",
                ]
            },
        },
        stuff2: {
            "Function of 'g'": {
                buttonStyle() { return {'border-color': '#BF40BF'} },
                unlocked() {return hasMilestone("ab",13)},
                content: [
                    ["display-text", function() { return "<h3>g(t) automation challenges.</h3><br>Note: When entering a challenge, abdicate is done but note that it will not give you the Lives." },],
                    "blank",
                    ["challenges", [9]],
                    "blank",
                ]
            },
            "4th Distortion": {
                buttonStyle() { return {'border-color': '#FF7F7F'} },
                unlocked() {return hasMilestone("ab",13)},
                content: [
                    ["display-text", function() { return "<h3>4th Distortion automation challenges.</h3><br>Note: When entering a challenge, abdicate is done but note that it will not give you the Lives.<br>" },],
                    "blank",
                    ["challenges", [10 ]],
                    "blank",
                ]
            },
        },
    },
    name: "Infinity",
    symbol: "∞",
    startData() { return {
        unlocked: true,
    }},
    type: "normal",
    row: "side",
    displayRow: 0,
    position: 2,
    color: "#FFFFFF",
    nodeStyle: {
        background: "linear-gradient(60deg, #970439, #FFFFFF, #BF40BF)",
        "background-origin": "border-box",
    },
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Infinity")
    },
    layerShown(){return hasAchievement("A", 71)}, 
    branches: ["f"],
    challenges: {
        11: {
            name: "'a' Variable",
            challengeDescription: "Just reach infinity, nothing else.",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock 'a' Variable autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "15px 0px 0px 0px", "width": "270px", "height": "270px"}
        },
        12: {
            name: "'b' Variable",
            challengeDescription: "x0.001 gained f(t)",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock 'b' Variable autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 15px 0px 0px", "width": "270px", "height": "270px"}
        },
        21: {
            name: "'c' Variable",
            challengeDescription: "'c' Variable does not exist. 'U' Upgrade 2.2 still gives boost but different.",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock 'c' Variable autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "270px"}
        },
        22: {
            name: "'d' Variable",
            challengeDescription: "Same as 'c' Variable automation challenge but all variables does not exist except 'a' Variable",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock 'd' Variable autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "270px"}
        },
        31: {
            name: "Research Upgrades",
            challengeDescription: "^0.75 gained f(t)",
            goalDescription: "Reach f(t) = 1e1000",
            canComplete: function() {return player["f"].points.gte(new Decimal(10).pow(1000))},
            rewardDescription: "Unlock 'Research Upgrades autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "15px 15px 0px 0px", "width": "270px", "height": "270px"}
        },
        41: {
            name: "'U' Variable Upgrade",
            challengeDescription: "'pU' Variable Upgrade is dead :c",
            goalDescription: "Reach f(t) = 1e2000",
            canComplete: function() {return player["f"].points.gte(new Decimal(10).pow(2000))},
            rewardDescription: "Unlock 'U' Variable Upgrade autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "15px 0px 0px 15px", "width": "270px", "height": "270px"}
        },
        42: {
            name: "'pU' Variable Upgrade",
            challengeDescription: "Guess who is dead, 'U' Variable Upgrade",
            goalDescription: "Reach f(t) = 1e2000",
            canComplete: function() {return player["f"].points.gte(new Decimal(10).pow(1500))},
            rewardDescription: "Unlock 'pU' Variable Upgrade autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 15px 15px 0px", "width": "270px", "height": "270px"}
        },
        51: {
            name: "'a, b, c & d' Variable Upgrade",
            challengeDescription: "What is Research? <br>(Research does not exist)",
            goalDescription: "Reach f(t) = 1e1000",
            canComplete: function() {return player["f"].points.gte(new Decimal(10).pow(1000))},
            rewardDescription: "Unlock 'a, b, c & d' Variable Upgrade autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 0px 15px 15px", "width": "270px", "height": "270px"}
        },
        61: {
            name: "Time Machine Generator",
            challengeDescription: "There is no Time Machine. <br>(a.k.a. OH NOOOOOO....)",
            goalDescription: "Reach f(t) = 1e500",
            canComplete: function() {return player["f"].points.gte(new Decimal(10).pow(500))},
            rewardDescription: "Unlock Time Machine Generator autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "15px 0px 0px 0px", "width": "270px", "height": "270px"}
        },
        62: {
            name: "Warp Time",
            challengeDescription: "Meh.. just reach infinite Time Fragments",
            goalDescription: "Reach 1.79e308 Time Fragments",
            canComplete: function() {return player["tmach"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock Warp Time autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 15px 0px 0px", "width": "270px", "height": "270px"}
        },
        71: {
            name: "Warp Warp Time",
            challengeDescription: "f(t) is sick, i think<br>(f(t) is decreasing weirdly)",
            goalDescription: "Reach f(t) = 1e500",
            canComplete: function() {return player["f"].points.gte(new Decimal(10).pow(500))},
            rewardDescription: "Unlock Warp Warp Time autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "270px"}
        },
        72: {
            name: "T.M.G.E.",
            challengeDescription: "Chaos<br>everyone is sick<br>(f(t), Knowledge gain, and Time Fragments gain is decreasing weirdly)",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock T.M.G.E. autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            style: {"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "270px"}
        },
        81: {
            name: "Euler's number",
            challengeDescription: "What if 4th dimension affect all of Layer 1?",
            goalDescription: "Reach f(t) = 1e400,000",
            canComplete: function() {return player["f"].points.gte(new Decimal(10).pow(400000))},
            rewardDescription: "Unlock Euler's number autobuyer.",
            completionLimit: 1,
            onEnter() { layer1reset() },
            unlocked() {return hasMilestone("ab",13)},
            style: {"border-radius": "0px 0px 15px 15px", "width": "270px", "height": "270px"}
        },
        91: {
            name: "'w, x, y & z' Variable",
            challengeDescription: "No no no no no no no g(t)",
            goalDescription: "Have 31 Study Points, strange",
            canComplete: function() {return player["res"].sPoints.gte(31)},
            rewardDescription: "Unlock 'w, x, y & z' Variable autobuyer.",
            completionLimit: 1,
            onEnter() { layer2reset() },
            unlocked() {return hasMilestone("ab",13)},
            style: {"border-radius": "15px 0px 0px 15px", "width": "270px", "height": "270px"}
        },
        92: {
            name: "Golden ratio",
            challengeDescription: "No more specials <br> Euler's number and Golden ratio does not exist",
            goalDescription: "Reach f(t) = e4,000,000",
            canComplete: function() {return player["f"].points.gte(new Decimal(10).pow(4000000))},
            rewardDescription: "Unlock Golden Ratio autobuyer.",
            completionLimit: 1,
            onEnter() { layer2reset() },
            unlocked() {return hasMilestone("ab",13)},
            style: {"border-radius": "0px 15px 15px 0px", "width": "270px", "height": "270px"}
        },
        101: {
            name: "Distortion Power",
            challengeDescription: "4th Dimension in 4th Dimension? <br> ^0.25 Distortion gain",
            goalDescription: "Reach 1e3000 Distortion",
            canComplete: function() {return player["four"].points.gte(new Decimal(10).pow(3000))},
            rewardDescription: "Unlock Distortion Power autobuyer.",
            completionLimit: 1,
            onEnter() { layer2reset() },
            unlocked() {return hasMilestone("ab",13)},
            style: {"border-radius": "15px 15px 15px 15px", "width": "270px", "height": "270px"}
        },
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
    resource: "inf",
    baseResource: "f(t)",
    requires: new Decimal(1),
    baseAmount() {return player.points},
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration() { return true },
    doReset(resettingLayer) {
        let keep=[];
        if (layers[resettingLayer].row > this.row) {layerDataReset("inf", keep=["challenges", [1,2,3,4,5,6,7,8]]);
        }
    },
})