const blueButton = document.getElementById('blue_button');
const redButton = document.getElementById('red_button');
const greenButton = document.getElementById('green_button');

let coloredBox = document.getElementsByClassName('colored-box')[0];

let colors = ['blue', 'red', 'green'];
function resetColor(){
    for(const color of colors){
        coloredBox.classList.remove(color);
    }

}
function changeColorToBlue(){
    resetColor();
    coloredBox.classList.add('blue');

}
function changeColorToGreen(){
    resetColor();
    coloredBox.classList.add('green');

}
function changeColorToRed(){
    resetColor();
    coloredBox.classList.add('red');

}

blueButton.addEventListener('click', changeColorToBlue)
redButton.addEventListener('click', changeColorToRed)
greenButton.addEventListener('click', changeColorToGreen)