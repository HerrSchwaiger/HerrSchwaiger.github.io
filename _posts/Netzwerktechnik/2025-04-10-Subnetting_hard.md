---
layout: single
title: "Subnetting"
date: 2025-04-10 00:00:03
permalink: /Netzwerktechnik/Subnetting_hard/
categories:
  - Netzwerktechnik
tags:
  - Subnetting
difficulty: hard
published: true
header:
    teaser: "assets/images/subnetting_hard.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/subnetting_hard.jpg

toc: true
toc_label: "Contents"
---
Subnetting is a fundamental concept in networking that allows network administrators to divide a single network into multiple smaller networks, known as subnets. This process enhances the efficiency and security of networks. In this blog post, we will delve into the intricacies of subnetting, providing detailed explanations and practical examples to deepen your understanding.


<script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

## What is Subnetting?

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
    <figcaption>Fig1: Structure of the Subnet Mask</figcaption>
</figure>

Subnetting is the process of dividing an IP network into smaller, logical subnets by modifying the subnet mask. A subnet mask determines which part of the IP address identifies the network and which part identifies the host. A larger host portion allows for more hosts within a subnet, while a smaller host portion allows for more subnets. For example, increasing the network portion by two bits and decreasing the host portion by two bits results in the following change to the subnet mask:

<figure>
    <img src="/assets/images/IP_address_2.png" width="400"/>
    <figcaption>Fig1: Increasing the Network Portion by 2 Bits</figcaption>
</figure>

With the network portion now longer by two bits, it is possible to create $$ 2^2 = 4 $$ new networks:

<figure>
    <img src="/assets/images/Subnetting.png" width="400"/>
    <figcaption>Fig2: Subnetting with Two Additional Network Bits</figcaption>
</figure>

In this scenario, a host portion consisting of **all zeros** always corresponds to the network address of a subnet, while a host portion consisting of **all ones** corresponds to the broadcast address. This leaves $$ 2^{32-L'}-2 $$ **usable IP addresses** within a subnet, where $$L'$$ is the new prefix length.

## Example

The address range **172.16.0.0/16** is to be divided into **15** subnets.
1. To accommodate 15 networks, we need to increase the prefix length by 4 bits, since $$ 2^4 = 16 $$.
   The **new prefix length** is thus: $$L'= 16+4 = 20$$.
2. With a prefix length of 20, there are $$ 2^{32-20} - 2 = 4094$$ **usable addresses per subnet**.
3. The resulting **network addresses** and **broadcast addresses** are calculated as follows:

    | Subnet No. | Network Address | Broadcast Address |
    | ----------- | ---------------- | ----------------- |
    | 1           | 172.16.0.0       | 172.16.15.255     |
    | 2           | 172.16.16.0      | 172.16.31.255     |
    | 3           | 172.16.32.0      | 172.16.47.255     |
    | ...         | ...              | ...               |
    | 14          | 172.16.208.0     | 172.16.223.255    |
    | 15          | 172.16.224.0     | 172.16.239.255    |
    | 16          | 172.16.240.0     | 172.16.255.255    |

The difference between two network addresses here is exactly **16**. This is not coincidental but can be easily explained in the **binary** representation:

| Subnet No. | Network Address Decimal | Network Address Binary                  |
| ----------- | ------------------------ | --------------------------------------- |
| 1           | 172.16.0.0              | 10101100.00010000.<span style="color:limegreen">**0000**</span>0000.00000000 |
| 2           | 172.16.16.0              | 10101100.00010000.<span style="color:limegreen">**0001**</span>0000.00000000 |
| 3           | 172.16.32.0              | 10101100.00010000.<span style="color:limegreen">**0010**</span>0000.00000000 |
| ...         | ...                      | ...                                     |
| 14          | 172.16.208.0             | 10101100.00010000.<span style="color:limegreen">**1101**</span>0000.00000000 |
| 15          | 172.16.224.0             | 10101100.00010000.<span style="color:limegreen">**1110**</span>0000.00000000 |
| 16          | 172.16.240.0             | 10101100.00010000.<span style="color:limegreen">**1111**</span>0000.00000000 |

The additional prefix added for subnetting, highlighted in <span style="color:limegreen">**green**</span>, is simply incremented in binary. However, since it is within an 8-bit block and its least significant bit is at the 16th position, it actually increments in steps of 16 in decimal.

## Conclusion

Subnetting is a powerful tool that helps network administrators design their networks more efficiently. By understanding and applying subnetting, you can significantly enhance the performance and security of your network.