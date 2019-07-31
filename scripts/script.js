var bgImg = [ "url('images/databg.gif')", "url('images/reboundbounce.gif')", "url('images/redwater.gif')", "url('images/dnaspin.gif')"];
// Function used to change the background images to the backgroundImg array of images
function backgroundImg() {
    document.getElementById("bodyChange").style.backgroundImage = bgImg[Math.floor(Math.random() * bgImg.length)];
  }
