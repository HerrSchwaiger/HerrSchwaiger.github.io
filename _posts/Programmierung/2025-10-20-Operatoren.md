---
layout: single
title: "Operatoren"
date: 2025-10-20 00:02
permalink: /Programmierung/Operatoren_medium/
categories:
 - Programmierung
tags:
 - Operatoren
difficulty: medium
published: true
header:
  teaser: "assets/images/Operatoren.png"
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/Operatoren.png
toc: true
toc_label: "Contents"
---

Operatoren werden in der Programmierung genutzt, um einzelne Werte miteinander zu verrechnen oder zu vergleichen. 

### Arithmetische Operatoren

Diese Operatoren werden für mathematische Berechnungen verwendet:

**Addition (+)**
```java
// Werte addieren:
int result = 5 + 3; // result = 8

//Auch für das Zusammenfügen von Strings verwendbar:
String result = "Haus" + "tier"; //result = "Haustier"

// Besonderer Fall: Das Inkrement (++):
// x++ entspricht x=x+1;
int x = 5;
x++; // x = 6
```

**Subtraktion (-)**
```java
// Werte subtrahieren:
int result = 10 - 4; // result = 6

// Besonderer Fall: Das Dekrement (--):
// x-- entspricht x = x - 1;
int x = 5;
x--; // x = 4
```

**Multiplikation (*)**
```java
// Werte multiplizieren:
int result = 4 * 3; // result = 12
```

**Division (/)**
```java
// Werte dividieren:
double result = 5 / 2; // result = 2.5

// Achtung: Bei Ganzzahlen wird abgerundet:
int result_ganzzahl = 5 / 2; // result2 = 2 (nicht 2.5!)
```

**Modulo (%)**
```java
// Rest einer Division berechnen:
int rest = 10 % 3; // rest = 1
```

### Vergleichsoperatoren
Diese Operatoren vergleichen zwei Werte und liefern einen boolean-Wert zurück:

**Größer als (>)**
```java
// Prüfung, ob ein Wert größer ist:
boolean result = 7 > 5; // true
```

**Größer oder gleich (>=)**
```java
// Prüfung auf größer oder gleich:
boolean result = 5 >= 5; // true
```

**Kleiner als (<)**
```java
// Prüfung, ob ein Wert kleiner ist:
boolean result = 3 < 8; // true
```

**Kleiner oder gleich (<=)**
```java
// Prüfung auf kleiner oder gleich:
boolean result = 4 <= 4; // true
```

**Gleich (==)**
```java
// Prüfung auf Gleichheit:
boolean result = 5 == 5; // true

// Achtung: Für Strings .equals() verwenden!
String text1 = "Hallo";
String text2 = "Hallo";
boolean istGleich = text1.equals(text2); // true
```

**Ungleich (!=)**
```java
// Prüfung auf Ungleichheit:
boolean result = 7 != 3; // true
```

### Zuweisungsoperatoren

**Einfache Zuweisung (=)**
```java
// Wert einer Variable zuweisen:
int x = 10;
```

**Kombinierte Zuweisungen**
```java
// Addition: += entspricht x = x + 5
int x = 10;
x += 5; // x = 15

// Subtraktion: -= entspricht x = x - 3
x -= 3; // x = 12

// Multiplikation: *= entspricht x = x * 2
x *= 2; // x = 24

// Division: /= entspricht x = x / 4
x /= 4; // x = 6

// Modulo: %= entspricht x = x % 3
x %= 3; // x = 0
```

### Logische Operatoren

**Logisches nicht**
```java
boolean a = true;
boolean b = !a; // false
boolean c = !b; // true
```

**UND-Operator**

```java
boolean b1 = true;
boolean b2 = false;
boolean b3 = true;

System.out.println(b1 && b3); // true
System.out.println(b1 && b2); // false
```

**OR-Operator**
```java
boolean b1 = true;
boolean b2 = false;
boolean b4 = false;

System.out.println(b1 || b2); // true
System.out.println(b2 || b4); // false
```
