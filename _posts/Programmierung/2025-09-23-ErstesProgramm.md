---
layout: single
title: "Das Erste Java Programm"
date: 2025-09-23
permalink: /Programmierung/das_erste_java_programm/
categories: 
    - Programmierung
tags:
    - Erstes Programm
difficulty: medium
published: true
header:
    teaser: "assets/images/start.png"
    overlay_filter: "0.2"
    overlay_image: "/assets/images/start.png"

toc: true
toc_label: "Contents"

---
Ihr Einstieg in Java: Entdecken Sie, wie aus ein paar Zeilen Code ein ausführbares Programm wird. Wir erklären die Grundstruktur, die Rolle der main-Methode und den Weg von javac zu java - ohne komplizierte Theorie.

## Die Datei

Ein Java-Programm zu erstellen ist wie das Schreiben eines Rezepts für den Computer. Sie schreiben Anweisungen in einer Sprache, die der Computer mit etwas Hilfe verstehen kann - in unserem Fall Java. Diese Anweisungen werden in einer Textdatei mit der Endung `.java` gespeichert.
Erstellen Sie für Ihr erstes Programm eine Datei namens `HelloWorld.java`.

## Der Rahmen: Die Compilationseinheit

In Java können Sie nicht einfach Anweisungen in eine Datei schreiben und diese dem Compiler übergeben. Ihre Anweisungen müssen in einen Rahmen gepackt werden. Dieser Rahmen ist eine Klasse mit ihren Methoden und Variablen.

Java ist eine objektorientierte Programmiersprache, die Programmanweisungen außerhalb von Klassen nicht erlaubt. Deshalb beginnt jedes Java-Programm mit der **Deklaration** einer Klasse:

```java
public class HelloWorld {
    // Hier kommt der Inhalt der Klasse
}
```

Das Schlüsselwort `class` **deklariert** eine Klasse namens `HelloWorld`. Der Klassenname ist grundsätzlich frei wählbar, muss aber **identisch mit dem Dateinamen sein.**

## Der Startpunkt: Die main-Methode

Die Methode `public static void main(String[] args)`{:.java} ist für die Laufzeitumgebung etwas ganz Besonderes. Beim Ausführen des Programms wird genau diese **Methode** als Erstes ausgeführt:

```java
public static void main(String[] args) {
    // Hier beginnt die Ausführung Ihres Programms
}
```

Diese Zeile müssen Sie auswendig lernen - sie ist der Standard-Startpunkt für alle ausführbaren Java-Programme.
Die **Schlüsselwörter** `public` und `static` müssen dabei eingehalten werden. 

## Methoden: Sammlungen von Anweisungen

Eine Methode ist eine Sammlung von Anweisungen unter einem Namen. In den **geschweiften Klammern** der Klasse folgen Deklarationen von Methoden - also Unterprogrammen, die eine Klasse anbietet.

## Die erste Ausgabe: System.out.println()

Anders als viele Skriptsprachen hat Java keine eingebauten Methoden, die einfach so "da" sind. Jede Methode "gehört" immer zu einem Typ. Für die Ausgabe auf der Konsole verwenden wir:

```java
public class HelloWorld {
  public static void main( String[] args ) {
    // Start des Programms
    System.out.println("Hello World");
    // Ende des Programms
  }
}
```

- `println()` gehört zu `out`
- `out` gehört zur Klasse `System`
- Erst durch diese vollständige Schreibweise ist klar, wer die Ausgabe übernimmt

{: .notice--primary}
**Vorsicht!** Jede geschweifte Klammer die geöffnet wird `{` muss auch irgendwann wieder geschlossen werden `}`.

## Von Quellcode zu ausführbarem Programm

### Kompilierung mit javac
Nun muss die Quell-Datei `
Der **Java-Compiler** übersetzt Ihren Quellcode in **Bytecode**:

```bash
javac HelloWorld.java
```

Dabei entsteht eine `.class`-Datei mit dem kompilierten Bytecode. Wenn Fehler im Code sind, erhalten Sie Fehlermeldungen und keine `.class`-Datei wird erstellt.

### Ausführung mit java
Die **Java Virtual Machine (JVM)** führt den Bytecode aus:

```bash
java HelloWorld
```

Die JVM sucht nach der `main`-Methode und führt die darin enthaltenen Anweisungen aus.

{: .notice--primary}
**Glückwunsch!** Sie haben Ihren ersten Java-Code, geschrieben kompiliert und ausgeführt! Damit ist die Arbeit allerdings noch nicht getan...

## Kommentare im Code

Um den Code verständlicher zu machen werden **Kommentare** verwendet.
Hinter zwei Schrägstrichen `//` befindet sich ein Zeilenkommentar, der bis zum Ende der Zeile gilt:

```java
public class HelloWorld {
    public static void main(String[] args) {
        // Start des Programms
        System.out.println("Hello World");
        // Ende des Programms
    }
}
```

{: .notice--primary}
Kommentare sind nicht nur nützlich für Ihre Kollegen, sondern erleichtern auch Ihnen selbst das Verständnis, erst recht wenn Sie mal mehrere Wochen nichts mit dem Code zu tun hatten.


## Namenskonventionen

- Klassennamen beginnen mit Großbuchstaben: `HelloWorld`
- Methodennamen beginnen mit Kleinbuchstaben: `main`
- Alle Java-Schlüsselwörter beginnen mit Kleinbuchstaben: `public`, `class`, `static`
