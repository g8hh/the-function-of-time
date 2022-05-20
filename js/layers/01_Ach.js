addLayer("A", {
    tabFormat: [
        "blank", 
        ["display-text", function() { return "<h2>Achievements: "+player.A.achievements.length+"/"+(Object.keys(tmp.A.achievements).length-2) + "</h2><br> damn, this is full of spoilers" }], 
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
            tooltip: "<b>unnecessary</b><br><br> Have f(t) = 1e14<br><br>Reward: Unlock f(t) variables 'Buy Max'",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
        },
        21: {
            name: "U",
            done() { return hasUpgrade("u", 11) },
            tooltip: "<b>vroom vroom...</b><br><br> Buy the first 'U' upgrade.",
            style: {'height': '64px', 'width': '64px'}
        },
        22: {
            name: "more 'U'",
            done() { return hasUpgrade("u", 11) && hasUpgrade("u", 12) && hasUpgrade("u", 13) && hasUpgrade("u", 14) && hasUpgrade("u", 15) },
            tooltip: "<b>more more more more more...</b><br><br> Buy all of the 'U' upgrades in the first row.<br><br>Reward: Unlock second row of 'U' Upgrades",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
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
            tooltip: "<b>yet again no smart enough</b><br><br> Have 1,000,000 Knowledge.<br><br>Reward: Unlock Research 'Buy Max'",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
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
        48: {
            name: "capped",
            done() { return getBuyableAmount("tmach", 21).gte(32) && getBuyableAmount("tmach", 22).gte(32)},
            tooltip: "<b>as for now</b><br><br> Get the second cap of Warp Warp Time and T.M.G.E.<br><br>Reward: Unlock Time Machine 'Buy Max'",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
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
            tooltip: "<b>more more more more more?</b><br><br> Buy all first row of Pres-Upgrades<br><br>Reward: Unlock g(t) variables 'Buy Max'",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
        },
        57: {
            name: "the prestiged",
            done() { return player["p"].best.gte(new Decimal(2).pow(1024))},
            tooltip: "<b>wow good for you</b><br><br> Reach infinite PP, hehe",
            style: {'height': '64px', 'width': '64px'}
        },
        58: {
            name: "packed",
            done() { return hasUpgrade("p", 11) && hasUpgrade("p", 12) && hasUpgrade("p", 13) && hasUpgrade("p", 14) && hasUpgrade("p", 15) && hasUpgrade("p", 21) && hasUpgrade("p", 22) && hasUpgrade("p", 23) && hasUpgrade("p", 24) && hasUpgrade("p", 25)},
            tooltip: "<b>Prob done(?)</b><br><br> BUY THEM ALL, YASSSSSSSSSS",
            style: {'height': '64px', 'width': '64px'}
        },
        61: {
            name: "déjà vu",
            done() { return hasUpgrade("pu", 11)},
            tooltip: "<b>seems familliar</b><br><br> Buy the first 'pU' upgrade.",
            style: {'height': '64px', 'width': '64px'}
        },
        62: {
            name: "'pU'-wer of 15'",
            done() { return player["pu"].best.gte(1e15)},
            tooltip: "<b>copy cat of 'U' Variable, smh</b><br><br> 'pU' value is more than 1e15.",
            style: {'height': '64px', 'width': '64px'}
        },
        63: {
            name: "in-'pU'-nity",
            done() { return player["pu"].best.gte(new Decimal(2).pow(1024))},
            tooltip: "<b>the 'pU'-n is not so 'pU'-nny</b><br><br> 'pU' value is more than 1.79e308.",
            style: {'height': '64px', 'width': '64px'}
        },
        64: {
            name: "do-'uP'-le in-'pU'-nity",
            done() { return player["pu"].best.gte(new Decimal(2).pow(2048))},
            tooltip: "<b>what the hell even is that</b><br><br> 'pU' value is more than 3.23e616.",
            style: {'height': '64px', 'width': '64px'}
        },
        65: {
            name: "tri-'uP'-le in-'pU'-nity",
            done() { return player["pu"].best.gte(new Decimal(2).pow(3072))},
            tooltip: "<b>big no no</b><br><br> 'pU' value is more than 5.81e924.",
            style: {'height': '64px', 'width': '64px'}
        },
        66: {
            name: "weirdo",
            done() { return player["pu"].best.gte(new Decimal(2).pow(4096))},
            tooltip: "<b>The 'pU' Achievements are wierd af</b><br><br> 'pU' value is more than 1e1233.",
            style: {'height': '64px', 'width': '64px'}
        },
        67: {
            name: "weird ach",
            done() { return player["pu"].best.gte(new Decimal(10).pow(10000))},
            tooltip: "<b>🆗🆒</b><br><br> 'pU' value is more than 1e10,000.",
            style: {'height': '64px', 'width': '64px'}
        },
        68: {
            name: "another weird ach",
            done() { return player["pu"].best.gte(new Decimal(10).pow(50000))},
            tooltip: "<b>🆒🆒🆒🆒</b><br><br> 'pU' value is more than 1e50,000.",
            style: {'height': '64px', 'width': '64px'}
        },
        71: {
            name: "∞",
            done() { return player["f"].best.gte(new Decimal(2).pow(1024))},
            tooltip: "<b>WOW</b><br><br> reach f(t) = 1.79e308 <br><br> Reward: ∞ Layer",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
        },
        72: {
            name: "ez",
            done() { return hasChallenge("inf", 11) && hasChallenge("inf", 12) && hasChallenge("inf", 21) && hasChallenge("inf", 22)},
            tooltip: "<b>challenged 1</b><br><br> Complete all Function of 'f' Automation Challenges",
            style: {'height': '64px', 'width': '64px'}
        },
        73: {
            name: "AUTO - MANIAC",
            done() { return hasChallenge("inf", 31) && hasChallenge("inf", 41) && hasChallenge("inf", 42) && hasChallenge("inf", 51)},
            tooltip: "<b>challenged 2</b><br><br> Complete all Function of Research Automation Challenges",
            style: {'height': '64px', 'width': '64px'}
        },
        74: {
            name: "Layer 1 Auto",
            done() { return hasAchievement("A",72) && hasAchievement("A",73) && hasChallenge("inf", 61) && hasChallenge("inf", 62) && hasChallenge("inf", 71) && hasChallenge("inf", 72)},
            tooltip: "<b>challenged 3</b><br><br> Automate the Layer 1",
            style: {'height': '64px', 'width': '64px'}
        },
        75: {
            name: "Layer 2 Auto",
            done() { return hasChallenge("inf", 81) && hasChallenge("inf", 91) && hasChallenge("inf", 92) && hasChallenge("inf", 101)},
            tooltip: "<b>challenged 4</b><br><br> Automate the Layer 2</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        76: {
            name: "Something auto - mation",
            done() { return false},
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        77: {
            name: "Something auto - mation",
            done() { return false},
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        78: {
            name: "Something auto - mation",
            done() { return false},
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        81: {
            name: "WOAH",
            done() { return inChallenge("four", 11)},
            tooltip: "<b>So this is slow...</b><br><br> Enter the fourth dimension",
            style: {'height': '64px', 'width': '64px'}
        },
        82: {
            name: "HOLY YOU'RE DISTORTED",
            done() { return hasUpgrade("four", 11) && hasUpgrade("four", 12) && hasUpgrade("four", 13) && hasUpgrade("four", 14) && hasUpgrade("four", 15)},
            tooltip: "<b>How did you manage this...</b><br><br> Buy all of the first row of 4D-Upgrades",
            style: {'height': '64px', 'width': '64px'}
        },
        83: {
            name: "Shooketh",
            done() { return inChallenge("four", 11) && player["f"].points.gte(new Decimal(2).pow(1024))},
            tooltip: "<b>Possimpossible</b><br><br> Reach infinity in the 4th Dimension",
            style: {'height': '64px', 'width': '64px'}
        },
        84: {
            name: "GASPED",
            done() { return player["four"].points.gte(new Decimal(2).pow(1024))},
            tooltip: "<b>IMPOSSIBLE</b><br><br> Reach infinity Distortions",
            style: {'height': '64px', 'width': '64px'}
        },
        85: {
            name: "this torch dead",
            done() { return hasUpgrade("pu", 25)},
            tooltip: "<b>Break Distorion</b><br><br> Break infinity distortion",
            style: {'height': '64px', 'width': '64px'}
        },
        86: {
            name: "these two are dead",
            done() { return player["four"].points.gte(new Decimal(10).pow(4200))},
            tooltip: "<b>420 x 10</b><br><br> Reach 1e4200 distortion",
            style: {'height': '64px', 'width': '64px'}
        },
        87: {
            name: "fish turtle",
            done() { return false},
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        88: {
            name: "distorted",
            done() { return false},
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        91: {
            name: "Age of Studying",
            done() { return player["four"].points.gte(new Decimal(10).pow(666))},
            tooltip: "<b>Much Smarter</b><br><br> Unlock Study Tree<br><br>Reward: Unlock 'Buy All' button on 'U' Upgrades and Res-Upgrades",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
        },
        92: {
            name: "patience",
            done() { return hasUpgrade("res",121)},
            tooltip: "<b>wait</b><br><br> just wait",
            style: {'height': '64px', 'width': '64px'}
        },
        93: {
            name: "E",
            done() { return hasUpgrade("res",112)},
            tooltip: "<b>e!!!</b><br><br> Unlock Euler's number",
            style: {'height': '64px', 'width': '64px'}
        },
        94: {
            name: "Life Conversion sounds weird",
            done() { return getBuyableAmount("res", 53).gte(1)},
            tooltip: "<b>Weird</b><br><br> I noticed that i like saying weird",
            style: {'height': '64px', 'width': '64px'}
        },
        95: {
            name: "Semi-nior",
            done() { return player["res"].sPoints.gte(30) },
            tooltip: "<b>BUILD BUILD BUILD</b><br><br> i hate clicking, have 30 Study Points<br><br>Reward: Unlock Study Tree Auto Build in Automation",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
        },
        96: {
            name: "Nerd stuffs",
            done() { return false },
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        97: {
            name: "Nerd stuffs",
            done() { return false },
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        98: {
            name: "Nerd stuffs",
            done() { return false },
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        101: {
            name: "How is this related?",
            done() { return hasUpgrade("res",151)},
            tooltip: "<b>What is this?</b><br><br> Unlock Abdicate<br><br> Reward: Unlock 'Buy Max' button in converting study points",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
        },
        102: {
            name: "I hate patience",
            done() { return hasMilestone("ab",7) && hasUpgrade("res",121)},
            tooltip: "<b>won't wait</b><br><br>just won't wait",
            style: {'height': '64px', 'width': '64px'}
        },
        103: {
            name: "∞ Again",
            done() { return player["h"].points.gte(new Decimal(2).pow(1024))},
            tooltip: "<b>Wow...</b><br><br>not amazed tbh, this always happened. <br> Have h(t) = ∞ <br><br> Unlock hInfinity",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
        },
        104: {
            name: "Auto again",
            done() { return (hasUpgrade("h",111)&&hasUpgrade("h",112)&&hasUpgrade("h",113)&&hasUpgrade("h",114)&&hasUpgrade("h",121)&&hasUpgrade("h",122)&&hasUpgrade("h",123)&&hasUpgrade("h",124))},
            tooltip: "<b>Great!</b><br><br>blah blah automate h(t) variables blah blah<br><br>Reward: Unlock Automate Upgrade 3.1 and hInf-Upgrade n.1",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
        },
        105: {
            name: "Vatican (2019)",
            done() { return player.ab.total.gte(825)},
            tooltip: "<b>825 Lives</b> <br><br> population of Vatican city",
            style: {'height': '64px', 'width': '64px'}
        },
        106: {
            name: "Life Things",
            done() { return false},
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        107: {
            name: "Life Things",
            done() { return false},
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        108: {
            name: "Life Things",
            done() { return false},
            tooltip: "<b>Locked</b>",
            style: {'height': '64px', 'width': '64px'}
        },
        111: {
            name: "What's next 'i(t)'?",
            done() { return getBuyableAmount("h", 11).gte(1)},
            tooltip: "<b>Ahhhhhhhhhhhhh</b><br><br> Buy 'Aₕ' Variable",
            style: {'height': '64px', 'width': '64px'}
        },
        112: {
            name: "i love bₕ-acon",
            done() { return getBuyableAmount("h", 21).gte(1)},
            tooltip: "<b>bₕ-acon</b><br><br> Buy 'Bₕ' Variable",
            style: {'height': '64px', 'width': '64px'}
        },
        113: {
            name: "se-cₕ-ond plus 1 h(t) achievement",
            done() { return getBuyableAmount("h", 31).gte(1)},
            tooltip: "<b>cₕ-anon</b><br><br> Buy 'Cₕ' Variable",
            style: {'height': '64px', 'width': '64px'}
        },
        114: {
            name: "thir-dₕ plus 1 h(t) achievement",
            done() { return getBuyableAmount("h", 41).gte(1)},
            tooltip: "<b>dₕ-ance</b><br><br> Buy 'Dₕ' Variable",
            style: {'height': '64px', 'width': '64px'}
        },
        115: {
            name: "m-eₕ just another achievement",
            done() { return getBuyableAmount("h", 51).gte(1)},
            tooltip: "<b>Eₕ...</b><br><br> Buy 'Eₕ' Variable",
            style: {'height': '64px', 'width': '64px'}
        },
        116: {
            name: "hehe fₕ-art",
            done() { return getBuyableAmount("h", 61).gte(1)},
            tooltip: "<b>fₕ-art</b><br><br> Buy 'Fₕ' Variable",
            style: {'height': '64px', 'width': '64px'}
        },
        117: {
            name: "I hate making these puns",
            done() { return getBuyableAmount("h", 71).gte(1)},
            tooltip: "<b>gₕ-oat</b><br><br> Buy 'Gₕ' Variable",
            style: {'height': '64px', 'width': '64px'}
        },
        118: {
            name: "hhhhhhhh hhhhhhhh hhhhhhhh hhhhhhhh",
            done() { return getBuyableAmount("h", 81).gte(1)},
            tooltip: "<b>H</b><br><br> Buy 'Hₕ' Variable<br><br> Reward: Unlock h(t) variables 'Buy Max'",
            style: {'height': '64px', 'width': '64px', "color": "#680CA6"}
        },
    },
})