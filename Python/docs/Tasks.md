# Python Questionnaire
## Comprehensive Programming Tasks & Challenges

---

## 📋 Global Rules

- **No in-built functions allowed** unless specifically mentioned
- Only use in-built functions if the question explicitly asks for them
- All code must follow proper coding guidelines
- Error handling and edge cases must be tested
- Each question has 3 test cases - all must pass before moving to the next question

---

## Topic 1: Loops

### Question 1: Sum of Even Numbers
Write a program that takes a positive integer n as input and calculates the sum of all even numbers from 1 to n (inclusive).

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops
- Handle edge cases (n < 1)

**Test Cases:**

**Test Case 1:**
- Input: n = 10
- Output: 30
- Explanation: 2 + 4 + 6 + 8 + 10 = 30

**Test Case 2:**
- Input: n = 1
- Output: 0
- Explanation: No even numbers from 1 to 1

**Test Case 3:**
- Input: n = 15
- Output: 56
- Explanation: 2 + 4 + 6 + 8 + 10 + 12 + 14 = 56

---

### Question 2: Reverse a Number
Write a program that takes an integer as input and prints its reverse using loops.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops only
- Handle negative numbers

**Test Cases:**

**Test Case 1:**
- Input: 12345
- Output: 54321

**Test Case 2:**
- Input: -9876
- Output: -6789

**Test Case 3:**
- Input: 100
- Output: 1

---

### Question 3: Prime Number Checker
Write a program that checks whether a given positive integer is prime or not.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops for checking divisibility
- Handle edge cases (numbers ≤ 1)

**Test Cases:**

**Test Case 1:**
- Input: 17
- Output: Prime

**Test Case 2:**
- Input: 24
- Output: Not Prime

**Test Case 3:**
- Input: 1
- Output: Not Prime

---

### Question 4: Print Pattern
Write a program that takes a positive integer n and prints the following pattern:

For n = 4:
```
1
1 2
1 2 3
1 2 3 4
```

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use nested loops
- Handle edge cases (n < 1)

**Test Cases:**

**Test Case 1:**
- Input: n = 3
- Output:
```
1
1 2
1 2 3
```

**Test Case 2:**
- Input: n = 1
- Output:
```
1
```

