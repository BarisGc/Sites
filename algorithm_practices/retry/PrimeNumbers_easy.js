
const arguments = process.argv.slice(2);

const showPrimeNumbers = (firstNumber, secondNumber) => {
    let primeNumbersArr = []

    // Detecting smaller input as a number & checking if it is a prime number
    if (firstNumber < secondNumber) {
        for (let i = firstNumber; i <= secondNumber; i++) {
            let isPrime = true
            for (let j = 2; j <= i; j++) {
                if (i % j === 0 && j !== i) {
                    isPrime = false
                }
            }
            if (isPrime === true) {
                primeNumbersArr.push(i)
            }
        }
        console.log(primeNumbersArr)
    }

    else if (secondNumber < firstNumber) {
        for (let i = secondNumber; i <= firstNumber; i++) {
            let isPrime = true
            for (let j = 2; j <= i; j++) {
                if (i % j === 0 && j !== i) {
                    isPrime = false
                }
            }
            if (isPrime === true) {
                primeNumbersArr.push(i)
            }
        }
        console.log(primeNumbersArr)
    }

}

// arguments return as string so use "* 1" or "Number" to convert from string to number
showPrimeNumbers(arguments[0] * 1, arguments[1] * 1);

// terminal: node practicing_algorithms_PrimeNumbers.js firstNumber secondNumber