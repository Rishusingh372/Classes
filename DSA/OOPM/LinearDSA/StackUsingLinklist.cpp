// stack implementation using Linkedlist
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
class Stack
{
    Node *top;

public:
    Stack()
    {
        top = NULL;
    }
    void push(int d)
    {
        Node *newNode = new Node(d);
        if (top == NULL)
        {
            cout << "Stack is empty, adding first element: " << d << endl;
            top = newNode;
        }
        else
        {
            cout << "Pushing element after first element " << d << endl;
            newNode->next = top;
            top = newNode;
        }
    }
    void display(){
        Node *temp = top;
        cout << "Displaying stack elements: ";
        while (temp != NULL)
        {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;

    };
};
int main(){
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    s.display();
    return 0;
};
