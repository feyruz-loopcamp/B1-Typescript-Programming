let username: string = "b1g1_client@gmail.com"; 
let password: string = "Group2";
let retries: number = 3; 
let isLoggedIn: boolean = false;

let baseUrl: string = "https://beta.docuport.app";


// updating the var username to another string value 
username = "b1g1_employee@gmail.com"

// updaing the var retries to anothe string value
//retries = "four"; // number canNOT take string 
retries = 4; 


// Type Inference -> forcing to assing valid datatype value 
 
//-------------------------------------------------------------------
// 1st option to make an array
let roles: string[] = ["client", "employee"]; 

// 2nd option to make an array
let ports: Array <number> = [8080, 8081]

roles.push("advisor"); 
//roles.push(5); 

// tuple - is fixed array
let login: [string, string] = ["@gmail.com", "Group2"]

// any
let mixed: any = [8080, "Employee", "......", true]

// union - any of several specific types 
let id: number | string = 101; 
id = "A-101"; 
// id  = true; 