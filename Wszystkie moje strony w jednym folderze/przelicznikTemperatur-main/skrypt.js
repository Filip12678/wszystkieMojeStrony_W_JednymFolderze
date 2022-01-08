function myFunction() {
	var wartosc = parseFloat(document.getElementById('wartosc').value);
    var oper1 = document.getElementById('operator1').value;
	var oper2 = document.getElementById('operator2').value;
	
	if (oper1 === 'celcjusz' && oper2 == 'fahrenheit') {
		var wynik = wartosc * 1.8 + 32;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'fahrenheit' && oper2 === 'celcjusz') {
		var wynik = (wartosc - 32) * (5/9);
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
	    document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'celcjusz' && oper2 === 'kelwin') {
		var wynik = wartosc + 273.15;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'kelwin' && oper2 === 'celcjusz') {
		var wynik = wartosc - 273.15;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'fahrenheit' && oper2 === 'kelwin') {
		var wynikTymczasowy = (wartosc - 32) * (5/9);
		var wynik = wynikTymczasowy + 273.15;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'kelwin' && oper2 === 'fahrenheit') {
		var wynikTymczasowy = wartosc - 273.15;
		var wynik = wynikTymczasowy * 1.8 + 32;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	if (oper1 === oper2) {
		document.getElementById('result').value = wartosc;
	}
	
	if (oper1 === 'kelwin' && wynik < 0) {
		document.getElementById('result').value = "Nie istnieje temperatura niższa niż 0 Kelwinów";
	}
	
	if (oper2 === 'kelwin' && wynik < 0) {
		document.getElementById('result').value = "Nie istnieje temperatura niższa niż 0 Kelwinów";
	}
	
	if (isNaN(wartosc)) {
		document.getElementById('result').value = "Wprowadzono błędne dane";
	}
	
}