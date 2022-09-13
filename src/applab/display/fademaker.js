/*
    @Authors @Colack
        - Last Updated by Colack    (9/12/22)
    @About
        Create Elements using javascript
 */

/*
  Creates a new text input, and then slowly makes it more visible.
  Built for dark mode
*/
function doFade(newScreen) {
  
  textInput("NEWFADE", "");
  
  setPosition("NEWFADE", 0, 0, 320, 450);
  
  setProperty("NEWFADE", "border-color", rgb(0,0,0,0));
  setProperty("NEWFADE", "background-color", rgb(0,0,0,0));
  setProperty("NEWFADE", "text-color", rgb(0,0,0,0));
  
  var i = 0;
  
  timedLoop(10, function() {
    
    i += 0.01;
    
    if (i > 1) {
      
      stopTimedLoop();
      
      deleteElement("NEWFADE");
      
      setScreen(newScreen);
      
    } else {
      
      setProperty("NEWFADE", "background-color", rgb(0, 0, 0, i));
      
    }
    
  });
  
}

function doReverseFade(newScreen) {
  
  textInput("NEWFADE", "");
  
  setScreen(newScreen);
  
  setPosition("NEWFADE", 0, 0, 320, 450);
  
  setProperty("NEWFADE", "border-color", rgb(0,0,0,1));
  setProperty("NEWFADE", "background-color", rgb(0,0,0,1));
  setProperty("NEWFADE", "text-color", rgb(0,0,0,1));
  
  var i = 1;
  
  timedLoop(10, function() {
    
    i -= 0.01;
    
    if (i < 0) {
      
      stopTimedLoop();
      
      deleteElement("NEWFADE");
      
    } else {
      
      setProperty("NEWFADE", "background-color", rgb(0, 0, 0, i));
      
    }
    
  });
  
}

// Contributors
function contributors() {
    console.log("@Colack");
}
