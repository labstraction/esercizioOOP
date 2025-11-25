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


///DOCUMENT OBJECT MODEL

console.log(document);

const h1Title = document.getElementById('main-title');

console.log(h1Title);

h1Title.innerText = "Enoteca Bartoletti S.P.A.";


const barbera = new PremiumWine("Barbera d'Asti", "Consorzio Barbera", 2020, 75, 12.5, "Barbera", "Piemonte", "D.O.C.", 18);


const nameSpan = document.getElementById('card-name');
nameSpan.innerText = barbera.name;

const producerSpan = document.getElementById('card-producer');
producerSpan.innerText = barbera.producer;

document.getElementById('card-yob').innerText = barbera.yob;
document.getElementById('card-quantity').innerText = barbera.quantity;
document.getElementById('card-alchool').innerText = barbera.alcohol;
document.getElementById('card-bottleNumber').innerText = barbera.bottleNumber;
document.getElementById('card-price').innerText = barbera.price;
document.getElementById('card-vite').innerText = barbera.vite;
document.getElementById('card-location').innerText = barbera.location;
document.getElementById('card-certification').innerText = barbera.certification;


const champagne = new PremiumWine("Champagne Brut", "Charles Vercy", 2020, 75, 12, "chardonnay", "francia", "D.O.C.", 19.20);

const newCard = document.createElement('div');
newCard.className = 'card';

const main = document.getElementById('main-content');
main.appendChild(newCard);

const cardImage = document.createElement('img');
cardImage.src = './assets/wine-glass.svg';
cardImage.width = '100';
newCard.appendChild(cardImage);


const nameContainer = document.createElement('div');
newCard.appendChild(nameContainer);

const nameKey = document.createElement('strong');
nameKey.innerText = 'nome: ';
nameContainer.appendChild(nameKey);

const nameValue = document.createElement('span');
nameValue.innerText = champagne.name;
nameContainer.appendChild(nameValue);

///////////////////////////////////////////

const producerContainer = document.createElement('div');
newCard.appendChild(producerContainer);

const producerKey = document.createElement('strong');
producerKey.innerText = 'produttore: ';
producerContainer.appendChild(producerKey);

const producerValue = document.createElement('span');
producerValue.innerText = champagne.producer;
producerContainer.appendChild(producerValue);

//////////////////////////////////////////////////////

const yobContainer = document.createElement('div');
newCard.appendChild(yobContainer);

const yobKey = document.createElement('strong');
yobKey.innerText = 'annata: ';
yobContainer.appendChild(yobKey);

const yobValue = document.createElement('span');
yobValue.innerText = champagne.yob;
yobContainer.appendChild(yobValue);


////////////////////////////////////////////

const quantityContainer = document.createElement('div');
newCard.appendChild(quantityContainer);

const quantityKey = document.createElement('strong');
quantityKey.innerText = 'cl: ';
quantityContainer.appendChild(quantityKey);

const quantityValue = document.createElement('span');
quantityValue.innerText = champagne.quantity;
quantityContainer.appendChild(quantityValue);


///////////////////////////////////////////

const alcContainer = document.createElement('div');
newCard.appendChild(alcContainer);

const alcKey = document.createElement('strong');
alcKey.innerText = 'gradi: ';
alcContainer.appendChild(alcKey);

const alcValue = document.createElement('span');
alcValue.innerText = champagne.alcohol;
alcContainer.appendChild(alcValue);

//////////////////////////////////////////////

const bottleContainer = document.createElement('div');
newCard.appendChild(bottleContainer);

const bottleKey = document.createElement('strong');
bottleKey.innerText = 'n. bottiglie: ';
bottleContainer.appendChild(bottleKey);

const bottleValue = document.createElement('span');
bottleValue.innerText = champagne.bottleNumber;
bottleContainer.appendChild(bottleValue);

/////////////////////////////////////////////


const priceContainer = document.createElement('div');
newCard.appendChild(priceContainer);

const priceKey = document.createElement('strong');
priceKey.innerText = 'prezzo: ';
priceContainer.appendChild(priceKey);

const priceValue = document.createElement('span');
priceValue.innerText = champagne.price;
priceContainer.appendChild(priceValue);

/////////////////////////////////////////////


const viteContainer = document.createElement('div');
newCard.appendChild(viteContainer);

const viteKey = document.createElement('strong');
viteKey.innerText = 'vitigno: ';
viteContainer.appendChild(viteKey);

const viteValue = document.createElement('span');
viteValue.innerText = champagne.vite;
viteContainer.appendChild(viteValue);


/////////////////////////////////////////////


const locationContainer = document.createElement('div');
newCard.appendChild(locationContainer);

const locationKey = document.createElement('strong');
locationKey.innerText = 'località: ';
locationContainer.appendChild(locationKey);

const locationValue = document.createElement('span');
locationValue.innerText = champagne.location;
locationContainer.appendChild(locationValue);

/////////////////////////////////////////////


const certificationContainer = document.createElement('div');
newCard.appendChild(certificationContainer);

const certificationKey = document.createElement('strong');
certificationKey.innerText = 'vitigno: ';
certificationContainer.appendChild(certificationKey);

const certificationValue = document.createElement('span');
certificationValue.innerText = champagne.certification;
certificationContainer.appendChild(certificationValue);
