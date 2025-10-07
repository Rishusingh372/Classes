// Differnce Between Array and Vector explain :-> Array is a fixed size data structure while vector is a dynamic size data structure
// Vector can grow and shrink in size as needed, while array size is defined at compile time

#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Declare a vector of integers
    vector<int> nums;

    // Add elements to the vector
    nums.push_back(10);
    nums.push_back(20);
    nums.push_back(30);

    // Print the elements of the vector
    cout << "Elements in the vector: ";
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i] << " ";
    }
    cout << endl;

    // Remove the last element from the vector
    nums.pop_back();

    // Print the elements after popping
    cout << "Elements in the vector after pop_back: ";
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i] << " ";
    }
    cout << endl;

    // Accessing elements using at() method
    cout << "Element at index 0: " << nums.at(0) << endl;

    // Get the size of the vector
    cout << "Size of the vector: " << nums.size() << endl;

    return 0;
}