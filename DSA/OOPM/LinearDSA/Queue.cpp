// Q2. Explain Queue Data structure?
// Ans: if we want to store data according to order First in First Out then we should go for Queue Data structure

// Operations of Queue data structure
// 1. enqueue(): Insert data in the queue using rear end
//      if we insert first element in the queue then we increase front      and rear by 1
//      if queue contain some element then we increase only rear(rear++)

// 2. dequeue(): delete first element from the queue using front end
//          if queue contain only one element then front=-1 and rear=-1
//          if queue contain more than one element then we always increase front++

//Queue Implementation using Array
#include<iostream>
using namespace std;
int Q[5];
int front=-1;
int rear=-1;

void enq(int data){
    if(rear==4){
        cout<<"\n Overflow condition ";
    }else{
        if(rear==-1&&front==-1){
            front++;//0
            rear++;//0
            Q[rear]=data;
            cout<<"\n First Element Insert in the queue";
        }else{
            rear++;
            Q[rear]=data;
            cout<<"\n add element after first element ";
        }
    }
}
int deq(){
    int r=0;
    if(front==-1 && rear==-1){
        cout<<"\n Under flow ";
    }else{
        if(front==rear){
            r=Q[front];
            front=-1;
            rear=-1;    
        }else{
            r=Q[front];
            front++;
        }
        return r;
       
    }
}
int peek(){
int r=0;
    if(front==-1 && rear==-1){
        cout<<"\n Under flow ";
    }else{
        r=Q[front];
    }
    return r;    
}
int main(){
    enq(10);
    enq(20);
    enq(30);
    enq(40);
    enq(50);
//    enq(60);
    cout<<"\n Delete First Element : "<<deq();
    cout<<"\n Delete First Element : "<<deq();
    cout<<"\n Front Element of the Queue : "<<peek();
    cout<<"\n Delete First Element : "<<deq();
    cout<<"\n Delete First Element : "<<deq();
    cout<<"\n Delete First Element : "<<deq();
   
    return 0;
}