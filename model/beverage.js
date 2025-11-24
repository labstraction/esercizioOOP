class Beverage {

    constructor(name, producer, yob, quantity, alcohol, price) {
        this.name = name;
        this.producer = producer;
        this.yob = yob;
        this.quantity = quantity;
        this.alcohol = alcohol;
        this.bottleNumber = 0;
        this._price = 0;
        this.price = price;
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        if (newPrice >= 0) {
            this._price = newPrice;
        }
    }

    toString() {

        return `nome: ${this.name}
produttore: ${this.producer}
annata: ${this.yob}
cl: ${this.quantity}
gradi: ${this.alcohol}
n. bottiglie: ${this.bottleNumber}
prezzo: ${this.price}`

    }


    addBottles(nbr){
        if (nbr > 0) {
            this.bottleNumber += nbr;
        }
    }

    sellBottles(nbr){

        if (nbr <= this.bottleNumber) {
            //this.bottleNumber = this.bottleNumber - nbr;
            this.bottleNumber -= nbr;    
        } else {
            console.error('Bottiglie insufficienti, vendita annullata!!')
        }

    }

}