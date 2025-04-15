#include <iostream>
using namespace std;
int main() {
    int num, count = 0;
    cout << "Enter a number: ";
    cin >> num;
    for (int i = 1; i <= num; ++i) {
        if (num % i == 0) {
            count++; // Increment count if i is a factor of num
        }
    }
    if (count == 4) {
        cout << num << " has exactly four factors." << endl;
    } else if (count == 2) {
        cout << num << " is a prime number." << endl;
    } else {
        cout << num << " has more than four factors." << endl;
    }
    return 0;
}