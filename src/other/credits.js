/*
    @Author @Colack, @Varrience
    @Date 08/17/2022
    @About
     - This file contains all credits from the './CREDITS' file. Thanks for all the help!
*/

var waitTime = 50;
var credits = [
    'CDO Standard Library',
    'Author: Many People',
    'Thanks to:',
    '- Colack',
    '- Varrience',
    'Everyone at [WUT] World, and the GameLab forum.',
    'Thank you for using this library!'
];

function credits() {
    var x = false;
    for (var i = 0; i < credits.length; i++) {
        if (x) {
            console.log(credits[i]);
            setTimeout(function() {
                x = true;
            }, waitTime);
        } 
    }
}
