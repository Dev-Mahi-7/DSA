// console.log("Mahi Rathod")


// write a function called truncate that check the lenght of given string - str , and if it surpress   a speficied max len maxlenght it replaces the end of the string with the ellipse char "..." so that length match the max length   


const str = "i am Mahi Rathod frontend dev";

const truncate =(str,maxLength)=>{
    if(str.length > maxLength){
    return str.slice(0,maxLength-1)+"...";
    }else{
        return str;
    }
}


console.log(truncate(str,10));

