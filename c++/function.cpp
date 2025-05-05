// # include <iostream>
// using namespace std;
// void myfunction();
// int main()
// {
//     myfunction();
//     return 0;
// }
// void myfunction(){
//     cout << "Hello World" << endl;
    // return 13;
    // return 13; // This line will cause a compilation error because the function does not return an void type.

// }


// Prime Number Check Program in C++ Using Function


// # include <iostream>
// using namespace std;
// void fun_prime(int n);
// int main()
// {
//     int n;
//     cout << "Enter a number: ";
//     cin >> n;
//     fun_prime(n);
//     return 0;
// }
// void fun_prime(int n)
// {
//    int cut = 0;
//    int i = 1 ;
//     while (i <= n)
//     {
//         if (n % i == 0)
//         {
//             cut++;
//         }
//         i++;
//     }
//     if (cut == 2)
//         cout << n << " is a prime number." << endl;
//     else
//         cout << n << " is not a prime number." << endl;
// }


// swap two parameters using function in c++
# include<iostream>
using namespace std;
void swap(int &a, int &b); 
int main(){
    int x  ,y;
    cout << "Enter two numbers: ";
    cin >> x >> y;
    // cout << "Before swapping: x = " << x << ", y = " << y << endl;
    // swap(x, y); 
    // cout <<"after swaping " <<x <<" "
    return 0;
}
void swap(int &a, int &b) { 
    int c = a;
    a = b;
    b = c;
}
