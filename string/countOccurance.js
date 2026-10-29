function countOccurance(str,target){
    let count =0;
    for(let i = 0; i <= str.length ;i++){
        if(str[i] === target){
            count++;
        }
    }

    return count;
}

console.log(countOccurance("muukesh","u"));
