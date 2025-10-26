---
layout: single
title: "Erweiterte Java Funktionen"
date: 2025-09-24
permalink: /Programmierung/ErweiterteJavaFunktionen/
categories:
 - Programmierung
tags:
 - Datentypen
difficulty: medium
published: true
header:
  teaser: "assets/images/erweitert.png"
  overlay_color: "#000"
  overlay_filter: "0.7"
  overlay_image: /assets/images/erweitert.png
toc: true
toc_label: "Contents"
---

Dieser Post erklärt dir die wichtigsten Werkzeuge zur Arbeit mit Zufallszahlen, Texten und Datentyp-Umwandlungen in Java – alles, was du brauchst, um fortgeschrittene Programme zu erstellen.

## Math.random() - Zufallszahlen generieren

### Grundlagen von Math.random()

Die Methode `Math.random()` ist eine der nützlichsten Funktionen in Java, wenn du Zufallszahlen benötigst. Sie gibt immer eine Zahl vom Typ `double` zurück, die größer oder gleich 0.0 und kleiner als 1.0 ist.

```java
double zufallszahl = Math.random();
// Beispiel-Ausgaben: 0.7234, 0.1892, 0.9456
```

### Zufallszahlen in einem bestimmten Bereich

Um Zufallszahlen in einem bestimmten Bereich zu erzeugen, musst du die Zufallszahl entsprechend umrechnen:

**Muster für Zufallszahlen von MIN bis MAX:**
```
(int)(Math.random() * (MAX - MIN + 1)) + MIN
```

**Beispiel: Würfelwurf (1-6)**
```java
int wuerfel = (int)(Math.random() * 6) + 1;
```

---

## String-Operationen

Strings sind Textketten und bieten viele nützliche Methoden zur Verarbeitung.

### String-Verkettung mit dem + Operator

Du kannst Strings und andere Datentypen mit dem `+` Operator verbinden:

```java
String ort = "München";
String straße = "Nymphenburgerstraße";
int hausnummer = 10;

String adresse = ort + " " + straße + " " + hausnummer;
// Ergebnis: "München Nymphenburgerstraße 10"

String text = "Die " + straßename + " ist in " + ort;
// Ergebnis: "Die Nymphenburgerstraße ist in München"
```

### String.length() - Länge eines Strings

Die Methode `length()` gibt die Anzahl der Zeichen in einem String zurück:

```java
String wort = "Hallo";
int laenge = wort.length();
// Ergebnis: 5
```

### String.charAt() - Einzelne Zeichen extrahieren

Mit `charAt(index)` kannst du ein einzelnes Zeichen an einer bestimmten Position bekommen. **Wichtig:** Der Index beginnt bei 0!

```java
String name = "Aragorn";

char ersterBuchstabe = name.charAt(0);
// Ergebnis: 'A'

char zweiterBuchstabe = name.charAt(1);
// Ergebnis: 'r'

char letzterBuchstabe = name.charAt(name.length() - 1);
// Ergebnis: 'n'
```

**Index-Übersicht für "Aragorn":**
```
A  r  a  g  o  r  n
0  1  2  3  4  5  6
```

### String.toUpperCase() und String.toLowerCase()

Diese Methoden wandeln alle Buchstaben in Groß- bzw. Kleinbuchstaben um:

```java
String original = "Gandalf";

String gross = original.toUpperCase();
// Ergebnis: "GANDALF"

String klein = original.toLowerCase();
// Ergebnis: "gandalf"
```

**Wichtig:** Diese Methoden ändern den ursprünglichen String nicht, sondern geben einen neuen String zurück!

---

## Casting - Datentyp-Umwandlung

### Was ist Casting?

Casting bedeutet, einen Wert von einem Datentyp in einen anderen umzuwandeln. In Java gibt es zwei Arten von Casting:

### 1. Implizites Casting (Automatisch)

Java wandelt automatisch "kleinere" Datentypen in "größere" um:

```java
int ganzzahl = 10;
double kommazahl = ganzzahl;
// Ergebnis: 10.0 (automatisch umgewandelt)

int x = 5;
double ergebnis = x * 2.5;
// Ergebnis: 12.5 (x wird automatisch zu double)
```

**Hierarchie (klein → groß):**
```
byte → short → int → long → float → double
```

### 2. Explizites Casting (Manuell)

