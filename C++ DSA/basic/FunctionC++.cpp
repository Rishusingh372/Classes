// using function calculate factorial of a number

#include <iostream>
using namespace std;

int factorial(int n){
    int fact=1;
    for(int i=1; i<=n; i++){
        fact=fact*i;
    }
    return fact;
}
int main(){
    int num;
    cout<<"Enter a number to find factorial: ";
    cin>>num;
    int ans = factorial(num);
    cout<<"Factorial of "<<num<<" is "<<ans<<endl;
    return 0;
}