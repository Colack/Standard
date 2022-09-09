/*
    @Authors @Colack @Varrience
     - Last Updated by Colack   (8/31/22)
    @About
     - This file contains all credits from the './CREDITS' file. Thanks for all the help!
*/

var ver = "0.1";
var credits = [
    'CDO Standard Library',
    'Author: Many People',
    'Thanks to:',
    '- Colack',
    '- Varrience',
    '- MonsterYT',
    'Everyone at [WUT] World, and the GameLab forum.',
    'Thank you for using this library!'
];

function credits() {
    for (var i = 0; i < credits.length; i++) {
        console.log(credits[i]);
    }
}

function version() {
    console.log(ver);
}
