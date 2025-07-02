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

// insert at beginning, end, and specific position in a doubly linked list

// #include<iostream>
// using namespace std;

// class Node {
// public:
//     int data;
//     Node *prev, *next;

//     Node(int val) {
//         data = val;
//         prev = NULL;
//         next = NULL;
//     }
// };

// class DoublyLinkedList {
// public:
//     Node* head;

//     DoublyLinkedList() {
//         head = NULL;
//     }

//     //  Insert at Beginning
//     void insertBeginning(int val) {
//         Node* newNode = new Node(val);
//         newNode->next = head;
//         if (head != NULL)
//             head->prev = newNode;
//         head = newNode;
//     }

//     // Insert at End
//     void insertEnd(int val) {
//         Node* newNode = new Node(val);
//         if (head == NULL) {
//             head = newNode;
//             return;
//         }
//         Node* temp = head;
//         while (temp->next != NULL)
//             temp = temp->next;
//         temp->next = newNode;
//         newNode->prev = temp;
//     }

//     // Insert at Specific Position
//     void insertAtPosition(int val, int pos) {
//         if (pos < 1) {
//             cout << "Invalid position!" << endl;
//             return;
//         }

//         if (pos == 1) {
//             insertBeginning(val);
//             return;
//         }

//         Node* newNode = new Node(val);
//         Node* temp = head;

//         for (int i = 1; i < pos - 1 && temp != NULL; i++)
//             temp = temp->next;

//         if (temp == NULL) {
//             cout << "Position out of range!" << endl;
//             return;
//         }

//         newNode->next = temp->next;
//         newNode->prev = temp;

//         if (temp->next != NULL)
//             temp->next->prev = newNode;

//         temp->next = newNode;
//     }

//     // Display Function
//     void display() {
//         Node* temp = head;
//         while (temp != NULL) {
//             cout << "<==>" << temp->data;
//             temp = temp->next;
//         }
//         cout << endl;
//     }
// };

// int main() {
//     DoublyLinkedList list;

//     // Insert at Beginning
//     list.insertBeginning(30);
//     list.insertBeginning(20);
//     list.insertBeginning(10);
//     cout << "After insert at beginning:\n";
//     list.display();

//     // Insert at End
//     list.insertEnd(40);
//     list.insertEnd(50);
//     cout << "After insert at end:\n";
//     list.display();

//     // Insert at Specific Position
//     list.insertAtPosition(25, 3); // Insert 25 at position 3
//     list.insertAtPosition(5, 1);  // Insert 5 at position 1 (head)
//     list.insertAtPosition(60, 10); // Invalid (out of range)
//     cout << "After insert at specific positions:\n";
//     list.display();

//     return 0;
// }

// delete at beginning, end, and specific position in a doubly linked list
#include<iostream>
using namespace std;

class Node {
public:
    int data;
    Node *prev, *next;

    Node(int val) {
        data = val;
        prev = NULL;
        next = NULL;
    }
};

class DoublyLinkedList {
public:
    Node* head;

    DoublyLinkedList() {
        head = NULL;
    }

    // Insert at end for initial setup
    void insertEnd(int val) {
        Node* newNode = new Node(val);
        if (head == NULL) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next != NULL)
            temp = temp->next;
        temp->next = newNode;
        newNode->prev = temp;
    }

    // 1️⃣ Delete at Beginning
    void deleteBeginning() {
        if (head == NULL) {
            cout << "List is empty!" << endl;
            return;
        }
        Node* temp = head;
        head = head->next;
        if (head != NULL)
            head->prev = NULL;
        delete temp;
        cout << "Deleted from beginning\n";
    }

    // 2️⃣ Delete at End
    void deleteEnd() {
        if (head == NULL) {
            cout << "List is empty!" << endl;
            return;
        }

        if (head->next == NULL) {
            delete head;
            head = NULL;
            cout << "Deleted last remaining node\n";
            return;
        }

        Node* temp = head;
        while (temp->next != NULL)
            temp = temp->next;

        temp->prev->next = NULL;
        delete temp;
        cout << "Deleted from end\n";
    }

    // 3️⃣ Delete at Specific Position
    void deleteAtPosition(int pos) {
        if (head == NULL || pos < 1) {
            cout << "Invalid position or list is empty!" << endl;
            return;
        }

        if (pos == 1) {
            deleteBeginning();
            return;
        }

        Node* temp = head;
        for (int i = 1; i < pos && temp != NULL; i++)
            temp = temp->next;

        if (temp == NULL) {
            cout << "Position out of range!" << endl;
            return;
        }

        if (temp->next != NULL)
            temp->next->prev = temp->prev;

        if (temp->prev != NULL)
            temp->prev->next = temp->next;

        delete temp;
        cout << "Deleted from position " << pos << endl;
    }

    // Display function
    void display() {
        Node* temp = head;
        while (temp != NULL) {
            cout << "<==>" << temp->data;
            temp = temp->next;
        }
        cout << endl;
    }
};

int main() {
    DoublyLinkedList list;

    // Insert sample data
    list.insertEnd(10);
    list.insertEnd(20);
    list.insertEnd(30);
    list.insertEnd(40);
    list.insertEnd(50);

    cout << "Original List:\n";
    list.display();

    // Delete beginning
    list.deleteBeginning();
    list.display();

    // Delete end
    list.deleteEnd();
    list.display();

    // Delete specific position
    list.deleteAtPosition(2); // deletes node at position 2
    list.display();

    // Try deleting at invalid position
    list.deleteAtPosition(10);
    list.display();

    return 0;
}
