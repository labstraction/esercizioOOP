console.log("esercizio OOP");

//creare una classe Beverage con le seguenti proprietà:
//name, producer, yob, quantity, alcohol

const sprite = new Beverage('sprite', 'cocacola cmp.', 2025, 150, 0, 2);

//creare una classe Beer che estende beverage con le seguenti proprietà:
//type, color

const moretti = new Beer('moretti ipa', 'moretti s.p.a.', 2024, 66, 4, 'ipa', 'blonde', -2);

//creare una classe Wine che estende beverage con le seguenti proprietà:
//vite, location

const dolcetto = new Wine('dolcetto bella vita', 'cantine bella vita', 2020, 75, 11, 'dolcetto', 'alba', 8);
dolcetto.addBottles(1000);
//creare una classe PremiumWine che estende wine con le seguenti proprietà:
//certification

const barolo = new PremiumWine('brunate barolo', 'Francesco Borgogno', 2021, 75, 14, 'nebbiolo da barolo', 'piemonte', 'D.O.C.G', 30);


//creare i toString di tutte le classi

console.log(sprite.toString())
console.log(moretti.toString());
console.log(dolcetto.toString());
console.log(barolo.toString());


//aggiungere una proprietà chiamata bottleNumber a beverage e un metodo
//chiamato sellBottles che prende come input le bottiglie da vendere e,
//se ci sono abbastaza bottiglie le rimuove dal numero totale, altrimenti
//non fa nulla e logga l'errore;

dolcetto.sellBottles(100);
console.log(dolcetto.toString());

dolcetto.price = 5;
dolcetto.sellBottles(10000);
console.log(dolcetto.toString());


//aggingere una proprietà non esposta (protetta) a beverage chiamata _price
//_price è esposta in lettura tramite getter
//_price è esposta in scrittura tramite setter che controlla che il nuovo prezzo 
//non sia negativo
//l'unica differenza sta nel premiumWine che nel getter moltiplica il prezzo usando
//questa formula prezzoReale = prezzo + (prezzo / 10 * anniDiInvecchiamento);
