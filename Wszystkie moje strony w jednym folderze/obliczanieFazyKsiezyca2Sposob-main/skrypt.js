function myFunction() {
	function konwersjaDatyDoKalendarzaJulianskiego(dzien, miesiac, rok) {
		var a = (14 - miesiac) / 12;
		var y = rok + 4800 - a;
		var m = miesiac + 12 * a - 3;
		var przekonwertowanaData = dzien + (153 * m + 2) / 5 + 365 * y + (y / 4) - (y / 100) + (y / 400) - 32045;
		
		return przekonwertowanaData;
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
	var dzisiejszaData = konwersjaDatyDoKalendarzaJulianskiego(dzien, miesiac, rok);
	var pierwszyNow = konwersjaDatyDoKalendarzaJulianskiego(1, 29, 1930); //pierwszy nów
	var roznicaPomiedzyDatami = dzisiejszaData - pierwszyNow; //D
	
	var wiekKsiezyca = roznicaPomiedzyDatami % 29.53059; //29.53059 A
	console.log(wiekKsiezyca);
	
	
	var doObliczen = (((360 * wiekKsiezyca) / 29.53059) * Math.PI) / 180;
	procentZakrytegoKsiezyca = 0.5 * (1 - Math.cos(doObliczen));
	console.log(procentZakrytegoKsiezyca);
	
	procentZakrytegoKsiezycaDoPokazania = procentZakrytegoKsiezyca * 100
	procentZakrytegoKsiezycaDoPokazania = Math.round(procentZakrytegoKsiezycaDoPokazania * 10) / 10;
	
	wydluzenieKsiezyca = 360 * (wiekKsiezyca / 29.53059); //n
	//console.log(wydluzenieKsiezyca);
	
	
	
	
	if (wydluzenieKsiezyca >= 195 && wydluzenieKsiezyca < 270) {
		alert(`Dzisiaj Księżyc stanowi Ubywający grab (Rysunek 5) dzisiaj Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca >= 270 && wydluzenieKsiezyca <= 345) {
		alert(`Dzisiaj Księżyc stanowi Ubywający sierp (Rysunek 6) dzisiaj Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca >= 15 && wydluzenieKsiezyca < 90) {
		alert(`Dzisiaj Księżyc stanowi Przybywający sierp (Rysunek 3) dzisiaj Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca >= 90 && wydluzenieKsiezyca <= 165) {
		alert(`Dzisiaj Księżyc stanowi Przybywający garb (Rysunek 4) dzisiaj Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca > 165 && wydluzenieKsiezyca < 195) {
		alert(`Dzisiaj Księżyc będzie w Pełni dzisiaj Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca < 15 && wydluzenieKsiezyca > 345) {
		alert(`Dzisiaj Księżyc będzie w Nowiu dzisiaj Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
}




function myFunction2() {
	function konwersjaDatyDoKalendarzaJulianskiego(dzien, miesiac, rok) {
		var a = (14 - miesiac) / 12;
		var y = rok + 4800 - a;
		var m = miesiac + 12 * a - 3;
		var przekonwertowanaData = dzien + (153 * m + 2) / 5 + 365 * y + (y / 4) - (y / 100) + (y / 400) - 32045;
		
		return przekonwertowanaData;
	}
	
	var dzien = prompt("Wprowadź dzień: ");
	dzien = parseInt(dzien);
	var miesiac = prompt("Wprowadź miesiąc: ");
	miesiac = parseInt(miesiac);
	var rok = prompt("Wprowadź rok: ");
	rok = parseInt(rok);
	var dzisiejszaData = konwersjaDatyDoKalendarzaJulianskiego(dzien, miesiac, rok);
	var pierwszyNow = konwersjaDatyDoKalendarzaJulianskiego(1, 29, 1930); //pierwszy nów
	var roznicaPomiedzyDatami = dzisiejszaData - pierwszyNow; //D
	
	var wiekKsiezyca = roznicaPomiedzyDatami % 29.53059; //29.53059 A
	console.log(wiekKsiezyca);
	
	
	var doObliczen = (((360 * wiekKsiezyca) / 29.53059) * Math.PI) / 180;
	procentZakrytegoKsiezyca = 0.5 * (1 - Math.cos(doObliczen));
	console.log(procentZakrytegoKsiezyca);
	
	procentZakrytegoKsiezycaDoPokazania = procentZakrytegoKsiezyca * 100
	procentZakrytegoKsiezycaDoPokazania = Math.round(procentZakrytegoKsiezycaDoPokazania * 10) / 10;
	
	wydluzenieKsiezyca = 360 * (wiekKsiezyca / 29.53059); //n
	//console.log(wydluzenieKsiezyca);
	
	
	
	
	if (wydluzenieKsiezyca >= 195 && wydluzenieKsiezyca < 270) {
		alert(`Dnia ${dzien}.${miesiac}.${rok} Księżyc stanowi Ubywający grab (Rysunek 5) Dnia ${dzien}.${miesiac}.${rok} Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca >= 270 && wydluzenieKsiezyca <= 345) {
		alert(`Dnia ${dzien}.${miesiac}.${rok} Księżyc stanowi Ubywający sierp (Rysunek 6) Dnia ${dzien}.${miesiac}.${rok} Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca >= 15 && wydluzenieKsiezyca < 90) {
		alert(`Dnia ${dzien}.${miesiac}.${rok} Księżyc stanowi Przybywający sierp (Rysunek 3) Dnia ${dzien}.${miesiac}.${rok} Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca >= 90 && wydluzenieKsiezyca <= 165) {
		alert(`Dnia ${dzien}.${miesiac}.${rok} Księżyc stanowi Przybywający garb (Rysunek 4) Dnia ${dzien}.${miesiac}.${rok} Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca > 165 && wydluzenieKsiezyca < 195) {
		alert(`Dnia ${dzien}.${miesiac}.${rok} Księżyc będzie w Pełni Dnia ${dzien}.${miesiac}.${rok} Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
	if (wydluzenieKsiezyca < 15 && wydluzenieKsiezyca > 345) {
		alert(`Dnia ${dzien}.${miesiac}.${rok} Księżyc będzie w Nowiu Dnia ${dzien}.${miesiac}.${rok} Księżyc będzie widoczny w ${procentZakrytegoKsiezycaDoPokazania}%`)
	}
	
}