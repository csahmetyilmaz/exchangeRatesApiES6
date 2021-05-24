class Currency {

    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency; //currency symbol that you need
        this.secondCurrency = secondCurrency;
        this.url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=TRY,JPY`;
        this.amount = null;


    }

    exchange() {
        fetch(`${this.url + this.firstCurrency},${this.secondCurrency}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    changeAmount(amount) {
        this.amount = amount;
    }

    changeFirstCurrency(nexFirstCurrency) {
        this.firstCurrency = nexFirstCurrency;
    }
    changeSecondCurrency(nexSecondCurrency) {
        this.firstCurrency = nexSecondCurrency;
    }

}