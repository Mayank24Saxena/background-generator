var cssInfo = document.querySelectorAll("h3")[2];
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient")
var button = document.querySelector("button");
// var shuffleButton = document.querySelectorAll("button")[1];

let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    color = '#';
    for(i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

// let shuffleClick = () => {
//     for(i=1;i<100;i++){
//         color1.value = getRandomColor();
//         color2.value = getRandomColor();
//         colorSelector();
//     }
// }

let buttonClick = () => {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setInterval(() => {
        colorSelector();  
    }, 3);
}

let colorSelector = () => {
    body.style.background = "linear-gradient(to right," 
    + color1.value 
    + ", " 
    + color2.value 
    +")";
    cssInfo.textContent = body.style.background + ";"
}
// shuffleButton.addEventListener("click", shuffleClick);
button.addEventListener("click", buttonClick)
color1.addEventListener("input", colorSelector);
color2.addEventListener("input", colorSelector);
