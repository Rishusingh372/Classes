// Requirement for DSA
// 1. Function 
// 2. Pointers
// 3. Class and Object 
// DSA Using C++
// ==============================>
// DSA  (without STL)
// Time complexity
// Space Complexity

// 1. Linear DSA
//    Array
//    Stack
// 	Array
// 	LinkedList
// 	Queue
//    Queue
// 	Array
// 	LinkedList
// 	Stack
//    LinkedList
// 	1. Singly Linked List
// 		A. Add New Node at Starting of the Linked List
// 		B. Add New Node at ending of the Linked List 
// 		C. Add new Node at specific position
// 		D. Delete First Node of the Linked List
// 		E. Delete Last Node of the Linked List
// 		F. Delete specific Node of Linked List

//         2. Doubly Linked List
// 	3. Circular Linked List
// 		A. Singly Circular Linked List
// 		B. Doubly Circular Linked List

		
// 	Sorting
// 		1. Bubble Sort
// 		2. Inserton Sort
// 		3. Select Sort
// 		4. Merge Sort
// 		5. Quick Sort

// 	Searching
// 		1. Linear Search
// 		2. Binary Search
//        =================================================

// 	Non Linear Data Structure
// 	1. Tree
// 	    A. Tree Terminology
// 	    B. Tree Traversal 
// 		a.  pre order
// 		b.  in order
// 		c. post order
// 	   C. Binary Search Tree(Searching)
	
//            D. Heap Sort
		
// 	2. Graph
// 		Graph Representation
// 		1. Using 2D Array
// 		2. Using Linked List
// ==============================================================
// 	STL
// 	Container
// 	function
// 	class
// 	generic type
// 	vector
// 	stack
// 	Iterator
// ==============================================================

// Topic Wise Test
// MCQ TEST
// Coding Test
// Written Test
// =============================================================
//Time Complexity of the Program
//Space Complexity 
// No Loop, No Recursion = O(1)
//Space Complexity : O(1)
// #include<iostream>
// using namespace std;
// int main(){
// 	int x;
// 	x=10;
// 	cout<<x;
// 	return 0;
// }

// ==============================================

//Time Complexity of the Program
//Space Complexity 
// Loop = O(n)
//Space Complexity : O(1)
// #include<iostream>
// using namespace std;
// int main(){
// 	int x;
// 	for(x=1;x<=10;x++){
// 		if(x%2==0){
// 	  	cout<<endl<<x;
// 	    }
//      }
	  
// 	return 0;
// }

// =======================================================
//Time Complexity of the Program
//Space Complexity 
// Loop = O(n)
//Space Complexity : O(1)
// #include<iostream>
// using namespace std;
// int main(){
// 	int x;
// 	for(x=1;x<=10;x++){
		
// 	  	cout<<endl<<x;
	    
//      }
     
// 		for(x=11;x<=20;x++){
// 	  	cout<<endl<<x;
//      }
//      	for(x=21;x<=30;x++){
// 	  	cout<<endl<<x;
//      }
     
// 	return 0;
// }


// ============================================
//Time Complexity of the Program
//Space Complexity 
// Loop = O(n^2)
//Space Complexity : O(1)
// #include<iostream>
// using namespace std;
// int main(){
// 	int r;
// 	for(r=1;r<=5;r++){
// 		for(int c=5;c>r;c--){
// 	  		cout<<" ";
// 	  	}
	  
// 	  for(int c=1;c<=r;c++){
// 	  		cout<<"*";
// 	  }
	  
// 	  cout<<endl;
	    
//      }
     
		
     
// 	return 0;
// }


// ======================================================
//Time Complexity of the Program
//Space Complexity 
// Loop = O(n)
//Space Complexity : O(1)
// #include<iostream>
// using namespace std;
// int main(){
// 	int r;
// 	for(r=1;r<=10;r=r+2){// 1  2  3  4  5   O(n^2)> O(n) > O(log n) > O(1)
// 	 	cout<<endl<<r;
	 
//      }
  
// 	return 0;
// }
// =====================================================

// 22 may 2025

// 1. Taking Nothing Returning Nothing
// Example:
// Syntax:
// 1.Prototype 
// return type nameofthefunction();
// void add();

// definition
// return type functionName(){
// //variable declaration
// //input
// //operation
// //print result
// }

// void add(){
// int n1,n2,n3;
// cout<<"Enter No 1: ";
// cin>>n1;
// cout<<"Enter Number 2: ";
// cin>>n2;
// n3=n1+n2;
// cout<<"Addition : "<<n3;
// }


// int main(){

// add();

// return 0;
// }


// Step1: Function Declaration / Prototype (After Header file)
// Step2: Function Defintion / Working of the function(outside main)
// Step3: Function Calling(inside main)
// functionName();

// //taking nothing returning nothing
// #include<iostream>
// using namespace std;
// //step1: Function Prototype
// void add();
// //step2:function defintion
// void add(){
// 	cout<<"\n Enter Add function ";
// int n1,n2,n3;
// 	cout<<"\nEnter Number 1 : ";
// 	cin>>n1;
// 	cout<<"Enter Number 2 : ";
// 	cin>>n2;
// 	n3=n1+n2;
// 	cout<<"Addition : "<<n3;
// cout<<"\n Exit Add function ";	
// } 
// int main(){
// cout<<"\n Enter main function ";	
// //step3: calling
// add();
// cout<<"\n Exit main function ";
// 	return 0;
// }

// ===================================
// Q2. Write a C++ Program to check given number is Positive or Negative (using Taking Nothing returning nothing)

// //taking nothing returning nothing
// #include<iostream>
// using namespace std;
// //step1: Function Prototype
// void isPositive();
// //step2:function defintion
// void isPositive(){
// 	cout<<"\n Enter isPositive function ";
//     int n;
//     cout<<"\nEnter Number : ";
//     cin>>n;
//     if(n>0){
//     	cout<<"This is Positive Number ";
// 	}else{
// 		cout<<"This is Negative Number ";
// 	}
// 	cout<<"\n Exit isPositive function ";	
// } 
// int main(){
// cout<<"\n Enter main function ";	
// //step3: calling
// isPositive();
// isPositive();
// isPositive();
// isPositive();
// cout<<"\n Exit main function ";
// 	return 0;
// }

// ==========================================
// 2. Taking Something Returning Nothing
// void add(int,int);
// void add(int a,int b){
// //perform operation
// //print result
// int c=a+b;
// cout<<"Addition : "<<c;

// }

//taking nothing returning nothing
// #include<iostream>
// using namespace std;
//step1: Function Prototype
// void isPositive(int n);
//step2:function defintion
// void isPositive(int n){
// 	cout<<"\n Enter isPositive function ";
   
//     if(n>0){
//     	cout<<"This is Positive Number ";
// 	}else{
// 		cout<<"This is Negative Number ";
// 	}
// 	cout<<"\n Exit isPositive function ";	
// } 
// int main(){
// cout<<"\n Enter main function ";	
// //step3: calling
// isPositive(45);

// cout<<"\n Exit main function ";
// 	return 0;
// }

// ================================================

   