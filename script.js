// This is defining the colors in the random array
var colorRand = [ 'black', 'white', 'orange', 'blue'];
// Function used to change the background to the colorRand array of colors for the background
function backgroundColor() {
    document.getElementById("bodyChange").style.backgroundImage = "none";
    document.getElementById("bodyChange").style.backgroundColor = colorRand[Math.floor(Math.random() * colorRand.length)];
}

// This is defining the images to use in the random array
// var backgroundImg = new Array();
// backgroundImg = 'red0.png';
// backgroundImg = 'red1.jpg';
// backgroundImg = 'red2.jpg';
var bgImg = [ "url('red0.png')", "url('red1.jpg')", "url('red2.jpg')"];
// Function used to change the background images to the backgroundImg array of images
function backgroundImg() {
    document.getElementById("bodyChange").style.backgroundImage = bgImg[Math.floor(Math.random() * bgImg.length)];
}
