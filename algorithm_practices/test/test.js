// var myString1 = "[22].[44].[33].";

// console.log(myString1.match(/\d+/g));
// [ '22', '44', '33' ]


const EvenPairs = (str) => {
    let pattern = /\d/g
    let result = "";
    const controlArr1 = []
    while (pattern.test(str) == true) {
        controlArr1.push(pattern.lastIndex)
    }
    const controlArr2 = str.match(pattern)
    return controlArr1
}

console.log(EvenPairs("3gy41d216")) //true
// console.log(EvenPairs("3gy41d2316")) //true
// console.log(EvenPairs("f09r27i8e67")) //false
// console.log(EvenPairs("f178svg3k19k46")) //true
// console.log(EvenPairs("72r5gg812")) //true
// console.log(EvenPairs("72r5gg813")) //false
// console.log(EvenPairs("72r5g9812")) //true
// console.log(EvenPairs("fdfs1386eretre")) //true
// console.log(EvenPairs("k12042k4242")) //true
// console.log(EvenPairs("3322l323023l22020k20d203d")) //true
// console.log(EvenPairs("kkkkkkkkkkkk")) //false
// console.log(EvenPairs("111111111111")) //false
// console.log(EvenPairs("222222222222")) //true
