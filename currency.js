class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        const API_KEY="";
        this.url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=`;
        this.amount = null;
    }
    exchange(){
        return new Promise((resolve,reject) => {

            fetch(this.url)
                .then(response => response.json())
                .then(data => {

                    if(this.firstCurrency === "EUR"){
                        const parity = data.rates[this.secondCurrency];
                        const amount2 = Number(this.amount);
                        let total = parity * amount2;
                        resolve(total);
                    }else {

                        const parity1 = data.rates[this.firstCurrency];
                        const parity2 = data.rates[this.secondCurrency];
                        const amount2 = Number(this.amount);
                        let total = (parity2/parity1) * amount2;
                        resolve(total);
                    }
                })
                .catch(err => reject(err));
        })

    }

    changeAmount(amount){
        this.amount =amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}