// Queue Implementation Using Linkked list

#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

    Node(int d)
    {
        data = d;
        next = NULL;
    }
};

Node *front = NULL;
Node *rear = NULL;

void enq(int d)
{
    //   step1: Create Node and assign Data

    Node *newNode = new Node(d);
    if (front == NULL && rear == NULL)
    {
        front = newNode;
        rear = newNode;

        cout << "\n First Element added in Queue";
    }
    else
    {
        rear->next = newNode;
        rear = newNode;
        cout << "\n Element Add after first Element";
    }
};

int main(){
    enq(10);
    enq(20);
    enq(30);
    enq(40);

    return 0;
}
