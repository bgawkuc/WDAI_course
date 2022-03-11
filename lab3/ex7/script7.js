const uri = 'http://localhost:3000/cities';
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');

async function loadCities() {
    const response = await fetch(uri);
    const data = await response.json();

    cityInMalopolska(data);
    haveDoubleA(data);
    fifthBiggest(data);
    over100000(data);
    conutCities(data);
    averageP(data);
}

const cityInMalopolska = (data) => {
    let cityMalopolska = "";
    for (let el of data) {
        if (el.province == 'małopolskie') {
            cityMalopolska += `
            ${el.name}; `
        }
    }
    a.innerHTML = cityMalopolska;
}

const haveDoubleA = (data) => {
    let doubleA = "";
    let cnt;
    for (let el of data) {
        cnt = 0;
        cnt = el.name.split('a').length - 1;
        if (cnt == 2) {
            doubleA += `${el.name}; `
        }
    }
    b.innerHTML = doubleA;
}

let smallestValue = (arr) => {
    let min = arr[0];
    for (let i in arr) {
        min = Math.min(min, arr[i]);
    }
    return min;
}

const fifthBiggest = (data) => {
    let name = new Array();
    let dentensity = new Array();
    let smallest = Number.POSITIVE_INFINITY;

    for (let el of data) {
        if (dentensity.length < 5) {
            name.push(el.name);
            dentensity.push(el.dentensity);
            smallest = Math.min(smallest, el.dentensity)
        }
        else if (el.dentensity > smallest) {
            for (let i in name) {
                if (dentensity[i] == smallest) {
                    name[i] = el.name;
                    dentensity[i] = el.dentensity;
                    smallest = smallestValue(dentensity);
                    break;
                }
            }
        }
    }
    for (let i in dentensity) {
        if (dentensity[i] == smallest) {
            c.innerHTML = name[i];
            break;
        }
    }
}

const over100000 = (data) => {
    let bigCities = '';
    for (let el of data) {
        if (el.people > 100000) {
            bigCities += `${el.name} city, `
        }
    }
    d.innerHTML = bigCities;
}

const conutCities = (data) => {
    const number = 80000;
    let cntOver = 0;
    let cntUnder = 0;
    for (let el of data) {
        if (el.people > number) {
            cntOver++;
        }
        else if (el.people < number) {
            cntUnder++;
        }
    }
    let txt = '';
    txt += `Więcej jest miast: `
    if (cntOver > cntUnder) {
        txt += `powyżej 80tys. - ${cntOver}`
    }
    else {
        txt += `poniżej 80tys. - ${cntUnder}`
    }
    e.innerHTML = txt;
}

const averageP = (data) => {
    let cnt = 0;
    let sum = 0;
    for (let el of data) {
        if (el.township.charAt(0) == 'p') {
            cnt++;
            sum += el.area;
        }
    }
    f.innerHTML = sum / cnt;
}

loadCities();