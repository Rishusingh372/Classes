
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

// class name prodect and string me name and float cp , float sp ; find profit and loss

// #include <iostream>
// using namespace std;
// class Product
// {
//     string name;
//     float cp; // Cost Price
//     float sp; // Selling Price
// public:
//     void getData()
//     {
//         cout << "Enter Product Name: ";
//         cin >> name;
//         cout << "Enter Cost Price: ";
//         cin >> cp;
//         cout << "Enter Selling Price: ";
//         cin >> sp;
//     }

//     void showData()
//     {
//         cout << "\n Product Name: " << name;
//         cout << "\n  Cost Price: " << cp;
//         cout << "\n Selling Price: " << sp;
//     }

//     void calculateProfitLoss()
//     {
//         if (cp < sp)
//         {
//             cout << "\n Profit: ";
//         }
//         else
//         {
//             cout << "\n Loss: ";
//         }
//     }
// };

// int main()
// {
//     Product obj;
//     obj.getData();
//     obj.showData();
//     obj.calculateProfitLoss();
//     return 0;
// }

// define member function outside the class
// #include <iostream>
// using namespace std;
// class Rect
// {
//     int l;  //instance variable
//     int b; // Member Data
// public:
//     void getData(); // Member Function Declaration
//     void showData();
//     void getArea();
//     void getPira();
// };

// // return type ClassName::functionName(parameter list){}
// void Rect::getData()
// { 
//     cout << "Enter Length : ";
//     cin >> l;
//     cout << "Enter Breadth : ";
//     cin >> b;
// }
// // return type ClassName::functionName(parameter list){}
// void Rect::showData()
// {
//     cout << "\n Length is : " << l;
//     cout << "\n Breadth is : " << b;
// }
// // return type ClassName::functionName(parameter list){}
// void Rect::getArea()
// {
//     cout << "\n Area : " << l * b;
// }
// // return type ClassName::functionName(parameter list){}
// void Rect::getPira()
// {
//     cout << "\n Pira : " << 2 * (l + b);
// }
// int main()
// {
//     Rect r;      // Object Creation
//     r.getData(); // Calling Member Function
//     r.showData();
//     r.getArea();
//     r.getPira();
//     return 0;
// }



// ==================================================================================================
// Q2. Explain Access Specifier / Access Modifier in C++ ?
// Ans: Access Specifier can specify the scope of instance variable(member data) and instance method(member function)
// There are 3 access specifier avilable in C++

// 1. public: Member declared as public are accessible from anywhere in the program
// Note: public access specifier recommended fro member function/ constructor/destructor
// //public
// #include<iostream>
// using namespace std;
// class Rect{
// 	public:
// 	int l;
// 	int b; //Member Data
	
// 		void getData();
// 		void showData();
// 		void getArea();
// 		void getPira();
// 		//Member Function
// };

// //return type ClassName :: methodName(){}
// void Rect :: getData(){
// 	cout<<"Enter Length : ";
// 	cin>>l;
// 	cout<<"Enter Breadth : ";
// 	cin>>b;
// }
// //return type ClassName :: methodName(){}
// void Rect::showData(){
// 	cout<<"\n Length is : "<<l;
// 	cout<<"\n Breadth is : "<<b;
// }
// //return type ClassName :: methodName(){}
// void Rect :: getArea(){
// 	cout<<"\n Area of Rectangle : "<<(l*b);
// }
// //return type ClassName :: methodName(){}
// void Rect :: getPira(){
// 	cout<<"\nPirameter Of Rectangle : "<<2*(l+b);
// }
// int main(){
// 	Rect r;
// 	r.l=10;
// 	r.b=20;// access due to public access specifier
// 	cout<<"\nLength is : "<<r.l;
// 	cout<<"\nBreadth is : "<<r.b;
	
// 	r.getArea();
// 	return 0;
// }

// 2.private: members declared as private are accessible only within the class itself 
// if we want to access private member data outside the class we must use public member function
// Note: Recommended for member data 

// //private
// #include<iostream>
// using namespace std;
// class Rect{

// 	int l;
// 	int b; //Member Data
// 	public:
// 		void getData();
// 		void showData();
// 		void getArea();
// 		void getPira();
// 		//Member Function
// };

