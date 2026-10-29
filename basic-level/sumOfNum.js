function sumOfNum(num){
    let sum = 0;
    for(let i=1;i<=num;i++){
        sum += i;
        console.log(sum)
    }
    return sum;
}

console.log(sumOfNum(5));