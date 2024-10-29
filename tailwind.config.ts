import type { Config } from "tailwindcss"; // 匯入 Tailwind CSS 的 Config 類型

// 定義 Tailwind CSS 的配置物件
const config: Config = {
  // 指定哪些檔案需要被 Tailwind CSS 檢查以生成樣式
  content: [
    // 包含 pages 目錄下的所有 JavaScript、TypeScript 和 MDX 檔案
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // 包含 components 目錄下的所有 JavaScript、TypeScript 和 MDX 檔案
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // 包含 app 目錄下的所有 JavaScript、TypeScript 和 MDX 檔案
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
    // 排除 components 目錄下的 ignore 文件夾中的檔案
    // "!./src/components/ignore/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // 擴展 Tailwind CSS 的主題設置
    extend: {
      colors: {
        // 定義新的顏色變數 background，使用 CSS 變數
        background: "var(--background)",
        // 定義新的顏色變數 foreground，使用 CSS 變數
        foreground: "var(--foreground)",
      },
    },
  },
  // 可以在這裡添加 Tailwind CSS 的插件
  plugins: [],
};

// 將配置物件匯出以便在其他地方使用
export default config;
