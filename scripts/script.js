// This is defining the colors in the random array
var colorRand = [ 'black', 'green', 'orange', 'blue'];
// Function used to change the background to the colorRand array of colors for the background
function backgroundColor() {
    document.getElementById("header1").style.color = "#780a02";
    document.getElementById("bodyChange").style.backgroundImage = "none";
    document.getElementById("bodyChange").style.backgroundColor = colorRand[Math.floor(Math.random() * colorRand.length)];
}

// This is defining the images to use in the random array
var bgImg = [ "url('images/red0.png')", "url('images/red1.jpg')", "url('images/red2.jpg')"];
// Function used to change the background images to the backgroundImg array of images
function backgroundImg() {
    document.getElementById("bodyChange").style.backgroundImage = bgImg[Math.floor(Math.random() * bgImg.length)];
    document.getElementById("header1").style.color = "white";
}
1
