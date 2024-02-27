// drawSquare.js

function drawRotatedSquare(context, x, y, size) {
    // Move to a starting point
    context.translate(x, y); // Move the origin to the specified position
    context.rotate(Math.PI / 4); // Rotate by 45 degrees

    // Draw a smaller square
    context.rect(-size / 2, -size / 2, size, size);

    context.stroke();
}
