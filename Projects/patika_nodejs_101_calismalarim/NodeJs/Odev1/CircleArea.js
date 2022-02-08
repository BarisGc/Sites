
const arguments = process.argv.slice(2);

const CircleAreaFunc = (input_radius) => {

    console.log(` If radius is ${input_radius}, area of circle is ${(Math.PI * Math.pow(input_radius, 2)).toFixed(1)}`)
}

CircleAreaFunc(arguments[0] * 1)

//terminal: node CircleArea.js input_radius