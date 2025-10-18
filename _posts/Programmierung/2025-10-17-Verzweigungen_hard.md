---
layout: single
title: "Conditional Statements"
date: 2025-10-17 00:03
permalink: /Programmierung/Verzweigungen_hard/
categories:
 - Programmierung
tags:
 - Verzweigungen
 - Kontrollstrukturen
difficulty: hard
published: true
header:
  teaser: "assets/images/verzweigungen_hard.png"
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/verzweigungen_hard.png
toc: true
toc_label: "Contents"
---

Interactive programs require sophisticated decision-making capabilities. **Conditional statements** enable programs to evaluate situations and respond dynamically based on multiple criteria and complex logical conditions.

---

## Fundamental Conditional Structures

### The if Statement

The **if statement** evaluates a boolean expression and executes a code block only when the condition evaluates to `true`.

**Syntax:**
```java
if (condition) {
    // Code executed when condition is true
}
```

**Example:**
```java
int coins = 100;

if (coins >= 100) {
    System.out.println("Sufficient funds for legendary weapon!");
    coins -= 100;
}
```

---

### The if-else Statement

The **if-else construct** provides two execution paths: one for true conditions and an alternative for false conditions.

**Syntax:**
```java
if (condition) {
    // Executed when true
} else {
    // Executed when false
}
```

**Example:**
```java
int playerLevel = 15;

if (playerLevel >= 10) {
    System.out.println("Access granted to advanced dungeon");
} else {
    System.out.println("Insufficient level. Required: 10+");
}
```

---

### Multi-Way Branching with else-if

Complex decision trees require **chained conditional statements** using `else if` to evaluate multiple conditions sequentially.

**Syntax:**
```java
if (condition1) {
    // Block 1
} else if (condition2) {
    // Block 2
} else if (condition3) {
    // Block 3
} else {
    // Default block
}
```

**Example:**
```java
int score = 8500;

if (score >= 10000) {
    System.out.println("Rank: Legendary");
} else if (score >= 7500) {
    System.out.println("Rank: Master");
} else if (score >= 5000) {
    System.out.println("Rank: Expert");
} else {
    System.out.println("Rank: Novice");
}
```

{: .notice--info}
**Note:** Conditions are evaluated sequentially from top to bottom. Once a condition evaluates to `true`, the corresponding block executes and all subsequent conditions are skipped.

---

## Comparison Operators

Java provides relational operators for comparing primitive data types:

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `==` | Equal to | `5 == 5` | `true` |
| `!=` | Not equal to | `5 != 3` | `true` |
| `>` | Greater than | `7 > 3` | `true` |
| `<` | Less than | `2 < 8` | `true` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `3 <= 7` | `true` |

**Example:**
```java
int health = 45;
int maxHealth = 100;

if (health == 0) {
    System.out.println("Player defeated");
} else if (health < maxHealth * 0.3) {
    System.out.println("Critical health - healing recommended");
} else if (health >= maxHealth) {
    System.out.println("Full health");
}
```

## String Comparison with equals()

For reference types like `String`, the `==` operator compares object references, not content. Use the **`.equals()` method** for content comparison.

❌ **Incorrect:**
```java
String weapon = "Sword";

if (weapon == "Sword") {  // Compares references!
    System.out.println("Wielding a sword");
}
```

✅ **Correct:**
```java
String weapon = "Sword";

if (weapon.equals("Sword")) {  // Compares content
    System.out.println("Wielding a sword");
}
```

**Case-insensitive comparison:**
```java
String input = "sword";

if (input.equalsIgnoreCase("Sword")) {
    System.out.println("Match found (case-insensitive)");
}
```

## Nested Conditional Statements

**Nested conditionals** place one conditional structure inside another, enabling multi-level decision logic.

**Syntax:**
```java
if (outerCondition) {
    if (innerCondition) {
        // Nested code block
    }
}
```

**Example:**
```java
String weather = "Rainy";
int temperature = 8;

if (weather.equals("Rainy")) {
    System.out.println("It's raining outside...");
    
    if (temperature >= 15) {
        System.out.println("Warm rain - take an umbrella.");
        System.out.println("Perfect weather for a walk!");
    } else if (temperature >= 5) {
        System.out.println("Cold rain - bring a jacket and umbrella.");
    } else {
        System.out.println("Freezing rain! Stay inside!");
    }
    
} else if (weather.equals("Sunny")) {
    System.out.println("Beautiful sunshine!");
    System.out.println("Great day for outdoor activities.");
    
} else {
    System.out.println("Weather conditions unclear.");
}
```

{: .notice--alert}
**Test your Knowledge:** What happens for the values: `weather = "Sunny"; int temperature = 3 `?

---

## 🎮 Exercise: Program Flow Charts

Test your understanding by matching code examples to their corresponding flowcharts.

<div style="margin: 2em 0; border: 2px solid #4a90e2; border-radius: 8px; overflow: hidden;">
  <iframe 
    src="/assets/h5p/verzweigungen-pap-dragdrop.html" 
    width="100%" 
    height="650" 
    frameborder="0"
    style="display: block;">
  </iframe>
</div>