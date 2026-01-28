---
layout: single
title: "Numerische Datentypen"
date: 2025-09-24
permalink: /Programmierung/NumerischeDatentypen_medium/
categories:
 - Programmierung
tags:
 - Datentypen
difficulty: medium
published: true
header:
  teaser: "assets/images/datentypen_numerisch.png"
  overlay_color: "#000"
  overlay_filter: "0.7"
  overlay_image: /assets/images/datentypen_numerisch.png
toc: true
toc_label: "Contents"
---

Zahl ist nicht gleich Zahl. Vor dem Deklarieren einer Variable muss sich erst für den richtigen Datentypen entschieden werden. Bei Zahlen aller Art (=numerische Werte) muss die Wahl auf einen der numerischen Datentypen `int`, `double`, `float`, `byte`, `short` oder `long` fallen.

## Warum verschiedene Zahlentypen?

Stellt euch vor, ihr organisiert eine Bibliothek. Für die Seitenzahl eines Buches reicht ein kleines Etikett, für die Gesamtzahl aller Bücher in der Bibliothek braucht ihr schon ein größeres Schild, und für die Anzahl aller Wörter in allen Büchern müsstet ihr eine ganze Tafel verwenden. Genauso verhält es sich mit Zahlen im Computer: Verschiedene Zahlen brauchen unterschiedlich viel Speicherplatz.

## Der int-Typ: Der Allrounder

**int** ist der Standard-Datentyp für ganze Zahlen in Java. Er kann Werte von etwa -2,1 Milliarden bis +2,1 Milliarden speichern (genau: -2.147.483.648 bis 2.147.483.647). Dieser Wertebereich reicht für die allermeisten Anwendungen aus.

```java
int alter = 25;
int punktzahl = 1500;
int temperatur = -15;
```

Ein `int` benötigt genau 32 Bit (4 Byte) Speicherplatz. Das mag heute winzig erscheinen, aber bei Millionen von Zahlen summiert sich das durchaus.

## Der double-Typ: Für Kommazahlen

Während `int` nur ganze Zahlen speichert, ist **double** für Dezimalzahlen zuständig. Der Name kommt von "double precision" - doppelte Genauigkeit im Vergleich zum kleineren float-Typ.

```java
double preis = 19.99;
double pi = 3.14159;
double geschwindigkeit = 85.7;
```

Ein double verwendet 64 Bit (8 Byte) und kann sowohl sehr große als auch sehr kleine Zahlen mit vielen Nachkommastellen speichern. Allerdings arbeitet double mit **Gleitkommadarstellung**, was zu überraschenden Rundungsfehlern führen kann. Die Berechnung 0.1 + 0.2 ergibt in Java nicht exakt 0.3, sondern 0.30000000000000004.

Diese Eigenart teilt sich Java mit praktisch allen Programmiersprachen - es liegt an der Art, wie Computer Dezimalzahlen intern darstellen.

{: .notice--primary}
**Wichtig:** Java bietet auch den Datentyp `float` für Dezimalzahlen, der nur 32 Bit verwendet. Bei Fließkommazahlen hat dies nicht nur zur Folge, dass die größten bzw. kleinsten darstellbaren Zahlen betraglich kleiner sind als bei 64 Bit, sondern auch dass die Präzision der Darstellung sinkt. Dadurch treten Rundungsfehler deutlich schneller auf. Aus diesem Grund wird in der Praxis fast ausschließlich `double` für Dezimalzahlen verwendet.

## byte und short: Minimaler Speicherbedarf

**byte** ist der kleinste Zahlentyp in Java und kann nur Werte von -128 bis 127 speichern. Das erscheint sehr eingeschränkt, aber `byte` hat spezielle Anwendungsbereiche.
**short** liegt zwischen `byte` und `int` und kann Werte von -32.768 bis 32.767 speichern. Er benötigt 16 Bit (2 Byte) Speicher.

```java
byte note = 1;
byte temperatur = 25; 

short jahr = 2025;
short hoehe = 1850;  // Höhe in Metern
```

Ein `byte` benötigt nur 8 Bit (1 Byte) Speicher. Das macht `byte` interessant für große Datenmengen, wo jedes gesparte Bit zählt. Besonders bei der Verarbeitung von Bildern, Netzwerkdaten oder beim Speichern großer Datenstrukturen kann der Speichervorteil erheblich sein.
`short` wird in modernen Anwendungen relativ selten verwendet, da der Speichervorteil gegenüber `int` oft vernachlässigbar ist, aber die Einschränkungen beim Wertebereich durchaus problematisch sein können. In speziellen Bereichen wie der Audioverarbeitung (16-bit Audio) oder bei embedded Systems ist `short` jedoch durchaus relevant.

## Der long-Typ: Für richtig große Zahlen

Wenn `int` nicht reicht, kommt **long** ins Spiel. `long` kann Werte von etwa -9,2 Quintillionen bis +9,2 Quintillionen speichern (genau: -9.223.372.036.854.775.808 bis 9.223.372.036.854.775.807).

```java
long weltbevoelkerung = 8000000000L;  // Das 'L' ist wichtig!
long nanosekunden = System.nanoTime();
long dateigroesse = 5000000000L;
```

Ein `long` benötigt 64 Bit (8 Byte) Speicher - doppelt so viel wie ein `int`. Das 'L' am Ende ist wichtig, damit Java erkennt, dass es sich um einen long-Wert handelt. Ohne das 'L' würde Java versuchen, die Zahl als `int` zu interpretieren, was bei großen Zahlen zu Compilerfehlern führt.

`long` wird verwendet für Zeitstempel (Millisekunden seit 1970), Berechnungen mit sehr großen Zahlen oder IDs in großen Datenbanken.

## Literale und Lesbarkeit

Java erlaubt Unterstriche in Zahlenliteralen für bessere Lesbarkeit:

```java
int million = 1_000_000;
long big = 1_000_000_000_000L;
double price = 1_999.99;
```

Diese Unterstriche werden beim Kompilieren ignoriert, machen den Code aber deutlich lesbarer.