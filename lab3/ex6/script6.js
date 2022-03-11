var phoneBook = document.querySelector(".phoneBook");

function addInput(event) {
    event.preventDefault();
    var name = document.getElementById("name");
    var phoneNumber = document.getElementById("phoneNumber");

    if (correctPhoneNumber(phoneNumber) && correctName(name)) {
        var newElement = document.createElement("div");
        newElement.classList.add("newElement");

        newElement.innerHTML =
            `<div class="data">
                <p>${name.value}</p>
                <p>${phoneNumber.value}</p>
            </div>
            <div class="removeDiv">
                <p class ="remove"><i class="fas fa-trash-alt " id="trash"></i><p>
            </div>`;

        var removePiece = newElement.querySelector('.remove');
        removePiece.addEventListener('click', removeElement);

        phoneBook.appendChild(newElement);
    }
    else {
        alert("Uncorrect data!!!")
    }
    name.value = "";
    phoneNumber.value = "";
}

function removeElement(event) {
    event.currentTarget.parentElement.parentElement.remove();
}

function correctPhoneNumber(phoneNumber) {
    if ((phoneNumber.value.length == 9) && !(Number.isNaN(phoneNumber.value))) {
        return true;
    }
    else {
        return false;
    }
}

function isLower(x) {
    return /[a-z]/.test(x);
}

function isUpper(x) {
    return /[A-Z]/.test(x);
}

function correctLetters(name) {
    if (!isUpper(name.value[0])) {
        return false;
    }
    var rest = name.value.split(" ")[0];
    rest = rest.slice(1);

    for (let char of rest) {
        if (!isLower(char)) {
            return false;
        }
    }
    return true;
}

function correctName(name) {
    if (name.value.split(" ").length == 2 && correctLetters(name)) {
        return true
    }
    else {
        return false;
    }
}