'use client';

import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { Article } from "@/types/article";
import { marked } from "marked";

interface ClientArticleProps {
  article: Article;
  relatedArticles: Article[];
}

export function ClientArticle({ article, relatedArticles }: ClientArticleProps) {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0f1728]">
      <article className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            href="/news"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回资讯中心
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={article.date}>{article.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <div className="flex gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="text-sm bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 文章内容 */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mb-8
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-gray-300 prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:text-gray-300 prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:my-2
              prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-lg
              prose-code:text-blue-300 prose-code:bg-blue-500/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-[#1a2236] prose-pre:border prose-pre:border-white/10
              prose-hr:border-white/10 prose-hr:my-8"
            dangerouslySetInnerHTML={{ __html: marked(article.content) }}
          />
        </motion.div>

        {/* 相关文章 */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">相关文章</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map(relatedArticle => (
                <Link 
                  key={relatedArticle.slug}
                  href={`/news/${relatedArticle.slug}`}
                  className="block p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
} 