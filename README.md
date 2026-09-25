# Java-Einführung (BOS IT Wahlfach)

Statische Kurswebsite, erzeugt aus der Mebis-Sicherung des Kurses `AP10_Java_ScT`.

## Veröffentlichen mit GitHub Pages

1. Auf GitHub ein neues Repository anlegen (z. B. `java-einfuehrung`).
2. Den kompletten Inhalt dieses Ordners hochladen. Wichtig: `index.html` muss direkt im Hauptverzeichnis liegen, nicht in einem Unterordner. Die Datei `.nojekyll` mit hochladen.
3. Im Repository unter **Settings > Pages** bei *Source* „Deploy from a branch“ wählen, Branch `main`, Ordner `/ (root)`, speichern.
4. Nach ein bis zwei Minuten ist die Seite unter `https://<benutzername>.github.io/<repository>/` erreichbar.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `index.html` | Kursübersicht |
| `abschnitt-00.html` … `abschnitt-11.html` | Ein Abschnitt pro Seite, Inhalte 1:1 aus Mebis |
| `arbeitsblaetter/` | Arbeitsblätter als PDF |
| `medien/` | Bilder und Videos aus „Meine Dateien“ |
| `assets/` | Bootstrap 5.3, PrismJS, Schriften, Seiten-CSS/JS (alles lokal, keine externen CDNs) |

## Noch offen

- `medien/JavaCompile.mp4` (Video in Abschnitt 1) lag nicht in der Sicherung, weil es in „Meine Dateien“ gespeichert ist. Datei unter genau diesem Namen in `medien/` hochladen.
- In den Abschnitten 2, 7, 8, 9 und 10 sind die Video-Platzhalter aus Mebis noch leer. Im HTML steht an der Stelle ein Kommentar mit der Vorlage für das `<iframe>`.

## Unterschiede zu Mebis

- YouTube-Videos werden über `youtube-nocookie.com` eingebettet.
- Tooltips werden über `assets/js/site.js` initialisiert (Mebis macht das automatisch).
- In der Schleifen-Visualisierung (Abschnitt 7) heißen die Zeiger „dunkelblau“ und „hellblau“, weil die Standard-Bootstrap-Farben anders aussehen als das Mebis-Theme.
