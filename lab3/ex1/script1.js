let button = document.querySelector('.btn')
button.addEventListener('click', promptMe)

function promptMe() {
    let name = window.prompt("Write your name:");
    let placeName = document.getElementById("name");
    placeName.innerHTML = name;
}