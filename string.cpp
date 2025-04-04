// using inbuild function to reverse a string
// #include <iostream>
// #include <algorithm> 
// using namespace std;

// string reverseString(const string &str) {
//     string reversedStr = str; 
//     reverse(reversedStr.begin(), reversedStr.end()); 
//     return reversedStr; 
// }

// int main() {
//     string str1 = "Welcom to the bhopal"; 
//     string reversed = reverseString(str1);
//     cout << "Reversed string: " << reversed << endl;
//     return 0;
// }


#include <iostream>
using namespace std;

string reverseString(const string &str) {
    string reversedStr;
    for (int i = str.length() - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

int main() {
    string str1 = "Welcom to the bhopal"; 
    string reversed = reverseString(str1); 

    cout << "Reversed string: " << reversed << endl;
    return 0;
}
