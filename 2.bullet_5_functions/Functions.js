function sum (a, b){
    return a + b; 
}

let result1 = sum (10, 20); // 30
console.log(result1);


let result2 = sum ("10", "20");  // "1020"
console.log(result2);

let result3 = sum();  // undifened + undefined = NaN
console.log(result3);