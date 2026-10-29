function isPalindrome(num) {
  let ogNum = num;
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  console.log(ogNum, " ", rev);
  if (rev === ogNum) return true;
  else return false;
}

console.log(isPalindrome(121));
