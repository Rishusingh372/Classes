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

// #include <iostream>
// using namespace std;

// int main(){
//     int age ;
//     cout<<"Enter your age: ";
//     cin>>age;
//     if(age>=18){
//         cout<<"You are eligible for voting"<<endl;

//     }
//     else{
//         cout<<"You are not eligible for voting"<<endl;
//     }
//     return 0;
    
// }


// ============================================================================

// create a graade software

// #include <iostream>
// using namespace std;

// int main(){
//     int name;
//     cout<<"Enter Name: ";
//     int marks;
//     cout<<"Enter Marks: ";
//     cin>>name;
//     cin>>marks;


   
//     if(marks>=90){
//         cout<<"Your grade is A+"<<endl;
//     }
//     else if(marks>=80 && marks<90){
//         cout<<"Your grade is A"<<endl;
//     }
//     else if(marks>=70 && marks<80){
//         cout<<"Your grade is B+"<<endl;
//     }
//     else if(marks>=60 && marks<70){
//         cout<<"Your grade is B"<<endl;
//     }
//     else if(marks>=50 && marks<60){
//         cout<<"Your grade is C"<<endl;
//     }
//     else if(marks>=40 && marks<50){
//         cout<<"Your grade is D"<<endl;
//     }
//     else{
//         cout<<"You are fail"<<endl;
//     }
//     return 0;
// }


// ============================================================================

// Prime number or not primwe number

// #include <iostream>
// using namespace std;

// int main(){
//     int num , count =0;
//     cout<<"Enter a number: ";
//     cin>>num;
//     for(int i =1 ; i<=num ; i++){
//         if(num%i==0){
//             count++;
//         }

//     }
//     if(count==2){
//         cout<<num<<" is a prime number."<<endl;
//     }
//     else{
//         cout<<num<<" is not prime number."<<endl;
//     }
//     return 0;
// }