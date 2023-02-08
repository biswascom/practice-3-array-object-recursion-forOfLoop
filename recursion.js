// Recursion is like loop. 
let number = [];
for(let i = 0; i <= 10; i++){
    number.push(i);
    let element = i;
    console.log(element);
}
console.log(number);

// Recursion always written in function. 
function recursion(number){
    if(number === 1){
        return 1;
    }
    return number * recursion(number - 1);
}

const result = recursion(10);
console.log(result);