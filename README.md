# Zifeng Wen | Personal Website & Technical Portfolio

**A bilingual personal website showcasing my academic background, engineering projects, research experience, and technical interests.**

**文梓锋的个人主页与技术作品集**，用于集中展示教育背景、技术项目、科研成果与个人技术方向。

🌐 **Website:** [Visit the Personal Website](https://vincentlucifer.github.io/zifengwen.github.io/)

---

## Overview | 项目简介

This repository contains the source code for my personal academic website and technical portfolio. It is designed to provide a structured, accessible, and continuously maintainable overview of my background, selected projects, research work, and professional interests.

本仓库包含个人学术主页与技术作品集的网站源代码，旨在以清晰、易访问、便于持续维护的方式，展示个人教育背景、代表性项目、科研成果与技术兴趣。

Rather than serving as a static résumé, the website provides a structured space for presenting technical work in greater depth, connecting project descriptions with relevant research outputs and supporting materials.

与单纯的简历不同，该网站可以更系统地介绍技术项目及其研究背景，并关联相关成果和补充材料。

## Key Features | 核心功能

### 1. Structured Project Portfolio | 结构化项目作品集

- Organises selected projects into dedicated, reusable content pages.
- Presents project context, technical approaches, and outcomes in a consistent format.
- Makes it easier for recruiters and collaborators to explore relevant work.

将不同项目组织为独立页面，采用统一的内容结构介绍项目背景、技术方案与成果，方便招聘人员和合作者快速了解相关经历。

### 2. Academic and Research Showcase | 学术与科研成果展示

- Maintains dedicated sections for publications and academic work.
- Supports structured metadata and links to relevant research materials.
- Separates research outputs from general project and profile information.

通过独立的论文与学术成果目录组织研究内容，支持展示相关元数据及研究材料，并将科研成果与普通项目经历分开管理。

### 3. Bilingual Personal Profile | 中英文个人主页

- Provides English and Chinese profile content.
- Presents academic background, technical interests, and selected achievements.
- Makes the portfolio accessible to both international and Chinese-speaking audiences.

提供中英文个人介绍，展示教育背景、技术兴趣与代表性经历，兼顾国际招聘场景与中文交流场景。

### 4. Content-Driven Website Architecture | 内容驱动的网站架构

The website uses Jekyll and Markdown-based content collections to separate written content from page layouts.

网站使用 Jekyll，并通过 Markdown 内容文件与页面布局分离的方式组织内容，使项目介绍、论文信息与页面模板可以相对独立地维护。

### 5. Maintainable Development Workflow | 可维护的开发流程

- Uses configuration files to manage site-wide settings.
- Supports local preview before publishing.
- Includes Docker and development-container configuration for reproducible local development environments.

通过配置文件统一管理站点设置，并支持发布前本地预览。仓库还包含 Docker 与 Dev Container 配置，可用于构建更一致的本地开发环境。

---

## Technology Stack | 技术栈

| Technology | Purpose / 用途 |
|---|---|
| Jekyll | Static site generation / 静态网站生成 |
| Markdown | Structured content authoring / 结构化内容编写 |
| Liquid templates | Dynamic page rendering / 模板渲染 |
| HTML & CSS / Sass | Page structure and styling / 页面结构与样式 |
| JavaScript | Front-end interactions / 前端交互 |
| GitHub Pages | Website hosting and publishing / 网站托管与发布 |
| Docker | Optional containerised local development / 可选的容器化本地开发 |

## Repository Structure | 项目结构

```text
.
├── _config.yml          # Site-wide configuration
├── _pages/              # Profile and static pages
├── _portfolio/          # Project portfolio entries
├── _publications/       # Academic publications
├── _posts/              # Blog posts and updates
├── _talks/              # Talks and presentations
├── _layouts/            # Page templates
├── _includes/           # Reusable template components
├── _sass/               # Sass stylesheets
├── assets/              # Front-end assets
├── images/              # Images and visual materials
├── files/               # Downloadable documents
├── markdown_generator/   # Content-generation utilities
├── Dockerfile           # Container configuration
└── docker-compose.yaml   # Local container orchestration
```

## Local Development | 本地运行

### Prerequisites | 环境要求

- Git
- Ruby
- Bundler
- Jekyll and the project's Ruby dependencies

### Setup | 安装依赖

```bash
git clone https://github.com/VincentLucifer/zifengwen.github.io.git
cd zifengwen.github.io
bundle install
```

### Run Locally | 启动本地预览

```bash
bundle exec jekyll serve -l -H localhost
```

Open the local address reported by Jekyll, typically `http://localhost:4000`, to preview the website.

启动成功后，根据终端输出访问本地地址，通常为 `http://localhost:4000`，即可预览网站。

**Note:** The final local URL and deployment path depend on the Jekyll configuration and GitHub Pages settings.

**注意：** 实际本地访问路径和线上部署路径取决于 Jekyll 配置与 GitHub Pages 设置。

## Design Principles | 设计思路

- **Separation of content and presentation｜内容与展示分离：** Project descriptions and publication records are maintained separately from reusable page layouts.
- **Structured information｜结构化信息：** Dedicated content collections make different types of professional work easier to organise and navigate.
- **Maintainability｜可维护性：** Centralised configuration and reusable templates reduce repeated page-level work.
- **Professional presentation｜专业化展示：** The website acts as a central entry point for exploring academic, engineering, and project experience.

## Future Improvements | 后续改进方向

Potential improvements include:

- Adding project screenshots, architecture diagrams, and concise technical case studies.
- Improving mobile usability, accessibility, and page-loading performance.
- Adding automated build checks to validate website changes before publication.
- Documenting measurable outcomes and individual contributions for selected projects.

未来可以进一步增加项目截图、系统架构图与技术案例，改善移动端体验、可访问性和加载性能，并通过自动化构建检查提升发布质量。

## License | 许可证

This repository includes the Academic Pages template and its associated licensing information. Refer to the repository's `LICENSE` file for the applicable terms.

本仓库基于 Academic Pages 模板构建，具体许可证及使用条件请参阅仓库中的 `LICENSE` 文件。

---

**Purpose | 项目定位：** A continuously maintained personal website for presenting technical work, research outputs, and professional experience.

一个持续维护的个人网站，用于展示技术项目、科研成果与专业经历。
