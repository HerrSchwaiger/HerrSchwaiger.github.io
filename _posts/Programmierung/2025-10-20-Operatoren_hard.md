---
layout: single
title: "Operators"
date: 2025-10-20 00:03
permalink: /Programmierung/Operatoren_hard/
categories:
 - Programmierung
tags:
 - Operatoren
difficulty: hard
published: true
header:
  teaser: "assets/images/Operatoren_hard.png"
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/Operatoren_hard.png
toc: true
toc_label: "Contents"
---

Operators are used in programming to perform operations on values, such as calculations, comparisons, or logical evaluations.

## Arithmetic Operators

These operators are used for mathematical calculations:

### Addition (+)
```java
// Add values:
int result = 5 + 3; // result = 8

// Also used for string concatenation:
String result = "Fire" + "ball"; // result = "Fireball"

// Post-increment: x++ increments AFTER using the value
int a = 5;
int b = a++; // a = 6, b = 5
```

### Subtraction (-)
```java
// Subtract values:
int result = 10 - 4; // result = 6

// Post-decrement: x-- decrements AFTER using the value
int a = 5;
int b = a--; // a = 4, b = 5
```

### Multiplication (*)
```java
// Multiply values:
int result = 4 * 3; // result = 12
```

### Division (/)
```java
// Divide values:
double result = 12.0 / 3.0; // result = 4.0

// Integer division truncates (rounds down):
int intResult = 5 / 2; // intResult = 2 (not 2.5!)

// To get decimal result from integers, cast to double:
int a = 5;
int b = 2;
double decimalResult = (double)a / b; // decimalResult = 2.5

// Watch out for division by zero:
// int error = 10 / 0; // Throws ArithmeticException!
```

### Modulo (%)
```java
// Calculate remainder of division:
int rest = 10 % 3; // rest = 1

// Useful for checking even/odd:
boolean isEven = (number % 2 == 0);
```

## Comparison Operators

These operators compare two values and return a boolean result:

### Greater than (>)
```java
// Check if value is greater:
boolean result = 7 > 5; // true
boolean result2 = 5 > 5; // false
```

### Greater than or equal (>=)
```java
// Check if greater or equal:
boolean result = 5 >= 5; // true
boolean result2 = 4 >= 5; // false
```

### Less than (<)
```java
// Check if value is less:
boolean result = 3 < 8; // true
boolean result2 = 8 < 8; // false
```

### Less than or equal (<=)
```java
// Check if less or equal:
boolean result = 4 <= 4; // true
boolean result2 = 5 <= 4; // false
```

### Equal (==)
```java
// Check for equality (primitive types):
boolean result = 5 == 5; // true
boolean result2 = 5 == 3; // false

// WARNING: For Strings, use .equals()!
String text1 = "Hello";
String text2 = "Hello";
boolean isEqual = text1.equals(text2); // true (CORRECT)
boolean wrong = (text1 == text2); // May be false! (WRONG for Strings)

// == checks if two references point to the same object
// .equals() checks if the content is the same
```

### Not equal (!=)
```java
// Check for inequality:
boolean result = 7 != 3; // true
boolean result2 = 5 != 5; // false
```

## Assignment Operators

### Simple Assignment (=)
```java
// Assign value to variable:
int x = 10;
```

### Compound Assignment Operators
```java
// Addition assignment: += is equivalent to x = x + 5
int x = 10;
x += 5; // x = 15

// Subtraction assignment: -= is equivalent to x = x - 3
x -= 3; // x = 12

// Multiplication assignment: *= is equivalent to x = x * 2
x *= 2; // x = 24

// Division assignment: /= is equivalent to x = x / 4
x /= 4; // x = 6

// Modulo assignment: %= is equivalent to x = x % 3
x %= 3; // x = 0

// These compound operators are more concise and can be more efficient
```

## Operator Precedence

Operators are evaluated in a specific order. Parentheses () have highest precedence:

```java
int result = 5 + 3 * 2; // result = 11 (not 16!)
// Multiplication is evaluated first

int result2 = (5 + 3) * 2; // result2 = 16
// Parentheses force addition first
```

## Common Pitfalls

### Pre vs Post Increment/Decrement
```java
int x = 5;
int y = x++ + x; // y = 5 + 6 = 11, x = 6
// x++ returns 5, then increments x to 6, then adds 6

int a = 5;
int b = ++a + a; // b = 6 + 6 = 12, a = 6
// ++a increments a to 6 first, then returns 6, then adds 6
```

### Comparing Strings
```java
// WRONG:
String name1 = "Hero";
String name2 = "Hero";
if (name1 == name2) { /* May not work as expected! */ }

// CORRECT:
if (name1.equals(name2)) { /* Always works correctly */ }
```