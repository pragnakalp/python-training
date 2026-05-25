# OOPS Programming Tasks
## Object-Oriented Programming Challenges

---

## 📋 Global Rules

- **Must use Object-Oriented Programming concepts** (Classes, Objects, Inheritance, etc.)
- Apply proper OOPS principles (Encapsulation, Inheritance, Polymorphism, Abstraction)
- Follow proper coding guidelines and best practices
- Error handling and edge cases must be tested
- Each task has specific requirements and sample inputs/outputs

---

## Task 1: Bank Account System

Write a program that simulates a basic bank account system with the following requirements:

### Requirements
- The program should start with an initial balance of 10,000.
- Repeatedly display a menu to the user with the following options:
  - Deposit
  - Withdraw
  - Check Balance
  - Exit
- Based on the user's choice:
  - Deposit: Ask for an amount and add it to the balance.
  - Withdraw: Ask for an amount and subtract it from the balance (ensure sufficient balance).
  - Check Balance: Display the current balance.
  - Exit: Terminate the program gracefully.
- The program should continue running until the user chooses the Exit option.

### Instructions
- Implement proper input validation where necessary.
- Keep the program user-friendly with clear messages.
- Use OOPS concepts (create a BankAccount class).

### Sample Flow
```
=== Bank Account System ===
Initial Balance: ₹10,000

1. Deposit
2. Withdraw
3. Check Balance
4. Exit

Enter your choice: 1
Enter amount to deposit: 5000
₹5,000 deposited successfully.

Enter your choice: 2
Enter amount to withdraw: 3000
₹3,000 withdrawn successfully.

Enter your choice: 3
Current Balance: ₹12,000

Enter your choice: 4
Thank you for using our banking system!
```

---

## Task 2: Employee Project Allocation System

You are building a system to allocate employees to projects based on their skills, availability, and project priority. Each employee can work on only one project at a time. Each project requires a specific number of employees with certain skills and has a priority level.

Your goal is to assign employees to the highest priority projects first, fulfilling their required skill sets as much as possible. The challenge is to maximize the number of fully staffed projects while respecting constraints.

### Rules & Constraints
- **One Project per Employee**: Each employee can be assigned to at most one project.
- **Project Completion Criteria**: A project is considered staffed only if:
  - The required number of employees is met (numPeopleRequired)
  - The required skills are covered collectively by the assigned employees
- **Priority-Based Allocation**: Projects with lower priority numbers are handled first.
- **Skill Matching**: Employees may have overlapping skills. You must select a combination of available employees whose combined skill sets satisfy the requiredSkills of the project.
- **No Built-in Functions Allowed**: You must not use .sort(), .filter(), .map(), .reduce(), etc.

### Example Input
```python
employees = [
  { id: "E1", skills: ["Python", "Django"], available: true },
  { id: "E2", skills: ["React"], available: true },
  { id: "E3", skills: ["Django"], available: true },
  { id: "E4", skills: ["Java", "Spring"], available: true },
  { id: "E5", skills: ["Java"], available: true },
  { id: "E6", skills: ["Python"], available: false }
]

projects = [
  {
    id: "P1",
    requiredSkills: ["Python", "Django"],
    numPeopleRequired: 2,
    priority: 1
  },
  {
    id: "P2",
    requiredSkills: ["Java", "Spring"],
    numPeopleRequired: 2,
    priority: 2
  },
  {
    id: "P3",
    requiredSkills: ["React", "NodeJS"],
    numPeopleRequired: 2,
    priority: 3
  }
]
```

### Expected Output
```python
{
  projectAssignments: {
    P1: ["E1", "E3"],
    P2: ["E4", "E5"]
  },
  unassignedEmployees: ["E2"],
  unstaffedProjects: ["P3"]
}
```

### OOPS Requirements
- Create classes for Employee, Project, and ProjectAllocator
- Use appropriate methods for allocation logic
- Implement proper encapsulation

---

## Task 3: Electricity Bill Calculator

### Problem Statement
Design and implement a console-based Electricity Bill Calculator using Object-Oriented Programming.

A power company charges customers based on units consumed in a month with the following slab rates.

### Slab Rates
- 0 – 100 units: ₹5.00 per unit
- 101 – 200 units: ₹7.00 per unit
- 201 – 300 units: ₹9.00 per unit
- Above 300 units: ₹12.00 per unit

### Additional Rules (Logical Part)
- If a customer consumes more than 400 units, a 10% surcharge is added on the total bill.
- Senior citizens (age ≥ 60) get a flat 15% discount on the final bill (after surcharge, if any).
- Fixed meter charge: ₹150 (added to every bill).

### The System Should
- Add a customer (with customer ID, name, age)
- Record units consumed in a month
- Calculate and display the electricity bill with full breakdown
- List all customers

### Sample Input & Expected Output

