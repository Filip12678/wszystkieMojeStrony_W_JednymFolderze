function odliczanieDoZakonczeniaBiezacejLekcji() {
	
	var czas = new Date();
    var minuty = czas.getMinutes();
    var godziny = czas.getHours();
	var sekundy = czas.getSeconds();
    var pelnaGodzina = godziny * 3600 + minuty * 60 + sekundy;
	
	console.log(sekundy);
	console.log(pelnaGodzina);
	
	var lekcja = 0;
	var godzinaZakonczeniaLekcji = 0;
	
	//1 lekcja
	if (pelnaGodzina >= 28800) {
		lekcja = 1;
		godzinaZakonczeniaLekcji = 31500;
	}
	
	//2 lekcja
	if (pelnaGodzina >= 31800) {
		lekcja = 2;
		godzinaZakonczeniaLekcji = 34500;
	}
	
	//3 lekcja
	if (pelnaGodzina >= 35100) {
		lekcja = 3;
		godzinaZakonczeniaLekcji = 37800;
	}
	
	//4 lekcja
	if (pelnaGodzina >= 38700) {
		lekcja = 4;
		godzinaZakonczeniaLekcji = 41400;
	}
	
	//5 lekcja
	if (pelnaGodzina >= 42300) {
		lekcja = 5;
		godzinaZakonczeniaLekcji = 45000;
	}
	
	//6 lekcja
	if (pelnaGodzina >= 45600) {
		lekcja = 6;
		godzinaZakonczeniaLekcji = 48300;
	}
	
	//7 lekcja
	if (pelnaGodzina >= 48600) {
		lekcja = 7;
		godzinaZakonczeniaLekcji = 51300;
	}
	
	var czasDoKoncaLekcji = godzinaZakonczeniaLekcji - pelnaGodzina;
	var czasDoKoncaLekcjiSekundy = czasDoKoncaLekcji;
	
	var iloscMinut = czasDoKoncaLekcji / 60;
	iloscMinut = parseInt(iloscMinut);
	var iloscSekund = czasDoKoncaLekcji - iloscMinut * 60;
	
	document.getElementById("CzasDoZakonczeniaLekcji").innerHTML = `Do końca lekcji ${lekcja} pozostało: ${iloscMinut} minut i ${iloscSekund} sekund`;
	document.getElementById("CzasDoZakonczeniaLekcji_W_Sekundach").innerHTML = `Inaczej mówiąc do końca lekcji ${lekcja} pozostało: ${czasDoKoncaLekcjiSekundy} sekund`;
	
	if (pelnaGodzina >= 28800 && pelnaGodzina <= 51300 && czasDoKoncaLekcjiSekundy <= 0) {
		document.getElementById("CzasDoZakonczeniaLekcji").innerHTML = "Przerwa 🥳🥳";
		document.getElementById("CzasDoZakonczeniaLekcji_W_Sekundach").innerHTML = "";
	}
	
	if (pelnaGodzina > 51300 && czasDoKoncaLekcjiSekundy <= 0 || pelnaGodzina < 28800 && czasDoKoncaLekcjiSekundy <= 0) {
		document.getElementById("CzasDoZakonczeniaLekcji").innerHTML = "Koniec lekcji 🥳🥳";
		document.getElementById("CzasDoZakonczeniaLekcji_W_Sekundach").innerHTML = "";
	}
	
	setTimeout("odliczanieDoZakonczeniaBiezacejLekcji()",1000);
}