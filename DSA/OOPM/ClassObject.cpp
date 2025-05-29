
// Announcement: "Q1.Explain Class and Object In C++?…"
// Ram Lovewanshi
// Created May 27May 27
// Q1.Explain Class and Object In C++?
// Ans:
// Purpose : It is used to create a user defined data type in C++

// Defintion: A class is the collection of member data and member function

// A class is a set of Rules

// Member Data: Member data can specify what type data can occur(Instance variable/Attribute/State/Properties)
// Member Function(Behavior): Act mediator between user and data

// Syntax:(after header file/using namespace)

// class ClassName{
// access specifier :
// //Member Data
// access specifier :
// //Member function
// };

// Note: Default access specifier in C++ is private




// #include <iostream>
// using namespace std;
// class Operation
// {
// public:
//     int n1;
//     int n2; // Member data , Instance variable

//     void acceptData()
//     {
//         cout << "\n Enter First Number: ";
//         cin >> n1;
//         cout << "\n Enter Second Number: ";
//         cin >> n2;
//     }
//     void showData()
//     {
//         cout << "\n First Number: " << n1;
//         cout << "\n Second Number: " << n2;
//     }
//     void add()
//     {
//         cout << "\n Addition: " << n1 + n2;
//     }
//     void sub()
//     {
//         cout << "\n Subtraction: " << n1 - n2;
//     }
//     void mul()
//     {
//         cout << "\n Multiplication: " << n1 * n2;
//     }
//     void div()
//     {
//         cout << "\n Division: " << n1 / n2;
//     }

   
// }; 
//  int main()
//     {
//         Operation op; // Object Creation
//         op.acceptData(); // Calling Member Function
//         op.showData();
//         op.add();
//         op.sub();
//         op.mul();
//         op.div();
//         return 0;
//     }




// Q1. Write a C++ Program to calculate Area and Piremeter of the Rectangle using class and object?


// #include<iostream>
// using namespace std;

// class Rectangle{
//     int l;
//     int b;
   
//     public:
       
//     void getData(){
//         cout<<"Enter Length : ";
//         cin>>l;
//         cout<<"Enter Breadth : ";
//         cin>>b;
//     }
   
//     void showData(){
//         cout<<"\n Length is : "<<l;
//         cout<<"\n Breadth is : "<<b;
//     }
   
//     void getArea(){
//         cout<<"\n Area : "<<l*b;
//     }
   
//     void getPira(){
//         cout<<"\n Pira : "<<2*(l+b);
//     }
   
// };
// int main(){
//     Rectangle r;
//     r.getData();
//     r.showData();
//     r.getArea();
//     r.getPira();
   
//     return 0;
// }
// ===============================================
// //student class
// #include<iostream>
// using namespace std;

// class Student{
//     string name;
//     string enroll;
//     char s;
//     int p;
//     int c;
//     int m;
//     int h;
//     int e;
   
//     public:
//         void getInfo(){
//             cout<<"Enter Name : ";
//             cin>>name;
//             cout<<"Enter Enrollment No : ";
//             cin>>enroll;
//             cout<<"Enter Section  : ";
//             cin>>s;
//             cout<<"Enter Physics Marks : ";
//             cin>>p;
//             cout<<"Enter Chemis Marks : ";
//             cin>>c;
//             cout<<"Enter Maths Marks : ";
//             cin>>m;
//             cout<<"Enter Hindi Marks : ";
//             cin>>h;
//             cout<<"Enter English Marks : ";
//             cin>>e;
               
//         }
       
//         void putInfo(){
//             cout<<"\n Name : "<<name;
//             cout<<"\n Enroll : "<<enroll;
//             cout<<"\n Section  : "<<s;
//             cout<<"\n M Marks : "<<m;
//             cout<<"\n P Marks : "<<p;
//             cout<<"\n C Marks : "<<c;
//             cout<<"\n H Marks : "<<h;
//             cout<<"\n E Marks : "<<e;
       
//         }
//         int getTotal(){
//             return p+c+m+h+e;
//         }
//         float getPer(int t){
//             return t/5.0;
//         }
//         //Member Function
// };
// int main(){
//     Student s;
//     s.getInfo();
//     s.putInfo();
// int t=s.getTotal();
// float p=s.getPer(t);
// cout<<"\n Total Marks : "<<t;
// cout<<"\n Percentage  : "<<p;

//     return 0;
// }
// ==================================