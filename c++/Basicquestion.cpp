#include <iostream>
using namespace std;
int main()
{

    // Program to check if a number is prime or not

    // int num, count = 0;
    // cout << "Enter a number: ";
    // cin >> num;
    // for (int i = 1; i <= num; ++i) {
    //     if (num % i == 0) {
    //         count++;
    //     }
    // }
    // if (count == 2) {
    //     cout << num << " is a prime number." << endl;
    // } else {
    //     cout << num << " is not prime number." << endl;
    // }


    // Program to find palindrome numbers between two numbers

    // int n1, n2;
    // cin >> n1 >> n2;

    // for (int num = n1 + 1; num <= n2; num++) {
    //     int temp = num;
    //     int rev = 0;

    //     // Reverse the number
    //     while (temp != 0) {
    //         rev = rev * 10 + temp % 10;
    //         temp /= 10;
    //     }

    //     // Check if it's a palindrome
    //     if (num == rev) {
    //         cout << rev << endl;
    //     }
    // }


    //wap to print the fibonacchi series 0,1,1,2,3,5,8,13........

    // int n, t1 = 0, t2 = 1, nextTerm = 0;
    // cout << "Enter the number of terms: ";
    // cin >> n;
    // cout << "Fibonacci Series: ";
    // for (int i = 1; i <= n; ++i) {
    //     if (i == 1) {
    //         cout << t1 << ", "; // Print the first term
    //     } else if (i == 2) {
    //         cout << t2 << ", "; // Print the second term
    //     } else {
    //         nextTerm = t1 + t2; // Calculate the next term
    //         t1 = t2; // Update t1 to the second term
    //         t2 = nextTerm; // Update t2 to the next term
    //         cout << nextTerm << ", "; // Print the next term
    //     }
    // }
    // cout << "..." << endl; // Indicate continuation of the series

    // Armstrong number check


    // int num, originalNum, remainder, result = 0;
    // cout << "Enter an integer: ";
    // cin >> num;
    // originalNum = num; // Store the original number
    // while (originalNum != 0) {
    //     remainder = originalNum % 10; // Get the last digit
    //     result += remainder * remainder * remainder; 
    //     originalNum /= 10; 
    // }
    // if (result == num) {
    //     cout << num << " is an Armstrong number." << endl; // Output if it's an Armstrong number
    // } else {
    //     cout << num << " is not an Armstrong number." << endl; // Output if it's not an Armstrong number
    // }


// Prime number check with exactly four factors

    // int num, count = 0;
    // cout << "Enter a number: ";
    // cin >> num;
    // for (int i = 1; i <= num; ++i) {
    //     if (num % i == 0) {
    //         count++; // Increment count if i is a factor of num
    //     }
    // }
    // if (count == 4) {
    //     cout << num << " has exactly four factors." << endl;
    // } else if (count == 2) {
    //     cout << num << " is a prime number." << endl;
    // } else {
    //     cout << num << " has more than four factors." << endl;
    // }
    return 0;
}