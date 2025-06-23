// Q1. Singly Linked List Implementation (add new Node at start position and ending position)

//singly Linked List
#include<iostream>
using namespace std;
class Node{
	public:
		int data;
		Node *next;
	Node(int d){
		data=d;
		next=NULL;
	}
	void display(Node *head){
		Node *temp=head;
		while(temp!=NULL){
			cout<<"===>"<<temp->data;//10==>20==>30==>40==>
			temp=temp->next;
		}
	}
	
	Node * addFirstNode(Node *head,int d){
		Node *newNode=new Node(d);
		newNode->next=head;
		head=newNode;
		return head;
	}
	
	void addLastNode(Node *head,int d){
		Node *newNode=new Node(d);
		Node *temp=head;
		while(temp->next!=NULL){
			temp=temp->next;
		}
		temp->next=newNode;
	}
};

int main(){
	Node *first=new Node(10);
	Node *second=new Node(20);
	Node *third=new Node(30);
	Node *forth=new Node(40);
	first->next=second;
	first->next->next=third;
	first->next->next->next=forth;
	Node *head=first;
	first->display(head);
	head=head->addFirstNode(head,5);
	cout<<"\n Data of Singly Linked List After Add New Node at Starting \n";
	head->display(head);
	head->addLastNode(head,50);
	cout<<"\n Data of Singly Linked List After Add New Node at Ending \n";
	head->display(head);
	return 0;
}



// ==================================

//Insert New Node at Position

//singly Linked List
#include<iostream>
using namespace std;
class Node{
	public:
		int data;
		Node *next;
	Node(int d){
		data=d;
		next=NULL;
	}
	void display(Node *head){
		Node *temp=head;
		while(temp!=NULL){
			cout<<"===>"<<temp->data;//10==>20==>30==>40==>
			temp=temp->next;
		}
	}
	
	Node * addFirstNode(Node *head,int d){
		Node *newNode=new Node(d);
		newNode->next=head;
		head=newNode;
		return head;
	}
	
	void addLastNode(Node *head,int d){
		Node *newNode=new Node(d);
		Node *temp=head;
		while(temp->next!=NULL){
			temp=temp->next;
		}
		temp->next=newNode;
	}
	
	void addNodeAtPos(Node *head,int data,int pos){
		Node *newNode=new Node(data);
		Node *temp1=head;
		Node *temp2=head->next;
		pos--;
		while(pos>1){
			temp1=temp1->next;
			temp2=temp2->next;
			pos--;
		}
		temp1->next=newNode;
		newNode->next=temp2;
	}
};

int main(){
	Node *first=new Node(10);
	Node *second=new Node(20);
	Node *third=new Node(30);
	Node *forth=new Node(40);
	first->next=second;
	first->next->next=third;
	first->next->next->next=forth;
	Node *head=first;
	first->display(head);
	head->addNodeAtPos(head,35,4);
	cout<<"\n after add new Node at specific position \n";
	first->display(head);
	return 0;
}



