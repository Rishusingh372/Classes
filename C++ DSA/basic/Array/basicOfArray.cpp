// #include <iostream>
// using namespace std;
// int main(){
//     // int marks[5]={23,45,56,78,90};

//     int size =5;
//     int marks[size];

//     for (int i=0;i<size;i++){
//         cout<<"Enter the value of marks "<<i<<endl;
//         cin>>marks[i];
//     }

//     // find size of array
//     // int size=sizeof(marks)/sizeof(int);

//     // int size=5;
//     // loop : 0 to size-1
//     for(int i=0;i<size;i++){
//         cout<<"The value of marks "<<i<<" is "<<marks[i]<<endl;
//     }
//     return 0;

// }


// ===============================================================================================================================
// find smallest element in array

// #include <iostream>
// using namespace std;
// int main(){
//     int nums[]={5,12,22,1,-15,-24};
//     int size=6;


//     int smallest = nums[0];
//     for(int i=1;i<size;i++){
//         if(nums[i]<smallest){
//             smallest=nums[i];
//         }

//         // smallest = min(smallest,nums[i]);
//     }
//     cout<<"Smallest element is "<<smallest<<endl;
//     return 0;

// }

// ===============================================================================================================================
// find largest element in array

// #include<iostream>
// using namespace std;
// int main(){
//     int nums[]={5,12,22,1,-15,-24};
//     int size=6;

//     int largest = nums[0];
//     for(int i=1;i<size;i++){
//         if(nums[i]>largest){
//             largest=nums[i];
//         }

//         // largest = max(largest,nums[i]);
//     }
//     cout<<"Largest element is "<<largest<<endl;
//     return 0;
// }

// ===============================================================================================================================
// find largest and smallest element address in array

// #include<iostream>
// using namespace std;
// int main(){
//     int nums[]={5,12,22,1,-15,-24};
//     int size=6;

//     int largest = nums[0];
//     int smallest = nums[0];

//     int *largestAddress = &nums[0];
//     int *smallestAddress = &nums[0];

//     for(int i=1;i<size;i++){
//         if(nums[i]>largest){
//             largest=nums[i];
//             largestAddress = &nums[i];
//         }

//         if(nums[i]<smallest){
//             smallest=nums[i];
//             smallestAddress = &nums[i];
//         }
//     }
//     cout<<"Largest element is "<<largest<<" and its address is "<<largestAddress<<endl;
//     cout<<"Smallest element is "<<smallest<<" and its address is "<<smallestAddress<<endl;
//     return 0;
// }


// ===============================================================================================================================
// reverse an array

// #include<iostream>
// using namespace std;

// int reverseArray(int arr[], int size){
//     int start=0;
//     int end=size-1;

//     while(start<=end){
//         swap(arr[start],arr[end]);
//         start++;
//         end--;
//     }
// }
// int main(){
//     int arr[]={5,12,22,1,-15,-24};
//     int size=6;

//     reverseArray(arr,size);

//     for(int i=0;i<size;i++){
//         cout<<arr[i]<<" ";
//     }
//     cout<<endl;
//     return 0;
// }

// ===============================================================================================================================

// WAF to calculate the sum of all elements in an array.

// #include <iostream>
// using namespace std;

// int sumOfArray(int arr[],int size){
//     int sum=0;
//     for(int i=0;i<size;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// int main(){
//     int arr[]={5,12,22,1,-15,-24};
//     int size=6;

//     cout<<"The sum of all elements in the array is "<<sumOfArray(arr,size)<<endl;

//     return 0;
// }


// ===============================================================================================================================
// Waf To swap The max and min element of an array

// #include <iostream>
// using namespace std;
// void swapMaxMin(int arr[], int size) {
//     if (size <= 0) return; // Handle empty array case

//     int maxIndex = 0;
//     int minIndex = 0;

//     for (int i = 1; i < size; i++) {
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         }
//     }

//     // Swap the max and min elements
//     swap(arr[maxIndex], arr[minIndex]);
// }
// int main() {
//     int arr[] = {5, 12, 22, 1, -15, -24};
//     int size = 6;

//     swapMaxMin(arr, size);

//     cout << "Array after swapping max and min elements: ";
//     for (int i = 0; i < size; i++) {
//         cout << arr[i] << " ";
//     }
//     cout << endl;

//     return 0;
// }


// ==============================================================================================================================
// WAF to print all the unique value of an array
#include <iostream>
using namespace std;
void printUnique(int arr[], int size) {
    cout << "Unique elements in the array: ";
    for (int i = 0; i < size; i++) {
        bool isUnique = true;
        for (int j = 0; j < size; j++) {
            if (i != j && arr[i] == arr[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            cout << arr[i] << " ";
        }
    }
    cout << endl;
}
int main() {
    int arr[] = {5, 12, 22, 1, -15, -24, 12, 5};
    int size = 8;

    printUnique(arr, size);

    return 0;
}


// ==============================================================================================================================
// WAF to print the frequency of each element in an array  
#include <iostream>
using namespace std;
void printFrequency(int arr[], int size) {
    bool visited[size] = {false};

    cout << "Element frequencies in the array:\n";
    for (int i = 0; i < size; i++) {
        if (visited[i]) continue;

        int count = 1;
        for (int j = i + 1; j < size; j++) {
            if (arr[i] == arr[j]) {
                count++;
                visited[j] = true;
            }
        }
        cout << arr[i] << ": " << count << endl;
    }
}
int main() {
    int arr[] = {5, 12, 22, 1, -15, -24, 12, 5};
    int size = 8;

    printFrequency(arr, size);

    return 0;
}

// ==============================================================================================================================
// WAF to print the intersection of two arrays 
#include <iostream>
using namespace std;
void printIntersection(int arr1[], int size1, int arr2[], int size2) {
    cout << "Intersection of the two arrays: ";
    for (int i = 0; i < size1; i++) {
        for (int j = 0; j < size2; j++) {
            if (arr1[i] == arr2[j]) {
                cout << arr1[i] << " ";
                break; // To avoid printing duplicates from arr2
            }
        }
    }
    cout << endl;
}   
int main() {
    int arr1[] = {5, 12, 22, 1, -15, -24};
    int arr2[] = {12, -15, 30, 45};
    int size1 = 6;
    int size2 = 4;

    printIntersection(arr1, size1, arr2, size2);

    return 0;
}
