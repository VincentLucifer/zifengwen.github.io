---
title: "点评星球"
excerpt: "生活服务点评平台。技术栈：Spring Boot、MyBatis-Plus、Redis、Redisson、RabbitMQ。2025.02–2025.04"
collection: portfolio
category: personal
lang: zh
date: 2025-04-01
---

Java 后端开发工程师。基于用户点评和商户信息的生活服务平台，覆盖商户点评、优惠券秒杀、关注博主后的博客推送等模块。用户可浏览首页推荐、搜索附近商家、查看详情与评论，并发表探店评价。

- 通过 Redisson 分布式锁保证库存和订单并发安全，避免超卖；RabbitMQ 绑定交换机与队列，异步监听秒杀下单
- JWT 登录认证，ThreadLocal + 拦截器校验 token，并做续约以避免登录状态频繁过期
- Redis BitMap 做用户签到，HyperLogLog 统计 UV，GEO 查找附近商家
