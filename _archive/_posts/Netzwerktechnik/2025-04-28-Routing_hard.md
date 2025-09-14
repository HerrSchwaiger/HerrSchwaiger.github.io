---
layout: single
title: "Routing"
date: 2025-04-28 00:00:03
permalink: /Netzwerktechnik/Routing_hard/
categories:
  - Netzwerktechnik
tags:
  - Routing
difficulty: hard
published: true
header:
    teaser: "assets/images/routing_hard.jpg"
    overlay_color: "#000"
    overlay_filter: "0.7"
    overlay_image: /assets/images/routing_hard.jpg

toc: true
toc_label: "Contents"
---

In today's interconnected world, routing tables are a cornerstone of network communication. They enable routers to efficiently direct data packets from one network to another. Stored within a router, routing tables contain information on how data packets should be forwarded to various destinations within the network. Each row in the table represents an entry that specifies which destination network is reachable via which next hop.

## Structure

A typical routing table comprises several columns:

1. **Destination Network:** The IP address or network to which the packet is to be sent.
2. **Subnet Mask:** Defines the range of the destination network.
3. **Next Hop / Gateway:** The IP address of the next router to which the packet should be forwarded.
4. **Interface:** The physical or logical interface of the router through which the packet is sent.

## Function

When a data packet arrives at a router, the router checks the packet's destination IP address. Using the routing table, the router determines the optimal next hop and the interface through which the packet should be forwarded. This process is repeated for each packet until it reaches its final destination.

### Example

<style>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>

<figure>
    <img src="/assets/images/Router_bsp.png" width="400"/>
    <figcaption>Fig1: Example Network Diagram</figcaption>
</figure>

The corresponding routing table for Router 1 would look like this:

| Destination Network | Subnet Mask   | Next Hop / Gateway | Interface   |
|---------------------|---------------|--------------------|-------------|
| 192.168.23.0        | 255.255.255.0 | -                  | 192.168.23.1|
| 150.32.0.0          | 255.255.0.0   | -                  | 150.32.0.1  |
| 188.2.0.0           | 255.255.0.0   | 150.32.255.254     | -           |

### Procedure

Filling out the table with static entries based on the network diagram will now be exemplified for Router 2:

1. **Directly Connected Networks:** First, enter all directly connected destination networks. These networks do not require a gateway entry since the router is directly connected to them. Enter the exit point through which data leaves the router in the "Interface" column.

  | Destination Network | Subnet Mask   | Next Hop / Gateway | Interface   |
  |---------------------|---------------|--------------------|-------------|
  | 150.32.0.0          | 255.255.0.0   | -                  | 150.32.255.254 |
  | 188.2.0.0           | 255.255.0.0   | -                  | 188.2.0.1   |

2. **Indirectly Connected Networks:** Enter the remaining destination networks that the router is only indirectly connected to via another router. These networks do not require an interface entry but do need the address of the next router (next hop) to which the data should be forwarded. Enter this address in the "Gateway / Next Hop" column.

  | Destination Network | Subnet Mask   | Next Hop / Gateway | Interface   |
  |---------------------|---------------|--------------------|-------------|
  | 150.32.0.0          | 255.255.0.0   | -                  | 150.32.255.254 |
  | 188.2.0.0           | 255.255.0.0   | -                  | 188.2.0.1   |
  | 192.168.23.0        | 255.255.255.0 | 150.32.0.1         | -           |

## **Types of Routing Tables**

There are various types of routing tables used depending on the network environment and requirements:

1. **Static Routing Tables:** These tables are manually configured by the network administrator and do not change automatically. They are simple to implement but less flexible.
2. **Dynamic Routing Tables:** These tables are automatically updated by routing protocols such as OSPF, BGP, or RIP. They adapt to changes in the network and are therefore more flexible and scalable.

## **Conclusion**

Routing tables are the backbone of modern network communication. They enable routers to direct data packets efficiently and reliably to their destinations. Whether static or dynamic, routing tables are indispensable for the functioning of the internet and other networks.