// //return type ClassName :: methodName(){}
// void Rect :: getData(){
// 	cout<<"Enter Length : ";
// 	cin>>l;
// 	cout<<"Enter Breadth : ";
// 	cin>>b;
// }
// //return type ClassName :: methodName(){}
// void Rect::showData(){
// 	cout<<"\n Length is : "<<l;
// 	cout<<"\n Breadth is : "<<b;
// }
// //return type ClassName :: methodName(){}
// void Rect :: getArea(){
// 	cout<<"\n Area of Rectangle : "<<(l*b);
// }
// //return type ClassName :: methodName(){}
// void Rect :: getPira(){
// 	cout<<"\nPirameter Of Rectangle : "<<2*(l+b);
// }
// int main(){
// 	Rect r;
// //	r.l=10;// not access due to private access specifier
// //	r.b=20;// not access due to private access specifier
// //	cout<<"\nLength is : "<<r.l;// not access due to private access specifier
// //	cout<<"\nBreadth is : "<<r.b;// not access due to private access specifier
// 	r.getData();
// 	r.showData();
// 	r.getArea();
// 	return 0;
// }

// //private
// #include<iostream>
// using namespace std;
// class Rect{
// 	private:
// 	int l;
// 	int b; //Member Data
// 	public:
// 		void getData();
// 		void showData();
// 		void getArea();
// 		void getPira();
// 		//Member Function
// };

// //return type ClassName :: methodName(){}
// void Rect :: getData(){
// 	cout<<"Enter Length : ";
// 	cin>>l;
// 	cout<<"Enter Breadth : ";
// 	cin>>b;
// }
// //return type ClassName :: methodName(){}
// void Rect::showData(){
// 	cout<<"\n Length is : "<<l;
// 	cout<<"\n Breadth is : "<<b;
// }
// //return type ClassName :: methodName(){}
// void Rect :: getArea(){
// 	cout<<"\n Area of Rectangle : "<<(l*b);
// }
// //return type ClassName :: methodName(){}
// void Rect :: getPira(){
// 	cout<<"\nPirameter Of Rectangle : "<<2*(l+b);
// }
// int main(){
// 	Rect r;
// //	r.l=10;// not access due to private access specifier
// //	r.b=20;// not access due to private access specifier
// //	cout<<"\nLength is : "<<r.l;// not access due to private access specifier
// //	cout<<"\nBreadth is : "<<r.b;// not access due to private access specifier
// 	r.getData();
// 	r.showData();
// 	r.getArea();
// 	return 0;
// }

// 3. protected:Members declared as protected are not accessible outside the class but it can be access a class itself and its derived class
// Note: Recommended for member data 
// //protected
// #include<iostream>
// using namespace std;
// class Rect{
// 	protected:
// 	int l;
// 	int b; //Member Data
// 	public:
// 		void getData();
// 		void showData();
// 		void getArea();
// 		void getPira();
// 		//Member Function
// };

// //return type ClassName :: methodName(){}
// void Rect :: getData(){
// 	cout<<"Enter Length : ";
// 	cin>>l;
// 	cout<<"Enter Breadth : ";
// 	cin>>b;
// }
// //return type ClassName :: methodName(){}
// void Rect::showData(){
// 	cout<<"\n Length is : "<<l;
// 	cout<<"\n Breadth is : "<<b;
// }
// //return type ClassName :: methodName(){}
// void Rect :: getArea(){
// 	cout<<"\n Area of Rectangle : "<<(l*b);
// }
// //return type ClassName :: methodName(){}
// void Rect :: getPira(){
// 	cout<<"\nPirameter Of Rectangle : "<<2*(l+b);
// }
// int main(){
// 	Rect r;
// //	r.l=10;// not access due to private access specifier
// //	r.b=20;// not access due to private access specifier
// //	cout<<"\nLength is : "<<r.l;// not access due to private access specifier
// //	cout<<"\nBreadth is : "<<r.b;// not access due to private access specifier
// 	r.getData();
// 	r.showData();
// 	r.getArea();
// 	return 0;
// }


// If we are not use any access specifier then default access specifier is private
// ==========================================================================



// ===============================================Constructor=========================

// // Example of Default Constructor
// #include <iostream>
// using namespace std;
// class Point{
//      public:
//     int x;
//     int y;

