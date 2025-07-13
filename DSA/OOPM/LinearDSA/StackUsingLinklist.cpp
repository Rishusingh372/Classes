//stack Implemementation Using LinkedList
#include<iostream>
using namespace std;
class Node
{
    public:
    int data;
    Node *next;
    Node(int d){
        data=d;
        next=NULL;
    }
};
class Stack{
    public:
        Node *top;
    Stack(){
        top=NULL;
    }
    void push(int d){
        Node *newNode=new Node(d);
        if(top==NULL){
            top=newNode;
            cout<<"First Element Push into stack";
        }else{
            newNode->next=top;
            top=newNode;
            cout<<"\n Push Element after First Element";
        }
       
    }
   
    int pop(){
        if(top==NULL){
            cout<<"\n Stack is Empty";
        }
        int r;
        Node *temp=top;
        r=temp->data;//50
        top=top->next;
        delete(temp);
        return r;
    }
    void display(){
    Node *temp=top;
    cout<<"\nPrint Data of Stack  \n";
    while(temp!=NULL){
        cout<<"\n===>"<<temp->data;
        temp=temp->next;
    }    
    }
   
    int peek(){
        return top->data;
    }
    bool isEmpty(){
        return top==NULL;
    }
};

int main(){
    Stack sk;
    sk.push(10);
    sk.push(20);
    sk.push(30);
    sk.push(40);
    sk.push(50);
    sk.display();
    cout<<"\n Deleted Element from the STack : "<<sk.pop();
    cout<<"\n Deleted Element from the STack : "<<sk.pop();
    cout<<"\n Top Element of The Stack "<<sk.peek();
    cout<<"\n isEmpty : "<<sk.isEmpty();
    cout<<"\n Deleted Element from the STack : "<<sk.pop();
    cout<<"\n Deleted Element from the STack : "<<sk.pop();
    cout<<"\n Deleted Element from the STack : "<<sk.pop();
    sk.display();
    return 0;
}