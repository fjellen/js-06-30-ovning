const inputField = document.getElementById("input");
const button = document.getElementById("button");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const BACKGROUND_COLOR = "black";

const randomRGB = () => Math.max(60, Math.floor(Math.random() * 255));

const randomColor = () => `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;


function drawCharacter(ctx, character, x, y) {
    ctx.fillStyle = randomColor();

    ctx.fillText(character, x, y);
}

function clearScreen() {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawText(ctx, text, x, y) {
    clearScreen();
    
    ctx.font = "40px Arial";

    const metrics = ctx.measureText(text);
    const textWidth = metrics.width + ((40/2) * text.length);
    const textHeight = 40;

    Array.from(text).forEach(function(character, i){
        drawCharacter(ctx, character, -(textWidth / 2) + x + (i*40), (textHeight/2) + y, i);
    });
}

clearScreen();


button.addEventListener("click", function(event){
    const value = inputField.value;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    drawText(ctx, value, centerX, centerY);
});