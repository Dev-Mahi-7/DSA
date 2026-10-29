const findLength =(str)=>{
    let length = 0;
    while(str[length] !== undefined){
        length++;
    }

    return length;
}

console.log(findLength("komal rathod dokri"));