//     Point(){
//         x=10;
//         y=20;
//         cout<<"\n Default Constructor Called";
//     }
//     void showData(){
//         cout<<"\n X_CO"<<x;
//         cout<<"\n Y_CO"<<y;

//     }
// };
// int main (){
//     Point P1;
//     Point P2;
//     Point P3;
//     cout<<"\n Object P1 Created";
//     P1.x=100; 
//     P1.y=200; 
//     P1.showData();
//     P2.showData();
//     P3.showData();


// }

// #include <iostream>
// using namespace std;
// class Point{
//      public:
//     int x;
//     int y;

//     Point(int a, int b){
//         x=a;
//         y=b;
//         cout<<"\n Parameterized Constructor Called";
//     }
//     void showData(){
//         cout<<"\n X_CO"<<x;
//         cout<<"\n Y_CO"<<y;

//     }
// };
// int main (){
//     Point P1(4,5);
//     Point P2(10,20);
//     Point P3(100,300);
//     cout<<"\n Object P1 Created";
   
//     P1.showData();
//     P2.showData();
//     P3.showData();

// return 0;
// }

// ===============================================Constructor 31-05-2025=========================

// create a class with default constructor and parameterized constructor
// name  
// enroll
// section
// p marks 

// Default 
// # include <iostream>
// using namespace std;
// class Student{
//     public:
//     string name;
//     int enroll;
//     string section;
//     int p;
//     int c;
//     int m;
//     int h;
//     int e;

//     // Default Constructor
//     Student(){
//          name = "Rishu";
//          enroll = 0111;
//          p=23;
//          c=33;
//          m=23;
//          h=23;
//          e=34;   
//     }
//     void showdata(){
//         cout<<"\n name"<<name;
//         cout<<"\n enroll"<<enroll;
//         cout<<"\n p"<<p;
//         cout<<"\n c"<<c;
//         cout<<"\n m"<<m;
//         cout<<"\n h"<<h;
//         cout<<"\n e"<<e;

        
//     }

// };

// int main (){
//     Student obj ;
//     obj.showdata();
//     return 0;
// }



// # include <iostream>
// using namespace std;
// class Student{
//     string name;
//     int enroll;
//     string section;
//     int p;
//     int c;
//     int m;
//     int h;
//     int e;
//     public : 
//     Student(){
//         cout<<"\n this is a default constructor";
//     }
//     Student(string a,int b,string c, int p1,int c1, int m1, int h1,int e1){
//         name=a;
//         enroll=b;
//         section= c;
//         p=p1;
//         c=c1;
//         m=m1;
//         h=h1;
//         e=e1;
//            cout<<"\n this is parametrise constructor called";

//     }
//     ~Student(){
//         cout<<"\n this is destructor called";
//     }

// };
// int main()
// {
//     Student obj;
//     Student obj1("rishu",0111,"c",23,33,33,33,33);
//     return 0;
// }


// ===============================================Inheritance 2-06-2025=========================
// # include <iostream>
// using namespace std;
// class Rgpv{
//     public:
//     string uname;
//     int ucode;

//     Rgpv(){
//         cout<<"\n RGPV Default Constructor Called";
//     }
//     ~Rgpv(){
//         cout<<"\n RGPV Destructor Called";
//     }

//     void getData(){
//         cout<<"\n University Name: ";
//         cin>>uname;
//         cout<<"\n University Code: ";
//         cin>>ucode;
//     }
// };

// class college: public Rgpv{
//     public:
//     string cname;
//     int ccode;
//     void acceptData(){
//         getData();
//         cout<<"\n Enter College Name: ";
//         cin>>cname;
//         cout<<"\n Enter College Code: ";
//         cin>>ccode;

//     }
//     void showData(){
//         cout<<"\n University Name: "<<uname;
//         cout<<"\n University Code: "<<ucode;
//         cout<<"\n College Name: "<<cname;
//         cout<<"\n College Code: "<<ccode;
//     }
//     college(){
//         cout<<"\n College Default Constructor Called";
//     }
//     ~college(){
//         cout<<"\n College Destructor Called";
//     }
// };

// int main(){
//     college c;
//     c.acceptData();
//     c.showData();
//     return 0;
// }   


