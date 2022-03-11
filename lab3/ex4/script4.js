let cnt = document.getElementById("cnt");
let unlockButton = document.getElementById("unlockButton");
let cntButton = document.getElementById("cntButton");
let cntClick = 0;
let blocked = true;

function increment() {
    cntClick++;
    cnt.innerHTML = cntClick;
}

function unlock() {
    if (!blocked) {
        blocked = true;
        cntButton.removeEventListener('click', increment);
        cntClick = 0;
        cnt.innerHTML = cntClick;
        unlockButton.innerHTML = "Click me to unlock increment button"
        cntButton.innerHTML = "Blocked increment button"
        cntButton.style.backgroundColor = "red"
    }
    else {
        blocked = false;
        cntButton.addEventListener('click', increment);
        unlockButton.innerHTML = "Click me to lock increment button and reset counter"
        cntButton.innerHTML = "Click me to increment"
        cntButton.style.backgroundColor = "rgb(23, 235, 23)";
    }
}