**Test Case 3:**
- Input: n = 5
- Output:
```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

---

### Question 5: Find Factorial
Write a program to calculate the factorial of a non-negative integer using loops.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops
- Handle edge cases (n = 0, negative numbers)
- Error handling for invalid input

**Test Cases:**

**Test Case 1:**
- Input: 5
- Output: 120

**Test Case 2:**
- Input: 0
- Output: 1

**Test Case 3:**
- Input: 7
- Output: 5040

---

## Topic 2: Conditional Operators

### Question 1: Maximum of Three Numbers
Write a program that takes three integers as input and prints the largest among them using conditional operators.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use conditional operators (if, elif, else)
- Handle edge cases (all numbers equal, two numbers equal)

**Test Cases:**

**Test Case 1:**
- Input: a = 10, b = 25, c = 15
- Output: 25

**Test Case 2:**
- Input: a = 50, b = 50, c = 30
- Output: 50

**Test Case 3:**
- Input: a = -5, b = -10, c = -3
- Output: -3

---

### Question 2: Grade Calculator
Write a program that takes a student's marks (0-100) as input and prints the grade based on the following criteria:
- `90-100`: A
- `80-89`: B
- `70-79`: C
- `60-69`: D
- Below 60: F

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use conditional operators
- Handle edge cases (marks < 0 or marks > 100)
- Display error message for invalid input

**Test Cases:**

**Test Case 1:**
- Input: marks = 85
- Output: B

**Test Case 2:**
- Input: marks = 59
- Output: F

**Test Case 3:**
- Input: marks = 101
- Output: Invalid marks. Please enter marks between 0 and 100.

---

### Question 3: Leap Year Checker
Write a program that takes a year as input and determines whether it is a leap year or not.

**Leap Year Rules:**
- Divisible by 4 AND not divisible by 100, OR
- Divisible by 400

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use conditional operators
- Handle edge cases (negative years, year 0)

**Test Cases:**

**Test Case 1:**
- Input: year = 2024
- Output: Leap Year

**Test Case 2:**
- Input: year = 1900
- Output: Not a Leap Year

**Test Case 3:**
- Input: year = 2000
- Output: Leap Year

---

### Question 4: Triangle Validity Checker
Write a program that takes three sides of a triangle as input and checks whether they can form a valid triangle. Also, classify the triangle as Equilateral, Isosceles, or Scalene if valid.

**Triangle Rules:**
- Sum of any two sides must be greater than the third side
- Equilateral: All three sides equal
- Isosceles: Two sides equal
- Scalene: All sides different

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use conditional operators
- Handle edge cases (negative sides, zero sides)

**Test Cases:**

**Test Case 1:**
- Input: a = 5, b = 5, c = 5
- Output: Valid Triangle - Equilateral

**Test Case 2:**
- Input: a = 5, b = 5, c = 8
- Output: Valid Triangle - Isosceles

**Test Case 3:**
- Input: a = 1, b = 2, c = 10
- Output: Not a Valid Triangle

---

### Question 5: Electricity Bill Calculator
Write a program that calculates the electricity bill based on units consumed. The rate structure is:
- First 100 units: ₹5 per unit
- Next 100 units `(101-200)`: ₹7 per unit
- Next 100 units `(201-300)`: ₹10 per unit
- Above 300 units: ₹15 per unit

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use conditional operators
- Handle edge cases (negative units, zero units)
- Display total bill amount

**Test Cases:**

**Test Case 1:**
- Input: units = 150
- Output: 850
- Explanation: (100 × 5) + (50 × 7) = 500 + 350 = 850

**Test Case 2:**
- Input: units = 320
- Output: 2800
- Explanation: (100 × 5) + (100 × 7) + (100 × 10) + (20 × 15) = 500 + 700 + 1000 + 300 = 2500

**Test Case 3:**
- Input: units = 75
- Output: 375
- Explanation: 75 × 5 = 375

---

## Topic 3: Functions

### Question 1: Calculate Power
Write a function calculate_power(base, exponent) that calculates base raised to the power of exponent without using any in-built functions.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must create and use a function
- Handle edge cases (exponent = 0, negative exponent)
- Use loops inside the function

**Test Cases:**

**Test Case 1:**
- Input: base = 2, exponent = 5
- Output: 32

**Test Case 2:**
- Input: base = 5, exponent = 0
- Output: 1

**Test Case 3:**
- Input: base = 3, exponent = 4
- Output: 81

---

### Question 2: Find GCD (Greatest Common Divisor)
Write a function find_gcd(num1, num2) that finds the GCD of two positive integers using the Euclidean algorithm.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must create and use a function
- Handle edge cases (one or both numbers are 0)
- Must use loops or recursion

**Test Cases:**

**Test Case 1:**
- Input: num1 = 48, num2 = 18
- Output: 6

**Test Case 2:**
- Input: num1 = 100, num2 = 50
- Output: 50

**Test Case 3:**
- Input: num1 = 17, num2 = 19
- Output: 1

---

### Question 3: Check Palindrome
Write a function is_palindrome(number) that checks whether a given integer is a palindrome or not. Return True if palindrome, False otherwise.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must create and use a function
- Handle edge cases (negative numbers, single digit)
- Use loops to reverse the number

**Test Cases:**

**Test Case 1:**
- Input: number = 12321
- Output: True

**Test Case 2:**
- Input: number = 12345
- Output: False

**Test Case 3:**
- Input: number = -121
- Output: False

---

### Question 4: Count Digits
Write a function count_digit_frequency(number, digit) that counts how many times a specific digit appears in a given number.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must create and use a function
- Handle edge cases (negative numbers, digit not in range `0-9`)
- Use loops to extract digits

**Test Cases:**

**Test Case 1:**
- Input: number = 122333, digit = 3
- Output: 3

**Test Case 2:**
- Input: number = 100000, digit = 0
- Output: 5

**Test Case 3:**
- Input: number = 987654, digit = 5
- Output: 1

---

### Question 5: Armstrong Number Checker
Write a function is_armstrong(number) that checks whether a given positive integer is an Armstrong number or not. An Armstrong number is a number that equals the sum of its digits each raised to the power of the number of digits.

Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

**Rules:**
- No in-built functions allowed (except input() and print())
- Must create and use a function
- You can create helper functions if needed
- Handle edge cases (single digit numbers, negative numbers)
- Use loops for all operations

**Test Cases:**

**Test Case 1:**
- Input: number = 153
- Output: True

**Test Case 2:**
- Input: number = 9474
- Output: True
- Explanation: 9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 + 2401 + 256 = 9474

**Test Case 3:**
- Input: number = 123
- Output: False

---

## Topic 4: Strings

### Question 1: Count Vowels and Consonants
Write a program that takes a string as input and counts the number of vowels and consonants in it.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to iterate through the string
- Handle edge cases (empty string, strings with numbers/special characters)
- Consider both uppercase and lowercase vowels

**Test Cases:**

**Test Case 1:**
- Input: "Hello World"
- Output: Vowels: 3, Consonants: 7

**Test Case 2:**
- Input: "Python123"
- Output: Vowels: 1, Consonants: 5

**Test Case 3:**
- Input: "aeiouAEIOU"
- Output: Vowels: 10, Consonants: 0

---

### Question 2: Reverse Words in a String
Write a program that takes a string as input and reverses each word in the string while maintaining the word order.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to process the string
- Handle edge cases (single word, multiple spaces between words)
- Maintain single space between words in output

**Test Cases:**

**Test Case 1:**
- Input: "Hello World"
- Output: "olleH dlroW"

**Test Case 2:**
- Input: "Python Programming"
- Output: "nohtyP gnimmargorP"

**Test Case 3:**
- Input: "Code"
- Output: "edoC"

---

### Question 3: Check String Palindrome
Write a program that checks whether a given string is a palindrome or not (ignoring spaces and case).

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to compare characters
- Handle edge cases (empty string, single character)
- Ignore spaces and case sensitivity

**Test Cases:**

**Test Case 1:**
- Input: "racecar"
- Output: Palindrome

**Test Case 2:**
- Input: "A man a plan a canal Panama"
- Output: Palindrome

**Test Case 3:**
- Input: "Hello"
- Output: Not a Palindrome

---

### Question 4: Count Character Frequency
Write a program that takes a string and a character as input, and counts how many times that character appears in the string (case-insensitive).

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to iterate through string
- Handle edge cases (character not in string, empty string)
- Case-insensitive comparison

**Test Cases:**

**Test Case 1:**
- Input: string = "Programming", character = "g"
- Output: 2

**Test Case 2:**
- Input: string = "Hello World", character = "o"
- Output: 2

**Test Case 3:**
- Input: string = "Python", character = "z"
- Output: 0

---

### Question 5: Remove Duplicate Characters
Write a program that takes a string as input and removes all duplicate characters, keeping only the first occurrence of each character (preserve order and case).

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops and string building
- Handle edge cases (empty string, all unique characters)
- Preserve the original order and case of characters

**Test Cases:**

**Test Case 1:**
- Input: "programming"
- Output: "progamin"

**Test Case 2:**
- Input: "Hello"
- Output: "Helo"

**Test Case 3:**
- Input: "aabbcc"
- Output: "abc"

---

## Topic 5: Lists

### Question 1: Find Second Largest Element
Write a program that takes a list of integers as input and finds the second largest element in the list.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to find the second largest
- Handle edge cases (list with less than 2 elements, all elements same)
- Do not sort the list

**Test Cases:**

**Test Case 1:**
- Input: [10, 20, 4, 45, 99]
- Output: 45

**Test Case 2:**
- Input: [5, 5, 5, 5]
- Output: No second largest element

**Test Case 3:**
- Input: [100, 50, 75, 25]
- Output: 75

---

### Question 2: Remove Duplicates from List
Write a program that takes a list as input and removes all duplicate elements while preserving the original order of first occurrences.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to check and remove duplicates
- Handle edge cases (empty list, no duplicates)
- Preserve the order of first occurrence

**Test Cases:**

**Test Case 1:**
- Input: [1, 2, 3, 2, 4, 1, 5]
- Output: [1, 2, 3, 4, 5]

**Test Case 2:**
- Input: [10, 10, 10, 10]
- Output: [10]

**Test Case 3:**
- Input: [5, 4, 3, 2, 1]
- Output: [5, 4, 3, 2, 1]

---

### Question 3: Merge Two Sorted Lists
Write a program that takes two sorted lists as input and merges them into a single sorted list without using any sorting function.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to merge
- Handle edge cases (one or both lists empty)
- Result must be sorted in ascending order

**Test Cases:**

**Test Case 1:**
- Input: list1 = [1, 3, 5, 7], list2 = [2, 4, 6, 8]
- Output: [1, 2, 3, 4, 5, 6, 7, 8]

**Test Case 2:**
- Input: list1 = [1, 2, 3], list2 = [4, 5, 6]
- Output: [1, 2, 3, 4, 5, 6]

**Test Case 3:**
- Input: list1 = [], list2 = [1, 2, 3]
- Output: [1, 2, 3]

---

### Question 4: Rotate List
Write a program that takes a list and an integer k as input, and rotates the list to the right by k positions.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to rotate
- Handle edge cases (k = 0, k > list length, empty list)
- If k is greater than list length, rotate by k % length

**Test Cases:**

**Test Case 1:**
- Input: list = [1, 2, 3, 4, 5], k = 2
- Output: [4, 5, 1, 2, 3]

**Test Case 2:**
- Input: list = [10, 20, 30], k = 1
- Output: [30, 10, 20]

**Test Case 3:**
- Input: list = [1, 2, 3, 4], k = 6
- Output: [3, 4, 1, 2]
- Explanation: k = 6 % 4 = 2, so rotate by 2 positions

---

### Question 5: Find All Pairs with Given Sum
Write a program that takes a list of integers and a target sum as input, and finds all unique pairs of elements that add up to the target sum.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use nested loops to find pairs
- Handle edge cases (empty list, no pairs found)
- Each pair should be printed only once
- Do not use the same element twice

**Test Cases:**

**Test Case 1:**
- Input: list = [1, 2, 3, 4, 5], target = 6
- Output: [(1, 5), (2, 4)]

**Test Case 2:**
- Input: list = [2, 4, 3, 5, 7, 8], target = 10
- Output: [(2, 8), (3, 7)]

**Test Case 3:**
- Input: list = [1, 1, 1, 1], target = 2
- Output: [(1, 1)]

---

## Topic 6: Tuples

### Question 1: Find Maximum and Minimum in Tuple
Write a program that takes a tuple of integers as input and finds both the maximum and minimum elements without using any in-built functions.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to find max and min
- Handle edge cases (single element tuple, all elements same)
- Return both max and min values

**Test Cases:**

**Test Case 1:**
- Input: (10, 5, 20, 15, 30)
- Output: Maximum: 30, Minimum: 5

**Test Case 2:**
- Input: (7, 7, 7, 7)
- Output: Maximum: 7, Minimum: 7

**Test Case 3:**
- Input: (-5, -10, -3, -8)
- Output: Maximum: -3, Minimum: -10

---

### Question 2: Count Element Occurrences in Tuple
Write a program that takes a tuple and an element as input, and counts how many times that element appears in the tuple.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to count occurrences
- Handle edge cases (empty tuple, element not in tuple)
- Element can be of any type (int, string, etc.)

**Test Cases:**

**Test Case 1:**
- Input: tuple = (1, 2, 3, 2, 4, 2, 5), element = 2
- Output: 3

**Test Case 2:**
- Input: tuple = ('a', 'b', 'c', 'a', 'a'), element = 'a'
- Output: 3

**Test Case 3:**
- Input: tuple = (10, 20, 30), element = 40
- Output: 0

---

### Question 3: Concatenate Multiple Tuples
Write a program that takes multiple tuples as input and concatenates them into a single tuple without using the + operator or any in-built functions.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to build the new tuple
- Handle edge cases (empty tuples, single tuple)
- Create a new tuple with all elements

**Test Cases:**

**Test Case 1:**
- Input: tuple1 = (1, 2, 3), tuple2 = (4, 5, 6)
- Output: (1, 2, 3, 4, 5, 6)

**Test Case 2:**
- Input: tuple1 = ('a', 'b'), tuple2 = ('c',), tuple3 = ('d', 'e')
- Output: ('a', 'b', 'c', 'd', 'e')

**Test Case 3:**
- Input: tuple1 = (10,), tuple2 = ()
- Output: (10,)

---

### Question 4: Find Index of Element in Tuple
Write a program that takes a tuple and an element as input, and returns the index of the first occurrence of that element. If the element is not found, return -1.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to search for the element
- Handle edge cases (empty tuple, element not found)
- Return only the first occurrence index

**Test Cases:**

**Test Case 1:**
- Input: tuple = (10, 20, 30, 40, 20), element = 20
- Output: 1

**Test Case 2:**
- Input: tuple = ('apple', 'banana', 'cherry'), element = 'cherry'
- Output: 2

**Test Case 3:**
- Input: tuple = (1, 2, 3, 4), element = 5
- Output: -1

---

### Question 5: Reverse a Tuple
Write a program that takes a tuple as input and returns a new tuple with elements in reverse order without using any in-built reverse functions.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to reverse
- Handle edge cases (empty tuple, single element)
- Create and return a new tuple

**Test Cases:**

**Test Case 1:**
- Input: (1, 2, 3, 4, 5)
- Output: (5, 4, 3, 2, 1)

**Test Case 2:**
- Input: ('a', 'b', 'c')
- Output: ('c', 'b', 'a')

**Test Case 3:**
- Input: (100,)
- Output: (100,)

---

## Topic 7: Sets

### Question 1: Find Union of Two Sets
Write a program that takes two sets as input and finds their union without using any in-built union operations.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to combine sets
- Handle edge cases (empty sets, identical sets)
- Result should contain no duplicates

**Test Cases:**

**Test Case 1:**
- Input: set1 = `{1, 2, 3}`, set2 = `{3, 4, 5}`
- Output: `{1, 2, 3, 4, 5}`

**Test Case 2:**
- Input: set1 = `{10, 20}`, set2 = `{30, 40}`
- Output: `{10, 20, 30, 40}`

**Test Case 3:**
- Input: set1 = `{1, 2, 3}`, set2 = `{}`
- Output: `{1, 2, 3}`

---

### Question 2: Find Intersection of Two Sets
Write a program that takes two sets as input and finds their intersection without using any in-built intersection operations.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to find common elements
- Handle edge cases (no common elements, empty sets)
- Result should only contain elements present in both sets

**Test Cases:**

**Test Case 1:**
- Input: set1 = `{1, 2, 3, 4}`, set2 = `{3, 4, 5, 6}`
- Output: `{3, 4}`

**Test Case 2:**
- Input: set1 = `{10, 20, 30}`, set2 = `{40, 50}`
- Output: `{}`

**Test Case 3:**
- Input: set1 = `{'a', 'b', 'c'}`, set2 = `{'b', 'c', 'd'}`
- Output: `{'b', 'c'}`

---

### Question 3: Find Difference of Two Sets
Write a program that takes two sets as input and finds the difference (set1 - set2) without using any in-built difference operations.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to find elements in set1 but not in set2
- Handle edge cases (empty sets, no difference)
- Result should contain elements only in set1

**Test Cases:**

**Test Case 1:**
- Input: set1 = `{1, 2, 3, 4, 5}`, set2 = `{4, 5, 6, 7}`
- Output: `{1, 2, 3}`

**Test Case 2:**
- Input: set1 = `{10, 20, 30}`, set2 = `{10, 20, 30}`
- Output: `{}`

**Test Case 3:**
- Input: set1 = `{'a', 'b', 'c'}`, set2 = `{'d', 'e'}`
- Output: `{'a', 'b', 'c'}`

---

### Question 4: Check Subset
Write a program that takes two sets as input and checks whether the first set is a subset of the second set without using any in-built subset operations.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to check if all elements of set1 are in set2
- Handle edge cases (empty sets, identical sets)
- Return True if set1 is subset of set2, False otherwise

**Test Cases:**

**Test Case 1:**
- Input: set1 = `{1, 2}`, set2 = `{1, 2, 3, 4, 5}`
- Output: True

**Test Case 2:**
- Input: set1 = `{1, 2, 6}`, set2 = `{1, 2, 3, 4, 5}`
- Output: False

**Test Case 3:**
- Input: set1 = `{}`, set2 = `{1, 2, 3}`
- Output: True

---

### Question 5: Find Symmetric Difference
Write a program that takes two sets as input and finds their symmetric difference (elements in either set but not in both) without using any in-built symmetric difference operations.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to find elements in either set but not in both
- Handle edge cases (empty sets, identical sets)
- Result should contain elements unique to each set

**Test Cases:**

**Test Case 1:**
- Input: set1 = `{1, 2, 3, 4}`, set2 = `{3, 4, 5, 6}`
- Output: `{1, 2, 5, 6}`

**Test Case 2:**
- Input: set1 = `{10, 20, 30}`, set2 = `{10, 20, 30}`
- Output: `{}`

**Test Case 3:**
- Input: set1 = `{'a', 'b'}`, set2 = `{'c', 'd'}`
- Output: `{'a', 'b', 'c', 'd'}`

---

## Topic 8: Dictionaries

### Question 1: Count Character Frequency
Write a program that takes a string as input and creates a dictionary with characters as keys and their frequencies as values.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to count frequency
- Handle edge cases (empty string, spaces and special characters)
- Create dictionary manually

**Test Cases:**

**Test Case 1:**
- Input: "hello"
- Output: `{'h': 1, 'e': 1, 'l': 2, 'o': 1}`

**Test Case 2:**
- Input: "programming"
- Output: `{'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1}`

**Test Case 3:**
- Input: "aaa"
- Output: `{'a': 3}`

---

### Question 2: Merge Two Dictionaries
Write a program that takes two dictionaries as input and merges them. If a key exists in both dictionaries, sum their values.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to merge dictionaries
- Handle edge cases (empty dictionaries, no common keys)
- Create a new dictionary with merged values

**Test Cases:**

**Test Case 1:**
- Input: dict1 = `{'a': 10, 'b': 20}`, dict2 = `{'b': 30, 'c': 40}`
- Output: `{'a': 10, 'b': 50, 'c': 40}`

**Test Case 2:**
- Input: dict1 = `{'x': 5}`, dict2 = `{'y': 10, 'z': 15}`
- Output: `{'x': 5, 'y': 10, 'z': 15}`

**Test Case 3:**
- Input: dict1 = `{}`, dict2 = `{'a': 1, 'b': 2}`
- Output: `{'a': 1, 'b': 2}`

---

### Question 3: Find Key with Maximum Value
Write a program that takes a dictionary with integer values as input and finds the key with the maximum value without using any in-built functions.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to find maximum value
- Handle edge cases (empty dictionary, multiple keys with same max value)
- Return the first key found with maximum value

**Test Cases:**

**Test Case 1:**
- Input: `{'a': 10, 'b': 50, 'c': 30}`
- Output: 'b'

**Test Case 2:**
- Input: `{'x': 100, 'y': 100, 'z': 50}`
- Output: 'x'

**Test Case 3:**
- Input: `{'p': 5}`
- Output: 'p'

---

### Question 4: Invert Dictionary
Write a program that takes a dictionary as input and inverts it (keys become values and values become keys). Assume all values are unique.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to invert dictionary
- Handle edge cases (empty dictionary)
- Create a new inverted dictionary

**Test Cases:**

**Test Case 1:**
- Input: `{'a': 1, 'b': 2, 'c': 3}`
- Output: `{1: 'a', 2: 'b', 3: 'c'}`

**Test Case 2:**
- Input: `{'name': 'John', 'age': '25'}`
- Output: `{'John': 'name', '25': 'age'}`

**Test Case 3:**
- Input: `{'x': 100}`
- Output: `{100: 'x'}`

---

### Question 5: Group Anagrams
Write a program that takes a list of strings as input and groups anagrams together using a dictionary. Anagrams are words with the same characters in different order.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must use loops to check for anagrams
- Handle edge cases (empty list, no anagrams)
- Create dictionary where keys represent sorted character patterns

**Test Cases:**

**Test Case 1:**
- Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
- Output:
```

  'aet': ['eat', 'tea', 'ate'],
  'ant': ['tan', 'nat'],
  'abt': ['bat']
```

**Test Case 2:**
- Input: ['hello', 'world']
- Output:
```

  'ehllo': ['hello'],
  'dlorw': ['world']
```

**Test Case 3:**
- Input: ['abc', 'bca', 'cab']
- Output:
```

  'abc': ['abc', 'bca', 'cab']
```

---

## Topic 9: File Handling

### Question 1: Count Lines, Words, and Characters
Write a program that reads a text file and counts the total number of lines, words, and characters in it.

**Rules:**
- You can use open(), read(), close() functions
- Must use loops to count words and characters
- Handle edge cases (empty file, file not found)
- Proper error handling required

**Test Cases:**

**Test Case 1:**
- Input: File contains "Hello World\nPython Programming"
- Output: Lines: 2, Words: 4, Characters: 30

**Test Case 2:**
- Input: File contains "Test"
- Output: Lines: 1, Words: 1, Characters: 4

**Test Case 3:**
- Input: Empty file
- Output: Lines: 0, Words: 0, Characters: 0

---

### Question 2: Copy File Content
Write a program that reads content from one file and copies it to another file line by line.

**Rules:**
- You can use open(), read(), write(), close() functions
- Must use loops to read and write lines
- Handle edge cases (source file not found, destination file already exists)
- Proper error handling and file closing required

**Test Cases:**

**Test Case 1:**
- Input: source.txt contains "Line 1\nLine 2\nLine 3"
- Output: destination.txt contains exact same content

**Test Case 2:**
- Input: source.txt contains "Single line"
- Output: destination.txt contains "Single line"

**Test Case 3:**
- Input: source.txt is empty
- Output: destination.txt is empty

---

### Question 3: Find and Replace in File
Write a program that reads a file, finds all occurrences of a specific word, replaces it with another word, and writes the result to a new file.

**Rules:**
- You can use open(), read(), write(), close() functions
- Must use loops to process and replace text
- Handle edge cases (word not found, empty file)
- Case-sensitive replacement
- Proper error handling required

**Test Cases:**

**Test Case 1:**
- Input: File contains "Hello World Hello", find = "Hello", replace = "Hi"
- Output: New file contains "Hi World Hi"

**Test Case 2:**
- Input: File contains "Python is great", find = "Java", replace = "C++"
- Output: New file contains "Python is great"

**Test Case 3:**
- Input: File contains "test test test", find = "test", replace = "exam"
- Output: New file contains "exam exam exam"

---

### Question 4: Count Word Frequency in File
Write a program that reads a text file and creates a frequency count of each word, then writes the results to a new file.

**Rules:**
- You can use open(), read(), write(), close() functions
- Must use loops and dictionary to count frequency
- Handle edge cases (empty file, punctuation handling)
- Case-insensitive counting
- Proper error handling required

**Test Cases:**

**Test Case 1:**
- Input: File contains "hello world hello"
- Output: New file contains:
```
hello: 2
world: 1
```

**Test Case 2:**
- Input: File contains "Python Python python"
- Output: New file contains:
```
python: 3
```

**Test Case 3:**
- Input: File contains "a a b b b"
- Output: New file contains:
```
a: 2
b: 3
```

---

### Question 5: Merge Multiple Files
Write a program that reads content from multiple files and merges them into a single output file, with each file's content separated by a header showing the source filename.

**Rules:**
- You can use open(), read(), write(), close() functions
- Must use loops to read from multiple files
- Handle edge cases (one or more files not found, empty files)
- Add headers like "--- Content from file1.txt ---"
- Proper error handling and file closing required

**Test Cases:**

**Test Case 1:**
- Input: file1.txt = "Content 1", file2.txt = "Content 2"
- Output: merged.txt =
```
--- Content from file1.txt ---
Content 1
--- Content from file2.txt ---
Content 2
```

**Test Case 2:**
- Input: file1.txt = "Hello", file2.txt = "", file3.txt = "World"
- Output: merged.txt =
```
--- Content from file1.txt ---
Hello
--- Content from file2.txt ---
--- Content from file3.txt ---
World
```

**Test Case 3:**
- Input: Only file1.txt = "Single file"
- Output: merged.txt =
```
--- Content from file1.txt ---
Single file
```

---

## Combined Topics (All Topics Integration)

This section combines all topics: Loops, Conditional Operators, Functions, Strings, Lists, Tuples, Sets, Dictionaries, and File Handling

### Question 1: Student Grade Management System
Write a program that reads student data from a file where each line contains: name,marks1,marks2,marks3. Calculate the average for each student, assign grades (A/B/C/D/F), and write the results to a new file.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, conditionals, lists, and string operations
- Create a function to calculate average
- Create a function to determine grade based on average
- Handle edge cases (empty file, invalid data)
- Grade criteria: `A(90+), B(80-89), C(70-79), D(60-69), F(&lt;60)`

**Test Cases:**

**Test Case 1:**
- Input file:
```
John,85,90,88
Alice,92,95,98
```
- Output file:
```
John,87.67,B
Alice,95.0,A
```

**Test Case 2:**
- Input file:
```
Bob,50,55,45
```
- Output file:
```
Bob,50.0,F
```

**Test Case 3:**
- Input file:
```
Charlie,75,75,75
```
- Output file:
```
Charlie,75.0,C
```

---

### Question 2: Word Analysis Tool
Write a program that reads a text file and creates a comprehensive analysis including: total words, unique words, word frequency dictionary, and the top 3 most frequent words. Write the analysis to a new file.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, dictionaries, sets, and string operations
- Create functions for counting and sorting
- Handle edge cases (empty file, punctuation)
- Case-insensitive analysis

**Test Cases:**

**Test Case 1:**
- Input file: "hello world hello python world world"
- Output file:
```
Total Words: 6
Unique Words: 3
Word Frequency:
hello: 2
world: 3
python: 1
Top 3 Words: world(3), hello(2), python(1)
```

**Test Case 2:**
- Input file: "test test test"
- Output file:
```
Total Words: 3
Unique Words: 1
Word Frequency:
test: 3
Top 3 Words: test(3)
```

**Test Case 3:**
- Input file: "a b c d e"
- Output file:
```
Total Words: 5
Unique Words: 5
Word Frequency:
a: 1
b: 1
c: 1
d: 1
e: 1
Top 3 Words: a(1), b(1), c(1)
```

---

### Question 3: List Operations Suite
Write a program that takes a list of integers from user input and provides the following operations using functions: find prime numbers, find perfect numbers, find Armstrong numbers, and store results in separate lists.

**Rules:**
- No in-built functions allowed (except input() and print())
- Must create separate functions for each check
- Must use loops, conditionals, and lists
- Handle edge cases (empty list, negative numbers)
- Display all results clearly

**Test Cases:**

**Test Case 1:**
- Input: [1, 2, 3, 5, 6, 28, 153]
- Output:
```
Prime Numbers: [2, 3, 5]
Perfect Numbers: [6, 28]
Armstrong Numbers: [1, 2, 3, 5, 6, 153]
```

**Test Case 2:**
- Input: [10, 15, 20]
- Output:
```
Prime Numbers: []
Perfect Numbers: []
Armstrong Numbers: []
```

**Test Case 3:**
- Input: [1, 2, 3]
- Output:
```
Prime Numbers: [2, 3]
Perfect Numbers: []
Armstrong Numbers: [1, 2, 3]
```

---

### Question 4: Contact Book Manager
Write a program that manages a contact book stored in a file. Each line in the file contains: name:phone:email. Implement functions to: add contact, search by name, delete contact, and display all contacts.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, conditionals, strings, and lists
- Create separate functions for each operation
- Handle edge cases (duplicate names, contact not found)
- Proper error handling required

**Test Cases:**

**Test Case 1:**
- Operation: Add contact "John:1234567890:john@email.com"
- Output: Contact added successfully

**Test Case 2:**
- Operation: Search "John"
- Output: Name: John, Phone: 1234567890, Email: john@email.com

**Test Case 3:**
- Operation: Delete "John"
- Output: Contact deleted successfully

---

### Question 5: Data Statistics Calculator
Write a program that reads numeric data from a file (one number per line) and calculates: mean, median, mode, range, and standard deviation. Store results in a dictionary and write to output file.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, lists, dictionaries, and functions
- Create separate functions for each statistical measure
- Handle edge cases (empty file, single number)
- No statistical libraries allowed

**Test Cases:**

**Test Case 1:**
- Input file: 10, 20, 30, 40, 50
- Output file:
```
Mean: 30.0
Median: 30
Mode: No mode (all unique)
Range: 40
Standard Deviation: 14.14
```

**Test Case 2:**
- Input file: 5, 5, 5, 5
- Output file:
```
Mean: 5.0
Median: 5
Mode: 5
Range: 0
Standard Deviation: 0.0
```

**Test Case 3:**
- Input file: 1, 2, 3, 2, 1
- Output file:
```
Mean: 1.8
Median: 2
Mode: 1, 2
Range: 2
Standard Deviation: 0.75
```

---

### Question 6: Text File Cipher System
Write a program that encrypts and decrypts text files using Caesar cipher. Implement functions to: encrypt file, decrypt file, and brute force decrypt (try all possible shifts). Handle uppercase, lowercase, and preserve non-alphabetic characters.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, conditionals, strings, and functions
- Create separate functions for encryption and decryption
- Handle edge cases (empty file, special characters)
- Shift value between `1-25`

**Test Cases:**

**Test Case 1:**
- Input: "Hello World", shift = 3
- Output (Encrypted): "Khoor Zruog"
- Output (Decrypted): "Hello World"

**Test Case 2:**
- Input: "Python 123!", shift = 5
- Output (Encrypted): "Udymts 123!"
- Output (Decrypted): "Python 123!"

**Test Case 3:**
- Input: "ABC xyz", shift = 1
- Output (Encrypted): "BCD yza"
- Output (Decrypted): "ABC xyz"

---

### Question 7: Student Performance Analyzer
Write a program that reads student exam data from multiple files (one file per subject). Each file contains: student_name,marks. Create a comprehensive report showing: student-wise total, average, rank, subject-wise toppers, and class statistics.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, dictionaries, lists, tuples, sets, and functions
- Create functions for calculations and rankings
- Handle edge cases (missing students in some subjects)
- Write detailed report to output file

**Test Cases:**

**Test Case 1:**
- Math.txt: John,85 | Alice,95
- Science.txt: John,90 | Alice,92
- Output:
```
Student Report:
John - Total: 175, Average: 87.5, Rank: 2
Alice - Total: 187, Average: 93.5, Rank: 1

Subject Toppers:
Math: Alice(95)
Science: John(90)
```

**Test Case 2:**
- English.txt: Bob,70 | Charlie,75
- History.txt: Bob,80 | Charlie,70
- Output:
```
Student Report:
Bob - Total: 150, Average: 75.0, Rank: 1
Charlie - Total: 145, Average: 72.5, Rank: 2

Subject Toppers:
English: Charlie(75)
History: Bob(80)
```

**Test Case 3:**
- Physics.txt: Alice,100
- Chemistry.txt: Alice,98 | Bob,95
- Output:
```
Student Report:
Alice - Total: 198, Average: 99.0, Rank: 1
Bob - Total: 95, Average: 95.0, Rank: 2

Subject Toppers:
Physics: Alice(100)
Chemistry: Alice(98)
```

---

### Question 8: Log File Analyzer
Write a program that analyzes server log files containing entries like: timestamp,ip_address,status_code,response_time. Generate statistics: total requests, unique IPs, status code distribution, average response time per IP, and identify problematic IPs (high error rates).

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, dictionaries, sets, lists, and functions
- Create functions for parsing and analysis
- Handle edge cases (malformed entries, empty file)
- Write comprehensive report to output file

**Test Cases:**

**Test Case 1:**
- Input:
```
2024-01-01 10:00:00,192.168.1.1,200,150
2024-01-01 10:01:00,192.168.1.1,200,200
2024-01-01 10:02:00,192.168.1.2,404,50
```
- Output:
```
Total Requests: 3
Unique IPs: 2
Status Distribution: `{200: 2, 404: 1}`
Average Response Time:
192.168.1.1: 175ms
192.168.1.2: 50ms
Problematic IPs: 192.168.1.2 (33.33% errors)
```

**Test Case 2:**
- Input:
```
2024-01-01 10:00:00,10.0.0.1,500,1000
2024-01-01 10:01:00,10.0.0.1,500,1200
```
- Output:
```
Total Requests: 2
Unique IPs: 1
Status Distribution: `{500: 2}`
Average Response Time:
10.0.0.1: 1100ms
Problematic IPs: 10.0.0.1 (100% errors)
```

**Test Case 3:**
- Input:
```
2024-01-01 10:00:00,172.16.0.1,200,100
```
- Output:
```
Total Requests: 1
Unique IPs: 1
Status Distribution: `{200: 1}`
Average Response Time:
172.16.0.1: 100ms
Problematic IPs: None
```

---

### Question 9: Inventory Management System
Write a program that manages product inventory stored in a file. Each line contains: product_id,name,quantity,price. Implement functions to: add product, update quantity, search by name/id, calculate total inventory value, and generate low stock report (quantity < 10).

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, dictionaries, lists, conditionals, and functions
- Create separate functions for each operation
- Handle edge cases (duplicate IDs, invalid quantities)
- Write reports to output file

**Test Cases:**

**Test Case 1:**
- Operation: Add product "101,Laptop,5,50000"
- Output: Product added successfully

**Test Case 2:**
- Operation: Update quantity "101" to 15
- Output: Quantity updated. New stock: 15

**Test Case 3:**
- Operation: Generate low stock report
- Output:
```
Low Stock Products:
101,Laptop,5,50000
Total Inventory Value: 250000
```

---

### Question 10: Pattern Matcher in Files
Write a program that searches for specific patterns in text files: phone numbers (XXX-XXX-XXXX), email addresses, and URLs. Create a dictionary with pattern types as keys and list of matches as values. Write results to output file.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, strings, lists, dictionaries, and conditionals
- Create functions for each pattern type
- Handle edge cases (no matches, malformed patterns)
- Case-insensitive for email/URL matching

**Test Cases:**

**Test Case 1:**
- Input file: "Contact: 123-456-7890, Email: test@email.com"
- Output:
```
Phone Numbers: ['123-456-7890']
Emails: ['test@email.com']
URLs: []
```

**Test Case 2:**
- Input file: "Visit https://example.com or call 999-888-7777"
- Output:
```
Phone Numbers: ['999-888-7777']
Emails: []
URLs: ['https://example.com']
```

**Test Case 3:**
- Input file: "No patterns here"
- Output:
```
Phone Numbers: []
Emails: []
URLs: []
```

---

### Question 11: Shopping Cart Calculator
Write a program that reads shopping cart data from a file where each line contains: item_name,quantity,price_per_unit,discount_percentage. Calculate subtotal, apply discounts, add tax (18%), and generate detailed bill with itemized breakdown.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, lists, dictionaries, and functions
- Create functions for calculations
- Handle edge cases (zero quantity, invalid discount)
- Write formatted bill to output file

**Test Cases:**

**Test Case 1:**
- Input: "Laptop,1,50000,10"
- Output:
```
Item: Laptop
Quantity: 1
Price: 50000
Discount (10%): -5000
Subtotal: 45000
Tax (18%): 8100
Total: 53100
```

**Test Case 2:**
- Input: "Mouse,2,500,5" and "Keyboard,1,1500,0"
- Output:
```
Item: Mouse
Quantity: 2
Price: 1000
Discount (5%): -50
Subtotal: 950
Item: Keyboard
Quantity: 1
Price: 1500
Discount (0%): 0
Subtotal: 1500
Grand Total: 2450
Tax (18%): 441
Final Total: 2891
```

**Test Case 3:**
- Input: "Book,3,200,15"
- Output:
```
Item: Book
Quantity: 3
Price: 600
Discount (15%): -90
Subtotal: 510
Tax (18%): 91.8
Total: 601.8
```

---

### Question 12: Text Formatter and Beautifier
Write a program that reads a text file and formats it by: removing extra spaces, capitalizing first letter of sentences, ensuring proper punctuation spacing, and breaking long lines (>80 characters) at word boundaries. Write formatted text to new file.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, strings, conditionals, and functions
- Create functions for each formatting rule
- Handle edge cases (empty file, already formatted text)
- Preserve paragraph breaks

**Test Cases:**

**Test Case 1:**
- Input: "hello   world.this is    a test."
- Output: "Hello world. This is a test."

**Test Case 2:**
- Input: "python is great.   it's   easy to learn."
- Output: "Python is great. It's easy to learn."

**Test Case 3:**
- Input: "a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d"
- Output:
```
A b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k
l m n o p q r s t u v w x y z a b c d
```

---

### Question 13: Duplicate File Content Finder
Write a program that takes multiple file paths as input, reads their content, and identifies files with duplicate content. Group duplicate files together and write a report showing which files have identical content.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, dictionaries, lists, sets, and functions
- Create functions for content comparison
- Handle edge cases (empty files, single file)
- Write report to output file

**Test Cases:**

**Test Case 1:**
- file1.txt: "Hello World"
- file2.txt: "Hello World"
- file3.txt: "Different"
- Output:
```
Duplicate Group 1:
file1.txt, file2.txt
Unique Files:
file3.txt
```

**Test Case 2:**
- file1.txt: "Test"
- file2.txt: "Test"
- file3.txt: "Test"
- Output:
```
Duplicate Group 1:
file1.txt, file2.txt, file3.txt
```

**Test Case 3:**
- file1.txt: "A"
- file2.txt: "B"
- file3.txt: "C"
- Output:
```
No duplicates found
Unique Files:
file1.txt, file2.txt, file3.txt
```

---

### Question 14: Quiz Score Processor
Write a program that reads quiz data from a file where each line contains: student_name,answer1,answer2,...,answer10 and a separate file with correct answers. Calculate scores, percentages, pass/fail (pass >= 60%), and generate a detailed report with class statistics.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, lists, dictionaries, tuples, and functions
- Create functions for scoring and statistics
- Handle edge cases (missing answers, wrong format)
- Write comprehensive report to output file

**Test Cases:**

**Test Case 1:**
- Answers: A,B,C,D,A,B,C,D,A,B
- John: A,B,C,D,A,B,C,D,A,B
- Alice: A,B,C,D,A,X,X,X,X,X
- Output:
```
John: 10/10 (100%) - Pass
Alice: 5/10 (50%) - Fail
Class Average: 75%
Pass Rate: 50%
```

**Test Case 2:**
- Answers: A,A,A,A,A,A,A,A,A,A
- Bob: A,A,A,A,A,A,B,B,B,B
- Output:
```
Bob: 6/10 (60%) - Pass
Class Average: 60%
Pass Rate: 100%
```

**Test Case 3:**
- Answers: B,C,D,A,B,C,D,A,B,C
- Charlie: B,C,D,A,B,C,D,A,B,C
- Output:
```
Charlie: 10/10 (100%) - Pass
Class Average: 100%
Pass Rate: 100%
```

---

### Question 15: CSV Data Transformer
Write a program that reads a CSV file with columns: name,age,salary,department. Transform the data by: filtering records (age > 25), grouping by department, calculating average salary per department, and sorting departments by total employees. Write results to new file.

**Rules:**
- You can use file operations: open(), read(), write(), close()
- Must use loops, dictionaries, lists, tuples, and functions
- Create functions for filtering, grouping, and calculations
- Handle edge cases (empty file, invalid data)
- Write formatted output to file

**Test Cases:**

**Test Case 1:**
- Input:
```
John,30,50000,IT
Alice,28,55000,IT
Bob,24,45000,HR
```
- Output:
```
Filtered Records (age > 25):
John,30,50000,IT
Alice,28,55000,IT

Department Statistics:
IT: 2 employees, Average Salary: 52500
```

**Test Case 2:**
- Input:
```
Charlie,26,60000,Finance
David,27,65000,Finance
Eve,29,70000,IT
```
- Output:
```
Filtered Records (age > 25):
Charlie,26,60000,Finance
David,27,65000,Finance
Eve,29,70000,IT

Department Statistics:
Finance: 2 employees, Average Salary: 62500
IT: 1 employees, Average Salary: 70000
```

**Test Case 3:**
- Input:
```
Frank,22,40000,HR
Grace,23,42000,HR
```
- Output:
```
Filtered Records (age > 25):
None

Department Statistics:
No departments found
```

---

**Back to Resources:** [Resources](Resources)

**Next: OOPS Concepts:** [OOPS](OOPS)