// ===============================================Inheritance 3-06-2025=========================

// #include <iostream>
// using namespace std;

// class M{
//     public:
//     int m;
//     M(){
//         cout<<"\n M class Default Constructor is called";
//     }
//     M(int m){
//         this->m = m;
//         cout<<"\n M class Parameterized Constructor is called";
//     }
//     ~M(){
//         cout<<"\n M class Destructor is called";
//     }
//     void getM(int m){
//         this->m = m;
//     }

// };
// class N{
//     public:
//     int n;
//     N(){
//         cout<<"\n N class Default Constructor is called";
//     }
//     N( int n){
//         this->n = n;
//         cout<<"\n N class Parameterized Constructor is called";
//     }
//     ~N(){
//         cout<<"\n N class Destructor is called";
//     }
//     void getN(int n){
//         this->n = n;
//     }
// };

// class P: public M, public N{
//     public:
    
//     P(){
//         cout<<"\n P class Default Constructor is called";
//     }
//     P(int m, int n): M(m), N(n){
      
//         cout<<"\n P class Parameterized Constructor is called";
//     }
//     ~P(){
//         cout<<"\n P class Destructor is called";
//     }
//    void total(){
//     int total = m + n;
//     cout<<"\n  M is: "<<m;
//     cout<<"\n  N is: "<<n;
//      cout<<"\n Total is: "<<total;

//    }
// };
// int main(){
//     P obj(10, 20);
//     obj.total();

//     return 0;
// }

// Class Notes:
// //Hybrid Inheritance
// #include<iostream>
// using namespace std;
// class Student{
//     protected:
//         string name;
//         string enroll;
//     public:
//         Student(){
//         cout<<"\n Student class Default constructor is called";
//         }
//         ~Student(){
//         cout<<"\n Student class Destructor is called";
//         }
       
       
//     void getData(){
//         cout<<"Enter Name : ";
//         cin>>name;
//         cout<<"Enter Enrollment No : ";
//         cin>>enroll;
//     }
   
       
// };
// class Subject: public Student{
//     protected:
//     int subj1;
//     int subj2;
//     public:
//         Subject(){
//         cout<<"\n Subject class Default constructor is called";
//         }
//         ~Subject(){
//         cout<<"\n Subject class Destructor is called";
//         }
       
       
//     void getMarks(){
//         cout<<"Enter Subject 1 Marks : ";
//         cin>>subj1;
//         cout<<"Enter Subject 2 Marks  : ";
//         cin>>subj2;
//     }
   
       
// };
// class Sports{
//     protected:
//     int smarks;
//     public:
//         Sports(){
//         cout<<"\n Sports class Default constructor is called";
//         }
//         ~Sports(){
//         cout<<"\n Sports class Destructor is called";
//         }
       
       
//     void getSportsMarks(){
//         cout<<"Enter Sports Marks : ";
//         cin>>smarks;
       
//     }
   
       
// };

// class Result: public Subject,public Sports{
//     int total;
//     public:
//         Result(){
//             cout<<"\n Result class Default Constructor is called";
//         }
//             ~Result(){
//             cout<<"\n Result class Destructor is called";
//         }
//         void putInfo(){
//             total=subj1+subj2+smarks;
//         cout<<"\n Name : "<<name;
//         cout<<"\n Enrollment No : "<<enroll;
//         cout<<"\n Sports Marks : "<<smarks;
//         cout<<"\n Subject 1 Marks : "<<subj1;
//         cout<<"\n Subject 2 Marks : "<<subj2;
//         cout<<"\n Total Marks : "<<total;
       
       
//         }
// };
// int main(){
//     Result r;
//     r.getData();
//     r.getMarks();
//     r.getSportsMarks();
//     r.putInfo();
//     return 0;
// }
// ============================================================
// class Notes June-2

// Q1. Explain Inheritance in C++ Programming?
// Ans: Passing Properties from one class to another class is known as inheritance

// A class who gives the properties are known as Parent/Base/super class


// A class who receives the properties are known as Child/Derived/sub class

// Note: In case of Inheritance member data or member function should not be private

// Syntax:
//  class Parent{
//  public:
//     //member data
//     //member function
 
//  };

//  class Child:public Parent{
//  public:
//     //member data
//     //member function

