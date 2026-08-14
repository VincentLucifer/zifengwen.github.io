---
title: "MiniMind: End-to-end Tiny LLM Training and Inference"
excerpt: "A decoder-only LLM (26M–145M) written in native PyTorch, covering pretraining, SFT, distillation, DDP/AMP, and inference."
collection: portfolio
category: personal
lang: en
date: 2026-02-01
---

A compact LLM training and inference stack implemented from scratch in PyTorch.

- Decoder-only Transformer (26M–145M) with Pre-LN, RMSNorm, SwiGLU, RoPE (YaRN), GQA, and KV Cache
- Training pipeline for pretraining, SFT, preference optimisation / distillation, DDP, AMP, and checkpoint recovery
- Inference with PyTorch 2 `scaled_dot_product_attention` while keeping a standard attention path for alignment checks
