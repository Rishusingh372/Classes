// Stack opertion implementation using array

//Stack Implementation using Array'
#include<iostream>
using namespace std;
int stack[4];
int top=-1;
void push(int data){//time complexity : O(1)
    if(top==3){
        cout<<"\n Over flow condition ";
    }else{
        top++;//3
        stack[top]=data;
        cout<<"\n Element PUSH successfully";
    }
}

int pop(){
    int v=0;
    if(top==-1){
        cout<<"\nUnder Flow Condition";
       
    }else{
    v=stack[top];
    top--;    
    }
    return v;
}
int peek(){
    if(top==-1){
        cout<<"\nStack is empty";
        return 0;
    }else{
        return stack[top];
    }
}
bool isEmpty(){
    return top==-1;
}
bool isFull(){
    return top==3;
}
int main(){
   
    push(10);
    push(20);
    push(30);
    push(40);
    push(50);
   
    cout<<"\n Deleted Element : "<<pop();
    cout<<"\n Deleted Element : "<<pop();
    cout<<"\n=====Top Element Of the Stack===="<<peek();
    cout<<"\n Check Stack is Empty : "<<isEmpty();//0
    cout<<"\n Check Stack is Full : "<<isFull();//0
    cout<<"\n Deleted Element : "<<pop();
    cout<<"\n Deleted Element : "<<pop();
    cout<<"\n Deleted Element : "<<pop();
   
    return 0;
}