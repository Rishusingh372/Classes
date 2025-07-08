//Quick Sort
#include<iostream>
using namespace std;
int partition(int arr[],int low,int high){
    int pivot=arr[high];//2
    int i=low-1;//i=-1
    for(int j=low;j<high;j++){//j=0
        if(arr[j]<pivot){
            i++; //swap,i=3
            int temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    //swap with pivot
   
    i++;
    int temp=arr[i];
    arr[i]=arr[high];
    arr[high]=temp;
    return i;
   
}

void quickSort(int arr[],int low,int high){
    if(low<high){
        int pi=partition(arr,low,high);//pi=0,low=0, high=3
        quickSort(arr,low,pi-1);
        quickSort(arr,pi+1,high);
    }
}


int main(){
    int arr[]={6,3,9,5,2,8};
    int size=6;
    cout<<endl<<"Before Sorting  : \n";
    for(int i=0;i<size;i++){
        cout<<"\t"<<arr[i];
    }
    quickSort(arr,0,size-1);
   
    cout<<endl<<"After Sorting  : \n";
    for(int i=0;i<size;i++){
        cout<<"\t"<<arr[i];
    }
    return 0;
}