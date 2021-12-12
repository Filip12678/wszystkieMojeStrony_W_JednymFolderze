function myFunction() {

podstawa = prompt("Wprowadź podstawę pierwiastka");

if (isNaN(podstawa)) {
	alert(`Wprowadzono błędne dane!`);
}

else {

stopien = prompt("Wprowadź stopień pierwiastka");
var stopien2 = stopien;

if (isNaN(podstawa)) {
	alert(`Wprowadzono błędne dane!`);
}

else if (podstawa < 0 && stopien % 2 == 0) {
	alert("Jeżeli podstawa pierwiastka jest ujemna to stopień tego pierwiastka NIE MOŻE być parzysty, gdyż taka liczba nie istnieje w zbiorze liczb rzeczywistych");
}

else if (stopien <=0) {
	alert(`Wprowadzono błędne dane!`);
}

else if (podstawa < 0 && stopien % 2 != 0) {
	var podstawa2 = podstawa;
	var podstawa3 = Math.abs(podstawa2);
	console.log(podstawa3)
	const pierwiastkowanie = function(podstawa, stopien) {
	var wynik;
    wynik = Math.pow(podstawa, 1/stopien);
    return wynik;
}

var wynikPierwiastkowania = pierwiastkowanie(podstawa3, stopien);
console.log(`Pierwiastek o podstawie ${podstawa} i wykładniku ${stopien} wynosi -${wynikPierwiastkowania}`);
alert(`Pierwiastek o podstawie ${podstawa} i wykładniku ${stopien} wynosi -${wynikPierwiastkowania}`);
}

else if (isNaN(stopien)) {
	alert(`Wprowadzono błędne dane!`);
}

else {


const pierwiastkowanie = function(podstawa, stopien) {
	var wynik;
    wynik = Math.pow(podstawa, 1/stopien);
    return wynik;
}

var wynikPierwiastkowania = pierwiastkowanie(podstawa, stopien);
console.log(`Pierwiastek o podstawie ${podstawa} i wykładniku ${stopien} wynosi ${wynikPierwiastkowania}`);
alert(`Pierwiastek o podstawie ${podstawa} i wykładniku ${stopien} wynosi ${wynikPierwiastkowania}`);
}
}
}

function myFunction1() {

podstawa = prompt("Wprowadź podstawę potęgi");
wykladnik = prompt("Wprowadź wykładnik potęgi");

if (wykladnik < 0 && wykladnik % 2 != 0) {
	var wykladnik2 = Math.abs(wykladnik);
	var podstawa2 = 1/podstawa;
	
	const potegowanie = function(podstawa, wykladnik) {
    var wynik;
    wynik = Math.pow(podstawa, wykladnik);
    return wynik;
}

var wynikPotegowania = potegowanie(podstawa2, wykladnik2);
console.log(`Potęga o podstawie ${podstawa} i wykładniku ${wykladnik} wynosi ${wynikPotegowania}`);
alert(`Potęga o podstawie ${podstawa} i wykładniku ${wykladnik} wynosi ${wynikPotegowania}`);
}

else {

const potegowanie = function(podstawa, wykladnik) {
    var wynik;
    wynik = Math.pow(podstawa, wykladnik);
    return wynik;
}
var wynikPotegowania = potegowanie(podstawa, wykladnik);
console.log(`Potęga o podstawie ${podstawa} i wykładniku ${wykladnik} wynosi ${wynikPotegowania}`);
alert(`Potęga o podstawie ${podstawa} i wykładniku ${wykladnik} wynosi ${wynikPotegowania}`);
}
}