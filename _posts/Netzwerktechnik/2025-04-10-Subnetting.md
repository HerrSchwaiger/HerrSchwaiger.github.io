---
layout: single
title: "Subnetting"
date: 2025-04-10 00:00:02
permalink: /Netzwerktechnik/Subnetting/
categories:
  - Netzwerktechnik
tags:
  - Subnetting
difficulty: medium
published: true
header:
    teaser: "assets/images/subnetting.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/subnetting.jpg

toc: true
toc_label: "Inhalt"
---
Subnetting ist ein grundlegendes Konzept in der Netzwerktechnik, das es Netzwerkadministratoren ermöglicht, ein einzelnes Netzwerk in mehrere kleinere Netzwerke, sogenannte Subnetze, zu unterteilen. Dieser Prozess hilft dabei, die Effizienz und Sicherheit von Netzwerken zu verbessern. In diesem Blogpost werden wir die Grundlagen von Subnetting erklären und praktische Beispiele durchgehen, um das Verständnis zu vertiefen.

<script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

## Was ist Subnetting?

<style>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
<figure>
    <img src="/assets/images/IP_address.png" width="400"/>
    <figcaption>Fig1: Aufbau der Subnetzmaske</figcaption>
</figure>

Subnetting ist der Prozess der Aufteilung eines IP-Netzwerks in kleinere, logische Subnetze durch das Ändern der Subnetzmaske. Eine Subnetzmaske bestimmt, welcher Teil der IP-Adresse das Netzwerk und welcher Teil den Host identifiziert. Eine längerer Hostanteil erlaubt mehr Hosts innerhalb eines Subnetzes, während ein kleinerer Hostanteil dafür mehr Subnetze erlaubt. Erhöht man beispielsweise den Netzanteil um zwei Bits und verringert somit gleichzeitig den Hostanteil um zwei bits ergibt sich die folgende Veränderung der Subnetzmaske:

<figure>
    <img src="/assets/images/IP_address_2.png" width="400"/>
    <figcaption>Fig1: Erhöhen des Netzanteils um 2 Bit</figcaption>
</figure>

Da der Netzanteil nun um zwei Bits länger ist lassen sich damit $$ 2^2 = 4 $$ neue Netze bilden:

<figure>
    <img src="/assets/images/Subnetting.png" width="400"/>
    <figcaption>Fig2: Subnetting mit zwei zusätzlichen Netzbits</figcaption>
</figure>

Dabei entspricht ein Hostanteil aus **nur Nullen** immer der Netzadresse eines Subnetzes, während ein Hostanteil aus **auschließlich Einsen** dem Broadcast entspricht. Damit bleiben innerhalb eines Subnetzes $$ 2^{32-L'}-2 $$ **nutzbare IP-Adressen**, wobei $$L'$$ die neue Präfixlänge ist.

## Beispiel

Der Adressbereich **172.16.0.0/16** soll in **15** Subnetze aufgeteilt werden. 
1. Für 15 Netze müssen wir die Präfixlänge um 4 Bits erhöhen, da $$ 2^4 = 16 $$.
  Die **neue Präfixlänge** ist damit: $$L'= 16+4 = 20$$.
1. Bei einer Präfixlänge von 20 verbleiben damit $$ 2^{32-20} - 2 = 4094$$ **nutzbare Adressen pro Subnetz**.
2. Die resultierenden **Netzwerk-Adressen** und **Broadcast-Adressen** berechnen sich folgendermaßen:

    | Subnetz Nr. | Netzwerk-Adresse | Broadcast-Adresse |
    | ----------- | ---------------- | ----------------- |
    | 1           | 172.16.0.0       | 172.16.15.255     |
    | 2           | 172.16.16.0      | 172.16.31.255     |
    | 3           | 172.16.32.0      | 172.16.47.255     |
    | ...         | ...              | ...               |
    | 14          | 172.16.208.0     | 172.16.223.255    |
    | 15          | 172.16.224.0     | 172.16.239.255    |
    | 16          | 172.16.240.0     | 172.16.255.255    |


Der Unterschied zwischen zwei Netzwerkadressen beträgt hier genau **16**. Das ist kein Zufall sondern lässt sich in der **binären** Darstellung einfach erklären:


| Subnetz Nr. | Netzwerk-Adresse Dezimal | Netzwerk-Adresse Binär                  |
| ----------- | ------------------------ | --------------------------------------- |
| 1           | 172.16.0.0              | 10101100.00010000.<span style="color:limegreen">**0000**</span>0000.00000000 |
| 2           | 172.16.16.0              | 10101100.00010000.<span style="color:limegreen">**0001**</span>0000.00000000 |
| 3           | 172.16.32.0              | 10101100.00010000.<span style="color:limegreen">**0010**</span>0000.00000000 |
| ...         | ...                      | ...                                     |
| 14          | 172.16.208.0             | 10101100.00010000.<span style="color:limegreen">**1101**</span>0000.00000000 |
| 15          | 172.16.224.0             | 10101100.00010000.<span style="color:limegreen">**1110**</span>0000.00000000 |
| 16          | 172.16.240.0             | 10101100.00010000.<span style="color:limegreen">**1111**</span>0000.00000000 |

Der zusätzliche Präfix der zur Subnetzbildung hinzugefügt wurde, hier <span style="color:limegreen">**grün**</span> markiert, wird einfach binär hoch gezählt. Da er aber inmitten eines 8er Blocks ist und damit sein kleinster Bit an der 16er Stelle ist, wird tatsächlich Dezimal in 16er Schritten gezählt.

## Fazit

Subnetting ist ein mächtiges Werkzeug, das Netzwerkadministratoren hilft, ihre Netzwerke effizienter zu gestalten. Durch das Verständnis und die Anwendung von Subnetting können Sie die Leistung und Sicherheit Ihres Netzwerks erheblich verbessern.