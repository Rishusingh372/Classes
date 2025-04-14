//wap to find the sun of frist natural number input taken from user
// #include <iostream>
// using namespace std;
// int main() {
//     int n, sum = 0;
//     cout << "Enter a positive integer: ";
//     cin >> n;
//     for (int i = 1; i <= n; ++i) {
//         sum += i; // Add i to sum
//     }
//     cout << "Sum = " << sum << endl; // Output the sum
//     return 0;
// }


// wap to chack the num have four factor or prime num or both not

// #include <iostream>
// using namespace std;
// int main() {
//     int num, count = 0;
//     cout << "Enter a number: ";
//     cin >> num;
//     for (int i = 1; i <= num; ++i) {
//         if (num % i == 0) {
//             count++; // Increment count if i is a factor of num
//         }
//     }
//     if (count == 4) {
//         cout << num << " has exactly four factors." << endl;
//     } else if (count == 2) {
//         cout << num << " is a prime number." << endl;
//     } else {
//         cout << num << " has more than four factors." << endl;
//     }
//     return 0;
// }

//wap to reverse the given input taken from user
// #include <iostream>
// using namespace std;
// int main() {
//     int num, reversedNum = 0;
//     cout << "Enter an integer: ";
//     cin >> num;
//     while (num != 0) {
//         int digit = num % 10; // Get the last digit
//         reversedNum = reversedNum * 10 + digit; // Build the reversed number
//         num /= 10; // Remove the last digit from num
//     }
//     cout << "Reversed Number = " << reversedNum << endl; // Output the reversed number
//     return 0;
// }

// wap to find factoreal of a num 
// #include <iostream>
// using namespace std;
// int main() {
//     int num;
//     long long factorial = 1; // Use long long to handle large numbers
//     cout << "Enter a positive integer: ";
//     cin >> num;
//     if (num < 0) {
//     cout << "Error! Factorial of a negative number doesn't exist." << endl;
//     } else if (num == 0) {
//         cout << "Factorial of 0 = 1" << endl; // 0! = 1
//     } else {
//         for (int i = 1; i <= num; ++i) {
//             factorial *= i; // Multiply i to factorial
//         }
//         cout << "Factorial of " << num << " = " << factorial << endl; // Output the factorial
//     }
//     return 0;
// }
// wap to sum of factorial of num
// #include <iostream>
// using namespace std;
// int main() {
//     int num; 
//     long long factorial = 1; // Use long long to handle large numbers
//     cout << "Enter a positive integer: ";
//     cin >> num;
//     if (num < 0) {
//     cout << "Error! Factorial of a negative number doesn't exist." << endl;
//     } else if (num == 0) {
//         cout << "Factorial of 0 = 1" << endl; // 0! = 1  
//     } else {
//         for (int i = 1; i <= num; ++i) {
//             factorial *= i; // Multiply i to factorial
//         }
//         cout << "Factorial of " << num << " = " << factorial << endl; // Output the factorial
//     }
//     return 0;
// }
// wap to chack num is palindorm or not 
// #include <iostream>
// using namespace std;
// int main() {
//     int num, reversedNum = 0, originalNum;
//     cout << "Enter an integer: ";
//     cin >> num;
//     originalNum = num; // Store the original number
//     while (num != 0) {
//         int digit = num % 10; // Get the last digit
//         reversedNum = reversedNum * 10 + digit; // Build the reversed number
//         num /= 10; // Remove the last digit from num
//     }
//     if (originalNum == reversedNum) {
//         cout << originalNum << " is a palindrome." << endl; // Output if it's a palindrome
//     } else {
//         cout << originalNum << " is not a palindrome." << endl; // Output if it's not a palindrome
//     }
//     return 0;
// }

