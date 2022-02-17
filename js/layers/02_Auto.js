addLayer("auto", {
    tabFormat: {
        "Automation": {
            content:[
                ["display-text", function() { return "<h3>Do challenges to unlock automations." },],
                "blank",
                "clickables"
            ],
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
            display() {return "Toggle Autobuy 'U' Variable Upgrade"},
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
    },
})