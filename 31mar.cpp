// #include <iostream>
// #include <math.h>
// using namespace std;
// int main()
// {
// int x = 10;
// cout<<"The value of x"<<x<<endl;

// x+=10;
//  cout<<"The value of x"<<x<<endl;

//  x-=2;
//   cout<<"The value of x"<<x<<endl;

//  x/=2;
//    cout<<"The value of x"<<x<<endl;
// x%=2;
//   cout<<"The value of x"<<x<<endl;
//   x*=2;
//     cout<<"The value of x"<<x<<endl;
// int a,b,c;
// a=5;
// b=4;
// c=a+b;
// cout<<"The addition of a and b = \n"<<c<<endl;
// c=a*b;
// cout<<"The multipliction of a and b = \n"<<c<<endl;
// c=a-b;
// cout<<"The sub of a and b = \n"<<c<<endl;
// c=a/b;
// cout<<"The division of a and b = \n"<<c<<endl;
// c=a%b;
// cout<<"The remainder of a and b = \n"<<c<<endl;

// find the Area

//

// int a, b, c;
// float d ,r12, r22;
// cout << "enter value of a,b,c\n";
// cin >> a >> b >> c;
// d = (b * b) - 4 * a * c;
// cout << "The value of d = \n"<< d << endl;
// r12 = (-b + sqrt(d)) / (2 * a);
// r22 = (-b - sqrt(d)) / (2 * a);
// if(d < 0)
// {
//     cout << "The roots are imaginary\n";
//     cout << "The value of r1 = \n"<< r12 << endl;
//     cout << "The value of r2 = \n"<< r22 << endl;
// }
// else if(d == 0)
// {
//     cout << "The roots are real and equal\n";
//     cout << "The value of r1 = \n"<< r12 << endl;
//     cout << "The value of r2 = \n"<< r22 << endl;
// }
// else
// {
//     cout << "The roots are real and different\n";
// }
// cout << "The value of r1 = \n"<< r12 << endl;
// cout << "The value of r2 = \n"<< r22 << endl;

//     return 0;
// }

// // Assinment operator

// #include <iostream>
// using namespace std;
// int main() {
//     int a=20;
//     cout<<"The value of a= "<<a<<endl;
//     a+=20;
//     cout<<"The value of a= "<<a<<endl;
//     a-=10;
//     cout<<"The value of a= "<<a<<endl;
//     a*=2;
//     cout<<"The value of a= "<<a<<endl;
//     a/=2;
//     cout<<"The value of a= "<<a<<endl;
//     a%=3;
//     cout<<"The value of a= "<<a<<endl;

// return 0;
// }

// Relational operator  -- 04-04-2025 ---> Most important
// #include <iostream>
// using namespace std;
// int main() {
//     int a = 10, b = 20 ,z;
// z=a==b;
// cout<<"The value of z= "<<z<<endl;
//     z=a!=b;
// cout<<"The value of z= "<<z<<endl;
//    z=a<b;
//     cout<<"The value of z= "<<z<<endl;
//     z=a>b;
//     cout<<"The value of z= "<<z<<endl;
//     z=a<=b;
//     cout<<"The value of z= "<<z<<endl;
//     z=a>=b;
//     cout<<"The value of z= "<<z<<endl;
//     z=a<b && a>b;
//     cout<<"The value of z= "<<z<<endl;
//     z=a<b || a>b;
//     cout<<"The value of z= "<<z<<endl;
//     z=a<b || a>b;
//     cout<<"The value of z= "<<z<<endl;
//     z=(a<b) || (a>b);
//     cout<<"The value of z= "<<z<<endl;
//     z=(a<b) && (a>b);
//     cout<<"The value of z= "<<z<<endl;
// return 0;
// }

// Write a program to check given input is childage,tinage,youngage,oldage. 07-04-2025

// # include<iostream>
// using namespace std;
// int main() {
//     int age;
//     cout<<"Enter your age: ";
//     cin>>age;
//     if(age<0){
//         cout<<"not burn"<<endl;
//     }
//     else if(age<=18){
//         cout<<"You are a child"<<endl;
//     }
//     else if(age<=35){
//         cout<<"You are a young"<<endl;
//     }
//     else if(age<=60){
//         cout<<"You are a old"<<endl;
//     }
//     else{
//         cout<<"You are a very old"<<endl;
//     }

//     return 0;
// }

// find lcm  of three numbers 07-04-2025
// # include<iostream>
// using namespace std;
// int main(){
//     int a,b,c,lcm,hcf;
//     cout<<"Enter three numbers: "<<endl;
//     cin>>a>>b>>c;
//     // find LCm
//    int lcm1=(a*b*c)/a;
//    int lcm2=lcm1/b;
//    int lcm3=lcm2/c;
//      lcm=lcm1+lcm2+lcm3;

//     cout<<"LCM of three numbers is: "<<lcm<<endl;

//     return 0;

// }

// #include <iostream>
// using namespace std;

