// Generate an house and output it. //
function generate(size) {
  
  if (size < 10) {
    
    console.log("Size must be 10 or greater.");
    
  } else {
    
    console.log("Generating an house.");
    console.log("");
      
    console.log("  ___________________  ");
    console.log(" /                   \\");
    console.log("/_____________________\\");
    console.log(" |___________________| ");
      
    for (var i = 0; i < size - 4; i++) {
  
      var random = randomNumber(1, 5);
      
      if (random == 1) {
        
        console.log("|_| |________| |___| ||");
        
      } else if (random == 2) {
        
        console.log("|______| |____________|");
        
      } else if (random == 3) {
        
        console.log("|_____________________|");
        
      } else if (random == 4) {
        
        console.log("|___|______|__|__|____|");
        
      } else if (random == 5) {
        
        console.log("|_____||______||__||__|");
        
      }
        
        
    }

    console.log("|_____________________|");
    
  }
  
}
