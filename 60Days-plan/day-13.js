// function reverseArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }

//   return arr;
// }

// console.log(reverseArray([10, 20, 30, 40, 50]));
// [50, 40, 30, 20, 10]

// function countFrequency(arr) {
//   const frequency = {};

//   for (let num of arr) {
//     if (frequency[num]) {
//       frequency[num]++;
//     } else {
//       frequency[num] = 1;
//     }
//   }

//   return frequency;
// }

// console.log(countFrequency([1, 2, 2, 3, 1, 2]));
// { 1: 2, 2: 3, 3: 1 }


// function findDuplicates(arr) {
//   const frequency = {};
//   const duplicates = [];

//   for (let num of arr) {
//     frequency[num] = (frequency[num] || 0) + 1;

//     if (frequency[num] === 2) {
//       duplicates.push(num);
//     }
//   }

//   return duplicates;
// }

// console.log(findDuplicates([1, 2, 3, 2, 4, 1]));
// [2, 1]


// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]