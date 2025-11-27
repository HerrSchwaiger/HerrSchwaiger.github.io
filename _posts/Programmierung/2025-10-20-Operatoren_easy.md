---
layout: single
title: "Operatoren"
date: 2025-10-20 00:01
permalink: /Programmierung/Operatoren_easy/
categories:
 - Programmierung
tags:
 - Operatoren
difficulty: easy
published: true
header:
  teaser: "assets/images/Operatoren_easy.png"
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/Operatoren_easy.png
toc: true
toc_label: "Inhalt"
---

Operatoren sind wie Rechenzeichen in der Mathematik. Du kennst sie aus der Schule: +, -, * und /

## Rechnen mit Zahlen

### Addition (+)
Mit + kannst du Zahlen zusammenzählen:

```java
int gold = 10 + 5; // gold = 15
```

Du kannst + auch benutzen, um Text zusammenzufügen:
```java
String name = "Feuer" + "ball"; // name = "Feuerball"
```

### Subtraktion (-)
Mit - ziehst du Zahlen ab:

```java
int leben = 20 - 3; // leben = 17
```

### Multiplikation (*)
Mit * multiplizierst du (mal-nehmen):

```java
int schaden = 5 * 2; // schaden = 10
```

### Division (/)
Mit / teilst du:

```java
int haelfte = 10 / 2; // haelfte = 5
```

**Achtung:** Wenn du ganze Zahlen teilst, bekommst du nur ganze Zahlen zurück:
```java
int ergebnis = 5 / 2; // ergebnis = 2 (nicht 2.5!)
```

### Rest einer Division (%)
Mit % bekommst du den Rest einer Division:

```java
int rest = 10 % 3; // rest = 1
// Denn 10 geteilt durch 3 ist 3, Rest 1
```

## Zahlen vergleichen

### Größer als (>)
Prüft, ob eine Zahl größer ist:

```java
boolean istStaerker = 15 > 10; // true (wahr)
```

### Kleiner als (<)
Prüft, ob eine Zahl kleiner ist:

```java
boolean istSchwaech = 5 < 10; // true (wahr)
```

### Größer oder gleich (>=)
```java
boolean kannReinGehen = 18 >= 18; // true
```

### Kleiner oder gleich (<=)
```java
boolean istJung = 12 <= 15; // true
```

### Gleich (==)
Prüft, ob zwei Zahlen gleich sind:

```java
boolean istGleich = 5 == 5; // true
```

**Wichtig:** Bei Text musst du `.equals()` verwenden:
```java
String name1 = "Held";
String name2 = "Held";
boolean gleicheNamen = name1.equals(name2); // true
```

### Ungleich (!=)
Prüft, ob zwei Zahlen unterschiedlich sind:

```java
boolean verschieden = 5 != 3; // true
```

## Wichtige Regeln

1. **Punkt vor Strich**: * und / werden vor + und - gerechnet
   ```java
   int ergebnis = 5 + 3 * 2; // ergebnis = 11 (nicht 16!)
   ```

2. **Klammern zuerst**: Was in Klammern steht, wird zuerst gerechnet
   ```java
   int ergebnis = (5 + 3) * 2; // ergebnis = 16
   ```

3. **Text vergleichen**: Benutze immer `.equals()` für Text
   ```java
   // Falsch:
   if (name == "Held") { }

   // Richtig:
   if (name.equals("Held")) { }
   ```

### Logische Operatoren

**Logisches nicht**
Verneinen eines boolean Ausdrucks. Wahr wird zu Falsch und Falsch wird zu Wahr.

```java
boolean a = true;
boolean b = !a; // false
boolean c = !b; // true
```

**UND-Operator**
Verknüpfen zweier boolean Werte. Beide müssen Wahr sein damit das Ergebnis Wahr ist, ansonsten Falsch. 

```java
boolean b1 = true;
boolean b2 = false;
boolean b3 = true;

System.out.println(b1 && b3); // true
System.out.println(b1 && b2); // false
```

**OR-Operator**
Verknüpfen zweier boolean Werte. Beide müssen Falsch sein damit das Ergebnis Falsch ist, ansonsten Wahr. 


```java
boolean b1 = true;
boolean b2 = false;
boolean b4 = false;

System.out.println(b1 || b2); // true
System.out.println(b2 || b4); // false
```