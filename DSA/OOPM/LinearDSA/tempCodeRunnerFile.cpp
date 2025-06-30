// // Dobly Linklist
// #include <iostream>
// using namespace std;

// class Node{
//     public:
//     Node *prev;
//     int data;
//     Node *next;

//     Node(int d){
//         prev=NULL;
//         data=d;
//         next=NULL;
//     }

//     void forword(Node *head){
//         Node *temp=head;
//         while (temp!=NULL)
//         {
//            cout<<"\t===>"<<temp->data;
//            temp =temp->next;
//         }
        
//     }
//      void backword(Node *tail){
//         Node *temp=tail;
//         while (temp!=NULL)
//         {
//            cout<<"\t===>"<<temp->data;
//            temp =temp->prev;
//         }
        
//     }
// };

// int main(){
//     Node *f1=new Node(11);
//     Node *f2=new Node(22);
//     Node *f3=new Node(33);
//     f1->next =f2;
//     f2->prev=f1;

//     f2->next =f3;
//     f3->prev=f2;
//     Node *head=f1;

//     Node *tail=f3;
//     cout<<"\n Print data in forword direction"<<endl;
//     head->forword(head);

//     cout<<"\n Print data in backword direction"<<endl;
//     head->backword(tail);


// }


#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* prev;
    Node* next;
    
    Node(int d) {
        data = d;
        prev = NULL;
        next = NULL;
    }
};

class DoublyLinkedList {
private:
    Node* head;
    Node* tail;
    
public:
    DoublyLinkedList() {
        head = NULL;
        tail = NULL;
    }
    
    // Display the list from head to tail
    void displayForward() {
        Node* temp = head;
        while(temp != NULL) {
            cout << temp->data << " <-> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
    
    // Display the list from tail to head
    void displayBackward() {
        Node* temp = tail;
        while(temp != NULL) {
            cout << temp->data << " <-> ";
            temp = temp->prev;
        }
        cout << "NULL" << endl;
    }
    
    // 1. Insert First Node in Doubly Linked List
    void insertFirst(int data) {
        Node* newNode = new Node(data);
        
        if(head == NULL) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
    }
    
    // 2. Insert Last Node in Doubly Linked List
    void insertLast(int data) {
        Node* newNode = new Node(data);
        
        if(tail == NULL) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
    }
    
    // 3. Insert Data in Specific Position
    void insertAtPos(int data, int pos) {
        if(pos <= 0) {
            cout << "Invalid position" << endl;
            return;
        }
        
        if(pos == 1) {
            insertFirst(data);
            return;
        }
        
        Node* newNode = new Node(data);
        Node* temp = head;
        int count = 1;
        
        while(temp != NULL && count < pos-1) {
            temp = temp->next;
            count++;
        }
        
        if(temp == NULL) {
            cout << "Position out of range" << endl;
            delete newNode;
            return;
        }
        
        if(temp == tail) {
            insertLast(data);
            delete newNode;
            return;
        }
        
        newNode->next = temp->next;
        newNode->prev = temp;
        temp->next->prev = newNode;
        temp->next = newNode;
    }
    
    // 1. Delete First Node in Doubly Linked List
    void deleteFirst() {
        if(head == NULL) {
            cout << "List is empty" << endl;
            return;
        }
        
        Node* temp = head;
        head = head->next;
        
        if(head != NULL) {
            head->prev = NULL;
        } else {
            tail = NULL; // List became empty
        }
        
        delete temp;
    }
    
    // 2. Delete Last Node in Doubly Linked List
    void deleteLast() {
        if(tail == NULL) {
            cout << "List is empty" << endl;
            return;
        }
        
        Node* temp = tail;
        tail = tail->prev;
        
        if(tail != NULL) {
            tail->next = NULL;
        } else {
            head = NULL; // List became empty
        }
        
        delete temp;
    }
    
    // 3. Delete Data in Specific Position
    void deleteAtPos(int pos) {
        if(pos <= 0) {
            cout << "Invalid position" << endl;
            return;
        }
        
        if(pos == 1) {
            deleteFirst();
            return;
        }
        
        Node* temp = head;
        int count = 1;
        
        while(temp != NULL && count < pos) {
            temp = temp->next;
            count++;
        }
        
        if(temp == NULL) {
            cout << "Position out of range" << endl;
            return;
        }
        
        if(temp == tail) {
            deleteLast();
            return;
        }
        
        temp->prev->next = temp->next;
        temp->next->prev = temp->prev;
        delete temp;
    }
};

int main() {
    DoublyLinkedList dll;
    
    cout << "Inserting nodes:" << endl;
    dll.insertFirst(10);
    dll.insertLast(30);
    dll.insertAtPos(20, 2);
    dll.insertFirst(5);
    dll.insertLast(40);
    dll.displayForward();  // 5 <-> 10 <-> 20 <-> 30 <-> 40 <-> NULL
    
    cout << "\nDeleting nodes:" << endl;
    dll.deleteFirst();
    dll.deleteLast();
    dll.deleteAtPos(2);
    dll.displayForward();  // 10 <-> 30 <-> NULL
    
    cout << "\nDisplaying backward:" << endl;
    dll.displayBackward(); // 30 <-> 10 <-> NULL
    
    return 0;
}
