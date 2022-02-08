function miniMaxSum(arr) {

    let minSum = Infinity;
    let maxSum = -Infinity;

    for (let element of arr) {
        let comparison = arr.reduce((total, currentValue) => total + currentValue) - element
        if (comparison < minSum) {
            minSum = comparison
        }
        if (comparison > maxSum) {
            maxSum = comparison
        }
    }
    console.log(minSum, maxSum)
}


// Alternative solution:

// const sum = arr.reduce((sum, current) => sum + current);
// const max = sum - Math.min(...arr);
// const min = sum - Math.max(...arr);
// console.log(min + ' ' + max);