```
=== Electricity Bill Calculator Menu ===
1. Add New Customer
2. Record Units Consumed
3. Calculate & Display Bill
4. List All Customers
5. Exit

Enter your choice (1-5): 1
Enter Customer ID: C001
Enter Customer Name: Rajesh Kumar
Enter Age: 45
Customer 'Rajesh Kumar' (ID: C001) added successfully.

=== Electricity Bill Calculator Menu ===
1. Add New Customer
2. Record Units Consumed
3. Calculate & Display Bill
4. List All Customers
5. Exit

Enter your choice (1-5): 1
Enter Customer ID: C002
Enter Customer Name: Meera Devi
Enter Age: 62
Customer 'Meera Devi' (ID: C002) added successfully.

=== Electricity Bill Calculator Menu ===
1. Add New Customer
2. Record Units Consumed
3. Calculate & Display Bill
4. List All Customers
5. Exit

Enter your choice (1-5): 1
Enter Customer ID: C003
Enter Customer Name: Umang Patel
Enter Age: 28
Customer 'Umang Patel' (ID: C003) added successfully.

=== Electricity Bill Calculator Menu ===
1. Add New Customer
2. Record Units Consumed
3. Calculate & Display Bill
4. List All Customers
5. Exit

Enter your choice (1-5): 2
Enter Customer ID: C001
Enter Units Consumed this month: 350
Units (350) recorded for customer C001.

=== Electricity Bill Calculator Menu ===
1. Add New Customer
2. Record Units Consumed
3. Calculate & Display Bill
4. List All Customers
5. Exit

Enter your choice (1-5): 2
Enter Customer ID: C002
Enter Units Consumed this month: 150
Units (150) recorded for customer C002.

=== Electricity Bill Calculator Menu ===
1. Add New Customer
2. Record Units Consumed
3. Calculate & Display Bill
4. List All Customers
5. Exit

Enter your choice (1-5): 2
Enter Customer ID: C003
Enter Units Consumed this month: 450
Units (450) recorded for customer C003.

=== Electricity Bill Calculator Menu ===
1. Add New Customer
2. Record Units Consumed
3. Calculate & Display Bill
4. List All Customers
5. Exit

Enter your choice (1-5): 3
Enter Customer ID: C001

==================================================
ELECTRICITY BILL
Customer ID : C001
Name        : Rajesh Kumar
Age         : 45 
Units Consumed: 350
--------------------------------------------------
0-100 units: 100 × ₹5.00 = ₹500.00
101-200 units: 100 × ₹7.00 = ₹700.00
201-300 units: 100 × ₹9.00 = ₹900.00
Above 300 units: 50 × ₹12.00 = ₹600.00

Base Amount: ₹2700.00
Fixed Meter Charge: ₹150.00
Subtotal: ₹2850.00

Final Total Bill: ₹2850.0
==================================================

=== Electricity Bill Calculator Menu ===
1. Add New Customer
2. Record Units Consumed
3. Calculate & Display Bill
4. List All Customers
5. Exit

Enter your choice (1-5): 3
Enter Customer ID: C002

==================================================
ELECTRICITY BILL
Customer ID : C002
Name        : Meera Devi
Age         : 62 (Senior Citizen)
Units Consumed: 150
--------------------------------------------------
0-100 units: 100 × ₹5.00 = ₹500.00
101-200 units: 50 × ₹7.00 = ₹350.00

Base Amount: ₹850.00
Fixed Meter Charge: ₹150.00
Subtotal: ₹1000.00
15% Senior Citizen Discount: -₹150.00

Final Total Bill: ₹850.0
==================================================

=== Electricity Bill Calculator Menu ===
1. Add New Customer
2. Record Units Consumed
3. Calculate & Display Bill
4. List All Customers
5. Exit

Enter your choice (1-5): 3
Enter Customer ID: C003

==================================================
ELECTRICITY BILL
Customer ID : C003
Name        : Umang Patel
Age         : 28 
Units Consumed: 450
--------------------------------------------------
0-100 units: 100 × ₹5.00 = ₹500.00
101-200 units: 100 × ₹7.00 = ₹700.00
201-300 units: 100 × ₹9.00 = ₹900.00
Above 300 units: 150 × ₹12.00 = ₹1800.00

Base Amount: ₹3900.00
Fixed Meter Charge: ₹150.00
Subtotal: ₹4050.00
10% Surcharge (units > 400): +₹405.00

Final Total Bill: ₹4455.0
==================================================
```

### OOPS Requirements
- Create a Customer class with attributes: customer_id, name, age, units_consumed
- Create an ElectricityBillCalculator class with methods for:
  - Adding customers
  - Recording units
  - Calculating bills with slab rates, surcharge, and discounts
  - Generating formatted bill output
- Use proper encapsulation and methods

---

## Task 4: Movie Ticket Booking System (Simple Version)

### Problem Statement
Design and implement a console-based Movie Ticket Booking System using Object-Oriented Programming.

A small cinema hall has only one screen with 50 seats arranged in 5 rows (A to E) and 10 seats per row (1 to 10).

### Ticket Prices
- Row A (Premium): ₹300
- Row B: ₹250
- Row C: ₹200
- Row D & E (Regular): ₹150

