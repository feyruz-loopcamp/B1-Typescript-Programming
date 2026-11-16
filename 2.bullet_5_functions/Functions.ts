function sum (a: number, b:number): number{
    return a + b; 
}


let result1 = sum (10, 20.8); // 30
console.log(result1);

//let result2 = sum ("10", "20");  // "1020"
//console.log(result2);

//let result3 = sum(); 
//console.log(result3);

//let result4 = sum(10, 20, 30); 
//console.log(result4);


//-----------------------------------------------------------
// NO METHOD OVERLOADING in JS and TS
// METHOD OVERLOADING: same function name + differen arguments number or types 
function sum2 (a: number, b:number, c:number): number{
    return a + b + c; 
}


//-----------------------------------------------------------
// argument c - is optional AND default value is set to 0
// We can call this function with either 2 or 3 arguments/paramters
function sum3 (a: number, b:number, c:number = 0): number{
    return a + b + c; 
}


let result2 = sum3 (10, 30);
console.log(result2);


let result3 = sum3 (10, 30.8, 40);
console.log(result3);

//-----------------------------------------------------------
// return type function
function buildUrl(base: string, path: string): string {
    return `${base}${path}`;
}

let url: string = buildUrl ("https://beta.docuport.app", "/login"); // https://beta.docuport.app/login
console.log(url);


// void type function (does not return anything )
function fixName (name: string): void {
    let firstLetterUpper = name.charAt(0).toUpperCase();
    let restLower = name.substring(1).toLowerCase();
    let fixedName = firstLetterUpper + restLower; 

    console.log(fixedName);
}

fixName ("tom"); // "Tom"
fixName ("tom jerry"); // Tom Jerry 


// TODO: implement this fixName to check if user give empty string -> give a message that this is not valid input
// TODO: implement this fixName to check if user give multiple words it fixed each work to be first chat upper and rest lover 