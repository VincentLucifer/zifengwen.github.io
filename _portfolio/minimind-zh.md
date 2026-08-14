---
title: "MiniMind：轻量级大语言模型训练与推理框架"
excerpt: "基于 PyTorch 手写 Decoder-only LLM（26M–145M），覆盖预训练、SFT、蒸馏、DDP/AMP 与推理部署。"
collection: portfolio
category: personal
lang: zh
date: 2026-02-01
---

基于 PyTorch 原生实现 Decoder-only LLM（26M–145M），覆盖预训练到推理的完整链路。

- 模型侧：Pre-LN、RMSNorm、SwiGLU、RoPE（含 YaRN）、GQA 与 KV Cache
- 训练侧：预训练、SFT、知识蒸馏、DDP 分布式、AMP 混合精度与断点续训
- 推理侧：PyTorch 2 `scaled_dot_product_attention`，并保留标准注意力实现用于对齐验证