// wap to find the num is armstrom or not
// #include <iostream>
// using namespace std;
// int main() {
//     int num, originalNum, remainder, result = 0;
//     cout << "Enter an integer: ";
//     cin >> num;
//     originalNum = num; // Store the original number
//     while (originalNum != 0) {
//         remainder = originalNum % 10; // Get the last digit
//         result += remainder * remainder * remainder; // Calculate the cube of the digit and add to result
//         originalNum /= 10; // Remove the last digit from originalNum
//     }
//     if (result == num) {
//         cout << num << " is an Armstrong number." << endl; // Output if it's an Armstrong number
//     } else {
//         cout << num << " is not an Armstrong number." << endl; // Output if it's not an Armstrong number
//     }
//     return 0;
// }


//wap to print the fibonacchi series 0,1,1,2,3,5,8,13........

// #include <iostream>
// using namespace std;
// int main() {
//     int n, t1 = 0, t2 = 1, nextTerm = 0;
//     cout << "Enter the number of terms: ";
//     cin >> n;
//     cout << "Fibonacci Series: ";
//     for (int i = 1; i <= n; ++i) {
//         if (i == 1) {
//             cout << t1 << ", "; // Print the first term
//         } else if (i == 2) {
//             cout << t2 << ", "; // Print the second term
//         } else {
//             nextTerm = t1 + t2; // Calculate the next term
//             t1 = t2; // Update t1 to the second term
//             t2 = nextTerm; // Update t2 to the next term
//             cout << nextTerm << ", "; // Print the next term
//         }
//     }
//     cout << "..." << endl; // Indicate continuation of the series
//     return 0;
// }


// wap to ptint math table
// #include <iostream>
// using namespace std;
// int main() {
//     int n;
//     cout << "Enter a number: ";
//     cin >> n;
//     cout << "Multiplication Table of " << n << ":" << endl;
//     for (int i = 1; i <= 10; ++i) {
//         cout << n << " x " << i << " = " << n * i <
//         endl; // Print the multiplication table
//     }
//     return 0;
// }


// wap to find the value of 1-2 +3-4+5-6+7-8+9-10
// #include <iostream>
// using namespace std;
// int main() {
//     int n, sum = 0;
//     cout << "Enter a positive integer: ";
//     cin >> n;
//     for (int i = 1; i <= n; ++i) {
//         if (i % 2 == 0) {
//             sum -= i; // Subtract even numbers
//         } else {
//             sum += i; // Add odd numbers
//         }
//     }
//     cout << "Result = " << sum << endl; // Output the result
//     return 0;
// }


//wap to find the sum of factorial f1/1 !+f2/2!+f3/3!+f4/4!+
// #include <iostream>
// using namespace std;
// int main() {
//     int n;
//     long long factorial = 1; // Use long long to handle large numbers
//     double sum = 0.0; // Initialize sum as a double for precision
//     cout << "Enter a positive integer: ";
//     cin >> n;
//     for (int i = 1; i <= n; ++i) {
//         factorial *= i; // Calculate factorial
//         sum += static_cast<double>(i) / factorial; // Add i/factorial to sum
//     }
//     cout << "Sum = " << sum << endl; // Output the sum
//     return 0;
// }


// wap to find the lcm and hcm of two given user input num
// #include <iostream>
// using namespace std;
// int main() {
//     int num1, num2, lcm, hcf;
//     cout << "Enter two integers: ";
//     cin >> num1 >> num2;
//     // Calculate HCF using Euclidean algorithm
//     int a = num1, b = num2;
//     while (b != 0) {
//         int temp = b;
//         b = a % b; // Update b to the remainder
//         a = temp; // Update a to the previous b
//     }
//     hcf = a; // HCF is the last non-zero remainder
//     // Calculate LCM using the formula: LCM(a, b) = (a * b) / HCF(a, b)
//     lcm = (num1 * num2) / hcf;
//     cout << "HCF = " << hcf << endl; // Output HCF
//     cout << "LCM = " << lcm << endl; // Output LCM
//     return 0;
// }