//  }

// Types of Inheritance
// 1. Single Inheritance
// 2. Multiple Inheritance
// 3. Multi level inheritance
// 4. Hybrid Inheritance
// 5. Hierchical Inheritance
// ==================================================
// Q1. Explain Single Inheritance in C++?
// Ans: A derived class can inherit exactly one class at a time

// //Single Inheritance
// #include<iostream>
// using namespace std;

// class Rgpv{
   
//     public:
//     string uname;
//     int ucode;
   
//     Rgpv(){
//         cout<<"\n Rgpv Default Constructor is Called ";
//     }
//     ~Rgpv(){
//         cout<<"\n Rgpv class Destructor is Called ";
//     }
//     void getData(){
//         cout<<"Enter University Name : ";
//         cin>>uname;
//         cout<<"Enter University code : ";
//         cin>>ucode;
//     }
   
   
// };//Parent Class

// class College: public Rgpv{
//     public:
//         string cname;
//         int ccode;
//     void acceptData(){
//         getData();
//     cout<<"Enter college Name : ";
//     cin>>cname;
//     cout<<"Enter College Code : ";
//     cin>>ccode;
//     }
//     void showData(){
//         cout<<"\n University Name : "<<uname;
//         cout<<"\n University Code: "<<ucode;
//         cout<<"\n College Name : "<<cname;
//         cout<<"\n College Code: "<<ccode;
       
//     }
//     College(){
//         cout<<"\n College class Default Constructor is Called ";
//     }
//     ~College(){
//         cout<<"\n College class Destructor is Called ";
//     }    
// };

// int main(){
//     College c;
//     c.acceptData();
//     c.showData();
//     return 0;
// }
// ======================================================04-06-2025===============================

// Hierachical Inheritance

// # include <iostream>
// using namespace std;
// class number{
//     public:
//     int num;
//     number(){
//         cout<<"\n Number class Default Constructor is called";
//     }
//      ~number(){
//         cout<<"\n Number class Default Destructor is called";
//     }

//    void getnum(){
//         cout<<"\n Enter a number: ";
//         cin>>num;
       
//     }
// };
// class squre: public number{
//     public:
//     squre(){
//         cout<<"\n squre class Default Constructor is called";
//     }
//      ~squre(){
//         cout<<"\n squre class Default Destructor is called";
//     }

//   void getsqure(){
//         cout<<"\n squre of number is: " <<num*num;
    
//     }
// };
// class cube:public number{
//     public:
//     cube(){
//         cout<<"\n cube class Default Constructor is called";
//     }
//      ~cube(){
//         cout<<"\n cube class Default Destructor is called";
//     }

//   int getcube(){
//        return num*num*num;
    
//     }
// };

// int main(){
//    squre obj;
//     obj.getnum();
//     obj.getsqure();
//     cube obj1;
//     obj1.getnum();
//     obj1.getcube();
//     cout<<"\n cube of number is: " <<obj1.getcube();

//     return 0;
// }

// ======================================================10-06-2025===============================

// object Count

// # include <iostream>
// using namespace std;
// class Point{
//     int x;
//     int y;
//     public:
//     static int count; //instance variable

//     Point(){
//         cout<<"Default Constructor is called";
//         count++;
//     }
//    Point(int x ,int y){
//     cout<<"Parameterized Constructor is called";
//     count++;
//    }

//    static int getCtr(){
//     return count;
//    }
// };

// int Point::count = 0; //static variable initialization
// int main(){
//     Point p1; 
//     Point p2(10,20); 
//     Point p3;
//     cout<<"\n Total Object Created: "<<Point::getCtr();
//     cout<<"\n Total Object Created: "<<Point::count;
//     cout<<"\n Total Object Created: "<<p3.getCtr();

//     return 0;
// }


#include <iostream>
using namespace std;
class Test{
    public:
    void add(int a=0, int b=0,int c=0 ,int d=0 ,int e=0){
        cout<<"\n Addition is: "<<a+b+c+d+e;
    
    }
};
int main(){
    Test t;
    t.add(10,20); // 30
    t.add(10,20,30); // 60
    t.add(10,20,30,40); // 100
    t.add(10,20,30,40,50); // 150
    t.add(); // 0
    return 0;
}
