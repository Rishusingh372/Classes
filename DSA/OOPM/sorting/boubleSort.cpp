# include <iostream>
using namespace std;
int main(){
    int arr [] ={10,100,90,70,20};
    for(int i=0; i<5 ; i++){
        for(int j=i+1; j<5; j++){
            if(arr[i]>arr[j]){
                int t ;
                t=arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
   
    }
        cout<<"\n Shorted array :   `";
        for(int i =0 ; i<5; i++){
            cout<<arr[i]<<" ";
        }
        cout<<endl;

    return 0;
};