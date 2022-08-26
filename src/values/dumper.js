/**
@Authors: Varrience
@Version: 0.01
@About
  - Dumps assets without needing to look at the whole project
*/
const path = "https://studio.code.org/v3";
const id = getURLPath()[2];
// dump an asset image [sounds don't work]
function getAsset(name, saveAs){
  console.log("Path: " + path + "/assets/" + id);
  let animation = loadImage(path + "/assets/" + id, function(){
    save(animation, saveAs || id);
  })
}
// dump the source FIXME: not supported yet I'll update it later
function getSource(saveAs) {
  save(path + "/sources/" + id + "main.json", saveAs || "main.json");
}
// dump an animation
function getAnimation(id, saveAs) {
  console.log("Path: " + path + "/animations/" + id);
  let animation = loadImage(path + "/animations/" + id, function(){
    save(animation, saveAs || id);
  })
}
