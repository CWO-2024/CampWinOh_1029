## GitFlow

GitFlow 是一種 Git 的分支管理模型，主要用於軟體開發。它定義了幾種主要的分支類型，每種分支都有特定的用途。以下是 GitFlow 中常用的分支名稱：

1. **master**：主分支，包含生產環境的穩定代碼。每個發佈的版本都會在此分支上標記。

2. **develop**：開發分支，所有的功能開發和整合工作在這裡進行。通常是從 `master` 分支派生出來的。

3. **feature/**：功能分支，用於開發新功能。命名格式為 `feature/功能名稱`。這些分支通常從 `develop` 分支派生，並在完成後合併回 `develop`。

4. **release/**：發佈分支，用於準備發佈新版本。命名格式為 `release/版本號`。在此分支上進行最後的測試和修復，然後合併回 `master` 和 `develop`。

5. **hotfix/**：熱修復分支，用於修復生產環境中的緊急問題。命名格式為 `hotfix/修復說明`。這些分支通常從 `master` 分支派生，並在修復後合併回 `master` 和 `develop`。

通過這些分支，GitFlow 可以有效地管理不同的開發階段，確保代碼的穩定性和可維護性。
![image](https://github.com/user-attachments/assets/b20b0c69-fd3d-47e1-be74-ab59dd09b43a)



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
