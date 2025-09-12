# include <iostream>
using namespace std;

int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i; // Return the index if the key is found
        }
    }
    return -1; // Return -1 if the key is not found
}

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int size = 7;
    int target = 8;

    cout<<linearSearch(arr, size, target)<<endl;

    return 0;
}