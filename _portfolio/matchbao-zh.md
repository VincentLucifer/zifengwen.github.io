---
title: "匹配宝"
excerpt: "伙伴匹配与组队平台。技术栈：Spring Boot、MyBatis-Plus、Redis、相似度匹配。2024.11–2024.12"
collection: portfolio
category: personal
lang: zh
date: 2024-12-01
---

Java 后端开发工程师。基于 Vue 3 与 Spring Boot 2 的移动端网站，提供伙伴匹配和团队组建，包括用户管理、按标签检索用户、推荐相似用户等。

- 用编辑距离按标签匹配最相似用户，并以优先队列降低 TOP N 过程中的内存占用
- Easy Excel 读取用户信息，自定义线程池 + CompletableFuture 提升批量入库性能
- Spring Scheduler 做缓存预热，解决首页首次加载慢；分布式锁保证多机部署时定时任务只跑一份
