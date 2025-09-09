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

#include <iostream>
using namespace std;
int main()
{
    int n=3;
    // cout << "Enter the number of row";
    // cin >> n;
    int count = 1;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <= n; j++)
        {
            cout << count<<" ";
            count++;
        }
        cout << endl;
    }
    return 0;
}