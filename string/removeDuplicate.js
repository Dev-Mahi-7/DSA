function removeDuplicate(str){
    let seen = new Set();
    let result = "";
    for(let char of str){
        if(!seen.has(char)){
            seen.add(char);
            result += char;
        }
    }
    return result;
}

console.log(removeDuplicate("programming"));
