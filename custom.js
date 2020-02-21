let pxRatio = window.devicePixelRatio;
let pxScreenWidth = screen.width;
let pxScreenHeight = screen.height; 



function showWindowInfos() {
    console.log("Ratio actuel = " + pxRatio + ",\nLargeur de l'écran = " + pxScreenWidth + ",\nLargeur actuelle de la fenêtre = " + window.innerWidth); 
}



window.addEventListener("resize", function() {
    showWindowInfos();
})

showWindowInfos();




