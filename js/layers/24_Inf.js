addLayer("inf", {
    tabFormat: {
        "Automation Challenges": {
            content:[
                ["display-text", function() { return "<h3>Do challenges to unlock automations." },],
                ["microtabs", "stuff"],
            ],
        },
    },
    microtabs: {
        stuff: {
            "Function of 'f'": {
                buttonStyle() { return {'border-color': '#63C5DA'} },
                content: [
                    ["display-text", function() { return "<h3>f(t) automation challenges.</h3><br>Note: When entering a challenge, prestige is done but note that it will not give you the PP." },],
                    "blank",
                    ["challenges", [1,2]],
                    "blank",
                ]
            },
            "Research": {
                buttonStyle() { return {'border-color': '#234F1E'} },
                content: [
                    ["display-text", function() { return "<h3>Research automation challenges.</h3><br>Note: When entering a challenge, prestige is done but note that it will not give you the PP.<br>" + "<span style='color:red;'>You can't complete these challenges yet.</span>" },],
                    "blank",
                    ["challenges", [3, 4, 5]],
                    "blank",
                ]
            },
            "Time Machine": {
                buttonStyle() { return {'border-color': '#D0B49F'} },
                content: [
                    ["display-text", function() { return "<h3>Time Machine automation challenges.</h3><br>Note: When entering a challenge, prestige is done but note that it will not give you the PP.<br>" + "<span style='color:red;'>You can't complete these challenges yet.</span>" },],
                    "blank",
                    ["challenges", [6, 7]],
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
    row: 1,
    displayRow: 0,
    position: 2,
    color: "#FFFFFF",
    nodeStyle: {
        background: "linear-gradient(60deg, #970439, #FFFFFF, #BF40BF)",
        "background-origin": "border-box",
    },
    layerShown() {return true}, 
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
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "15px 0px 0px 0px", "width": "270px", "height": "270px"}
        },
        12: {
            name: "'b' Variable",
            challengeDescription: "x0.001 gained f(t)",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock 'b' Variable autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "0px 15px 0px 0px", "width": "270px", "height": "270px"}
        },
        21: {
            name: "'c' Variable",
            challengeDescription: "'c' Variable does not exist. 'U' Upgrade 2.2 still gives boost but different.",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock 'c' Variable autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "270px"}
        },
        22: {
            name: "'d' Variable",
            challengeDescription: "Worse version of 'c' Variable automation challenge. All variables does not exist except 'a' Variable. 'U' Upgrade 1.5, 2.2 & 2.4 still gives boost but different",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return player["f"].points.gte(new Decimal(2).pow(1024))},
            rewardDescription: "Unlock 'd' Variable autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "270px"}
        },
        31: {
            name: "Research Upgrades",
            challengeDescription: "---",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return false},
            rewardDescription: "Unlock 'Research Upgrades autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "15px 15px 0px 0px", "width": "270px", "height": "270px"}
        },
        41: {
            name: "'U' Variable Upgrade",
            challengeDescription: "---",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return false},
            rewardDescription: "Unlock 'U' Variable Upgrade autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "15px 0px 0px 15px", "width": "270px", "height": "270px"}
        },
        42: {
            name: "'pU' Variable Upgrade",
            challengeDescription: "---",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return false},
            rewardDescription: "Unlock 'pU' Variable Upgrade autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "0px 15px 15px 0px", "width": "270px", "height": "270px"}
        },
        51: {
            name: "'a, b, c & d' Variable Upgrade",
            challengeDescription: "---",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return false},
            rewardDescription: "Unlock 'a, b, c & d' Variable Upgrade autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "0px 0px 15px 15px", "width": "270px", "height": "270px"}
        },
        61: {
            name: "Time Machine Generator",
            challengeDescription: "---",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return false},
            rewardDescription: "Unlock Time Machine Generator autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "15px 0px 0px 0px", "width": "270px", "height": "270px"}
        },
        62: {
            name: "Warp Time",
            challengeDescription: "---",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return false},
            rewardDescription: "Unlock Warp Time autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "0px 15px 0px 0px", "width": "270px", "height": "270px"}
        },
        71: {
            name: "Warp Warp Time",
            challengeDescription: "---",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return false},
            rewardDescription: "Unlock Warp Warp Time autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "0px 0px 0px 15px", "width": "270px", "height": "270px"}
        },
        72: {
            name: "T.M.G.E.",
            challengeDescription: "---",
            goalDescription: "Reach f(t) = 1.79e308",
            canComplete: function() {return false},
            rewardDescription: "Unlock T.M.G.E. autobuyer.",
            completionLimit: 1,
            onEnter() {
                return layerDataReset("f"), layerDataReset("u"), layerDataReset("res"), layerDataReset("tmach")
            },
            style: {"border-radius": "0px 0px 15px 0px", "width": "270px", "height": "270px"}
        },
    }
})