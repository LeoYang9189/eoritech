import { articles, getRelatedArticles } from "@/data/articles";
import { Metadata } from "next";
import { ClientArticle } from "./client";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.metadata.title,
    description: article.metadata.description,
    keywords: article.metadata.keywords,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);
  const relatedArticles = getRelatedArticles(params.slug);

  if (!article) {
    return <div>文章不存在</div>;
  }

  return <ClientArticle article={article} relatedArticles={relatedArticles} />;
} 