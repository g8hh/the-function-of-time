addLayer("auto", {
    tabFormat: {
        "Automation": {
            content:[
                ["display-text", function() { return "<h3>Do challenges or buy upgrades to unlock automations." },],
                "blank",
                ["clickables", [1]],
                "blank",
                ["microtabs", "stuff"],
            ],
        },
        "Study Tree Auto Build": {
            content:[
                ["display-text", function() { return "<h3>Automate buying your tree" },],
                "blank",
                ["clickables", [100]],
                "blank",
                ["clickables", [101]],
                "blank",
                ["clickables", [102]],
                "blank",
                ["clickables", [103]],
                "blank",
                ["clickables", [104]],
                "blank",
                ["clickables", [105]],
                "blank",
                ["clickables", [106]],
                "blank",
                ["clickables", [107]],
                "blank",
                ["clickables", [108]],
                "blank",
                ["clickables", [109]],
                "blank",
                ["clickables", [110]],
                "blank",
                ["clickables", [111]],
                "blank",
            ],
            unlocked() {return hasAchievement("A",95)}
        },
    },
    microtabs: {
        stuff: {
            "Layer 1": {
                buttonStyle() { return {'border-color': '#FFFFFF'} },
                content: [
                    "blank",
                    ["clickables", [2]],
                    ["clickables", [9]],
                    ["clickables", [3]],
                    ["clickables", [8]],
                    ["clickables", [4]],
                    "blank",
                ]
            },
            "Layer 2": {
                buttonStyle() { return {'border-color': '#FFFFFF'} },
                content: [
                    "blank",
                    ["clickables", [10]],
                    ["clickables", [11]],
                    ["clickables", [12]],
                    "blank",
                ]
            },
            "Layer 3": {
                buttonStyle() { return {'border-color': '#FFFFFF'} },
                content: [
                    "blank",
                    ["clickables", [5, 6, 7]],
                    "blank",
                ]
            },
        },
    },
    name: "Automation",
    symbol: "Au",
    startData() { return {
        unlocked: true,
    }},
    row: "side",
    color: "#FFFFFF",
    layerShown() {return true}, 
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Automation")
    },
    layerShown(){return hasAchievement("A", 71)}, 
    clickables: {
        11: {
            display() {return "Keep Buy Max on reset<br>Note: To disable buy max, you have to disable this first."},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 11) == false) {
                    setClickableState("auto", 11, true)
                }
                else if (getClickableState("auto", 11) == true) {
                    setClickableState("auto", 11, false)
                }},
            style() {
                if (getClickableState("auto", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 11) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return true}
        },
        21: {
            display() {return "Toggle Autobuy 'a' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 21) == false) 
                    {setClickableState("auto", 21, true)}
                else if (getClickableState("auto", 21) == true) 
                    {setClickableState("auto", 21, false)}
                },
            style() {
                if (getClickableState("auto", 21) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 21) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 11)}
        },
        22: {
            display() {return "Toggle Autobuy 'b' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 22) == false) 
                    {setClickableState("auto", 22, true)}
                else if (getClickableState("auto", 22) == true) 
                    {setClickableState("auto", 22, false)}
                },
            style() {
                if (getClickableState("auto", 22) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 22) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 12)}
        },
        23: {
            display() {return "Toggle Autobuy 'c' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 23) == false) 
                    {setClickableState("auto", 23, true)}
                else if (getClickableState("auto", 23) == true) 
                    {setClickableState("auto", 23, false)}
                },
            style() {
                if (getClickableState("auto", 23) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 23) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 21)}
        },
        24: {
            display() {return "Toggle Autobuy 'd' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 24) == false) 
                    {setClickableState("auto", 24, true)}
                    
                else if (getClickableState("auto", 24) == true) 
                    {setClickableState("auto", 24, false)}
                },
            style() {
                if (getClickableState("auto", 24) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 24) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 22)}
        },
        31: {
            display() {return "Toggle Autobuy Additive and Multiplicative Research Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 31) == false) 
                    {setClickableState("auto", 31, true)}
                    
                else if (getClickableState("auto", 31) == true) 
                    {setClickableState("auto", 31, false)}
                },
            style() {
                if (getClickableState("auto", 31) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 31) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 31)}
        },
        32: {
            display() {return "Toggle Autobuy 'U' Variable Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 32) == false) 
                    {setClickableState("auto", 32, true)}
                    
                else if (getClickableState("auto", 32) == true) 
                    {setClickableState("auto", 32, false)}
                },
            style() {
                if (getClickableState("auto", 32) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 32) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 41)}
        },
        33: {
            display() {return "Toggle Autobuy 'pU' Variable Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 33) == false) 
                    {setClickableState("auto", 33, true)}
                    
                else if (getClickableState("auto", 33) == true) 
                    {setClickableState("auto", 33, false)}
                },
            style() {
                if (getClickableState("auto", 33) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 33) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 42)}
        },
        34: {
            display() {return "Toggle Autobuy 'a, b, c, & d' Variable Upgrade"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 34) == false) 
                    {setClickableState("auto", 34, true)}
                    
                else if (getClickableState("auto", 34) == true) 
                    {setClickableState("auto", 34, false)}
                },
            style() {
                if (getClickableState("auto", 34) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 34) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 51)}
        },
        41: {
            display() {return "Toggle Autobuy Time Machine Generator"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 41) == false) 
                    {setClickableState("auto", 41, true)}
                    
                else if (getClickableState("auto", 41) == true) 
                    {setClickableState("auto", 41, false)}
                },
            style() {
                if (getClickableState("auto", 41) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 41) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 61)}
        },
        42: {
            display() {return "Toggle Autobuy Warp Time"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 42) == false) 
                    {setClickableState("auto", 42, true)}
                    
                else if (getClickableState("auto", 42) == true) 
                    {setClickableState("auto", 42, false)}
                },
            style() {
                if (getClickableState("auto", 42) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 42) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 62)}
        },
        43: {
            display() {return "Toggle Autobuy Warp Warp Time"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 43) == false) 
                    {setClickableState("auto", 43, true)}
                    
                else if (getClickableState("auto", 43) == true) 
                    {setClickableState("auto", 43, false)}
                },
            style() {
                if (getClickableState("auto", 43) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 43) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 71)}
        },
        44: {
            display() {return "Toggle Autobuy T.M.G.E."},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 44) == false) 
                    {setClickableState("auto", 44, true)}
                    
                else if (getClickableState("auto", 44) == true) 
                    {setClickableState("auto", 44, false)}
                },
            style() {
                if (getClickableState("auto", 44) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 44) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 72)}
        },
        51: {
            display() {return "Toggle Autobuy 'Aₕ' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 51) == false) 
                    {setClickableState("auto", 51, true)}
                    
                else if (getClickableState("auto", 51) == true) 
                    {setClickableState("auto", 51, false)}
                },
            style() {
                if (getClickableState("auto", 51) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 51) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("h", 111)}
        },
        52: {
            display() {return "Toggle Autobuy 'Bₕ' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 52) == false) 
                    {setClickableState("auto", 52, true)}
                    
                else if (getClickableState("auto", 52) == true) 
                    {setClickableState("auto", 52, false)}
                },
            style() {
                if (getClickableState("auto", 52) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 52) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("h", 112)}
        },
        53: {
            display() {return "Toggle Autobuy 'Cₕ' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 53) == false) 
                    {setClickableState("auto", 53, true)}
                    
                else if (getClickableState("auto", 53) == true) 
                    {setClickableState("auto", 53, false)}
                },
            style() {
                if (getClickableState("auto", 53) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 53) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("h", 113)}
        },
        54: {
            display() {return "Toggle Autobuy 'Dₕ' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 54) == false) 
                    {setClickableState("auto", 54, true)}
                    
                else if (getClickableState("auto", 54) == true) 
                    {setClickableState("auto", 54, false)}
                },
            style() {
                if (getClickableState("auto", 54) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 54) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("h", 114)}
        },
        61: {
            display() {return "Toggle Autobuy 'Eₕ' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 61) == false) 
                    {setClickableState("auto", 61, true)}
                    
                else if (getClickableState("auto", 61) == true) 
                    {setClickableState("auto", 61, false)}
                },
            style() {
                if (getClickableState("auto", 61) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 61) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("h", 121)}
        },
        62: {
            display() {return "Toggle Autobuy 'Fₕ' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 62) == false) 
                    {setClickableState("auto", 62, true)}
                    
                else if (getClickableState("auto", 62) == true) 
                    {setClickableState("auto", 62, false)}
                },
            style() {
                if (getClickableState("auto", 62) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 62) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("h", 122)}
        },
        63: {
            display() {return "Toggle Autobuy 'Gₕ' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 63) == false) 
                    {setClickableState("auto", 63, true)}
                    
                else if (getClickableState("auto", 63) == true) 
                    {setClickableState("auto", 63, false)}
                },
            style() {
                if (getClickableState("auto", 63) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 63) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("h", 123)}
        },
        64: {
            display() {return "Toggle Autobuy 'Hₕ' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 64) == false) 
                    {setClickableState("auto", 64, true)}
                    
                else if (getClickableState("auto", 64) == true) 
                    {setClickableState("auto", 64, false)}
                },
            style() {
                if (getClickableState("auto", 64) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 64) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("h", 124)}
        },
        71: {
            display() {return "Toggle Autobuy Infinity"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 71) == false) 
                    {setClickableState("auto", 71, true)}
                    
                else if (getClickableState("auto", 71) == true) 
                    {setClickableState("auto", 71, false)}
                },
            style() {
                if (getClickableState("auto", 71) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 71) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("h", 131)}
        },
        81: {
            display() {return "Toggle Autobuy Knowledge Conversion"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 81) == false) 
                    {setClickableState("auto", 81, true)}
                    
                else if (getClickableState("auto", 81) == true) 
                    {setClickableState("auto", 81, false)}
                },
            style() {
                if (getClickableState("auto", 81) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 81) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasMilestone("ab", 10)}
        },
        82: {
            display() {return "Toggle Autobuy Distortion Conversion"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 82) == false) 
                    {setClickableState("auto", 82, true)}
                    
                else if (getClickableState("auto", 82) == true) 
                    {setClickableState("auto", 82, false)}
                },
            style() {
                if (getClickableState("auto", 82) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 82) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasMilestone("ab", 10)}
        },
        83: {
            display() {return "Toggle Autobuy Lives Conversion"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 83) == false) 
                    {setClickableState("auto", 83, true)}
                    
                else if (getClickableState("auto", 83) == true) 
                    {setClickableState("auto", 83, false)}
                },
            style() {
                if (getClickableState("auto", 83) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 83) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasMilestone("ab", 10)}
        },
        84: {
            display() {return "Toggle Autobuy Res-Upgrades"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 84) == false) 
                    {setClickableState("auto", 84, true)}
                    
                else if (getClickableState("auto", 84) == true) 
                    {setClickableState("auto", 84, false)}
                },
            style() {
                if (getClickableState("auto", 84) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 84) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("ab",25)}
        },
        91: {
            display() {return "Toggle Autobuy Euler's Number"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 91) == false) 
                    {setClickableState("auto", 91, true)}
                    
                else if (getClickableState("auto", 91) == true) 
                    {setClickableState("auto", 91, false)}
                },
            style() {
                if (getClickableState("auto", 91) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 91) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 81)}
        },
        92: {
            display() {return "Toggle Autobuy 'U' Upgrades"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 92) == false) 
                    {setClickableState("auto", 92, true)}
                    
                else if (getClickableState("auto", 92) == true) 
                    {setClickableState("auto", 92, false)}
                },
            style() {
                if (getClickableState("auto", 92) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 92) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("ab",24)}
        },
        101: {
            display() {return "Toggle Autobuy 'w, x, y & z' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 101) == false) 
                    {setClickableState("auto", 101, true)}
                else if (getClickableState("auto", 101) == true) 
                    {setClickableState("auto", 101, false)}
                },
            style() {
                if (getClickableState("auto", 101) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 101) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 91)}
        },
        102: {
            display() {return "Toggle Autobuy Golden Ratio"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 102) == false) 
                    {setClickableState("auto", 102, true)}
                else if (getClickableState("auto", 102) == true) 
                    {setClickableState("auto", 102, false)}
                },
            style() {
                if (getClickableState("auto", 102) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 102) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 92)}
        },
        111: {
            display() {return "Toggle Autobuy Distortion Power"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 111) == false) 
                    {setClickableState("auto", 111, true)}
                else if (getClickableState("auto", 111) == true) 
                    {setClickableState("auto", 111, false)}
                },
            style() {
                if (getClickableState("auto", 111) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 111) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 101)}
        },
        121: {
            display() {return "Toggle Autobuy 'pU' Upgrades"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 121) == false) 
                    {setClickableState("auto", 121, true)}
                else if (getClickableState("auto", 121) == true) 
                    {setClickableState("auto", 121, false)}
                },
            style() {
                if (getClickableState("auto", 121) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 121) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("ab",34)}
        },
        122: {
            display() {return "Toggle Autobuy Pres-Upgrades"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 122) == false) 
                    {setClickableState("auto", 122, true)}
                else if (getClickableState("auto", 122) == true) 
                    {setClickableState("auto", 122, false)}
                },
            style() {
                if (getClickableState("auto", 122) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 122) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("ab",34)}
        },
        123: {
            display() {return "Toggle Autobuy 4D-Upgrades"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 123) == false) 
                    {setClickableState("auto", 123, true)}
                else if (getClickableState("auto", 123) == true) 
                    {setClickableState("auto", 123, false)}
                },
            style() {
                if (getClickableState("auto", 123) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 123) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasUpgrade("ab",34)}
        },
        //Study tree auto build
        1001: {
            display() {return "Toggle Autobuy Tree"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1001) == false) 
                    {setClickableState("auto", 1001, true)}
                    
                else if (getClickableState("auto", 1001) == true) 
                    {setClickableState("auto", 1001, false)}
                },
            style() {
                if (getClickableState("auto", 1001) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 1001) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasMilestone("ab", 9)}
        },
        1011: {
            display() {return "Toggle Autobuy Study 1.1"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1011) == false) 
                    {setClickableState("auto", 1011, true)}
                    
                else if (getClickableState("auto", 1011) == true) 
                    {setClickableState("auto", 1011, false)}
                },
            style() {
                if (getClickableState("auto", 1011) == false) 
                    return {'background-color': 'red', 'margin-left': '180px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1011) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '180px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            unlocked() {return hasMilestone("ab", 9)}
        },
        1012: {
            display() {return "Toggle Autobuy Study 1.n"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1012) == false) 
                    {setClickableState("auto", 1012, true)}
                    
                else if (getClickableState("auto", 1012) == true) 
                    {setClickableState("auto", 1012, false)}
                },
            style() {
                if (getClickableState("auto", 1012) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1012) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1011, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1021: {
            display() {return "Toggle Autobuy Study 2.1"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1021) == false) 
                    {setClickableState("auto", 1021, true)}
                    
                else if (getClickableState("auto", 1021) == true) 
                    {setClickableState("auto", 1021, false)}
                },
            style() {
                if (getClickableState("auto", 1021) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1021) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1011, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1022: {
            display() {return "Toggle Autobuy Study 2.2"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1022) == false) 
                    {setClickableState("auto", 1022, true)}
                    
                else if (getClickableState("auto", 1022) == true) 
                    {setClickableState("auto", 1022, false)}
                },
            style() {
                if (getClickableState("auto", 1022) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1022) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1011, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1023: {
            display() {return "Toggle Autobuy Study 2.3"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1023) == false) 
                    {setClickableState("auto", 1023, true)}
                    
                else if (getClickableState("auto", 1023) == true) 
                    {setClickableState("auto", 1023, false)}
                },
            style() {
                if (getClickableState("auto", 1023) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1023) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1011, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1031: {
            display() {return "Toggle Autobuy Study 3.1"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1031) == false) 
                    {setClickableState("auto", 1031, true)}
                    
                else if (getClickableState("auto", 1031) == true) 
                    {setClickableState("auto", 1031, false)}
                },
            style() {
                if (getClickableState("auto", 1031) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1031) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1021, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1032: {
            display() {return "Toggle Autobuy Study 3.2"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1032) == false) 
                    {setClickableState("auto", 1032, true)}
                    
                else if (getClickableState("auto", 1032) == true) 
                    {setClickableState("auto", 1032, false)}
                },
            style() {
                if (getClickableState("auto", 1032) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1032) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1022, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1033: {
            display() {return "Toggle Autobuy Study 3.3"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1033) == false) 
                    {setClickableState("auto", 1033, true)}
                    
                else if (getClickableState("auto", 1033) == true) 
                    {setClickableState("auto", 1033, false)}
                },
            style() {
                if (getClickableState("auto", 1033) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1033) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1023, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1041: {
            display() {return "Toggle Autobuy Study 4.1"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1041) == false) 
                    {setClickableState("auto", 1041, true)}
                    
                else if (getClickableState("auto", 1041) == true) 
                    {setClickableState("auto", 1041, false)}
                },
            style() {
                if (getClickableState("auto", 1041) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1041) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1031, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1042: {
            display() {return "Toggle Autobuy Study 4.2"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1042) == false) 
                    {setClickableState("auto", 1042, true)}
                    
                else if (getClickableState("auto", 1042) == true) 
                    {setClickableState("auto", 1042, false)}
                },
            style() {
                if (getClickableState("auto", 1042) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1042) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1032, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1043: {
            display() {return "Toggle Autobuy Study 4.3"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1043) == false) 
                    {setClickableState("auto", 1043, true)}
                    
                else if (getClickableState("auto", 1043) == true) 
                    {setClickableState("auto", 1043, false)}
                },
            style() {
                if (getClickableState("auto", 1043) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1043) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1033, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1051: {
            display() {return "Toggle Autobuy Study 5.1"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1051) == false) 
                    {setClickableState("auto", 1051, true)}
                    
                else if (getClickableState("auto", 1051) == true) 
                    {setClickableState("auto", 1051, false)}
                },
            style() {
                if (getClickableState("auto", 1051) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1051) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1041, "#FF7F7F"],[1042, "#FF7F7F"],[1043, "#FF7F7F"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1061: {
            display() {return "Toggle Autobuy Study 6.1"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1061) == false) 
                    {setClickableState("auto", 1061, true)}
                    
                else if (getClickableState("auto", 1061) == true) 
                    {setClickableState("auto", 1061, false)}
                },
            style() {
                if (getClickableState("auto", 1061) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1061) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1051, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1062: {
            display() {return "Toggle Autobuy Study 6.2"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1062) == false) 
                    {setClickableState("auto", 1062, true)}
                    
                else if (getClickableState("auto", 1062) == true) 
                    {setClickableState("auto", 1062, false)}
                },
            style() {
                if (getClickableState("auto", 1062) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1062) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1051, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1071: {
            display() {return "Toggle Autobuy Study 7.1"},
            canClick() {return true},
            onClick() {
                if ((getClickableState("auto", 1071) == false)&&(getClickableState("auto", 1072) == true)) 
                    {setClickableState("auto", 1071, true) & setClickableState("auto", 1072, false)}
                else if (getClickableState("auto", 1071) == false) 
                    {setClickableState("auto", 1071, true)}
                else if (getClickableState("auto", 1071) == true) 
                    {setClickableState("auto", 1071, false)}
                },
            style() {
                if (getClickableState("auto", 1071) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1071) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1061, "#FFA500"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1072: {
            display() {return "Toggle Autobuy Study 7.2"},
            canClick() {return true},
            onClick() {
                if ((getClickableState("auto", 1072) == false)&&(getClickableState("auto", 1071) == true)) 
                    {setClickableState("auto", 1072, true) & setClickableState("auto", 1071, false)}
                else if (getClickableState("auto", 1072) == false) 
                    {setClickableState("auto", 1072, true)}
                else if (getClickableState("auto", 1072) == true) 
                    {setClickableState("auto", 1072, false)}
                },
            style() {
                if (getClickableState("auto", 1072) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1072) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1061, "#FFA500"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1073: {
            display() {return "Toggle Autobuy Study 7.3"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1073) == false) 
                    {setClickableState("auto", 1073, true)}
                    
                else if (getClickableState("auto", 1073) == true) 
                    {setClickableState("auto", 1073, false)}
                },
            style() {
                if (getClickableState("auto", 1073) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1073) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1062, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1081: {
            display() {return "Toggle Autobuy Study 8.1"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1081) == false) 
                    {setClickableState("auto", 1081, true)}
                    
                else if (getClickableState("auto", 1081) == true) 
                    {setClickableState("auto", 1081, false)}
                },
            style() {
                if (getClickableState("auto", 1081) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1081) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1071, "#FFFFFF"],[1072, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1082: {
            display() {return "Toggle Autobuy Study 8.2"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1082) == false) 
                    {setClickableState("auto", 1082, true)}
                    
                else if (getClickableState("auto", 1082) == true) 
                    {setClickableState("auto", 1082, false)}
                },
            style() {
                if (getClickableState("auto", 1082) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1082) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1073, "#FFFFFF"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
        1091: {
            display() {return "Toggle Autobuy Study 9.1"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 1091) == false) 
                    {setClickableState("auto", 1091, true)}
                    
                else if (getClickableState("auto", 1091) == true) 
                    {setClickableState("auto", 1091, false)}
                },
            style() {
                if (getClickableState("auto", 1091) == false) 
                    return {'background-color': 'red', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
                else if (getClickableState("auto", 1091) == true) 
                    return {'background-color': '#FFFFFF', 'margin-left': '15px', 'margin-right': '15px', 'height': '120px', 'width': '120px'}
            },
            branches: [[1081, "#FF7F7F"],[1082, "#FF7F7F"]],
            unlocked() {return hasMilestone("ab", 9)}
        },
    },
    update(diff) {
    },
})