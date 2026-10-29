function findGCDof2Number(num1, num2) {
  while (num2 !== 0) {
    let temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num1;
}
console.log(findGCDof2Number(10, 12)); 
// output 2 
