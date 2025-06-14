# include <iostream>
using namespace std;

int main(){
    // int x;
    // int *num;// Pointer declaration
    // x=10;
    // num=&x; // Pointer initialization with address of x
    // cout<<"\naddress of x is: "<<&x;
    // cout<<"\n Aaddress of num is: "<<num;
    // cout<<"\naddress of num is: "<<&num;
    // cout<<"\n Value of X using Pointer is: "<<*num; // Dereferencing the pointer to get value of x

    // dynamic memory allocation
    int *ptr = new int(10); // Dynamically allocate memory for an integer
    for(int i =0 ; i<=10; i++){
        cout<<"Enter the value of "<<i<<": ";
        cin>>*(ptr+i); // Store value in dynamically allocated memory
        ptr++; // Move pointer to next memory location
    }

    cout<<"\nElements : \n";
    for(int i =0 ; i<=10; i++){
        cout<<*(ptr+i); 
        ptr++;
    }
      
    delete(ptr); // Free dynamically allocated memory


    return 0;
}