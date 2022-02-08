//    #
//   ##
//  ###
// ####

// Write a program that prints a staircase of size .

// My Solution
function stairCase(n) {
    const arr = []
    for (let i = 0; i < n + n; i++) {
        if (arr.length < n) {
            arr.push(" ")
        } else {
            arr.push("#")
            arr.shift()
        }
        if (arr[arr.length - 1] == "#") {
            console.log((arr.join("")))
        }
    }
}

// Best Solution
for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
}
// Alternative Solution1
Array(n).fill().forEach((v, i) => console.log("#".repeat(i + 1).padStart(n)));


