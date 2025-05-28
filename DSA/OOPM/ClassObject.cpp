#include <iostream>
using namespace std;
class Operation
{
public:
    int n1;
    int n2; // Member data , Instance variable

    void acceptData()
    {
        cout << "\n Enter First Number: ";
        cin >> n1;
        cout << "\n Enter Second Number: ";
        cin >> n2;
    }
    void showData()
    {
        cout << "\n First Number: " << n1;
        cout << "\n Second Number: " << n2;
    }
    void add()
    {
        cout << "\n Addition: " << n1 + n2;
    }
    void sub()
    {
        cout << "\n Subtraction: " << n1 - n2;
    }
    void mul()
    {
        cout << "\n Multiplication: " << n1 * n2;
    }
    void div()
    {
        cout << "\n Division: " << n1 / n2;
    }

   
}; 
 int main()
    {
        Operation op; // Object Creation
        op.acceptData(); // Calling Member Function
        op.showData();
        op.add();
        op.sub();
        op.mul();
        op.div();
        return 0;
    }