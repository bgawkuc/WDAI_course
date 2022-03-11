let cnt = 1;
let addButton = document.getElementById('addButton');
let removeButton = document.getElementById('removeButton');
addButton.addEventListener('click', addElement);
removeButton.addEventListener('click', removeElement);

function addElement() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("element " + cnt));
    ul.appendChild(li);
    cnt += 1;
}

function removeElement() {
    if (cnt > 0) {
        let ul = document.getElementById("list");
        ul.removeChild(ul.childNodes[1]);
        cnt--;
    }
}