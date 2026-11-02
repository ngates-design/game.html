// 1. Setup the canvas context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 2. Define Game Entities (The Player object)
const player = {
    x: 375, // Starting position (Center horizontally)
    y: 500, // Starting position (Near bottom)
    width: 50,
    height: 50,
    color: "#00FFCC",
    speed: 5
};

// 3. Track Keyboard Input
const keys = {};
window.addEventListener("keydown", (e) => keys[e.code] = true);
window.addEventListener("keyup", (e) => keys[e.code] = false);

// 4. The Game Loop Functions
function update() {
    // Move left
    if (keys["ArrowLeft"] && player.x > 0) {
        player.x -= player.speed;
    }
    // Move right
    if (keys["ArrowRight"] && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }
    // Move up
    if (keys["ArrowUp"] && player.y > 0) {
        player.y -= player.speed;
    }
    // Move down
    if (keys["ArrowDown"] && player.y < canvas.height - player.height) {
        player.y += player.speed;
    }
}

function draw() {
    // Clear the screen from the previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player box
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function gameLoop() {
    update(); // Run calculations
    draw();   // Draw everything
    
    // Tells the browser to run this loop smoothly at 60 FPS
    requestAnimationFrame(gameLoop); 
}

// 5. Fire up the game loop
gameLoop();
