---
title: "MatchBao"
excerpt: "A partner-matching and team-building platform. Spring Boot, MyBatis-Plus, Redis, similarity matching. Nov. 2024 – Dec. 2024"
collection: portfolio
category: personal
lang: en
date: 2024-12-01
---

Java backend engineer. A mobile web app on Vue 3 and Spring Boot 2 for partner matching and team forming, including user management, tag search, and similar-user recommendations.

- Edit-distance matching on tags for the most similar users, with a priority queue to cut memory use in TOP-N ranking
- Easy Excel ingest of collected user data; custom thread pool + CompletableFuture for faster bulk inserts
- Spring Scheduler cache warmup for a slow first homepage load; a distributed lock so the cron job runs once under multi-instance deploy
