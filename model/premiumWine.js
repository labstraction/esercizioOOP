class PremiumWine extends Wine{

    constructor(name, producer, yob, quantity, alcohol, vite, location, certification, price){
        super(name, producer, yob, quantity, alcohol, vite, location, price);
        this.certification = certification;
    }

    get price(){
        const age = new Date().getFullYear() - this.yob;
        console.log(age)
        //prezzoReale = prezzo + (prezzo / 10 * anniDiInvecchiamento);
        const realPrice = this._price + (this._price / 10 * age);
        return realPrice;
    }

        
    set price(newPrice){
        if (newPrice >= 0) {
            this._price = newPrice;
        }
    }



    toString(){

        return `${super.toString()}
certificazione: ${this.certification}`

    }


}