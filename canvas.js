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

// The rest of the functions here
// ...


/* Call functions to draw everyone's shapes */

drawZac();
// ...
