# include <iostream>
using namespace std;

class Node{
    public:
    int data ;
    Node * next;
    Node(int d){
        data = d;
        next = NULL;

    }
    void display(Node *head){
        Node *temp=head;
        while(temp!=NULL){
            cout<<"H==>"<<temp<<data;
            temp=temp->next;
        }
    }
};
int main(){

Node*first=new Node(10);
Node*second=new Node(20);
Node*third=new Node(30);
first -> next=second;
first -> next->next=third;
// cout<<first->data<<endl;
// cout<<first->next->data<<endl;
// cout<<first->next->data;
first-> display(first);
return 0;


};