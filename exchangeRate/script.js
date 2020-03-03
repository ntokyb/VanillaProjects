// function calculate(){
//     // fetch('items.json').then(res => console.log(res));

//     fetch('items.json')
//     .then(response => response.json())
//     // .then(data => console.log(data));
//     .then(data => (document.body.innerHTML = data[2].text));

// }

// calculate();

const currencyEL_One = document.getElementById('currency-one');
const amountEL_one = document.getElementById('amount-one');
const currencyEL_two = document.getElementById('currency-two');
const amountEL_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate(){
    const currencyOne = currencyEL_One.value;
    const currencyTwo = currencyEL_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(response => response.json())
    .then(data =>{
        // console.log(data);
        const rate = data.rates[currencyTwo];

        // console.log(rate);
        rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

        amountEL_two.value = (amountEL_one.value * rate).toFixed(2);
    });

    
}

currencyEL_One.addEventListener('change', calculate);
amountEL_one.addEventListener('input', calculate);
currencyEL_two.addEventListener('change', calculate);
amountEL_two.addEventListener('input', calculate);

swap.addEventListener('click', ()=>{
    const temp = currencyEL_One.value;
    currencyEL_One.value = currencyEL_two.value;
    currencyEL_two.value = temp;
    calculate();
});
calculate();