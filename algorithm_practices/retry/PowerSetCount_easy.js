
// const arguments = process.argv.slice(2);

// console.log(getAllSubsets([1, 2, 3]));

// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
function PowerSetCount(arr) {
    const subsets = [[]]
    console.log([1, 2, 3])
    let counter = 1;
    for (const element of arr) {
        subsets.forEach(subset => {
            subsets.push([...subset, element])
            console.log("subsets", subsets, "counter", counter)
            counter++
        }
        )
    }
    return subsets
}

PowerSetCount([1, 2, 3])

// console.log(PowerSetCount(arguments[0]))

// var getAllSubsets = (nums) => {
//     const subsets = [[]];
//     for (n of nums) {
//         subsets.map((el) => {
//             subsets.push([...el, n]);
//         });
//     }
//     return subsets;
// };


