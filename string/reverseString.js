
//  **1. Using built-in methods (Most common) */
// const reverseString = (str)=>{
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Mahi"));
// output : iham


//** 2. Using loop (DSA approach)  */

// function reverseString(str){
//     let revStr = "";
//     for(let i=str.length-1;i>=0;i--){
//         revStr += str[i];
//     }
//     return revStr;
// }
// console.log(reverseString("Mukesh"));


//**3. Using recursion (interview level)   */

// function recursionString(str){
//     if(str === "") return "";
//     return recursionString(str.slice(1)) + str[0];
// }

// console.log(recursionString("mahi"));


//**4. One-liner (short trick) */
// const revStr = (str)=> [...str].reverse().join("");

// console.log(revStr("mahi"));




