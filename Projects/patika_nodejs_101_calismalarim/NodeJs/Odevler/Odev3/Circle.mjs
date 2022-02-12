


const circleAreaFunc = (input_radius) => {

    console.log(` If radius is ${input_radius}, area of circle is ${(Math.PI * Math.pow(input_radius, 2)).toFixed(1)}`)
}

const circleCircumference = (input_radius) => {

    console.log(` If radius is ${input_radius}, Circumference of circle is ${(Math.PI * 2 * input_radius).toFixed(1)}`)
}

export {
    circleAreaFunc,
    circleCircumference
}


//terminal: node CircleArea.js input_radius