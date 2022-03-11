let yellow = document.getElementById("yellow");
let plus5 = document.getElementById("plus5");
yellow.addEventListener('click', clickYellow);

let red = document.getElementById("red");
let plus2 = document.getElementById("plus2");
red.addEventListener('click', clickRed);

let blue = document.getElementById("blue");
blue.addEventListener('click', clickBlue);

let info = document.getElementById("info");
let cnt = document.getElementById("cnt");

let propagation = document.getElementById("propagation");

let cntClick = 0;
let propagationOn = false;

const blueColor = "rgb(76, 208, 214)"
const greenColor = "rgb(26, 213, 26)";

function addPoints(value, color, propagationOn) {
    if (propagationOn && value == 2) {
        color = "blue & red";
        value = 3;
    }
    if (propagationOn && value == 5) {
        if (cntClick <= 30) {
            color = " blue & red & yellow";
            value = 8;
        }
        else {
            color = " blue & yellow";
            value = 6;
        }
    }

    info.innerHTML = `You clicked ${color} square. Added: ${value}`;
    cntClick += value;
    cnt.innerHTML = cntClick;
}

function clickBlue() {
    if (cntClick < 60) {
        addPoints(1, "blue");
        biggerScore();
    }
    else {
        blue.removeEventListener('click', clickBlue)
    }
}

function clickRed(event) {
    if (cntClick <= 30) {
        addPoints(2, "red", propagationOn);
        event.stopPropagation();
    }
    biggerScore();
}

function clickYellow(event) {
    if (cntClick <= 50) {
        addPoints(5, "yellow", propagationOn);
        event.stopPropagation()
    }
    biggerScore();
}

function biggerScore() {
    if (cntClick > 30) {
        red.removeEventListener('click', clickRed.propagationOn);
        red.style.backgroundColor = blueColor;
        plus2.style.display = "none";
    }

    if (cntClick > 50) {
        yellow.removeEventListener('click', clickYellow);
        yellow.style.backgroundColor = blueColor;
        plus5.style.display = "none";
    }
}


function reset() {
    cntClick = 0;
    cnt.innerHTML = 0;
    red.addEventListener('click', clickRed);
    red.style.backgroundColor = "red";
    plus2.style.display = "inline";
    yellow.addEventListener('click', clickYellow)
    yellow.style.backgroundColor = "yellow";
    plus5.style.display = "inline";
    info.innerHTML = "";

    propagationOn = false;
    propagation.innerHTML = "Start propagation";
    propagation.style.backgroundColor = greenColor;
}

function propagationStatus() {
    if (propagationOn) {
        propagationOn = false;
        propagation.innerHTML = "Start propagation";
        propagation.style.backgroundColor = greenColor;
    }
    else {
        propagationOn = true;
        propagation.innerHTML = "End propagation";
        propagation.style.backgroundColor = "red";
    }
}