---
layout: archive
title: "简历"
permalink: /zh/cv/
lang: zh
translation_key: cv
author_profile: true
---

{% include base_path %}

[下载简历（PDF）]({{ base_path }}/files/WenZifeng-CV-zh.pdf)

教育背景
======
* **伦敦帝国理工学院**，MSc Advanced Computing（1 年全日制，在读），2026.09–2027.09
* **哈尔滨工业大学（深圳）**，计算机科学与技术本科，2022.08–2026.07
  * GPA: 94.21 / 100（3.93 / 4.00），排名 2 / 317（Top 1%）
  * 优秀毕业论文：基于扩散模型的 Clec11a 蛋白最小化设计方法研究（全院 16 人）
* **伦敦帝国理工学院**，Data Science 寒假交流项目，2024.01–2024.02
  * 基于多模态 MRI（T1/T1c/T2/FLAIR）与 U-Net 构建脑肿瘤 3D 分割系统
  * 总体成绩 A 级（Distinction），获最佳展示奖与二等奖学金

实习经历
======
* **产品工程师（AI 评论社区）**，小红书 · 业务技术部 · 社区工程部，上海，2026.03–2026.06
  * 评论意图建模：融合行为、会话、帖子语义等信号，训练 XGBoost / LinearSVC，部署至 iOS Core ML
  * @点点 Follow-up Agent：识别用户“蹲后续”意图，完成订阅抽取、检索与更新通知
  * AI 收藏管理 Agent：Embedding + 聚类，Human-in-the-Loop 自动生成与维护主题专辑
* **Android 开发工程师**，影石 Insta360 · 主框架组 · 素材管理组，深圳，2025.11–2026.03
  * 缩略图模块架构与性能优化，对接研究院算法并完成端侧工程化接入
  * 多厂商 Live Photo SDK 集成，支持相册浏览、下载与导出
  * 完成 25 项高优需求（16 项业务 + 9 项缺陷修复），已上线主线版本
* **Java 软件开发工程师**，美团 · 视频技术部 · 直播营销组，北京，2025.04–2025.08
  * 主播抽奖权限治理：缓存 + API 双层校验
  * 基于 AOP 的红包雨 / 分享裂变全链路变更追踪
  * 将 Java 内嵌 SQL 重构为 XML 配置；完成 14 项高优需求
* **计算机视觉算法工程师**，维海德 · 视频研究院 · AI 科，深圳，2024.12–2025.02
  * 基于 NeRF 与 3DGS 的高精度 3D 人体重建与可驱动数字人
  * 复现扩散式人–场景交互模型，并与 NeRF/3DGS 渲染耦合

科研经历
======
* **算法研究助理**，基于 Agent Memory 的智能体推理增强，导师：刘学博教授，哈工大（深圳），2026.03–2026.07
  * 调研 AgeMem、G-Memory、MemGas、BMAM 等记忆机制
  * 搭建轨迹存储 / 语义检索 / 动态更新实验平台，并基于 SWE-bench 评测
* **算法研究助理**，折叠视界：VR 蛋白质结构可视化与 AI 辅助设计，导师：陈俊杰教授，哈工大（深圳），2025.03–2025.07
  * Python 后端对接 VR 端（C#），封装 RFdiffusion、ProteinMPNN、RF3
  * 成果转化为 2 项国家发明专利与 1 项软件著作权

项目经历
======
* **Learn-Claude-Code**（2026.05–2026.07）：复现 Agent Loop、Tool Use、Context Compaction、Skill Loading、Memory、Task Scheduling 与 MCP 路由
* **HelloAgents**（2026.02–2026.03）：多智能体框架（ReAct / Plan-and-Solve / Reflection）+ 四层记忆 + RAG，并基于高德 MCP 做旅行规划
* **MiniMind**（2026.01–2026.02）：PyTorch 手写 Decoder-only LLM（26M–145M），覆盖预训练、SFT、蒸馏、DDP/AMP 与推理

论文
======
<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

奖学金及竞赛
======
* 计算机学院本科生学业奖学金：2024–2025 二等；2023–2024 三等；2022–2023 二等
* 2023 年“高教杯”全国大学生数学建模竞赛省级一等奖（担任队长）
* 蓝桥杯广东赛区 C/C++ 程序设计大学 A 组省级一等奖（2023.04）

语言
======
* IELTS Overall 8.0（L7.5, R8.5, W8.5, S6.5）

教学与服务
======
* 本科课程助教，2024.09–2025.01：协助实验课、批改作业，并为 200 余名本科生提供课业辅导
* 志愿服务，2022.08–2026.06：累计 100+ 小时，参与校级活动的嘉宾接待、后勤协调与场地保障
