# Object-Oriented Programming (OOPS) in Python
## Complete Guide to Object-Oriented Concepts

---

## 📚 What is OOPS?

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. The data is in the form of fields (often known as attributes or properties), and the code is in the form of procedures (often known as methods).

### Why Learn OOPS?

- **Modularity**: Break down complex problems into smaller, manageable pieces
- **Reusability**: Write code once and reuse it in different parts of your program
- **Maintainability**: Easier to update and maintain code
- **Scalability**: Build large applications that are easy to extend
- **Real-world Modeling**: Model real-world entities and their relationships

---

## 🎯 Core OOPS Concepts

### 1. Classes and Objects

**Class**: A blueprint or template for creating objects. It defines the properties and behaviors that objects of that class will have.

**Object**: An instance of a class. It's a concrete realization of the class with specific values for its attributes.

```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def display_info(self):
        print(f"This is a {self.brand} {self.model}")

# Creating an object
my_car = Car("Toyota", "Camry")
my_car.display_info()  # Output: This is a Toyota Camry
```

---

### 2. Encapsulation

Encapsulation is the bundling of data and methods that operate on that data within a single unit (class). It also involves restricting direct access to some of an object's components.

**Key Points:**
- Hide internal state and require all interaction to be performed through an object's methods
- Use private attributes (prefixed with `__`) to restrict access
- Provide getter and setter methods to access and modify private data

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
    
    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # Output: 1500
```

---

### 3. Inheritance

Inheritance allows a class (child class) to inherit attributes and methods from another class (parent class). This promotes code reusability and establishes a hierarchical relationship between classes.

**Key Points:**
- Child class inherits all public and protected members of parent class
- Can override methods from parent class
- Use `super()` to call parent class methods
- Supports multiple inheritance in Python

```python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
print(dog.speak())  # Output: Buddy says Woof!
```

---

### 4. Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables methods to do different things based on the object it is acting upon.

**Types of Polymorphism:**
- **Method Overriding**: Child class provides specific implementation of a method already defined in parent class
- **Method Overloading**: Same method name with different parameters (not directly supported in Python, but can be achieved)

```python
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

shapes = [Rectangle(5, 4), Circle(3)]
for shape in shapes:
    print(f"Area: {shape.area()}")
```

---

### 5. Abstraction

Abstraction is the concept of hiding complex implementation details and showing only the necessary features of an object. It helps in reducing complexity and increasing efficiency.

**Key Points:**
- Use abstract base classes (ABC) to define abstract methods
- Abstract methods must be implemented by child classes
- Cannot instantiate abstract classes directly

```python
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass
    
    @abstractmethod
    def stop(self):
        pass

class Car(Vehicle):
    def start(self):
        print("Car started with key")
    
    def stop(self):
        print("Car stopped with brake")

car = Car()
car.start()  # Output: Car started with key
```

---

## 📖 Python OOPS Features

### Class Attributes vs Instance Attributes

**Class Attributes**: Shared by all instances of the class
**Instance Attributes**: Unique to each instance

```python
class Student:
    school_name = "ABC School"  # Class attribute
    
    def __init__(self, name):
        self.name = name  # Instance attribute

student1 = Student("John")
student2 = Student("Alice")
print(student1.school_name)  # Output: ABC School
print(student2.school_name)  # Output: ABC School
```

---

### Special Methods (Dunder Methods)

Python has special methods that start and end with double underscores. These methods allow you to define how your objects behave with built-in operations.

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Point({self.x}, {self.y})"
    
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

p1 = Point(1, 2)
p2 = Point(3, 4)
p3 = p1 + p2
print(p3)  # Output: Point(4, 6)
```

---

### Property Decorators

Use `@property` to create getter, setter, and deleter methods for attributes.

```python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32

temp = Temperature(25)
print(temp.fahrenheit)  # Output: 77.0
```

---

## 🛠️ Best Practices

1. **Use meaningful class and method names**
2. **Follow PEP 8 style guidelines**
3. **Keep classes focused on a single responsibility**
4. **Use composition over inheritance when appropriate**
5. **Document your classes and methods with docstrings**
6. **Use type hints for better code clarity**
7. **Implement `__str__` and `__repr__` for better debugging**

---

## 📚 Learning Resources

### Primary Resource

**[W3Schools Python OOP Tutorial](https://www.w3schools.com/python/python_oop.asp)**

This comprehensive tutorial covers:
- Classes and Objects
- Constructors (__init__)
- Class Attributes vs Instance Attributes
- Methods
- Inheritance
- Polymorphism
- Encapsulation
- Abstraction

### Additional Resources

- **[Real Python OOP Guide](https://realpython.com/python3-object-oriented-programming/)** - In-depth guide with practical examples
- **[Python Official Documentation](https://docs.python.org/3/tutorial/classes.html)** - Official Python class documentation
- **[GeeksforGeeks OOPS](https://www.geeksforgeeks.org/python-oops-concepts/)** - Detailed explanations with examples

---

## 🚀 Next Steps

👉 **Practice OOPS Tasks:** [OOPS Tasks](OOPS_Tasks)

👉 **Back to Python Tasks:** [Tasks](Tasks)

---

**Happy Learning! 🎉**