### Rules (Logical Part)
- Seats are initially all available.
- A customer can book multiple seats at once.
- Once booked, a seat cannot be booked again.
- Show total amount based on seat prices.
- Display seat layout (X = booked, O = available).

### The System Should
- Show current seat layout
- Book seats for a customer
- Calculate and display total ticket cost
- Show booking summary

### Sample Input & Expected Output

```
=== Movie Ticket Booking System ===
1. View Seat Layout
2. Book Tickets
3. Exit
Enter choice: 1

Current Seat Layout:
Row A (₹300): O O O O O O O O O O
Row B (₹250): O O O O O O O O O O
Row C (₹200): O O O O O O O O O O
Row D (₹150): O O O O O O O O O O
Row E (₹150): O O O O O O O O O O

Enter choice: 2
Enter number of seats to book: 3
Enter seat 1 (e.g., A5): A1
Enter seat 2: B3
Enter seat 3: C7
Seats booked successfully!

Booking Summary:
A1 - ₹300
B3 - ₹250
C7 - ₹200
Total Amount: ₹750

Enter choice: 1

Current Seat Layout:
Row A (₹300): X O O O O O O O O O
Row B (₹250): O O X O O O O O O O
Row C (₹200): O O O O O O X O O O
Row D (₹150): O O O O O O O O O O
Row E (₹150): O O O O O O O O O O
```

### OOPS Requirements
- Create a Seat class with attributes: row, seat_number, price, is_booked
- Create a CinemaHall class with methods for:
  - Displaying seat layout
  - Booking seats
  - Calculating total cost
  - Showing booking summary
- Use proper encapsulation and validation

---

## Task 5: Simple Gym Workout Tracker

### Problem Statement
Design and implement a console-based Gym Workout Tracker using Object-Oriented Programming.

Members visit the gym and perform exercises. Each exercise has:
- Name (e.g., Bench Press, Squats)
- Sets completed
- Reps per set
- Weight used (in kg)

### The System Calculates
- Total volume for an exercise = sets × reps × weight
- Calories burned for the workout
  - (Simple formula: 6 calories per minute, and each set takes approx. 2 minutes)

### Feedback Based on Total Volume
- ≥ 5000 kg → "Great workout!"
- 2000–5000 kg → "Good effort!"
- < 2000 kg → "Keep pushing!"

### Features
- Add a member (name and member ID)
- Start a new workout session for a member
- Add exercises to the current workout
- View workout summary with total volume, calories burned, and feedback
- List all members

### Sample Input & Expected Output

```
=== Gym Workout Tracker ===
1. Add Member
2. Start Workout
3. Add Exercise to Workout
4. View Workout Summary
5. List All Members
6. Exit
Enter choice: 1
Enter Member ID: M001
Enter Name: Rohan Sharma
Member added.

Enter choice: 2
Enter Member ID: M001
Workout session started for Rohan Sharma.

Enter choice: 3
Enter Exercise Name: Bench Press
Enter Sets: 4
Enter Reps per set: 10
Enter Weight (kg): 60
Exercise added!

Enter choice: 3
Enter Exercise Name: Squats
Enter Sets: 3
Enter Reps per set: 12
Enter Weight (kg): 80
Exercise added!

Enter choice: 4
Enter Member ID: M001

=== Workout Summary for Rohan Sharma ===
Exercise         | Sets | Reps | Weight | Volume
Bench Press      | 4    | 10   | 60kg   | 2400kg
Squats           | 3    | 12   | 80kg   | 2880kg
------------------------------------------------
Total Volume     : 5280kg
Estimated Calories Burned: 84
Feedback         : Great workout!

Enter choice: 5

=== All Members ===
[M001] Rohan Sharma
```

### OOPS Requirements
- Create a Member class with attributes: member_id, name, workout_sessions
- Create an Exercise class with attributes: name, sets, reps, weight
- Create a WorkoutSession class with methods for:
  - Adding exercises
  - Calculating total volume
  - Calculating calories burned
  - Generating feedback
- Create a GymTracker class to manage members and sessions
- Use proper encapsulation and relationships between classes

---

## 📝 General Guidelines for All Tasks

1. **Use Proper OOPS Principles**
   - Encapsulation: Use private attributes and provide getter/setter methods
   - Inheritance: Create base classes and inherit when appropriate
   - Polymorphism: Override methods in child classes
   - Abstraction: Use abstract base classes for common interfaces

2. **Error Handling**
   - Validate user inputs
   - Handle edge cases (empty inputs, invalid values, etc.)
   - Provide meaningful error messages

3. **Code Quality**
   - Follow PEP 8 style guidelines
   - Use meaningful variable and method names
   - Add docstrings to classes and methods
   - Keep methods focused on single responsibility

4. **Testing**
   - Test with the provided sample inputs
   - Verify outputs match expected results
   - Test edge cases and error conditions

---

## 🚀 Next Steps

👉 **Back to OOPS Concepts:** [OOPS](OOPS)

👉 **Back to Python Tasks:** [Tasks](Tasks)

👉 **Back to Resources:** [Resources](Resources)

---

**Happy Learning! 🎉**
