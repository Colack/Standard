/* 
  Creates a button on the screen displaying the text provided and referenced by the given id.
  id (string)
  text (string)
  x (number)
  y (number)
  width (number)
  height (number)
  border (number)
*/
function mkbutton(id, text, x, y, width, height, border) {
  
  button(id, text);
  setPosition(id, x, y, width, height);
  setProperty(id, "border-width", border);
  
  return 0;
  
}
