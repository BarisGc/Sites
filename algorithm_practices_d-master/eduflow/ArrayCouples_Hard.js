// My Solution
function ArrayCouples1(arr) {
  let len = arr.length;
  for (i = 0; i < len; i += 2) {
    for (j = i + 2; j < len; j += 2) {
      if (arr[j] == arr[i + 1] && arr[i] == arr[j + 1]) {
        arr.splice(i, 2);
        arr.splice(j - 2, 2);
        len = arr.length;
        i = i - 2;
        j = j - 2;
      }
    }
  }
  if (isNaN(arr[0])) {
    return "yes";
  } else {
    return arr.join();
  }
}

// Alternative Solution
// function ArrayCouples2(arr) {
//   const lookup = {};
//   const checkReverse = (num1, num2) => {
//     if (lookup[num2] === num1) return true;
//     return false;
//   };
//   for (let i = 0; i < arr.length; i += 2) {
//     const num1 = arr[i];
//     const num2 = arr[i + 1];
//     if (checkReverse(num1, num2)) {
//       delete lookup[num2];
//     } else {
//       lookup[num1] = num2;
//     }
//   }
//   const res = Object.keys(lookup)
//     .reduce((acc, key) => {
//       acc.push(+key, +lookup[key]);
//       return acc;
//     }, [])
//     .join(",");
//   return res.length ? res : "yes";
// }
console.log(ArrayCouples1([4, 5, 1, 4, 5, 4, 4, 1])); //yes
console.log(ArrayCouples1([6, 2, 2, 6, 5, 14, 14, 1])); //5,14,14,1
console.log(ArrayCouples1([2, 1, 1, 2, 3, 3])); //3,3
console.log(ArrayCouples1([5, 4, 6, 7, 7, 6, 4, 5])); //yes
