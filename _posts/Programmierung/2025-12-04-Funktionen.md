---
layout: single
title: "Funktionen in Java"
date: 2025-12-04 00:02
permalink: /Programmierung/funktionen/
categories:
 - Programmierung
tags:
 - Funktionen
difficulty: medium
published: false
header:
  teaser: "assets/images/funktion.png"
  overlay_filter: "0.2"
  overlay_image: /assets/images/funktion.png
toc: true
toc_label: "Contents"
---

Stell dir vor, du schreibst ein Programm und musst bestimmte Berechnungen oder Aktionen immer wieder durchführen. Zum Beispiel: eine Berechnung durchführen, Daten prüfen, Werte aktualisieren. Anstatt diesen Code immer wieder zu schreiben, packst du ihn in eine Funktion – einen wiederverwendbaren Codeblock, den du mit einem Namen aufrufen kannst.
In Java heißen Funktionen eigentlich Methoden, aber die Begriffe werden oft synonym verwendet. Eine Methode ist wie ein Mini-Programm in deinem Programm: Du gibst ihr einen Auftrag, sie führt ihn aus und gibt dir eventuell ein Ergebnis zurück.

## Anatomie einer Methode

Schauen wir uns den grundlegenden Aufbau an:

```java‚
public int berechneSchaden(int angriffswert, int verteidigung) {
    int schaden = angriffswert - verteidigung;
    if (schaden < 0) {
        schaden = 0;
    }
    return schaden;
}
```

Diese Methode besteht aus mehreren Teilen:

**1. Sichtbarkeit:** `public` bedeutet, dass die Methode von überall aufgerufen werden kann. Weitere Optionen sind `private` (nur innerhalb der Klasse) und `protected` (innerhalb des Pakets und Unterklassen).

**2. Rückgabetyp:** `int` sagt uns, dass die Methode eine ganze Zahl zurückgibt. Wenn eine Methode nichts zurückgibt, schreibst du `void`.

**3. Methodenname:** `berechneSchaden` – sprechend und verständlich. Namen sollten immer beschreiben, was die Methode tut.

**4. Parameter:** `(int angriffswert, int verteidigung)` – die Eingabewerte, mit denen die Methode arbeitet. Sie stehen in Klammern, getrennt durch Kommas.

**5. Methodenkörper:** Der Code zwischen den geschweiften Klammern `{ }` – hier passiert die eigentliche Arbeit.

**6. Return-Statement:** `return schaden;` gibt das Ergebnis zurück an die Stelle, wo die Methode aufgerufen wurde.

## Methoden aufrufen

Eine Methode zu definieren ist nur die halbe Miete – du musst sie auch verwenden:

```java
int erlittenerSchaden = berechneSchaden(25, 10);
System.out.println("Der Gegner erleidet " + erlittenerSchaden + " Schaden!");
```

Hier rufst du die Methode mit konkreten Werten auf (25 für Angriff, 10 für Verteidigung) und speicherst das Ergebnis in einer Variable.

## Methoden ohne Rückgabewert

Nicht jede Methode muss etwas zurückgeben. Manchmal soll sie nur eine Aktion ausführen:

```java
public void zeigeSpielerstatus(String name, int leben) {
    System.out.println("╔════════════════════════════╗");
    System.out.println("║ Spieler: " + name);
    System.out.println("║ Leben:   " + leben + " HP");
    System.out.println("╚════════════════════════════╝");
}
```

Diese Methode gibt nichts zurück (`void`), sondern gibt nur Informationen auf der Konsole aus.

## Methoden ohne Parameter

Manche Methoden brauchen keine Eingaben:

```java
public int wuerfle() {
    return (int)(Math.random() * 6) + 1;
}
```

Aufruf: `int augenzahl = wuerfle();`

## Überladung von Methoden (Method Overloading)

Du kannst mehrere Methoden mit dem **gleichen Namen** erstellen, solange sie unterschiedliche Parameter haben:

