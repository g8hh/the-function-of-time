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
            display() {return "Toggle Autobuy 'a' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 11) == false) 
                    {setClickableState("auto", 11, true)}
                else if (getClickableState("auto", 11) == true) 
                    {setClickableState("auto", 11, false)}
                },
            style() {
                if (getClickableState("auto", 11) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 11) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 11)}
        },
        12: {
            display() {return "Toggle Autobuy 'b' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 12) == false) 
                    {setClickableState("auto", 12, true)}
                else if (getClickableState("auto", 12) == true) 
                    {setClickableState("auto", 12, false)}
                },
            style() {
                if (getClickableState("auto", 12) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 12) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 12)}
        },
        13: {
            display() {return "Toggle Autobuy 'c' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 13) == false) 
                    {setClickableState("auto", 13, true)}
                else if (getClickableState("auto", 13) == true) 
                    {setClickableState("auto", 13, false)}
                },
            style() {
                if (getClickableState("auto", 13) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 13) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 21)}
        },
        14: {
            display() {return "Toggle Autobuy 'd' Variable"},
            canClick() {return true},
            onClick() {
                if (getClickableState("auto", 14) == false) 
                    {setClickableState("auto", 14, true)}
                else if (getClickableState("auto", 14) == true) 
                    {setClickableState("auto", 14, false)}
                },
            style() {
                if (getClickableState("auto", 14) == false) 
                    return {'background-color': 'red',}
                else if (getClickableState("auto", 14) == true) 
                    return {'background-color': '#FFFFFF',}
            },
            unlocked() {return hasChallenge("inf", 22)}
        },
    },
})