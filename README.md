# waelhammali.me — Personal Portfolio

> Built with **Next.js 14**, **Tailwind CSS**, **Framer Motion** and deployed on **Vercel** via **GitHub Actions**.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Blog | MDX + rehype-pretty-code |
| Email | Resend API |
| Fonts | Syne (display) · JetBrains Mono |
| Hosting | Vercel |
| CI/CD | GitHub Actions |

## Features

- **Dynamic GitHub repos** — fetched via GitHub API with ISR (revalidates every hour)
- **MDX Blog** — write articles in Markdown with syntax-highlighted code blocks
- **Contact form** — powered by Resend, emails land directly in your inbox
- **Dark / Light mode** — `next-themes`, persisted in localStorage
- **Full CI/CD pipeline** — type-check → lint → build → deploy on every push to `main`

## Getting Started

```bash
# 1. Clone
git clone https://github.com/WaelHammali/portfolio.git
cd portfolio

# 2. Install
npm install

# 3. Environment variables
cp .env.local.example .env.local
# Fill in GITHUB_TOKEN and RESEND_API_KEY

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              ← Homepage (Hero + About + Skills + Projects + Experience + Contact)
│   ├── projects/page.tsx     ← All GitHub repos, auto-fetched
│   ├── blog/
│   │   ├── page.tsx          ← Blog listing
│   │   └── [slug]/page.tsx   ← Individual post (MDX)
│   └── api/contact/route.ts  ← Contact form API (Resend)
├── components/
│   ├── sections/             ← Page sections (Hero, About, Skills…)
│   └── ui/                   ← Reusable UI (ThemeToggle, ThemeProvider)
├── content/
│   └── posts/                ← MDX blog posts
├── lib/
│   ├── github.ts             ← GitHub API fetcher
│   ├── mdx.ts                ← Blog post utilities
│   └── utils.ts              ← Helpers (cn, formatDate, language colors)
└── .github/workflows/
    └── deploy.yml            ← CI/CD pipeline
```

## Deployment

### GitHub Secrets required

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Description |
|---|---|
| `VERCEL_TOKEN` | From vercel.com → Settings → Tokens |
| `VERCEL_ORG_ID` | From `.vercel/project.json` after `vercel link` |
| `VERCEL_PROJECT_ID` | From `.vercel/project.json` after `vercel link` |
| `GH_TOKEN` | GitHub personal access token (public_repo scope) |
| `RESEND_API_KEY` | From resend.com dashboard |
| `NEXT_PUBLIC_SITE_URL` | `https://waelhammali.me` |

### First deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Link project (generates .vercel/project.json)
vercel link

# Deploy manually once
vercel --prod

# Then all future deploys happen automatically via GitHub Actions
```

## Writing a Blog Post

Create a file in `content/posts/my-post.mdx`:

```mdx
---
title: "My Article Title"
description: "A short description shown in the listing."
date: "2025-09-01"
tags: ["Python", "DevOps"]
---

## Introduction

Write in **Markdown**. Code blocks get syntax highlighting automatically.

```python
def hello():
    print("Hello, world!")
```
```

## License

MIT — feel free to use as a template.
