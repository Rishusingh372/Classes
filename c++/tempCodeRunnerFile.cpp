    int n, t1 = 0, t2 = 1, nextTerm = 0;
    cout << "Enter the number of terms: ";
    cin >> n;
    cout << "Fibonacci Series: ";
    for (int i = 1; i <= n; ++i) {
        if (i == 1) {
            cout << t1 << ", "; // Print the first term
        } else if (i == 2) {
            cout << t2 << ", "; // Print the second term
        } else {
            nextTerm = t1 + t2; // Calculate the next term
            t1 = t2; // Update t1 to the second term
            t2 = nextTerm; // Update t2 to the next term
            cout << nextTerm << ", "; // Print the next term
        }
    }
    cout << "..." << endl; // Indicate continuation of the series