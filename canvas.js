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

// The rest of the functions here
// ...


/* Call functions to draw everyone's shapes */

drawZac();
// ...
