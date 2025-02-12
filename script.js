document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    const firstGif = document.querySelector(".first-gif");
    const sadGif = document.querySelector(".sad-gif");
    const questionContainer = document.querySelector(".question-container");
    const secondContent = document.querySelector(".second-content");
    //const thirdContent = document.querySelector(".third-content");

    // Set No button's position to absolute so we can move it
    noBtn.style.position = "absolute";

    // Restrict No button within a safe zone
    const safeArea = {
        minX: 50, // Left padding
        maxX: window.innerWidth - 100, // Avoid going off the right edge
        minY: window.innerHeight / 2, // Ensure it stays below the GIF
        maxY: window.innerHeight - 100, // Avoid going off the bottom
    };

    // Move "No" button randomly but inside the safe area
    noBtn.addEventListener("click", function () {
        firstGif.style.display = "none"; // Hide the first gif
        sadGif.style.display = "block"; // Show the third gif and message

        let newX = Math.random() * (safeArea.maxX - safeArea.minX) + safeArea.minX;
        let newY = Math.random() * (safeArea.maxY - safeArea.minY) + safeArea.minY;
        

        noBtn.style.left = newX + "px";
noBtn.style.top = newY + "px";
    });

    // Show second content when "Yes" is clicked
    yesBtn.addEventListener("click", function () {
        sadGif.style.display = "none"; // Show the third gif and message
        firstGif.style.display = "none"; // Hide the first gif
        questionContainer.style.display = "none"; // Hide the question and buttons
        secondContent.style.display = "block"; // Show the second gif and message
    });
});