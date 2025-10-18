// Maximam subarray sum problem


// #include <iostream>
// #include <vector>
// using namespace std;

// int main(){
//     vector<int> arr = {-2,1,-3,4,-1,2,1,-5,4};
//     int n = arr.size();
//     int maxSum = INT32_MIN;
//     for(int i=0; i<n; i++){
//         int sum = 0;
//         for(int j=i; j<n; j++){
//             sum += arr[j];
//             maxSum = max(maxSum, sum);
//         }
//     }
//     cout << "Maximum Subarray Sum is: " << maxSum << endl;
//     return 0;
// }


// find subarray

// #include <iostream>

// using namespace std;
// int main(){
//     int n =5;
//     int arr[5]= {1,2,3,4,5};
//     for(int st =0; st<n; st++){
//         for(int end = st; end<n; end++){
//             for(int k=st; k<=end; k++){
//                 cout << arr[k] ;
//             }
//             cout << "";
//         }
//         cout << endl;
//     }
//     return 0;
// }



// find maximum subarray sum using kadane's algorithm

// #include <iostream>
// #include <vector>
// using namespace std;
// int main(){
//     vector<int> arr = {-2,1,-3,4,-1,2,1,-5,4};
//     int n = arr.size();
//     int maxSum = INT32_MIN;
//     int currSum = 0;
//     for(int i=0; i<n; i++){
//         currSum += arr[i];
//         if(currSum > maxSum){
//             maxSum = currSum;
//         }
//         if(currSum < 0){
//             currSum = 0;
//         }
//     }
//     cout << "Maximum Subarray Sum is: " << maxSum << endl;
//     return 0;
// }

// find maximum subarray sum using kadane's algorithm (handling all negative numbers)
#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector<int> arr = {-2,-3,-1,-4};
    int n = arr.size();
    int maxSum = INT32_MIN;
    int currSum = 0;
    for(int i=0; i<n; i++){
        currSum += arr[i];
        if(currSum > maxSum){
            maxSum = currSum;
        }
        if(currSum < 0){
            currSum = 0;
        }
    }
    cout << "Maximum Subarray Sum is: " << maxSum << endl;
    return 0;
}
