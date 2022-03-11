let img = document.getElementById('img');
let imgArray = ["https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80", "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"];
let colorArray = ['red', 'blue'];
let cnt = 0;

img.addEventListener('click', changeImage);

function changeImage() {
    img.src = imgArray[cnt % 2];
    img.style.borderColor = colorArray[cnt % 2];
    cnt += 1
}