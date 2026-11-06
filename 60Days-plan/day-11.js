// function findSecondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num < largest) {
//       secondLargest = largest;
//     }
//   }
//   return secondLargest === -Infinity ? null : secondLargest;
// }

// console.log(findSecondLargest([3, 10, 21, 34]));

// function findLargest(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// console.log(findLargest([10, 20, 4, 5, 122, 3]));

// function findPositiveNegitiveAndZeroNumbers(arr) {
//   let pos = 0;
//   let neg = 0;
//   let zero = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zero++;
//     } else if (arr[i] > 0) {
//       pos++;
//     } else {
//       neg++;
//     }
//   }
//   console.log("Total Positive: ", pos);
//   console.log("Total Negitive: ", neg);
//   console.log("Total Zero: ", zero);
// }

// findPositiveNegitiveAndZeroNumbers([10, -12, 90, -3, -4, 9, 0, -1000]);

// function printSecondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num < largest) {
//       secondLargest = largest;
//     }
//   }
//   return secondLargest === -Infinity ? null : secondLargest;
// }

// console.log(printSecondLargest([10, 20, 9, 20, 10, 2]));

// function removeDuplicate(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(removeDuplicate([10, 20, 1, 4, 2, 4, 2]));

function findCommanElement(arr1, arr2) {
  const comman = arr1.filter((item) => arr2.includes(item));
  return comman;
}

console.log(findCommanElement([1, 2, 3, 4], [5, 3, 2, 7]));
