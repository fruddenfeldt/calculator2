const AC = document.getElementById('AC')

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zeroButton')

const additionButton = document.getElementById('additionButton')
const inputArray = []
let firstNumber;
let secondNumber;

function operator (firstNumber, secondNumber) {

}

AC.addEventListener ('click', () => 
    location.reload()
    )

seven.addEventListener ('click', () => {
    inputArray.push(7);
    firstNumber = 7;
    console.log(firstNumber)
        })

eight.addEventListener ('click', () => {
    inputArray.push(8);
    secondNumber = 8;
    console.log(secondNumber)
    
        })


additionButton.addEventListener('click', () => {
    console.log('plus!');
    console.log(add(firstNumber, secondNumber))
})

const add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
        };
        