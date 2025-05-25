// Q1. Explain Recursion in DSA?
// Ans: A function call itself is called a recursion

// In Recursion we use two terms
// 1. Base Condition : The Condition under which the recursion stops

// 2. Recursive Condition: The part where the method called itself

// Syntax:

// int func(int n){
//     if(base condition){
//         //stop the recursion
//     }
//     else{
//     //Recursive Condition
//     }
// }
// =========================================
// #include<iostream>
// using namespace std;




// int main(){
//     cout<<"\nEnter Main Method ";
//     main();
//     cout<<"\nExit Main Method ";
   
// }
// ========================================
// //calculate Factorial Using Recursion
// #include<iostream>
// using namespace std;
// int f1(int n){//n=5
//     if(n==1){
//         return 1;
//     }else{
//         return n*f1(n-1);
//     }
// }
// int main(){
//     cout<<"\nEnter Main Method ";
//     cout<<"\n "<<f1(5);
//     cout<<"\nExit Main Method ";
   
// }
// ======================================