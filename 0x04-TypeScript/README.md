# TypeScript Project

This project demonstrates various TypeScript features and concepts, including:

1. Basic types in TypeScript
2. Interfaces, Classes, and Functions
3. Working with the DOM and TypeScript
4. Generic types
5. Namespaces
6. Declaration merging
7. Using an ambient Namespace to import an external library
8. Basic nominal typing with TypeScript

## Tasks

### Task 0: Creating an Interface for a Student

- Defined an interface for a Student with properties: firstName, lastName, age, and location.
- Created an array of students and displayed their information in an HTML table.

### Task 1: Let's Build a Teacher Interface

- Defined a Teacher interface with various properties.
- Allowed for the addition of arbitrary properties to the Teacher object.

### Task 2: Extending the Teacher Class

- Extended the Teacher interface to create a Directors interface.
- Added a numberOfReports property to the Directors interface.

### Task 3: Printing Teachers

- Defined a function to print a teacher's name in a specific format.
- Created an interface for the function.

### Task 4: Writing a Class

- Created a StudentClass with methods for working on homework and displaying the student's name.

### Task 5: Advanced Types Part 1

- Created interfaces for Directors and Teachers with specific methods.
- Defined a class for each interface and implemented the methods.
- Created a function to instantiate a Director or Teacher based on salary.

### Task 6: Creating Functions Specific to Employees

- Defined a function to check if an employee is a Director.
- Created a function to execute specific tasks based on the employee type.

### Task 7: String Literal Types

- Defined a string literal type for Subjects.
- Created a function to teach a class based on the subject.

### Task 8: Ambient Namespaces

- Created type definitions for a CRUD library.
- Used the CRUD functions with TypeScript types.

### Task 9: Namespace & Declaration Merging

- Defined a Teacher interface and classes for various subjects within a namespace.
- Merged declarations to extend the Teacher interface.

### Task 10: Update task_4/js/main.ts

- Created instances of subject classes and logged their requirements and available teachers.

### Task 11: Brand Convention & Nominal Typing

- Defined interfaces for Major and Minor Credits.
- Created functions to sum credits with nominal typing.

## Setup

- Install dependencies: `npm install`
- Build the project: `npm run build`
- Start the development server: `npm run start-dev`
- Run tests: `npm run test`

## File Structure

- `task_0/`: Task 0 files
- `task_1/`: Task 1 files
- `task_2/`: Task 2 files
- `task_3/`: Task 3 files
- `task_4/`: Task 4 files
- `task_5/`: Task 5 files
