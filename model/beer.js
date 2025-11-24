class Beer extends Beverage{

    constructor(name, producer, yob, quantity, alcohol, type, color, price){
        super(name, producer, yob, quantity, alcohol, price);
        this.type = type;
        this.color = color;
    }

    toString(){

        return `Birra:
${super.toString()}
tipologia: ${this.type}
colore: ${this.color}`

    }


}