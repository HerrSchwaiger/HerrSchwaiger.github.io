---
layout: single
title: "Die restlichen Datentypen"
date: 2025-09-24
permalink: /Programmierung/RestlicheDatentypen_medium/
categories:
 - Programmierung
tags:
 - Datentypen
difficulty: medium
published: false
header:
  teaser: "assets/images/zeichen_datentypen.png"
  overlay_color: "#000"
  overlay_filter: "0.7"
  overlay_image: /assets/images/zeichen_datentypen.png
toc: true
toc_label: "Contents"
---

Neben den verschiedenen Zahlentypen bietet Java auch Datentypen für Text und logische Werte. Diese sind fundamental wichtig für praktisch jedes Programm - schließlich müssen Computer nicht nur rechnen, sondern auch Text verarbeiten und Entscheidungen treffen können.

## Der char-Typ: Ein einzelnes Zeichen

**char** steht für "character" und speichert genau ein einzelnes Zeichen. Das kann ein Buchstabe, eine Ziffer, ein Sonderzeichen oder sogar ein Leerzeichen sein.

```java
char buchstabe = 'A';
char ziffer = '7';
char sonderzeichen = '@';
char leerzeichen = ' ';
```

Wichtig sind die einfachen Anführungszeichen - sie unterscheiden char von `String` . Ein `char` benötigt immer genau 16 Bit (2 Byte) Speicher, unabhängig davon, welches Zeichen gespeichert wird.

Intern speichert Java char-Werte als Unicode-Zahlen. Das bedeutet, ihr könnt auch direkt mit diesen Zahlenwerten arbeiten:

```java
char a = 65;        // entspricht 'A'
char herzSymbol = '\u2665';  // Unicode für ♥
char newline = '\n'; // Zeilenschaltung
```

Diese Unicode-Unterstützung macht Java international einsetzbar - ihr könnt problemlos deutsche Umlaute, kyrillische Buchstaben oder chinesische Schriftzeichen verwenden.

## Der boolean-Typ: Ja oder Nein

**boolean** ist der einfachste Datentyp in Java. Er kann nur zwei Werte annehmen: `true` (wahr) oder `false` (falsch). Dieser Datentyp ist nach dem Mathematiker George Boole benannt.

```java
boolean istWahr = true;
boolean istFalsch = false;
```

boolean-Werte sind das Ergebnis von Vergleichsoperationen und werden hauptsächlich in Bedingungen (if-Statements) und Schleifen verwendet. Obwohl ein boolean theoretisch nur ein Bit benötigen würde, verwendet Java intern mindestens 8 Bit dafür - die genaue Größe ist implementierungsabhängig.

## Der String-Typ: Text mit besonderen Eigenschaften

**String** ist streng genommen kein primitiver Datentyp wie die anderen, sondern eine Klasse. Strings speichern Text beliebiger Länge und sind in Java allgegenwärtig.

```java
String name = "Max Mustermann";
String leerString = "";
String mehrzeilig = "Erste Zeile\nZweite Zeile";
String mitAnführungszeichen = "Er sagte: \"Hallo!\"";
```

Strings werden mit doppelten Anführungszeichen definiert, im Gegensatz zu char mit einfachen. 

