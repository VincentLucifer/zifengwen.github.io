---
title: "Learn-Claude-Code：Agent Harness 核心机制复现"
excerpt: "以 Claude Code 为参考，复现 Agent Loop、工具调用、上下文压缩、记忆管理、任务调度与 MCP 路由。"
collection: portfolio
category: personal
lang: zh
date: 2026-07-01
---

以 Claude Code 为参考对象，系统分析并复现 Agent Harness 的核心架构。

- 复现 Agent Loop、Tool Use、Skill Loading、Context Compaction、Memory Management、Task Scheduling、Subagent 协作与 MCP 能力路由
- 构建统一执行循环，支持工具调度、长上下文检索与复杂任务拆解
