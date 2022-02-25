
// const arguments = process.argv.slice(2);

// console.log(getAllSubsets([1, 2, 3]));

// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(PowerSetCount([1, 2, 3]))

function PowerSetCount(arr) {
    const subset = [[]]
    for (const elementArr of arr) {
        subset.forEach(elementSubset => {
            subset.push([...elementSubset, elementArr])
        });
    }
    return subset
}



// Alternative Solution-1
// var PowerSetCount = (nums) => {
//     const subsets = [[]];
//     for (n of nums) {
//         subsets.map((el) => {
//             subsets.push([...el, n]);
//         });
//     }
//     return subsets;
// };


