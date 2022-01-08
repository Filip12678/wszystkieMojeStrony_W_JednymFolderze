function myFunction() {
	function konwersjaDatyDoKalendarzaJulianskiego(dzien, miesiac, rok) {
		var x = (miesiac + 9) / 12;
		x = parseInt(x);
		var a = 4716 + rok + x;
		var y = 275 * miesiac / 9;
		var v = 7 * a / 4;
		y = parseInt(y)
		v = parseInt(v)
		var b = 1729279.5 + 367 * rok + y - v + dzien;
		var q = (a + 83) / 100;
		q = parseInt(q);
		var c = q;
		var w = 3 * (c + 1) / 4;
		w = parseInt(w)
		var e = w;
		var przekonwertowanaData = b + 38 - e;
		
		return przekonwertowanaData;
	}
	
	
	
	function wziecieMiejscDziesietnych(liczba) {
		var liczba2 = parseInt(liczba)
		liczba = liczba - liczba2;
		return liczba;
	}
	
	
	var czas = new Date();
	var dzien = czas.getDate();
	dzien = parseInt(dzien);
	var miesiac = czas.getMonth();
	miesiac = miesiac + 1;
	miesiac = parseInt(miesiac);
	var rok = czas.getFullYear();
	rok = parseInt(rok);
	console.log(`Data: ${dzien}.${miesiac}.${rok}`);
	var data_W_KalendarzuJulianskim = konwersjaDatyDoKalendarzaJulianskiego(dzien, miesiac, rok);
	
	
	faza = (data_W_KalendarzuJulianskim / 29.5305902778) - 0.3033;
	var miejscaPoPrzecinkuDoOkresleniaFazy = wziecieMiejscDziesietnych(faza);
	miejscaPoPrzecinkuDoOkresleniaFazy = Math.round(miejscaPoPrzecinkuDoOkresleniaFazy * 10000) / 10000;
	console.log(miejscaPoPrzecinkuDoOkresleniaFazy);
	//miejscaPoPrzecinkuDoOkresleniaFazy = 0.9759;
	
	
	
	//miejscaPoPrzecinkuDoOkresleniaFazy = miejscaPoPrzecinkuDoOkresleniaFazy.toString();
	//miejscaPoPrzecinkuDoOkresleniaFazy = miejscaPoPrzecinkuDoOkresleniaFazy.replaceAll("0.", "");
	//miejscaPoPrzecinkuDoOkresleniaFazy = parseInt(miejscaPoPrzecinkuDoOkresleniaFazy);
	
	
	if (miejscaPoPrzecinkuDoOkresleniaFazy >= 0.875 || miejscaPoPrzecinkuDoOkresleniaFazy < 0.125) {
		alert("Dzisiaj Księżyc będzie w Nowiu");
	}
	
	if (miejscaPoPrzecinkuDoOkresleniaFazy >= 0.125 && miejscaPoPrzecinkuDoOkresleniaFazy < 0.375) {
		alert("Dzisiaj Księżyc będzie w I Kwadrze")
	}
	
	if (miejscaPoPrzecinkuDoOkresleniaFazy >= 0.375 && miejscaPoPrzecinkuDoOkresleniaFazy < 0.625) {
		alert("Dzisiaj Księżyc będzie w Pełni")
	}
	
	if (miejscaPoPrzecinkuDoOkresleniaFazy >= 0.625 && miejscaPoPrzecinkuDoOkresleniaFazy < 0.875) {
		alert("Dzisiaj Księżyc będzie w III Kwadrze")
	}
	
	
}


function myFunction2() {
	function konwersjaDatyDoKalendarzaJulianskiego(dzien, miesiac, rok) {
		var x = (miesiac + 9) / 12;
		x = parseInt(x);
		var a = 4716 + rok + x;
		var y = 275 * miesiac / 9;
		var v = 7 * a / 4;
		y = parseInt(y)
		v = parseInt(v)
		var b = 1729279.5 + 367 * rok + y - v + dzien;
		var q = (a + 83) / 100;
		q = parseInt(q);
		var c = q;
		var w = 3 * (c + 1) / 4;
		w = parseInt(w)
		var e = w;
		var przekonwertowanaData = b + 38 - e;
		
		return przekonwertowanaData;
	}
	
	
	
	function wziecieMiejscDziesietnych(liczba) {
		var liczba2 = parseInt(liczba)
		liczba = liczba - liczba2;
		return liczba;
	}
	
	
	var dzien = prompt("Wprowadź dzień: ");
	dzien = parseInt(dzien);
	var miesiac = prompt("Wprowadź miesiąc: ");
	miesiac = parseInt(miesiac);
	var rok = prompt("Wprowadź rok: ");
	rok = parseInt(rok);
	var data_W_KalendarzuJulianskim = konwersjaDatyDoKalendarzaJulianskiego(dzien, miesiac, rok);
	
	
	faza = (data_W_KalendarzuJulianskim / 29.5305902778) - 0.3033;
	var miejscaPoPrzecinkuDoOkresleniaFazy = wziecieMiejscDziesietnych(faza);
	miejscaPoPrzecinkuDoOkresleniaFazy = Math.round(miejscaPoPrzecinkuDoOkresleniaFazy * 10000) / 10000;
	console.log(miejscaPoPrzecinkuDoOkresleniaFazy);
	//miejscaPoPrzecinkuDoOkresleniaFazy = 0.9759;
	
	
	
	//miejscaPoPrzecinkuDoOkresleniaFazy = miejscaPoPrzecinkuDoOkresleniaFazy.toString();
	//miejscaPoPrzecinkuDoOkresleniaFazy = miejscaPoPrzecinkuDoOkresleniaFazy.replaceAll("0.", "");
	//miejscaPoPrzecinkuDoOkresleniaFazy = parseInt(miejscaPoPrzecinkuDoOkresleniaFazy);
	
	
	if (miejscaPoPrzecinkuDoOkresleniaFazy >= 0.875 || miejscaPoPrzecinkuDoOkresleniaFazy < 0.125) {
		alert(`Dnia: ${dzien}.${miesiac}.${rok} Księżyc będzie/był w Nowiu`);
	}
	
	if (miejscaPoPrzecinkuDoOkresleniaFazy >= 0.125 && miejscaPoPrzecinkuDoOkresleniaFazy < 0.375) {
		alert(`Dnia: ${dzien}.${miesiac}.${rok} Księżyc będzie/był w I Kwadrze`)
	}
	
	if (miejscaPoPrzecinkuDoOkresleniaFazy >= 0.375 && miejscaPoPrzecinkuDoOkresleniaFazy < 0.625) {
		alert(`Dnia: ${dzien}.${miesiac}.${rok} Księżyc będzie/był w Pełni`)
	}
	
	if (miejscaPoPrzecinkuDoOkresleniaFazy >= 0.625 && miejscaPoPrzecinkuDoOkresleniaFazy < 0.875) {
		alert(`Dnia: ${dzien}.${miesiac}.${rok} Księżyc będzie/był w III Kwadrze`)
	}
	
	
}