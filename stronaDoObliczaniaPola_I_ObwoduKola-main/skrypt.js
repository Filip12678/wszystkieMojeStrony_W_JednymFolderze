function myFunction() {
srednica = prompt("Podaj długość średnicy koła");

if (srednica < 0) {
	alert("Długość średnicy koła nie może być ujemna!");
}

else if (srednica == 0) {
	alert("Długość średnicy koła nie może być równa zero!");
}


else {

const obliczaniePolaKola = function(srednica) {
    srednica = srednica / 2;
    srednica = srednica * srednica;
    srednica = srednica * Math.PI;
    return srednica;
}

const obliczanieObwoduKola = function(srednica) {
    srednica = srednica * Math.PI;
    return srednica;
}

 var pole = obliczaniePolaKola(srednica);
 pole = Math.round(pole * 10000000000000) / 10000000000000;
 
 var obwod = obliczanieObwoduKola(srednica);
 obwod = Math.round(obwod * 10000000000000) / 10000000000000;
 
 console.log(`Pole koła o średnicy ${srednica} wynosi: ${pole}`);
 console.log(`Obwód koła o średnicy ${srednica} wynosi: ${obwod}`);
 alert(`Pole koła o średnicy ${srednica} wynosi: ${pole}, a obwód tego koła wynosi: ${obwod}`);
}
}






function myFunction1() {
promien = prompt("Wprowadź długość promienia koła")

if (promien < 0) {
	alert("Długość promienia koła nie może być ujemna!");
}

else if (promien == 0) {
	alert("Długość promienia koła nie może być równa zero!");
}


else {

const obliczaniePolaKolaNaPodstawieSrednicy = function(promien) {
    promien = promien * promien;
    promien = promien * Math.PI;
    return promien;
}

const obliczanieObwoduKolaNaPodstawieSrednicy = function(promien) {
    promien = promien * 2;
    promien = promien * Math.PI;
    return promien;
}



var pole = obliczaniePolaKolaNaPodstawieSrednicy(promien);
pole = Math.round(pole * 10000000000000) / 10000000000000;

var obwod = obliczanieObwoduKolaNaPodstawieSrednicy(promien);
obwod = Math.round(obwod * 10000000000000) / 10000000000000;

console.log(`Pole koła o promieniu: ${promien} wynosi: ${pole}`);
console.log(`Obwód koła o promieniu: ${promien} wynosi: ${obwod}`);
alert(`Pole koła o promieniu: ${promien} wynosi: ${pole} a obwód tego koła wynosi: ${obwod}`);
}
}

function myFunction2() {

let i = 1n;
let x = 3n * (10n ** 1020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}
console.log(pi / (10n ** 20n));
alert(pi / (10n ** 20n));
}

function myFunction3() {

let i = 1n;
let x = 3n * (10n ** 10020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}
console.log(pi / (10n ** 20n));
alert(pi / (10n ** 20n));
}

function myFunction4() {

let i = 1n;
let x = 3n * (10n ** 100020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}
console.log(pi / (10n ** 20n));
alert(pi / (10n ** 20n));
}