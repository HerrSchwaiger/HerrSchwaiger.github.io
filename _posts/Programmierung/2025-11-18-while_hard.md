---
layout: single
title: "The while-Loop"
date: 2025-11-18 00:03
permalink: /Programmierung/While_hard/
categories:
 - Programmierung
tags:
 - While
 - Schleifen
difficulty: hard
published: true
header:
  teaser: "assets/images/While_hard.png"
  overlay_filter: "0.2"
  overlay_image: /assets/images/While_hard.png
toc: true
toc_label: "Contents"
---

Sometimes a section of code needs to be repeated an arbitrary number of times. For precisely this purpose, there are two variants: the classic head-controlled `while` loop and the foot-controlled `do-while` loop. In this post, we'll examine both variants in detail and learn when each form is the appropriate choice.

## The Head-Controlled While Loop

The classic `while` loop evaluates the condition at the beginning, in the "head" of the loop. The loop body is only executed if the condition evaluates to true.

### Syntax
```java
while (condition) {
    // Code to be repeated
}
```

### Example: Countdown
```java
int countdown = 3;
while (countdown > 0) {
    System.out.println(countdown);
    countdown--;
}
System.out.println("Start!");
```

Output:
```bash
3
2
1
Start
```

{: .notice--warning}
**Important note:**\\
If `countdown` were 0 or less from the start, the loop would not execute at all.

## The Foot-Controlled Do-While Loop

The `do-while` loop differs in one crucial aspect: it evaluates the condition at the end, in the "foot" of the loop. This means the loop body executes at least once, regardless of whether the condition is true or false.

### Syntax
```java
do {
    // Code to be repeated
} while (condition);
```

{: .notice--primary}
Note the semicolon at the end – this is frequently forgotten!

### Example: User Input

A classic use case for the `do-while` loop is validating user input:
```java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int number;

do {
    System.out.print("Please enter a number less than or equal to 10: ");
    number = scanner.nextInt();
} while (number > 10);

System.out.println("Thank you! You entered " + number + ".");
```

Here, the user is prompted for input at least once. As long as the input is invalid, the loop repeats.

## The Critical Difference

The fundamental difference between `while` and `do-while` lies in the execution guarantee:

**While Loop**: Can execute zero to n times
```java
int x = 10;
while (x < 5) {
    System.out.println("This will never be printed");
}
```

**Do-While Loop**: Executes at least once
```java
int x = 10;
do {
    System.out.println("This will be printed once");
} while (x < 5);
```

## Beware of Infinite Loops!

One of the most common errors when programming with loops is creating unintentional infinite loops:
```java
// ERROR: Infinite loop!
int i = 0;
while (i < 10) {
    System.out.println(i);
    // i is never incremented!
}
```

To avoid this, ensure that the termination condition will eventually be satisfied.

## Advanced Concepts

### Nested Loops

Loops can be nested within each other to create more complex iteration patterns:
```java
int i = 1;
while (i <= 5) {
    int j = 1;
    while (j <= i) {
        System.out.print("* ");
        j++;
    }
    System.out.println();
    i++;
}
```

Output:
```
* 
* * 
* * * 
* * * * 
* * * * * 
```

### Loop Control Statements

#### The break Statement

The `break` statement allows premature termination of a loop:
```java
int number = 0;
while (number < 20) {
    number++;
    if (number > 15) break;
    System.out.println(number);
}
```

#### The continue Statement

The `continue` statement skips the current iteration and proceeds to the next:
```java
int number = 0;
while (number < 20) {
    number++;
    if (number % 2 == 0) continue;  // Skip even numbers
    if (number > 15) break;
    System.out.println(number);
}
```

Output: `1 3 5 7 9 11 13 15`