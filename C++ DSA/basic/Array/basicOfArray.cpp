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