
function EvenPairs(str) {
    let CheckPair = false
    const pairsArray = []

    for (let i = 0; i < str.length; i++) {
        if ((Number(str[i]) % 2 == 0)) {
            pairsArray.push(i)
        }
    }

    // it passes first even and then it loops
    for (let index = 1; index < pairsArray.length; index++) {

        //checking string before even numbers
        if ((str[pairsArray[index] - 1]) % 1 != 0) {
            continue
        }
        // it loops backward until it finds an even number
        else {
            for (let j = pairsArray[index]; j > 0; j--) {
                if (str[j - 1] % 2 == 0) {
                    CheckPair = true
                }
            }
        }
    }
    return CheckPair
}
//Test Section
console.log(EvenPairs("3gy41d216")) //true
console.log(EvenPairs("3gy41d2316")) //true
console.log(EvenPairs("f09r27i8e67")) //false
console.log(EvenPairs("f178svg3k19k46")) //true
console.log(EvenPairs("72r5gg812")) //true
console.log(EvenPairs("72r5gg813")) //false
console.log(EvenPairs("72r5g9812")) //true
console.log(EvenPairs("fdfs1386eretre")) //true
console.log(EvenPairs("k12042k4242")) //true
console.log(EvenPairs("3322l323023l22020k20d203d")) //true
console.log(EvenPairs("kkkkkkkkkkkk")) //false
console.log(EvenPairs("111111111111")) //false
console.log(EvenPairs("222222222222")) //true
