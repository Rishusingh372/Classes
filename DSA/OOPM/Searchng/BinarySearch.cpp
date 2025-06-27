# include <iostream>
using namespace std;

int binary_search(int arr[], int size, int search_element){
int low =0;
int high=size;
while (low<=high){
    int mid = (low+high)/2;
    if(arr[mid] == search_element){
        return mid; // Return the index of the found element
    } else if( search_element > arr[mid] ){
        low = mid + 1; // Search in the right half
    } else {
        high = mid - 1; // Search in the left half
    }

};
return -1;


};

int main(){
    int arr[]={10,20,30,40,50,60,70,80};
    int search_element=40; // Element to search for
    int r = binary_search(arr, 8, search_element);
    if(r == -1){
        cout << "Element not found" << endl;
    } else {
        cout << "Element found at position: " << r << endl;
    }
    return 0;
}