// wap to print the series 10,9,8,7....
// #include <iostream>
// using namespace std;
// int main() {
//     int n;
//     cout << "Enter a positive integer: ";
//     cin >> n;
//     cout << "Series: ";
//     for (int i = n; i >= 1; --i) {
//         cout << i << ", "; // Print the series in reverse order
//     }
//     cout << "..." << endl; // Indicate continuation of the series
//     return 0;
// }



// wap to find sum of input digit 
// #include <iostream>
// using namespace std;
// int main() {
//     int num, sum = 0;
//     cout << "Enter an integer: ";
//     cin >> num;
//     while (num != 0) {
//         sum += num % 10; // Add the last digit to the sum
//         num /= 10; // Remove the last digit from num
//     }
//     cout << "Sum of digits = " << sum << endl; // Output the sum of digits
//     return 0;
// }

//wap a prob to chack the given num is perfect or not
// #include <iostream>
// using namespace std;
// int main() {
//     int num, sum = 0;
//     cout << "Enter a positive integer: ";
//     cin >> num;
//     for (int i = 1; i <= num / 2; ++i)
//         if (num % i == 0) {
//             sum += i; // Add the factor to sum
//         }
//     return 0;
// }
// 


// create a pattern of stars

//     *
//    ***
//   *****
//  *******

// #include <iostream>
// using namespace std;

// int main() {
//     int rows = 4; // Number of rows in the pyramid
    
//     for (int i = 1; i <= rows; i++) {
//         // Print leading spaces
//         for (int j = 1; j <= rows - i; j++) {
//             cout << " ";
//         }
        
//         // Print stars
//         for (int k = 1; k <= 2 * i - 1; k++) {
//             cout << "*";
//         }
        
//         cout << endl;
//     }
    
//     return 0;
// }


// *****
// ****
// ***
// **
// *

// #include <iostream>
// using namespace std;
// int main() {
//     int n;
//     cout << "Enter the number of rows: ";
//     cin >> n;
//     for (int i = n; i >= 1; --i) {
//         for (int j = 1; j <= i; ++j) {
//             cout << "*"; // Print stars
//         }
//         cout << endl; // Move to the next line after each row
//     }
//     return 0;
// }


// *********
// **** ****
// ***   ***
// **     **
// *       *

// #include <iostream>
// using namespace std;

// int main() {
//     int n = 7; // number of rows
    
//     // Upper part of the pattern
//     for (int i = 0; i < n; i++) {
//         // Left stars
//         for (int j = 0; j < n - i; j++) {
//             cout << "*";
//         }
        
//         // Spaces
//         for (int j = 0; j < 2 * i; j++) {
//             cout << " ";
//         }
        
//         // Right stars
//         for (int j = 0; j < n - i; j++) {
//             cout << "*";
//         }
        
//         cout << endl;
//     }
    
//     return 0;
// }

//    *
//   ***
//  *****
//   ***
//    *


// #include <iostream>
// using namespace std;

// int main() {
//     int n = 3;
    
//     // Print the entire diamond
//     for (int i = -n + 1; i < n; i++) {
//         int spaces = abs(i);
//         int stars = 2 * (n - spaces) - 1;
        
//         // Print spaces
//         for (int j = 0; j < spaces; j++) cout << " ";
        
//         // Print stars
//         for (int j = 0; j < stars; j++) cout << "*";
        
//         cout << endl;
//     }
    
//     return 0;


// make a program taking two input from user n1,n2 and when the user input the n2 find out all the palandom number after n1 and numbers of n2

   # include<iostream>
    using namespace std;
    int main() {
        int n1,n2,i,c=0;
        cout<<"Enter the first number: ";
        cin>>n1;
        cout<<"Enter the second number: ";
        cin>>n2;    
        for(i=n1;i<=n2;i++)
        {
            int num=i;
            int rev=0;
            while(num!=0)
            {
                rev=rev*10+num%10;
                num=num/10;
            }
            if(i==rev)
            {
                cout<<i<<" ";
                c++;
            }
        }
        cout<<endl;
        cout<<"Total palindrom numbers are: "<<c<<endl;
        return 0;
        }