// // Function to find HCF of two numbers
// int findHCF(int a, int b)
// {
//     while (a != b)
//     {
//         if (a > b)
//             a -= b;
//         else
//             b -= a;
//     }
//     return a;
// }

// // Function to find HCF of three numbers
// int findHCFThree(int a, int b, int c)
// {
//     int hcf_ab = findHCF(a, b);
//     return findHCF(hcf_ab, c);
// }

// // Function to find LCM of two numbers
// int findLCM(int a, int b)
// {
//     return (a * b) / findHCF(a, b);
// }

// // Function to find LCM of three numbers
// int findLCMThree(int a, int b, int c)
// {
//     int lcm_ab = findLCM(a, b);
//     return findLCM(lcm_ab, c);
// }

// int main()
// {
//     int num1, num2, num3;

//     cout << "Enter three positive integers: ";
//     cin >> num1 >> num2 >> num3;

//     if (num1 <= 0 || num2 <= 0 || num3 <= 0)
//     {
//         cout << "Please enter positive integers only." << endl;
//         return 1;
//     }

//     int hcf = findHCFThree(num1, num2, num3);
//     int lcm = findLCMThree(num1, num2, num3);

//     cout << "HCF of " << num1 << ", " << num2 << " and " << num3 << " is: " << hcf << endl;
//     cout << "LCM of " << num1 << ", " << num2 << " and " << num3 << " is: " << lcm << endl;


// }


// find out the maximum of three numbers 08-04-2025

// # include <iostream>
// using namespace std;
// int main()
// {
//     int num1, num2, num3;
//     cout << "Enter three numbers: ";
//     cin >> num1 >> num2 >> num3;
//     if (num1 >= num2 && num1 >= num3)
//     {
//         cout << "The maximum number is: " << num1 << endl;

//     }
//     else if (num2 >= num1 && num2 >= num3)
//     {
//         cout << "The maximum number is: " << num2 << endl;
//     }
//     else
//     {
//         cout << "The maximum number is: " << num3 << endl;
//     }
//     return 0;
// }
// 09-04-2025
// Question on %
// Write a program take three variable of float type name phy,che,math and show the resultm on the following condition marks should be 0-100 user can pass on getting marks grater than = 33 
// if user can pass show there division lessthan= 45 , less then 60 , grater then =60 first division, second division, third division. user can pass only if they will pass all the subject  , if user fail show there fail subject with marks.

// # include<iostream>
// using namespace std;
// int main(){
//     float phy,che,math;
//     cout<<"Enter your marks in Physics, Chemistry and Mathematics: ";
//     cin>>phy>>che>>math;
//     if(phy<0 || che<0 || math<0 || phy>100 || che>100 || math>100){
//         cout<<"Invalid marks entered. Please enter marks between 0 and 100."<<endl;
//     }
//     else if(phy<33 || che<33 || math<33){
//         cout<<"You have failed in the following subjects: "<<endl;
//         if(phy<33) cout<<"Physics: "<<phy<<endl;
//         if(che<33) cout<<"Chemistry: "<<che<<endl;
//         if(math<33) cout<<"Mathematics: "<<math<<endl;
//     }
//     else{
//         cout<<"You have passed all subjects."<<endl;
//         if(phy>=60 && che>=60 && math>=60){
//             cout<<"Your division is First Division."<<endl;
//         }
//         else if((phy>=45 && phy<60) && (che>=45 && che<60) && (math>=45 && math<60)){
//             cout<<"Your division is Second Division."<<endl;
//         }
//         else{
//             cout<<"Your division is Third Division."<<endl;
//         }
//     }
// }


// make a program bile mangemant systm any hotel or resturant 10-04-2025

// #include <iostream>
// using namespace std;
// int main(){
//     int a=12,b=13,c;
//     c=a&b;
//     cout<<c<<endl;
//     return 0;
// }

// nastage loop

// # include <iostream>
// using namespace std;
// int main(){
//     int i=1;
//     while(i<=5){
//         cout<<"this is outer while loop "<<endl;
//         int j=1;
//         while(j<=5){
//             cout<<"this is inner while loop "<<endl;
//             j++;
//         }
//         i++;
//     }

//     return 0;
// }

// wap to print 
// 55555
// 44444
// 33333
// 22222
//// 11111

// #include<iostream>
// using namespace std;
// int main(){
//     int i=1;
//     while(i<=5){
//         int j=1;
//         while(j<=5){
//             cout<<6-i;
//             j++;
//         }
//         cout<<endl;
//         i++;
//     }
//     return 0;
// }

// wap to program to print
// 1
// 12
// 123
// 1234
// 12345


// #include<iostream>
// using namespace std;
// int main(){
//     int i=1;
//     while(i<=5){
//         int j=1;
//         while(j<=i){
//             cout<<j;
//             j++;

//         }
//         cout<<endl;
//         i++;

//     }
//     return 0;
// }
// **
// ***
// ****
// *****
