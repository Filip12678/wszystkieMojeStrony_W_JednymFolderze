function myFunction() {
	
	var ciag = prompt("Wprowadź ciąg cyfr, który chcesz sprawdzić czy jest zgodny z algorytmem Luhna");
	var wynik = valid_credit_card(ciag);
	
	if (wynik === true) {
		alert(`Ciąg cyfr: ${ciag} jest zgodny z algorytmem Luhna`);
	}
	
	if (wynik === false) {
		alert(`Ciąg cyfr: ${ciag} nie jest zgodny z algorytmem Luhna`);
	}
	
	
	
	
	
	
	function valid_credit_card(value) {
	if (/[^0-9-\s]+/.test(value)) return false;

	let nCheck = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}
}