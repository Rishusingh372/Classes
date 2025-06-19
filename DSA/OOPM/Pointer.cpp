// # include <iostream>
// using namespace std;

// int main(){
// int x;
// int *num;// Pointer declaration
// x=10;
// num=&x; // Pointer initialization with address of x
// cout<<"\naddress of x is: "<<&x;
// cout<<"\n Aaddress of num is: "<<num;
// cout<<"\naddress of num is: "<<&num;
// cout<<"\n Value of X using Pointer is: "<<*num; // Dereferencing the pointer to get value of x

// dynamic memory allocation
// int *ptr = new int(10); // Dynamically allocate memory for an integer
// for(int i =0 ; i<=10; i++){
//     cout<<"Enter the value of "<<i<<": ";
//     cin>>*(ptr+i); // Store value in dynamically allocated memory
// }

// cout<<"\nElements : \n";
// for(int i =0 ; i<=10; i++){
//     cout<<*(ptr+i)<<" ";
// }
// cout<<endl;

// delete(ptr); // Free dynamically allocated memory

//   return 0;
// }

// ==============================================14-06-25=====================================
// wap to find Reactangle Area and Pira

// #include <iostream>
// using namespace std;

// class React
// {
// public:
//     int l;
//     int b;

//     void getData()
//     {
//         cout << "\nEnter Length :"<<" ";
//         cin >> l;
//         cout << "\nEnter breadth :"<<" ";
//         cin >> b;
//     }
//     void showData()
//     {
//         cout << "\n Length is :" << l;
//         cout << "\n breadth is :" << b;
//     }
//     void getArea()
//     {
//         cout << "\n Area is :" << l * b;
//     }
//     void getPira()
//     {
//         cout << "\n Perimeter is :" << 2 * (l + b);
//     }
// };
// int main()
// {
//     React *ptr;
//     React obj;
//     ptr = &obj;      // Pointer to object
//     ptr->getData();  // Accessing member function using pointer
//     ptr->showData(); // Accessing member function using pointer
//     ptr->getArea();  // Accessing member function using pointer
//     ptr->getPira();  // Accessing member function using pointer
//     return 0;
// }


// ==============================================================Polymerphism===================================
// 
// method override
// #include <iostream>
// using namespace std;
// class Base {
// public:
//     virtual void show() { // Virtual function for method overriding
//         cout << "\n this is show parent class method" << endl;
//     }

// };
// class Derived1 : public Base {
// public:
//     void show() { // Overriding the base class method
//         cout << "\n this is show Derived 1 class method" << endl;
//     }
// };
// class Derived2 : public Base {
// public:
//     void show() { // Overriding the base class method
//         cout << "\n this is show Derived 2 class method" << endl;
//     }
// };
// int main(){
//     Base *b;
//     Derived1 d1;
//     b =&d1;
//     b->show();
//     Derived2 d2;  
//     b = &d2;
//     b->show();
//     return 0;

// }

// ===============================================method overloading========================================
// method overloading
// #include <iostream>
// using namespace std;

// class Test {
//     public:
//     void add(){
//         int a,b,c;
//         a=10;
//         b=20;
//         c = a + b;
//         cout <<"\n addition without argument is: "<<c<<endl;
//     }

//     void add(int a, int b){
//         int c;
//         c = a + b;
//         cout <<"\n addition with 2 int paramater is: "<<c<<endl;

//     }
//     void add(int a, int b, int c){
//         cout<<"\n addition with 3 int paramater is: "<<a+b+c<<endl; 
//     }
//     void add(float a, float b, float c){
//         cout<<"\n addition with 3 float paramater is: "<<a+b+c<<endl; 
//     }   
//     void add (int a, int b, float c){
//         cout<<"\n addition with 2 int and 1 float paramater is: "<<a+b+c<<endl; 
//     }


// };

// int main(){
//     Test t;
//     t.add(); // Calling method without arguments
//     t.add(10, 20); // Calling method with 2 int arguments
//     t.add(10, 20, 30); // Calling method with 3 int arguments
//     t.add(10.5f, 20.5f, 30.5f); // Calling method with 3 float arguments
//     t.add(10, 20, 30.5f); // Calling method with 2 int and 1 float argument

//     return 0;
// }

// ==============================================operator overloading======================================

// #include <iostream>
// using namespace std;
// class Point{
//     public:
//     int x, y;
//     public:
//     Point(int a, int b) {
//         x=a;
//         y=b;
//     }
//     bool operator == (Point &p) {
//         return (x == p.x && y == p.y);
//     }
// };
// int main() {
//     Point p1(10, 20);
//     Point p2(10, 20);

//     if (p1 == p2) {
//         cout << "p1 is equal to p2" << endl;
//     } else {
//         cout << "p1 is not equal to p2" << endl;
//     }

//     return 0;
// }


// ============================================== Abstractio In c++ ======================================

#include <iostream>
using namespace std;
class Rgpv{
    public:
    void copyCheck(){
        cout<<"\n This is Rgpv class copyCheck method";
    }
    virtual void cctv()=0; // Pure virtual function making this class abstract

};
class college : public Rgpv{
    public:
    void staff(){
        cout<<"\n this is college class staff method";
    }
    void cctv(){
        cout<<"\n This is Rgpv class method own by college class methods";
    }
};

int main(){
    college c;
    c.copyCheck();
    c.cctv();
    c.staff();
    // Rgpv r; // Cannot instantiate an abstract class
    Rgpv *r;
    college c1;
    r=&c1;
    r->copyCheck(); // Accessing method from abstract class
    r->cctv(); // Accessing overridden method from derived class
    return 0;
}