// let stu = ["Rishu" , 81 , "bhopal", 5.8 ,"ravi", 90, "madhya pradesh", 5.9];

// push() method
// console.log(stu);
// stu.push("Madhya Pradesh");
// console.log(stu);

// pop() method
// stu.pop();
// console.log(stu);

// unshift() method
// stu.unshift("Ravi", 90);
// console.log(stu);

// shift() method
// stu.shift();
// console.log(stu);

// slice() method
// let a=stu.slice(2,4);
// console.log(a);

// splice() method

// let stu = ["Rishu" , 81 , "bhopal", 5.8 ,"ravi", 90, "madhya pradesh", 5.9];
// let b=stu.splice(2,4);
// console.log(b);
// console.log(stu);

// stu.splice(2, 0,"raj", 90);   
// console.log(stu);


// --------------> Object  <------------

// let ob ={
//     name:"Rishu",
//     Age:24,
//     contact:9013
// }

// console.log(ob.name);

// take a input from user

// let person ={
//     name:prompt("Enter your name"),
//     age:parseInt(prompt("Enter your age")),
//     contact:parseInt(prompt("Enter your contact")),
//     location:prompt("Enter your location")

// }
// console.log(person)


// nasted object

// let emp ={
//     emp_name: "Sumit",
//     emp_id: 1,
//     emp_designation : "SDE",
//     emp_account :{
//         emp_acno: 234523,
//         emp_balance:151,
//     }
// }

// console.log(emp.emp_account.emp_balance)


// find fist key  of object

// let ob ={
//     name:"Rishu",
//     Age:24,
//     contact:9013,
//     location:"Bhopal",
//     hobbies:["cricket", "coding", "reading"],
//     fname:"Arjun",
//     lname:"Rai",
//     state:"Madhya Pradesh",
//     country:"India",
//     id:1,
// }

// console.log(Object.keys(ob)[0]);



// =================Function On Js =================

// -----------------------------------------------------without arguments and no return type

// function greet() {
//     console.log("Hello, welcome to the JavaScript world!");
// }
//  greet();

// ---------------------------------------------------- with arguments and no return type

// function greet(name) {
//     console.log(name);
// }
// greet("Rishu");


// wap to add two numbers using function and nuber taken from the user



// function add(a, b) { 
//     let sum = a + b;
//     console.log(sum); 
// }
//  a = parseInt(prompt("Enter first number"));
//  b = parseInt(prompt("Enter second number"));
// add(a,b);

// ===============================================  with arguments and with return type

// function Demo(a){
//     return a+a;

// }
// Demo(10);
// var result = Demo(10);
// console.log(result);

// ===============================================  without arguments and with return type


// 1. Wap to take a input from the user find square of that number then check number is even or odd using function type 1

// function checkSquareAndEvenOdd() {
//     let num = parseInt(prompt("Enter a number:"));
//     let square = num * num;
//     console.log("Square of the number is:", square);
    
//     if (num % 2 === 0) {
//         console.log(num, "is even.");
//     } else {
//         console.log(num, "is odd.");
//     }
// }
// checkSquareAndEvenOdd();


// 2. Wap to return sum of all number present in array using type 4

// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log (sumOfArray(numbers));



// 3. Wap to take input from the user and return the last digit of that number using function type 3

// function getLastDigit() {
//     let num = parseInt(prompt("Enter a number:"));
//     let lastDigit = num % 10;
//     console.log("The last digit of the number is:", lastDigit);
// }
// getLastDigit();


// 4. Wap to take a input from the user and check number is divisible by 3 or not if divisible then print the table if not divisible just print that number using function type 4

function checkDivisibilityAndPrintTable() {
    let num = parseInt(prompt("Enter a number:"));
    if (num % 3 === 0) { 
        console.log("The number is divisible by 3. Here is the multiplication table:");
        for (let i = 1; i <= 10; i++) {
            console.log(num * i);
        }
    } else { 
        console.log( num);
    }
}   
checkDivisibilityAndPrintTable();

