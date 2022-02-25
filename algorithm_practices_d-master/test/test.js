// Have the function LineOrdering(strArr) read the strArr parameter being passed which will represent the relations among people standing in a line. The structure of the input will be ["A>B","B>C","A<D",etc..]. The letters stand for different people and the greater than and less than signs stand for a person being in front of someone or behind someone. A>B means A is in front of B and B<C means that B is behind C in line. For example if strArr is: ["J>B","B<S","D>J"], these are the following ways you can arrange the people in line: DSJB, SDJB and DJSB. Your program will determine the number of ways people can be arranged in line. So for this example your program should return the number 3. It also may be the case that the relations produce an impossible line ordering, resulting in zero as the answer.

// Only the symbols <, >, and the uppercase letters A...Z will be used. The maximum number of relations strArr will contain is ten.
// Examples
// Input: ["A>B","A<C","C<Z"]
// Output: 1
// Input: ["A>B","B<R","R<G"]
// Output: 3

// function myFunc(strArr) {

//     DSJB

// console.log(counter)
// }

// myFunc(["A>B","A<C","C<Z"])

// function HappyNumbers(num) {
//     let str = String(num);
//     let arr = [];
//     let sum = 0;

//     for (let x of str) {
//         arr.push(Number(x));
//     }

//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i] * arr[i];
//         if (i + 1 == arr.length && sum > 9) {
//             arr = Array.from(String(sum).match(/\d/g), Number);
//             i = -1
//             sum = 0
//         }
//     }
//     return sum == 1 ? true : false
// }

// console.log(HappyNumbers(9));
// console.log(HappyNumbers(10))
// console.log(HappyNumbers(2555))
// console.log(HappyNumbers(5552))

// let firstUnique = (word) => {
//     let uniqueLetterIndex = -1;
//     for (let index = 0; index < word.length; index++) {
//       let letterCount = word.split("").filter((x) => x === word[index]).length;

//       if (letterCount < 2) {
//         uniqueLetterIndex = index + 1;
//         break;
//       }
//     }

//     return uniqueLetterIndex;
//   };

//   console.log(firstUnique("hackthegame"));
//   console.log(firstUnique("selam"));
//   console.log(firstUnique("küllük"));
