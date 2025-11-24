class Wine extends Beverage{

    constructor(name, producer, yob, quantity, alcohol, vite, location, price){
        super(name, producer, yob, quantity, alcohol, price);
        this.vite = vite;
        this.location = location;
    }

    toString(){

        return `Vino:
${super.toString()}
vitigno: ${this.vite}
località: ${this.location}`

    }


}