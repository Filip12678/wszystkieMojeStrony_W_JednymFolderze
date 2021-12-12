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

function myFunction5() {
  window.open("https://stuff.mit.edu/afs/sipb/contrib/pi/pi-billion.txt");
}

function myFunction6() {
  window.open("milionMiejscPoPrzecinkuLiczbyPI.txt");
}