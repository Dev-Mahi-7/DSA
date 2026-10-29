
//** Check palindrome */

const isPalindrome =(str)=>{
    const ogStr =str;
    const rev = [...str].reverse().join("");
    if(ogStr === rev){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindrome("madam"));

