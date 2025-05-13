// const a=10;
// a=20;
// console.log(a*2);

// const { parse } = require("request/lib/cookies");

// wap to find area of circle and print on document page

// let r=5;
// let area=3.14*r*r;
// document.write("Area of circle is: "+area);


// var a =parseInt(prompt("Enter first number")) ;
// var b = parseInt(prompt("Enter second number"));
// console.log(a+b);

// wap to find area of circle and r taken from user

// var r = parseInt(prompt("Enter radius of circle"));
// var area = 3.14*r*r;
// document.write("Area of circle is: "+area);

// wap to program to find que of a number and the vale must be taken from user

// var a = parseInt(prompt("Enter a number"));
// var s = a*a*a;
// document.write("Square of number is: "+s);


// wap to add to number taken from user and also find squire of the number

// var a = parseInt(prompt("Enter first number"));
// var b = parseInt(prompt("Enter second number"));
// var sum = a+b;
// var s = a*a;
// document.write("Sum of two number is: "+sum);

// ----------------->  Conditional statement <------------------

// wap to take input from the user and check number us even or odd

// var num=parseInt(prompt("Enter a number"));
// if(num%2==0){
//     document.write("number is even");
// }
// else{
//     document.write("number is odd");
// }
// wap to take input from the user and check which number is greater

// var a = parseInt(prompt("Enter first number"));
// var b = parseInt(prompt("Enter second number"));
// if(a>b){
//     document.write("First number is greater" + a);
// }
// else {
//     document.write("Second number is greater"  + b);
// }


// wap to check the number is positive or negative or zero

// var num = parseInt(prompt("Enter a number"));
// if(num>0){
//     document.write("Number is positive" + num);

// }
// else if(num<0){
//     document.write("Number is negative" - num);
// }
// else{
//     document.write("Number is zero" );
// }

// wap to take input from the user and check it is elegible for vote or not if user eligible for vote then check user is indian or not. 


// var age = parseInt(prompt("Enter your age"));
// var country = prompt("Enter your country");
// if (age >= 18) {
//     document.write("You are eligible for vote" ,"<br>");
//     if (country == "india") {
//         document.write("Because ,You are indian", "<br>");
//     }
//     else {
//         document.write("You are not indian");
//     }
// }
// else {
//     document.write("You are not eligible for vote","<br>");
// }




// ----------------->  Loop <------------------


// wap to print 1 to 10 digit using do while loop
// var a=1;
// do{
//     document.write(a + "<br>");
//     a++;

// }while(a<=10);

// wap to take input from when the user enter 0 then loop will be break

var a = 1;
do {
    var num = parseInt(prompt("Enter a number"));
    document.write(a + "<br>");
    a++;
} while (num != 0);


