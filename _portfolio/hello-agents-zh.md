---
title: "HelloAgents：多智能体框架与旅行规划系统"
excerpt: "支持 ReAct / Plan-and-Solve / Reflection、分层记忆与 RAG 的智能体框架，并基于高德 MCP 做旅行规划。"
collection: portfolio
category: personal
lang: zh
date: 2026-03-01
---

构建支持多智能体协作、记忆管理、工具调用与 RAG 检索的 Agent 框架。

- 实现 ReAct、Plan-and-Solve、Reflection 等推理范式，以及 Thought→Action→Observation 工具调度
- 设计 Working / Episodic / Semantic / Perceptual 四层记忆，并集成 Qdrant 与 RAG
- 基于 FastAPI、Vue3 与高德地图 MCP 实现景点推荐、路线规划与结构化行程输出
