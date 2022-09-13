// Load a screen from an given variable
function load(x) {
  
  if (myScreens.length <= 0) {
    
  } else {
    
    for (var i = 0; i < myScreens[x].buttons.length; i++) {
      
      button(myScreens[x].buttons[i].name, myScreens[x].buttons[i].text);
      
      var y = myScreens[x].buttons[i].name;
      
      setPosition(y, myScreens[x].buttons[i].xpos, myScreens[x].buttons[i].ypos);
      
    }
    
    for (var i = 0; i < myScreens[x].label.length; i++) {
      
      textLabel(myScreens[x].label[i].name, myScreens[x].label[i].text);
      
      var y = myScreens[x].label[i].name;
      
      setPosition(y, myScreens[x].label[i].xpos, myScreens[x].label[i].ypos);
      
    }
    
    for (var i = 0; i < myScreens[x].input.length; i++) {
      
      textInput(myScreens[x].input[i].name, myScreens[x].input[i].text);
      
      var y = myScreens[x].input[i].name;
      
      setPosition(y, myScreens[x].input[i].xpos, myScreens[x].input[i].ypos);
      
    }
    
  }
  
}
