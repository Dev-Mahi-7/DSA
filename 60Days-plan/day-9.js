// function largestDigit(digits) {
//   let max = 0;
//   let rev = 0;
//   while (digits > 0) {
//     let digit = digits % 10;
//     rev = rev * 10 + digit;
//     digits = Math.floor(digits / 10);
//     if (max < digit) {
//       max = digit;
//     }
//   }
//   return max;
// }

// console.log(largestDigit(68769));

// function smallestDigit(digits) {
//   let min = 9;
//   let rev = 0;
//   while (digits > 0) {
//     let digit = digits % 10;
//     rev = rev * 10 + digit;
//     digits = Math.floor(digits / 10);

//     if (digit < min) {
//       min = digit;
//     }
//   }

//   return min;
// }

// console.log(smallestDigit(43456));

// function isArmstrong(nums) {
//   let sum = 0;
//   let temp = nums;
//   const power = nums.toString().length;
//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += Math.pow(digit, power);
//     temp = Math.floor(temp / 10);
//   }
//   return sum === nums;
// }

// console.log(isArmstrong(370));
