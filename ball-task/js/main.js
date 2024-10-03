const field = document.querySelector(".field");
const fieldCoords = field.getBoundingClientRect();

const ball = document.querySelector(".ball");

field.addEventListener('click', (event) => {

    let ballCoordsLeft = (event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2);
    let ballCoordsTop = (event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2);

    if (ballCoordsLeft < 0) {
        ballCoordsLeft = 0;
    };

    if (ballCoordsTop < 0) {
        ballCoordsTop = 0;
    };

    if (ballCoordsLeft + ball.clientWidth > field.clientWidth) {
        ballCoordsLeft = field.clientWidth - ball.clientWidth;
    };

    if (ballCoordsTop + ball.clientHeight > field.clientHeight) {
        ballCoordsTop = field.clientHeight - ball.clientHeight;
    };

    ball.style.left = ballCoordsLeft + "px";
    ball.style.top = ballCoordsTop + "px";

    console.log(ball.style.left);
});