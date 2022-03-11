let balloon = document.getElementById('balloon');
let balloonInfo = document.querySelector('.balloonInfo')
balloon.addEventListener('contextmenu', appearSize);
document.addEventListener('click', dissapear);

let balloonSize = 30;
let blockedMore = false;
let blockedLess = false;
document.onkeydown = pressedKey;

function appearSize(event) {
    event.preventDefault();
    if (balloonSize >= 20 && blockedMore == false && event.ctrlKey) {
        balloonInfo.innerHTML = `Balloon size: <br> ${balloonSize} px`
        balloonInfo.style.display = 'block';
    }
}

function dissapear() {
    balloonInfo.style.display = 'none';
}

function pressedKey(x) {
    if (x.keyCode == '38' && !blockedMore) {
        if (balloonSize < 250) {
            balloonSize *= 1.1;
            balloon.style.fontSize = (balloonSize) + 'px';
            blockedLess = false;
        }
        else {
            balloon.innerHTML = "&#128165";
            balloon.style.fontSize = '300px';
            blockedLess = true;
            blockedMore = true;
        }

    }
    else if (x.keyCode == '40' && !blockedLess) {
        if (balloonSize <= 25) {
            blockedLess = true;
        }
        else {
            balloonSize *= 0.9;
            balloon.style.fontSize = (balloonSize) + 'px';
        }
    }
}
