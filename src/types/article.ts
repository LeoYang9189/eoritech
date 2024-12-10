export type ArticleTag = 
  | "申请指南" 
  | "政策解读" 
  | "常见问题" 
  | "跨境电商" 
  | "海关合规" 
  | "实用工具";

export interface Article {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  tags: ArticleTag[];
  category: "指南" | "政策" | "工具" | "案例";
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
} 