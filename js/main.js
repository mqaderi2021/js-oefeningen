//Hoofdstuk 1

console.log('file loaded'); 


//Hoofdstuk 2.1  - Variabelen

const voornaam = 'Momen';
tempratuur = 5;
alert("Tempratuur: " +tempratuur);
document.getElementById("demo").innerHTML += "Naam: " + voornaam + "<br>Tempratuur: " + tempratuur;
console.log('Name:'+voornaam,'tempratuur:'+tempratuur); 


//Hoofdstuk 2.2 Interactie

const naam = prompt('Wat is u naam?', 'Momen');
alert(`Mijn naam is ${naam}`);
console.log(naam);


//Hoofdstuk 2.4 Opdracht 1
const x = 8;
const y = 6;
const z = prompt("Noem een getal");
document.getElementById("demo1").innerHTML += "Het eerste getal was " + x + ",het 2de getal was " + y + "en jou getal was " + z;

const userAge = prompt("Hoe oud ben je?");
const birthYear1 = 2021 - userAge;
document.getElementById("demo01").innerHTML += "Geborn: " + birthYear1;


const w = 10;
const v = 2;
const a = w - v;
const b = w + v;
const c = w * v;
const d = w / v;
document.getElementById("demo2").innerHTML = w + " - " + v + " = " + a + "<br>" + w + " + " + v + " = " + b + "<br>" + w + " * " + v + " = " + c + "<br>" + w + " / " + v + " = " + d;

const numberHalf = 2;
const userNumber = prompt("Noem nog een getal");
alert(userNumber + " / 2 = " + userNumber / numberHalf);


// if-statement - Opdrachten


const uren = prompt("Hoe laat is het?");

if (uren >= 6 && uren < 12) {
    alert('Het Ochtend is'); document.getElementById("demoo").innerHTML += "Goede Morgen";
}

else if (uren >= 12 && uren < 18) {
    alert('Het Middag is'); document.getElementById("demoo").innerHTML += "Goede middag";
}
else if (uren >= 18 && uren < 24) {
    alert('Het avond is'); document.getElementById("demoo").innerHTML += "Goede avond";
}

else if (uren >= 6 && uren <= 24) {
    alert('Het nacht is'); document.getElementById("demoo").innerHTML += "Goede nacht";
}
 
else if (uren <= 0 && uren > 24) {
    alert('Die tijd niet kan'); document.getElementById("demoo").innerHTML += "Die tijd niet kan";
}














            