```java
public void angriff(String gegner) {
    System.out.println("Normaler Angriff auf " + gegner);
}

public void angriff(String gegner, String waffe) {
    System.out.println("Angriff auf " + gegner + " mit " + waffe);
}

public void angriff(String gegner, String waffe, int kritMultiplikator) {
    System.out.println("KRITISCHER Angriff auf " + gegner + " mit " + waffe + "!");
}
```

Java wählt automatisch die passende Methode basierend auf den übergebenen Argumenten.

## Warum Methoden verwenden?

### 1. **DRY-Prinzip** (Don't Repeat Yourself)
Statt denselben Code mehrfach zu schreiben, packst du ihn einmal in eine Methode.

**Schlecht:**
```java
// Im Kampf gegen Goblin
int schaden1 = spielerAngriff - 5;
gegnerLeben = gegnerLeben - schaden1;

// Im Kampf gegen Ork
int schaden2 = spielerAngriff - 8;
gegnerLeben = gegnerLeben - schaden2;

// Im Kampf gegen Drache
int schaden3 = spielerAngriff - 15;
gegnerLeben = gegnerLeben - schaden3;
```

**Gut:**
```java
public void fuehreAngriffAus(int verteidigung) {
    int schaden = berechneSchaden(spielerAngriff, verteidigung);
    gegnerLeben -= schaden;
}

fuehreAngriffAus(5);  // Goblin
fuehreAngriffAus(8);  // Ork
fuehreAngriffAus(15); // Drache
```

### 2. **Lesbarkeit**
Code mit gut benannten Methoden liest sich wie eine Geschichte:

```java
starteSpiel();
erstelleSpieler();
while (spielerLeben > 0) {
    zeigeOptionen();
    verarbeiteEingabe();
    aktualisiereSpielwelt();
}
zeigeGameOver();
```

### 3. **Wartbarkeit**
Wenn du einen Fehler findest oder etwas ändern willst, musst du es nur an einer Stelle tun.

### 4. **Testbarkeit**
Kleine, fokussierte Methoden lassen sich leichter testen und debuggen.

## Best Practices

### Aussagekräftige Namen verwenden
```java
// Schlecht
public int calc(int a, int b) { ... }

// Gut
public int berechneGesamtschaden(int basisschaden, int bonusschaden) { ... }
```

### Eine Aufgabe pro Methode
Jede Methode sollte genau eine klar definierte Aufgabe erfüllen.

```java
// Schlecht - macht zu viel auf einmal
public void spielzug() {
    zeigeKarte();
    pruefeInput();
    berechneSchaden();
    aktualisiereScore();
    speichereSpielstand();
}

// Gut - aufgeteilt in mehrere fokussierte Methoden
public void spielzug() {
    Karte karte = zeigeKarte();
    Aktion aktion = pruefeInput();
    ausfuehrenAktion(karte, aktion);
}
```

### Kurze Methoden bevorzugen
Eine gute Faustregel: Wenn eine Methode nicht auf einen Bildschirm passt (ca. 20-30 Zeilen), solltest du überlegen, sie aufzuteilen.

### Parameter sinnvoll benennen
```java
// Schlecht
public void m(int x, int y, boolean z) { ... }

// Gut
public void bewegeSpieler(int zielX, int zielY, boolean istSprint) { ... }
```

## Häufige Fehler

### 1. Falscher Rückgabetyp
```java
public void berechneSchaden() {  // void, aber...
    return 42;  // ...versucht was zurückzugeben → FEHLER!
}
```

### 2. Fehlende Return-Anweisung
```java
public int getSchaden() {
    int schaden = 10;
    // Fehlt: return schaden;
} // FEHLER: Methode muss einen int zurückgeben
```

### 3. Parameter vergessen
```java
public void angriff(String gegner, int schaden) { ... }

angriff("Goblin");  // FEHLER: schaden fehlt!
```

## Zusammenfassung

Methoden sind dein wichtigstes Werkzeug, um Code zu strukturieren und wiederzuverwenden. Sie machen deinen Code:
- **Übersichtlicher** durch klare Strukturierung
- **Wiederverwendbar** durch Vermeidung von Duplikaten
- **Wartbarer** durch zentrale Änderungen
- **Testbarer** durch isolierte Funktionalität