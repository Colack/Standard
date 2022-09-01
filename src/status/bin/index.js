/*
    @Authors @Colack @Monster_YT
    - Last updated by @Colack   (9/1/22)
    @About
    - Set your discord status to a code.org project!
*/

const clientID = "1011782808676606042"
const url = "https://studio.code.org/v3/channels/" + process.argv[2];
const isGame = process.argv[4];

const client = require('discord-rich-presence')(clientID);
const fetch = require('node-fetch');

var count;
var timer = min = sec = 0;

var stateDescription = "";
var stateDetails = "";

var projectName = "Getting..";
var projectType = "Loading..";
var thumbnail = "code";

var pic = "";
var type = "";

var pubd = "";

function timerCounter() {
    min = parseInt(timer / 60, 10);
    sec = parseInt(timer % 60, 10);

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    timer++;

    client.updatePresence({
        state: stateDescription != "" ? stateDescription : min + ":" + sec + " elapsed.",
        details: stateDetails,
        startTimestamp: '',
        endTimestamp: '',
        largeImageKey: thumbnail,
        largeImageText: pubd,
        smallImageKey: pic,
        smallImageText: type,
        instance: true,
        partyId: 'code'
    });
}

const start = async function() {
    const response = await fetch(url);
    const data = await response.json();

    const ver = await fetch('https://colack.github.io/verified.json');
    const verdata = await ver.json();
    if (data) {
        projectName = data.name;
        projectType = data.projectType;

        if(data.publishedAt==null){pubd="Not published."}else{pubd=data.id}

        if(projectType=="gamelab"){pic="js"; type="Javascript"}

        if (process.argv[3] != undefined) {
            if (process.argv[3] == "js") {
                pic = "js";
                type = "JavaScript";
            } else if (process.argv[3] == "block") {
                pic = "block";
                type = "Blocks";
            } else {
                pic = "js";
                type = "JavaScript";
            }
        } else {
            pic = "js";
            type = "JavaScript";
        }

        if(projectType=="gamelab"){projectType="Game Lab";}
        if(projectType=="applab"){projectType="App Lab";}
        if(projectType=="playlab"){projectType="Play Lab"; type="Blocks"; pic="block"}
        if(projectType=="dancelab"){projectType="Dance Lab"; type="Blocks"; pic="block"}

        thumbnail = "https://studio.code.org" + data.thumbnailUrl;
        stateDescription = "Project Type: " + projectType;

        if (isGame) {
            stateDetails = "Playing " + projectName;
        } else {
            stateDetails = "Working on " + projectName;
        }

        for (var i = 0; i < verdata.verified.length; i++) {
            if (verdata.verified[i] == process.argv[2]) {
                pic = "verified";
                type = "Verified Project";
                if (isGame) {
                    stateDetails = "Playing" + projectName + " ✅";
                } else {
                    stateDetails = "Working on " + projectName + " ✅";
                }
                stateDescription = "Verified " + projectType;
            }
        }

        count = setInterval(timerCounter, 1000);
    }
}

start();
