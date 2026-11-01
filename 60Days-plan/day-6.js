// function printNumber(arr) {
//   for (let i of arr) {
//     console.log(i);
//   }
// }

// printNumber([1, 2, 3, 4]);

// function findLargest(arr){
//     let max=0;
//     for(let i =0;i<=arr.length-1;i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findLargest([1,3,6,9,12,55]));

// function sumOfArray(arr){
//     let sum = 0;
//     for(let i=0;i<=arr.length-1;i++){
//         sum += arr[i];
//     }

//     return sum;
// }

// console.log(sumOfArray([2,4]))

// function evenOdd(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] % 2 === 0) {
//       console.log("Even");
//     } else {
//       console.log("Odd");
//     }
//   }
// }

// evenOdd([2, 4, 5, 6]);

function printRevArr(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev += arr[i];
  }
  return rev;
}

console.log(printRevArr([1,2,3,4,5]));


