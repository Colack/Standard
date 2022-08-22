/*
    @Author @Colack @Varrience
    @Date 08/21/2022
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
// Is this what you were trying to accoplish here? wait each message
function roll() {
    var index = 0;
    var loop = setInterval(function(){
    if(index < credits.length){
        console.log(credits[index]);
        index++;
    } else {
        clearInterval(loop);
    }
},waitTime);
}
// Or is this what you planned for?
function roll2() {
    setTimeout(function(){
        for(var i = 0; i < credits.length; i++){
            console.log(credits[i]);
        }
    },waitTime)
}
/*
Fatal Error?? Duplicate identifier names will crash this
function credits() {
    var x = false;
    for (var i = 0; i < credits.length; i++) {
        if (x) {
            console.log(credits[i]);
            // Are you waiting a certian amount of time to run each message? or is this just individual delay?
            setTimeout(function() {
                x = true;
                // No function recall?
            }, waitTime);
        } 
    }
}
*/
