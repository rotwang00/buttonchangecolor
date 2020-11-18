// document.getElementById("button1").style.backgroundColor;

let color1 = "green";
let color2 = "blue";

const b1 = document.getElementById("button1");

b1.addEventListener("click", toggleColor);

function toggleColor() {
    if (b1.style.backgroundColor == color1) {
        b1.style.backgroundColor = color2;
    } else {
        b1.style.backgroundColor = color1;
    }
}