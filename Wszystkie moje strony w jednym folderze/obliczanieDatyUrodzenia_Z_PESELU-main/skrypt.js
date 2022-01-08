function myFunction() {
	
	
	var pesel = document.getElementById('pesel').value;
	var dataUrodzenia = wyciaganieDatyUrodzenia_Z_Peselu(pesel);
	
	document.getElementById("tabelka").innerHTML = `
	<table border="1" cellpadding="10" cellspacing="0">
	<tr>
    <td>PESEL</td>
    <td>Data urodzenia</td>
	</tr>
	<tr>
    <td> ${pesel} </td>
    <td> ${dataUrodzenia} </td>
	</tr>
	</table>`;
	
	
	function wyciaganieDatyUrodzenia_Z_Peselu(pesel) {
		
		pesel = Array.from(pesel);
		
		var rok = `${pesel[0]}${pesel[1]}`;
		//rok = parseInt(rok);
		
		var miesiac = `${pesel[2]}${pesel[3]}`;
		//miesiac = parseInt(miesiac);
		
		var dzien = `${pesel[4]}${pesel[5]}`;
		//dzien = parseInt(dzien);
	
		liczbaRoku = pesel[2];
		
		
	
		if (liczbaRoku == 8 || liczbaRoku == 9) {
			rok = "18" + "${rok}";
			//rok = parseInt(rok);
			console.log(rok);
			console.log("Liczba roku 8 lub 9");
		}
	
		if (liczbaRoku == 0 || liczbaRoku == 1) {
			rok = `19${rok}`;
			//rok = parseInt(rok);
			console.log(rok);
			console.log("Liczba roku 0 lub 1");
		}
	
		if (liczbaRoku == 2 || liczbaRoku == 3) {
			rok = `20${rok}`;
			//rok = parseInt(rok);
			console.log(rok);
			console.log("Liczba roku 2 lub 3");
		}
	
		if (liczbaRoku == 4 || liczbaRoku == 5) {
			rok = `21${rok}`;
			//rok = parseInt(rok);
			console.log(rok);
			console.log("Liczba roku 4 lub 5");
		}
	
		if (liczbaRoku == 6 || liczbaRoku == 7) {
			rok = `22${rok}`;
			//rok = parseInt(rok);
			console.log(rok);
			console.log("Liczba roku 6 lub 7");
		}
		
		
		
		
		
		if (liczbaRoku == 8 || liczbaRoku == 0 || liczbaRoku == 2 || liczbaRoku == 4 || liczbaRoku == 6) {
			miesiac = miesiac.toString();
			console.log(miesiac);
			miesiac = miesiac.substring(1);
			console.log(miesiac);
			//miesiac = parseInt(miesiac);
		}
		
		else {
			
			miesiac = miesiac.toString();
			miesiac = miesiac.substring(1);
			miesiac = "1" + miesiac;
			console.log(miesiac);
			//miesiac = parseInt(miesiac);
		}
		
		if (rok == 180 || rok == 190 || rok == 210 || rok == 220) {
			rok = rok + "0";
		}
		
		
		
		var dataUrodzenia = `${dzien}.${miesiac}.${rok}`;
		
		return dataUrodzenia;
		
	}
	
}