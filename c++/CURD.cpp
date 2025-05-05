#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

// Define a structure for our items
struct Item {
    int id;
    string name;
    double price;
};

int main() {
    // Initialize an array of items
    Item items[100];
    int itemCount = 3; // Current number of items
    
    // Initialize with some sample data
    items[0] = {1, "Item 1", 10.99};
    items[1] = {2, "Item 2", 15.50};
    items[2] = {3, "Item 3", 8.75};
    
    // Display all items
    cout << "Initial Items:\n";
    for (int i = 0; i < itemCount; i++) {
        cout << "ID: " << items[i].id << ", Name: " << items[i].name 
             << ", Price: " << items[i].price << endl;
    }
    cout << endl;
    
    // CREATE - Add a new item
    Item newItem;
    newItem.id = items[itemCount-1].id + 1; // Generate new ID
    newItem.name = "Item 4";
    newItem.price = 12.99;
    items[itemCount] = newItem;
    itemCount++;
    
    cout << "After adding new item:\n";
    for (int i = 0; i < itemCount; i++) {
        cout << "ID: " << items[i].id << ", Name: " << items[i].name 
             << ", Price: " << items[i].price << endl;
    }
    cout << endl;
    
    // READ - Find an item by ID
    int searchId = 2;
    cout << "Searching for item with ID " << searchId << ":\n";
    for (int i = 0; i < itemCount; i++) {
        if (items[i].id == searchId) {
            cout << "Found: ID: " << items[i].id << ", Name: " << items[i].name 
                 << ", Price: " << items[i].price << endl;
            break;
        }
    }
    cout << endl;
    
    // UPDATE - Modify an existing item
    int updateId = 1;
    cout << "Updating item with ID " << updateId << ":\n";
    for (int i = 0; i < itemCount; i++) {
        if (items[i].id == updateId) {
            items[i].name = "Updated Item 1";
            items[i].price = 11.99;
            cout << "Updated: ID: " << items[i].id << ", Name: " << items[i].name 
                 << ", Price: " << items[i].price << endl;
            break;
        }
    }
    
    cout << "\nAfter update:\n";
    for (int i = 0; i < itemCount; i++) {
        cout << "ID: " << items[i].id << ", Name: " << items[i].name 
             << ", Price: " << items[i].price << endl;
    }
    cout << endl;
    
    // DELETE - Remove an item
    int deleteId = 3;
    cout << "Deleting item with ID " << deleteId << ":\n";
    int foundIndex = -1;
    for (int i = 0; i < itemCount; i++) {
        if (items[i].id == deleteId) {
            foundIndex = i;
            break;
        }
    }
    
    if (foundIndex != -1) {
        // Shift all elements after the found index one position left
        for (int i = foundIndex; i < itemCount - 1; i++) {
            items[i] = items[i + 1];
        }
        itemCount--;
        cout << "Item deleted successfully.\n";
    } else {
        cout << "Item not found.\n";
    }
    
    cout << "\nAfter deletion:\n";
    for (int i = 0; i < itemCount; i++) {
        cout << "ID: " << items[i].id << ", Name: " << items[i].name 
             << ", Price: " << items[i].price << endl;
    }
    
    return 0;
}