"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function drawZac() {
    // Zac's shape
    // 13-14-6

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "green");
    ctx.fillStyle = gradient;

    let x0 = 235;
    let y0 = 415;

    let x2 = x0 + 20;
    let y2 = y0 + 20;

    let x3 = x2 - 65;
    let y3 = y2 + 65;

    let x4 = x3 - 20;
    let y4 = y3 - 20;

    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.fill();

    let x5 = 320;
    let y5 = 510;

    let x6 = x5 + 20;
    let y6 = y5 + 20;

    let x7 = x6 - 65;
    let y7 = y6 + 65;

    let x8 = x7 - 20;
    let y8 = y7 - 20;

    ctx.beginPath();
    ctx.moveTo(x5, y5);
    ctx.lineTo(x6, y6);
    ctx.lineTo(x7, y7);
    ctx.lineTo(x8, y8);
    ctx.fill();
    //ctx.fillRect(235, 415, 20, 50);
    //ctx.fillRect(300, 500, 20, 50);
}

function drawWaliyat() {
    ctx.beginPath();
    ctx.moveTo(175, 190);
    ctx.lineTo(190, 180);
    ctx.lineTo(250, 250);
    ctx.lineTo(240, 260);
    ctx.lineTo(176, 190);
    ctx.stroke();
    ctx.fillStyle = "navy";
    ctx.fill()



    ctx.beginPath();
    ctx.rotate(47 * Math.PI / 180);
    ctx.rect(360, 90, 20, 16);
    ctx.stroke();
    ctx.fillStyle = "navy";
    ctx.fill()


}

function drawMoraa(){

    ctx.beginPath();
    ctx.rotate(47 * Math.PI / 180);
    ctx.rect(360, 90, 20, 16);
    ctx.stroke();


}

function drawSergio(context, x, y, size) {
    // Move to a starting point
    context.translate(x, y); // Move the origin to the specified position
    context.rotate(Math.PI / 4); // Rotate by 45 degrees

    // Draw a smaller square
    context.rect(-size / 2, -size / 2, size, size);

    context.stroke();
}

function drawMat() {
    // Mat's shape 13

    let x0 = 161;
    let y0 = 335;

    let x1 = 99;
    let y1 = 402;

    let x2 = x0 + 31;
    let y2 = y1 + 105;

    let x3 = x0 + 95;
    let y3 = y0 + 100;


    ctx.fillStyle = "red";
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();



}

function jack() {
    const c = document.getElementById("myCanvas");
        ctx.strokeStyle = "black";

        ctx.beginPath();
        ctx.moveTo(180, 191);
        ctx.lineTo(271, 114);
        ctx.lineTo(329, 176);
        ctx.lineTo(241, 258);
        ctx.lineTo(180, 191);

        // Fill Color
        ctx.fillStyle = "#273D84";
        ctx.fill();
}

/* Call functions to draw everyone's shapes */

drawZac();
drawWaliyat();
drawMat();
drawMoraa();
drawSergio();
jack();
