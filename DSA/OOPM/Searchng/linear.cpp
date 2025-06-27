# include <iostream>
using namespace std;

int linear_search(int arr[], int size, int search_element){
    
    for(int i=0; i<size; i++){
        if(arr[i] == search_element){
            return i+1; // Return the index of the found element
        }
    }
    return -1; // Return -1 if the element is not found
}


int main(){
    int arr[]={10,2,20,30,56,45,6};
    int search_element=22; // Element to search for
    int r=linear_search(arr, 7, search_element);
    if(r == -1){
        cout << "Element not found" << endl;
    } else {
        cout << "Element found at position: " << r << endl;
    }
    return 0;
}