Wenn du einen "größeren" Datentyp in einen "kleineren" umwandeln willst, musst du explizit casten:

```java
double kommazahl = 15.7;
int ganzzahl = (int) kommazahl;
// Ergebnis: 15 (Nachkommastellen werden abgeschnitten!)

double berechnung = 10.99;
int gerundet = (int) berechnung;
// Ergebnis: 10
```

**Syntax:** `(zieltyp) wert`

### Casting bei Berechnungen

Ein häufiger Anwendungsfall ist das Casten von Berechnungsergebnissen:

```java
int staerke = 10;
double faktor = 15.5;

// Berechnung ergibt double
double resultat = staerke * faktor;
// Ergebnis: 155.0

// Casten zu int
int gesundheit = (int) (staerke * faktor);
// Ergebnis: 155
```

**Wichtig:** Die Klammern um die Berechnung sind wichtig! Vergleiche:

```java
int falsch = (int) staerke * faktor;
// Cast nur staerke, dann Multiplikation → ergibt double!

int richtig = (int) (staerke * faktor);
// Erst Multiplikation, dann Cast → ergibt int
```

### Präzisionsverlust beim Casting

Beim Casten von `double` zu `int` gehen die Nachkommastellen verloren:

```java
double genau = 15.95;
int ungenau = (int) genau;
// Ergebnis: 15 (nicht 16! Es wird NICHT gerundet!)

double pi = 3.14159;
int piInt = (int) pi;
// Ergebnis: 3
```

**Achtung:** Es wird abgeschnitten, nicht gerundet! Für Rundung nutze `Math.round()`:

```java
double wert = 15.95;
int gerundet = (int) Math.round(wert);
// Ergebnis: 16
```

### Casting bei Math.random()

Ein sehr häufiger Anwendungsfall ist das Casten von `Math.random()` zu `int`:

```java
// Math.random() gibt double zurück
double zufallDouble = Math.random() * 20;
// z.B. 13.456789

// Casten zu int
int zufallInt = (int) (Math.random() * 20);
// z.B. 13
```

### Char zu String und zurück

Manchmal musst du zwischen `char` und `String` wechseln:

```java
// char aus String extrahieren
String name = "Anna";
char ersteBuchstabe = name.charAt(0);
// Ergebnis: 'A' (Typ: char)

// char zu String konvertieren (mit Verkettung)
char buchstabe = 'X';
String text = "" + buchstabe;
// Ergebnis: "X" (Typ: String)

// Oder explizit:
String text2 = String.valueOf(buchstabe);
```

### Mehrere Datentypen kombinieren

Beim Kombinieren verschiedener Datentypen mit `+` ist die Reihenfolge wichtig:

```java
int a = 5;
int b = 10;

String ergebnis1 = a + b + " Summe";
// Ergebnis: "15 Summe" (erst Rechnung, dann String)

String ergebnis2 = "Summe " + a + b;
// Ergebnis: "Summe 510" (alles wird String!)

String ergebnis3 = "Summe " + (a + b);
// Ergebnis: "Summe 15" (Klammern erzwingen Rechnung)
```

---

## Häufige Fehler und Lösungen

### Fehler 1: Division durch int ergibt int

```java
int a = 5;
int b = 2;
double ergebnis = a / b;
// Ergebnis: 2.0 (nicht 2.5!)

// Lösung: Mindestens eine Zahl zu double machen
double richtig = a / 2.0;
// Ergebnis: 2.5
```

### Fehler 2: Casting-Klammern vergessen

```java
int x = (int) 5.5 * 2;
// Cast nur die 5.5, dann * 2 → ergibt double!

int richtig = (int)(5.5 * 2);
// Erst Rechnung, dann Cast
```

### Fehler 3: String-Verkettung vs. Addition

```java
int a = 5;
int b = 10;

System.out.println(a + b);
// Ergebnis: 15

System.out.println("Summe: " + a + b);
// Ergebnis: "Summe: 510"

System.out.println("Summe: " + (a + b));
// Ergebnis: "Summe: 15"
```

### Fehler 4: charAt() mit falschem Index

```java
String wort = "Hallo";  // Länge: 5, Indizes: 0-4

char falsch = wort.charAt(5);
// FEHLER! Index außerhalb des Bereichs

char richtig = wort.charAt(4);
// Ergebnis: 'o' (letztes Zeichen)
```

---