var elem = document.querySelector(".canvas");





elem.addEventListener('mousemove', draw);


function draw(event) {
    console.log("hi");
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    var coor = "X coords: " + x + ", Y coords: " + y;
    console.log(coor);

    var px = "px"


    var pixel = document.createElement('div');
    pixel.classList.add("pixel");
    pixel.style.top = y + px
    pixel.style.left = x + px
    pixel.style.backgroundColor = "black"

    elem.appendChild(pixel);




}





//1 get the x y coordiantes from the eventlistener
//2 take those x y cooridantes and give it to your pixel top

function getXY() {

}