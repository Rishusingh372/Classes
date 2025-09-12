// 1234
// 1234
// 1234
// 1234

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout<<"Enter the number of row";
//     cin>>n;
//     for(int i =1; i<=n; i++){
//         for(int j=1; j<=n ; j++)
//         {
//             cout<<i;
//         }
//         cout<<endl;
//     }
//     return 0;
// }

// ===================================================================================
// ABCD
// ABCD
// ABCD
// ABCD

// 


// ==================================================================================
// 123
// 456
// 789

// #include <iostream>
// using namespace std;
// int main()
// {
//     int n=3;
//     // cout << "Enter the number of row";
//     // cin >> n;
//     int count = 1;
//     for (int i = 0; i < n; i++)
//     {
//         for (int j = 0; j <= n; j++)
//         {
//             cout << count<<" ";
//             count++;
//         }
//         cout << endl;
//     }
//     return 0;
// }


// =========================================================================================
// *
// **
// ***
// ****

// #include <iostream>
// using namespace std;
// int main(){
//     int n=3;
//     for(int i=0; i<n; i++){
//         for(int j=0; j<=i; j++){
//             cout<<"*";
//         }
//         cout<<endl;
//     }
//     return 0;
// }


// =========================================================================================
// 1
// 22
// 333

    // #include <iostream>
    // using namespace std;
    // int main(){
    //     int n =3;
    //     for(int i=0; i<n; i++){
    //         for(int j=0; j<=i; j++){
    //             cout<<i+1;
    //         }
    //         cout<<endl;
    //     }
    //     return 0;
    // }

// =========================================================================================

// 1
// 12
// 123
// 1234

            // #include <iostream>
            // using namespace std;
            // int main(){
            //     int n=4;
            //     for(int i=0; i<n; i++){
            //         for(int j=0; j<=i; j++){
            //             cout<<j+1;
            //         }
            //         cout<<endl;
            //     }
            //     return 0;
            // }


// =========================================================================================
// 1
// 21
// 321
// 4321

// #include <iostream>
// using namespace std;
// int main(){
//     int n=4;
//     for(int i=0; i<n; i++){
//         for(int j=i+1; j>0; j--){
//             cout<<j;
//         }
//         cout<<endl;
//     }
//     return 0;
// }


// =========================================================================================

// Floyd's Triangle
// 1
// 23
// 456
// 78910

// #include <iostream>
// using namespace std;
// int main(){
//     int n=4;
//     int count =1;
//     for(int i=0; i<n; i++){
//         for(int j=0; j<=i; j++){
//             cout<<count<<" ";
//             count++;
//         }
//         cout<<endl;
//     }
//     return 0;
// }

// =========================================================================================

// 1111
//  222
//   33
//    4

// #include <iostream>
// using namespace std;
// int main(){
//     int n=4;
//     for(int i=0; i<n; i++){
//         for(int j=0; j<i; j++){
//             cout<<" ";
//         }
//         for(int k=0; k<n-i; k++){
//             cout<<i+1;
//         }
//         cout<<endl;
//     }
//     return 0;
// }

// =========================================================================================

// Pyramid Pattern
//    1
//   121
//  12321
// 1234321

#include <iostream>
using namespace std;
int main(){
    int n=4;
    for(int i=0; i<n; i++){
        for(int j=0; j<n-i-1; j++){
            cout<<" ";
        }
        for(int k=0; k<i+1; k++){
            cout<<k+1;
        }
        for(int l=i; l>0; l--){
            cout<<l;
        }
        cout<<endl;
    }
    return 0;
}