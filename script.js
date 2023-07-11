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
const inputArray = []

AC.addEventListener ('click', () => 
    location.reload()
    )

zero.addEventListener ('click', () => {
    inputArray.push(7);
    console.log("zero")
    
        })