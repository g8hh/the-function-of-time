addLayer("A", {
    tabFormat: [
        "blank", 
        ["display-text", function() { return "Achievements: "+player.A.achievements.length+"/"+(Object.keys(tmp.A.achievements).length-2) }], 
        "blank", "blank",
        "achievements",
    ],
    startData() { return {
        unlocked: true,
    }},
    color: "#FFE4B5",
    row: "side",
    layerShown() {return true}, 
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievements: {
        11: {
            name: "a",
            done() { return getBuyableAmount("f", 11).gte(1) },
            tooltip: "<b>The 'a' variable</b><br><br> Have 1 'a' variable amount.",
            style: {'height': '64px', 'width': '64px'}
        },
        12: {
            name: "b",
            done() { return getBuyableAmount("f", 12).gte(1) },
            tooltip: "<b>Ofcourse 'b' variable</b><br><br> Have 1 'b' variable amount.",
            style: {'height': '64px', 'width': '64px'}
        },
        13: {
            name: "c",
            done() { return getBuyableAmount("f", 21).gte(1) },
            tooltip: "<b>And then 'c' variable</b><br><br> Have 1 'c' variable amount.",
            style: {'height': '64px', 'width': '64px'}
        },
        14: {
            name: "d",
            done() { return getBuyableAmount("f", 22).gte(1) },
            tooltip: "<b>Lastly 'd' variable</b><br><br> Have 1 'd' variable amount.",
            style: {'height': '64px', 'width': '64px'}
        },
        15: {
            name: "e",
            done() { return player["f"].best.gte(100000000) },
            tooltip: "<b>e???</b><br><br> Have 1 'e' variab- f(t) = 100,000,000",
            style: {'height': '64px', 'width': '64px'}
        },
        16: {
            name: "f",
            done() { return player["f"].best.gte(1e10) },
            tooltip: "<b>no</b><br><br> Have f(t) = 1e10",
            style: {'height': '64px', 'width': '64px'}
        },
        17: {
            name: "g",
            done() { return player["f"].best.gte(1e12) },
            tooltip: "<b>there is literally no 'g'</b><br><br> Have f(t) = 1e12",
            style: {'height': '64px', 'width': '64px'}
        },
        18: {
            name: "h",
            done() { return player["f"].best.gte(1e14) },
            tooltip: "<b>unnecessary</b><br><br> Have f(t) = 1e14",
            style: {'height': '64px', 'width': '64px'}
        },
        21: {
            name: "U",
            done() { return hasUpgrade("u", 11) },
            tooltip: "<b>vroom vroom...</b><br><br> Buy the first upgrade.",
            style: {'height': '64px', 'width': '64px'}
        },
        22: {
            name: "more 'U'",
            done() { return hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15) },
            tooltip: "<b>more more more more more...</b><br><br> Buy all of the 'U' upgrades in the first row.",
            style: {'height': '64px', 'width': '64px'}
        },
        23: {
            name: "h-U-ndred",
            done() { return player["u"].best.gte(100) },
            tooltip: "<b>100</b><br><br> 'U' value is more than 100.",
            style: {'height': '64px', 'width': '64px'}
        },
        24: {
            name: "tho-U-sand",
            done() { return player["u"].best.gte(1000) },
            tooltip: "<b>1,000 of 'U'</b><br><br> 'U' value is more than 1,000.",
            style: {'height': '64px', 'width': '64px'}
        },
        25: {
            name: "million",
            done() { return player["u"].best.gte(1000000) },
            tooltip: "<b>The is no 'U' in a million</b><br><br> 'U' value is more than 1,000,000.",
            style: {'height': '64px', 'width': '64px'}
        },
        26: {
            name: "billi-U-n",
            done() { return player["u"].best.gte(1e9) },
            tooltip: "<b>Its billion, duh...</b><br><br> 'U' value is more than 1e9.",
            style: {'height': '64px', 'width': '64px'}
        },
        27: {
            name: "p-U-wer of 15",
            done() { return player["u"].best.gte(1e15) },
            tooltip: "<b>sigh...</b><br><br> 'U' value is more than 1e15.",
            style: {'height': '64px', 'width': '64px'}
        },
        28: {
            name: "It's done right?",
            done() { return hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15) && hasUpgrade("u", 21) && hasUpgrade("u", 22) && hasUpgrade("u", 23) && hasUpgrade("u", 24) && hasUpgrade("u", 25) && hasUpgrade("u", 31) && hasUpgrade("u", 32) && hasUpgrade("u", 33) && hasUpgrade("u", 34) && hasUpgrade("u", 35) },
            tooltip: "<b>no(?)</b><br><br> Buy all of the 'U' upgrades from the first to third row.",
            style: {'height': '64px', 'width': '64px'}
        },
        31: {
            name: "Research",
            done() { return hasUpgrade("u", 14) },
            tooltip: "<b>u study NOW!</b><br><br> Unlock Research.",
            style: {'height': '64px', 'width': '64px'}
        },
        32: {
            name: "smart",
            done() { return player["res"].best.gte(1) },
            tooltip: "<b>but no smart</b><br><br> Have 1 Knowledge.",
            style: {'height': '64px', 'width': '64px'}
        },
        33: {
            name: "slow",
            done() { return hasUpgrade("res", 11) && hasUpgrade("res", 12) && hasUpgrade("res", 13) && hasUpgrade("res", 14)},
            tooltip: "<b>pls buff res-upgrades</b><br><br> Buy Res-Upgrades 1 to 4.",
            style: {'height': '64px', 'width': '64px'}
        },
        34: {
            name: "very smort",
            done() { return player["res"].best.gte(1000000) },
            tooltip: "<b>yet again no smart enough</b><br><br> Have 1,000,000 Knowledge.",
            style: {'height': '64px', 'width': '64px'}
        },
        35: {
            name: "very very smort",
            done() { return player["res"].best.gte(1e9) },
            tooltip: "<b>but yet again no smart enough</b><br><br> Have 1e9 Knowledge.",
            style: {'height': '64px', 'width': '64px'}
        },
        36: {
            name: "very very very smort",
            done() { return player["res"].best.gte(1e15) },
            tooltip: "<b>and but yet again no smart enough</b><br><br> Have 1e15 Knowledge.",
            style: {'height': '64px', 'width': '64px'}
        },
        37: {
            name: "very very very very",
            done() { return player["res"].best.gte(1e24) },
            tooltip: "<b>and again, and but yet again no smart enough</b><br><br> Have 1e24 Knowledge.",
            style: {'height': '64px', 'width': '64px'}
        },
        38: {
            name: "veryyyyy yyyyyyyy yyyyyyyy yyyyyyyy",
            done() { return player["res"].best.gte(1e36) },
            tooltip: "<b>hmmmmmm, ok</b><br><br> Have 1e36 Knowledge.",
            style: {'height': '64px', 'width': '64px'}
        },
        41: {
            name: "Time Machine",
            done() { return hasUpgrade("res", 15) },
            tooltip: "<b>100,000 knowledge is too much :c</b><br><br> Unlock Time Machine",
            style: {'height': '64px', 'width': '64px'}
        },
        42: {
            name: "x10",
            done() { return tmp.pointGen.gte(10) },
            tooltip: "<b>the real vroom vroom</b><br><br> Gain 10 time per second",
            style: {'height': '64px', 'width': '64px'}
        },
        43: {
            name: "speed of potato",
            done() { return tmp.pointGen.gte(1024) },
            tooltip: "<b>what even is the speed of potatoes?</b><br><br> Gain 1,024 time per second",
            style: {'height': '64px', 'width': '64px'}
        },
        44: {
            name: "a super long named thing",
            done() { return hasUpgrade("p", 12)},
            tooltip: "<b>what does it even mean</b><br><br> Unlock Time Machine Genarator Enchancer (T.M.G.E.)",
            style: {'height': '64px', 'width': '64px'}
        },
        45: {
            name: "speed of potato squared",
            done() { return tmp.pointGen.gte(1048576) },
            tooltip: "<b>wow faster potato</b><br><br> Gain 1,048,576 time per second",
            style: {'height': '64px', 'width': '64px'}
        },
        46: {
            name: "speed of light",
            done() { return tmp.pointGen.gte(29979245800) },
            tooltip: "<b>in cm.</b><br><br> Gain 29,979,245,800 time per second",
            style: {'height': '64px', 'width': '64px'}
        },
        47: {
            name: "senior",
            done() { return getBuyableAmount("tmach", 12).gte(60) },
            tooltip: "<b>very old</b><br><br> Warp Time 60 times",
            style: {'height': '64px', 'width': '64px'}
        },
        51: {
            name: "PP???",
            done() { return player["p"].best.gte(1) },
            tooltip: "<b>THERE IS LITERALLY A 'g'</b><br><br> Prestige",
            style: {'height': '64px', 'width': '64px'}
        },
        52: {
            name: "w",
            done() { return getBuyableAmount("g", 11).gte(1) },
            tooltip: "<b>wait what happened to 'i' to 'v'</b><br><br> Have 1 'w' variable amount.",
            style: {'height': '64px', 'width': '64px'}
        },
        53: {
            name: "x",
            done() { return getBuyableAmount("g", 12).gte(1) },
            tooltip: "<b>so we not talking about 'i' to 'v'...</b><br><br> Have 1 'x' variable amount.",
            style: {'height': '64px', 'width': '64px'}
        },
        54: {
            name: "y",
            done() { return getBuyableAmount("g", 21).gte(1) },
            tooltip: "<b>so no 'i' to 'v'???</b><br><br> Have 1 'y' variable amount.",
            style: {'height': '64px', 'width': '64px'}
        },
        55: {
            name: "z",
            done() { return getBuyableAmount("g", 22).gte(1) },
            tooltip: "<b>'i' to 'v' pls</b><br><br> Have 1 'z' variable amount.",
            style: {'height': '64px', 'width': '64px'}
        },
        56: {
            name: "prestiged",
            done() { return hasUpgrade("p", 11) && hasUpgrade("p", 12) && hasUpgrade("p", 13) && hasUpgrade("p", 14) && hasUpgrade("p", 15) },
            tooltip: "<b>more more more more more?</b><br><br> Buy all first row of Pres-Upgrades",
            style: {'height': '64px', 'width': '64px'}
        },
    },
})