"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function drawZac() {
    // Zac's shape (WIP)
    // 13-14-6
    let x0 = 235;
    let y0 = 415;

    let x2 = x0 + 20;
    let y2 = y0 + 20;

    let x3 = x2;
    let y3 = y2;

    let x4 = x3;
    let y4 = y3;

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.fill();

    ctx.fillRect(235, 415, 20, 50);
    ctx.fillRect(300, 500, 20, 50);
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
    ctx.moveTo(107, 270);
    ctx.lineTo(120, 260);
    ctx.lineTo(170, 325);
    ctx.lineTo(160, 340);
    ctx.lineTo(107, 270);
    ctx.stroke();
    ctx.fillStyle = "navy";
    ctx.fill()


}
// Mora's function is some how conflicting with mine"


// function drawMoraa(){

//     ctx.beginPath();
//     ctx.rotate(40 * Math.PI / 180);
//     ctx.rect(330, 150, 35, 25);
//     ctx.stroke();


// }
// The rest of the functions here
// ...


/* Call functions to draw everyone's shapes */

drawZac();
//drawMoraa();
drawWaliyat();
// ...
