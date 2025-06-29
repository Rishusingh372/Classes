//Merge Sort
#include<iostream>
using namespace  std;
void conquer(int arr[],int si,int mid,int ei){
int size=ei-si+1;
int merged[size];

int idx1=si;//represent left part of mid
int idx2=mid+1;//represent right part of the mid
int x=0;//represent merged array
while(idx1<=mid && idx2<=ei){
    if(arr[idx1]<=arr[idx2]){
        merged[x++]=arr[idx1++];
    }else{
        merged[x++]=arr[idx2++];    
    }
}
while(idx1<=mid){
        merged[x++]=arr[idx1++];
}
while(idx2<=ei){
        merged[x++]=arr[idx2++];
}
//copy merged array into original Array
for(int i=0,j=si;i<size;i++,j++){
    arr[j]=merged[i];
}    
}
void divide(int arr[],int si,int ei){
    if(si>=ei){
        return;
    }
    int mid=(si+ei)/2;
    divide(arr,si,mid);
    divide(arr,mid+1,ei);
    conquer(arr,si,mid,ei);
}
int main(){
    int arr[]={6,3,9,5,2,8};
    int size=6;
    cout<<endl<<"Before Sorting : \n";
    for(int i=0;i<size;i++){
        cout<<"\t"<<arr[i];
    }
    divide(arr,0,size-1);
    cout<<endl<<"Before Sorting : \n";
    for(int i=0;i<size;i++){
        cout<<"\t"<<arr[i];
    }
   
    return 0;
}