function myFunction() {
	var wartosc = parseFloat(document.getElementById('wartosc').value);
    var oper1 = document.getElementById('operator1').value;
	var oper2 = document.getElementById('operator2').value;
	
	if (oper1 === 'stopnie' && oper2 == 'radiany') {
		var wynik = wartosc * Math.PI / 180;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	if (oper1 === 'radiany' && oper2 == 'stopnie') {
		var wynik = wartosc * 180 / Math.PI;
		wynik = Math.round(wynik * 1000000000000) / 1000000000000;
		document.getElementById('result').value = wynik;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	if (oper1 === oper2) {
		document.getElementById('result').value = wartosc;
	}
	
	
	if (isNaN(wartosc)) {
		document.getElementById('result').value = "Wprowadzono błędne dane";
	}
	
}