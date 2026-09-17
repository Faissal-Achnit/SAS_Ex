# Day 0: Variables & Conditions

**Level:** Beginner → Advanced

## Level 1 — Beginner

### 1. Age Logger

Declare a variable `age` and assign a number to it.

Log to the console:

```text
You are [age] years old.
```

### 2. Temperature Check

Declare a variable `temperature`.

* If the temperature is strictly greater than `30`, log:

  ```text
  It's hot outside!
  ```
* Otherwise, log:

  ```text
  The weather is nice.
  ```

### 3. Even or Odd

Declare a variable `number`.

Use the modulo operator `%` and an `if/else` statement to check if the number is even or odd.

Log the result to the console.

---

## Level 2 — Intermediate

### 4. Grading System

Declare a variable `score` between `0` and `100`.

Use `if / else if / else` statements to log:

* `A` → 90–100
* `B` → 80–89
* `C` → 70–79
* `F` → below 70

### 5. Max of Three

Declare three number variables.

Write conditions to find and log the largest of the three numbers.

**Constraint:** Do not use `Math.max()`.

### 6. Leap Year Checker

Declare a variable `year`.

Check if it is a leap year using these rules:

* Divisible by `4`
* **AND** not divisible by `100`
* **UNLESS** it is divisible by `400`

Log `true` or `false`.

---

## Level 3 — Advanced

### 7. Basic Calculator

Declare:

```javascript
num1
num2
operator
```

The `operator` is a string such as:

```text
+
-
*
/
```

Use a `switch` statement to perform the correct mathematical operation and log the result.

**Requirement:** Handle division by zero.

### 8. Valid Triangle

Declare three variables representing the angles of a triangle.

Check if they form a valid triangle.

A triangle is valid when:

* All three angles add up to exactly `180`.
* No angle is `0` or less.

Log the result.

### 9. BMI Calculator

Declare variables for:

```javascript
weight // kg
height // m
```

Calculate BMI using:

```text
BMI = weight / (height * height)
```

Log the BMI along with its category:

* **Underweight** → BMI < 18.5
* **Normal** → BMI 18.5–24.9
* **Overweight** → BMI >= 25

---

## Progress

* [ ] Ex1 — Age Logger
* [ ] Ex2 — Temperature Check
* [ ] Ex3 — Even or Odd
* [ ] Ex4 — Grading System
* [ ] Ex5 — Max of Three
* [ ] Ex6 — Leap Year Checker
* [ ] Ex7 — Basic Calculator
* [ ] Ex8 — Valid Triangle
* [ ] Ex9 — BMI Calculator

## Topics

* `let`
* `const`
* Variables
* Primitive types
* `console.log()`
* Arithmetic operators
* Assignment operators
* Comparison operators
* Logical operators
* Modulo `%`
* `if / else`
* `switch`
