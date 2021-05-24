// Selecting elements

const amountElement = document.querySelector('#amount');
const firstSelect = document.querySelector('#firstCurrency');
const secondSelect = document.querySelector('#secondCurrency');
const API_KEY ="e48537d50fd4d92032ee6f456a1f355c";
const currency = new Currency("USD", "EUR");





eventListeners();

function eventListeners() {
    amountElement.addEventListener("input", exchangeCurrency);
    firstSelect.onChange = function () {

    };
    secondSelect.onChange = function () {

    };
}

function exchangeCurrency() {
    currency.exchange();

}