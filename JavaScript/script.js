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

// var a = 1;
// do {
//     var num = parseInt(prompt("Enter a number"));
//     document.write(a + "<br>");
//     a++;
// } while (num != 0);

// take a number input from user and  print the table of that number using while loop

// var num = parseInt(prompt("Enter a number"));
// var i = 1;
// while (i <= 10) {
//     document.write(num + " * " + i + " = " + num * i +
//         "<br>");
//     i++;
// }

// -----------------> For  Loop <------------------

// for(let a=1 ; a<=10 ; a++){
//     document.write(a + "<br>");
// }



// for (let i = 20; i >= 10; i--) {
//     document.write(i + "<br>");
// }

// let num = parseInt(prompt("Enter a number"));
// let mul = num * num;
// document.write("Table of " + num + "<br>");
// for (let i = 10; i >= 1; i--) {
//     document.write(mul + " * " + i + " = " + mul * i ,"<br>");
// }

// wap to print only even numbers between 1 to 15
// for(let i=1; i<=15; i++){
//     if(i%2==0){
//         document.write(i + "<br>");
//     }
// }


// wap tp take input from user and check it is even and odd if number is even then  print the table of that number if number is odd then print the que of that number

// var num = parseInt(prompt("Enter a number"));
// if(num%2==0){
//     document.write("Table of " + num + "<br>");
//     for(let i=1; i<=10; i++){
//         document.write( num*i + "<br>");
//     }
// }
// else {
//     document.write(num*num*num + "<br>");
// }


// -----------------> Nasted For  Loop <------------------
for(let i=1; i<=10; i++){{
    for(let j=2; j<=3; j++){
        document.write(i*j + " ");
    }
    document.write("<br>");
}
}
