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
    # include<iostream>
    using namespace std;
    int main(){
        int a,b,c,lcm,hcf;
        cout<<"Enter three numbers: "<<endl;
        cin>>a>>b>>c;
        // find LCm
       int lcm1=(a*b*c)/a;
       int lcm2=lcm1/b;
       int lcm3=lcm2/c;
         lcm=lcm1+lcm2+lcm3;

        cout<<"LCM of three numbers is: "<<lcm<<endl;
       
        return 0;

    }