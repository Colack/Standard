// Creates an Authenticator Code and sends it to an specific variable. //
function authCreate(yourVariable) {
  
  var create1 = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var create2 = 12;
  var create3 = "";
  
  for (var i = 0; i < create2; i++) {
    
    var create4 = Math.floor(Math.random() * create1.length);
    
    create3 += create1.substring(create4, create4 +1);
    
  }
  
  console.log("Your New Authenticator Code: " + create3);
  console.log("Saved in variable " + yourVariable);
  
  yourVariable = create3;
  
  delete(create1);
  delete(create2);
  delete(create3);
  
}
