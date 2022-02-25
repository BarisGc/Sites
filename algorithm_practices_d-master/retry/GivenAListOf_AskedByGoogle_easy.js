// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//my solution
// function CheckList(givenListArr, k) {
//     let status = false
//     for (let i = 0; i <= givenListArr.length; i++) {
//         for (let j = 1; j <= givenListArr.length; j++) {
//             if (givenListArr[i] + givenListArr[j] == k) {
//                 status = true
//                 break
//             }
//         }
//     }
//     return status
// }

// console.log(CheckList([10, 15, 3, 7], 17))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// alternative solution-1
// function ProblemOne_Solve()
// {
//     const k = 17;
//     const values = [10, 15, 3, 8, 2];
//     for (i=0; i<values.length; i++) {
//         if (values.find((sum) => { return k-values[i] === sum} )) return true;
//     }
//     return false;
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// BEST SOLUTION
// JavaScript Map class is another implementation of Hash Table
// map[key] isn’t the right way to use a Map
// Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).
// So we should use map methods: set, get and so on.

function Problem01(arr, sum) {
    const hashTable = new Map;
    const res = [];

    arr.forEach(n =>
        hashTable[n]
            ? res.push([n, hashTable[n]])
            : hashTable[sum - n] = n
    );

    return res;
}

console.log(Problem01([17, 8, -2, 3, 7], 15))

