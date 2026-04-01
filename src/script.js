//DOM Elements
let dropdowns = document.querySelectorAll("select");
let fromSelect = document.querySelector("select[name=from-select]");
let toSelect = document.querySelector("select[name=to-select]");
let exchangeRateTextual = document.querySelector("#exchange-rate");
let swapBtn = document.querySelector("button[name=swap-sides]");
let fromFlag = document.querySelector("#from-div img");
let inputBar = document.querySelector("input[name=from-input]");
let resultBar = document.querySelector("input[name=result-input");
let calculate = document.querySelector("button[name=calculate]");

//Variables
let fromCurr = "USD";
let toCurr = "PKR";
let exchangeRate = 0;

//IIFE for updating the exchange rate ate the initialization
(()=> {
    UpdateExchangeRate();
})();

//Options for dropdown
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from-select" && newOption.value === "USD") {
            newOption.selected = true;

        } else if (select.name === "to-select" && newOption.value === "PKR") {
            newOption.selected = true;
        }
        select.append(newOption);
    }
}

//calculating the exchangerate from an API
async function calculateExchangeRate(from, to) {
    let currAPI = `https://open.er-api.com/v6/latest/${from}`
    let api = await fetch(currAPI);
    let data = await api.json();
    exchangeRate = data.rates[to];
}

//updating the on screen exchange rate for the user
async function UpdateExchangeRate() {
    await calculateExchangeRate(fromCurr, toCurr);
    exchangeRateTextual.innerText = `1 ${fromCurr} = ${exchangeRate} ${toCurr}`;
}

//updating the flag with each option in dropdown
const updateFlag = (element) => {
    let countryCode = countryList[element.value];
    let newSrc = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

//amount calculation and edge case handling
function calculateAmount(amount, result, rate) {
    if(amount.value === "" || amount.value < 0) {
        result.value = 0.0;
        amount.style.borderColor = "rgb(255, 0, 0)"
        amount.focus();
        setTimeout(()=>{
            amount.style.borderColor = "rgb(128, 128, 128)"
        }, 2000)
        return;
    }

    result.value = rate*amount.value;
}


dropdowns.forEach((select) => {
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);

        if (select.name === "from-select") {
            fromCurr = evt.target.value;
        } else if (select.name === "to-select") {
            toCurr = evt.target.value;
        }

        UpdateExchangeRate();

    })
})

swapBtn.addEventListener("click", async ()=> {
    [fromCurr, toCurr] = [toCurr, fromCurr];
    await calculateExchangeRate(fromCurr, toCurr);
    UpdateExchangeRate();
    [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
    updateFlag(fromSelect);
    updateFlag(toSelect);
    calculateAmount(inputBar, resultBar, exchangeRate);
});

calculate.addEventListener("click", ()=> {
    calculateAmount(inputBar, resultBar, exchangeRate);
})