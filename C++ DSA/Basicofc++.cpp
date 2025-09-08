// find of number odd or event and add them

// #include <iostream>
// using namespace std;

// int main()
// {
//     int n;
//     cout << "Enter the number of elements you want to enter: ";
//     cin >> n;
//     int arr[n];
//     cout << "Enter the elements: ";
//     for (int i = 0; i < n; i++)
//     {
//         cin >> arr[i];
//     }
//     int even_sum = 0, odd_sum = 0;
//     for (int i = 0; i < n; i++)
//     {
//         if (arr[i] % 2 == 0)
//         {
//             even_sum += arr[i];
//         }
//         else
//         {
//             odd_sum += arr[i];
//         }
//     }
//     cout << "The sum of even numbers is: " << even_sum << endl;
//     cout << "The sum of odd numbers is: " << odd_sum << endl;

//     return 0;
// }

// ============================================================================

// create a simaple software for voting system

#include <iostream>
using namespace std;

int main(){
    int age ;
    cout<<"Enter your age: ";
    cin>>age;
    if(age>=18){
        cout<<"You are eligible for voting"<<endl;

    }
    else{
        cout<<"You are not eligible for voting"<<endl;
    }
    return 0;
    
}