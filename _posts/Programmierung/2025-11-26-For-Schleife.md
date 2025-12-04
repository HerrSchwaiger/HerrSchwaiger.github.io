---
layout: single
title: "Die for-Schleife"
date: 2025-11-26 00:02
permalink: /Programmierung/for_medium/
categories:
 - Programmierung
tags:
 - For
 - Schleifen
 - Kontrollstrukturen
difficulty: medium
published: true
header:
  teaser: "assets/images/For.png"
  overlay_filter: "0.2"
  overlay_image: /assets/images/For.png
toc: true
toc_label: "Contents"
---

Die for-Schleife ist eine Kontrollstruktur, mit der du einen Codeblock eine bestimmte Anzahl von Malen wiederholen kannst. Sie eignet sich besonders gut, wenn du im Voraus weißt, wie oft etwas ausgeführert werden soll.

## Syntax
```java
for (Initialisierung; Bedingung; Aktualisierung) {
    // Anweisungen, die wiederholt werden
}
```

**Die drei Komponenten:**
1. **Initialisierung**: Wird einmal zu Beginn ausgeführt (z.B. `int i = 0`)
2. **Bedingung**: Wird vor jeder Wiederholung geprüft (z.B. `i < 10`)
3. **Aktualisierung**: Wird nach jeder Wiederholung ausgeführt (z.B. `i++`)

## Grundlegendes Beispiel
```java
for (int i = 0; i < 5; i++) {
    System.out.println("Durchlauf " + i);
}
```

**Ausgabe:**
```
Durchlauf 0
Durchlauf 1
Durchlauf 2
Durchlauf 3
Durchlauf 4
```

## Ablauf einer for-Schleife

1. Die Zählvariable wird initialisiert (`int i = 0`)
2. Die Bedingung wird geprüft (`i < 5`)
3. Wenn die Bedingung wahr ist, wird der Schleifenkörper ausgeführt
4. Nach dem Durchlauf wird die Aktualisierung durchgeführt (`i++`)
5. Zurück zu Schritt 2, bis die Bedingung falsch ist

## Praktische Anwendungen

### Zahlen summieren
```java
int summe = 0;
for (int zahl = 1; zahl <= 10; zahl++) {
    summe += zahl;
}
System.out.println("Summe: " + summe); // Ausgabe: 55
```

### Rückwärts zählen
```java
for (int countdown = 10; countdown > 0; countdown--) {
    System.out.println(countdown);
}
System.out.println("Start!");
```

## Wann verwendest du eine for-Schleife?

- Wenn die Anzahl der Wiederholungen im Voraus bekannt ist
- Wenn du einen Zähler benötigst, um auf Elemente zuzugreifen

## Häufige Fehler

**Endlosschleife durch falsche Bedingung:**
```java
// FALSCH: i wird nie größer als 5
for (int i = 0; i < 10; i--) {
    System.out.println(i);
}
```

## Unterschied zur while-Schleife

Die for-Schleife fasst Initialisierung, Bedingung und Aktualisierung kompakt zusammen. Eine while-Schleife ist flexibler, wenn die Anzahl der Durchläufe nicht im Voraus feststeht. Grundsätzlich lässt sich jede for-Schleife als while-Schleife schreiben und umgekehrt.

**Vergleich:**
```java
// for-Schleife
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Äquivalente while-Schleife
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
```