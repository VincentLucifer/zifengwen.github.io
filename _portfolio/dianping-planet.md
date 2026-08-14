---
title: "Dianping Planet"
excerpt: "A local-life review platform. Spring Boot, MyBatis-Plus, Redis, Redisson, RabbitMQ. Feb. 2025 – Apr. 2025"
collection: portfolio
category: personal
lang: en
date: 2025-04-01
---

Java backend engineer. A local-life service platform centred on shop reviews and merchant information, covering reviews, coupon flash-sale (oversell protection), and blog push after following a creator. Users can browse homepage recommendations, search nearby shops, read details and comments, and post visit reviews.

- Redisson distributed locks for concurrent stock and order safety; RabbitMQ exchange/queue bindings for asynchronous flash-sale order handling
- JWT authentication with ThreadLocal + interceptor token checks and token renewal to avoid frequent session expiry
- Redis BitMap for check-ins, HyperLogLog for UV, and GEO for nearby-shop search
