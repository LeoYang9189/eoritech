'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function NewsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0f1728]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            EORI资讯中心
          </h1>
          <p className="text-gray-300">
            了解最新的EORI政策、申请指南和相关资讯
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <Link href={`/news/${article.slug}`}>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={article.date}>{article.date}</time>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}

const articles = [
  {
    title: "EORI号码申请完整指南：2024年最新流程和要求",
    slug: "complete-eori-application-guide-2024",
    date: "2024-03-15",
    excerpt: "详细解析EORI号码申请流程，包括所需材料、申请步骤和常见问题解答。了解如何快速获取EORI号码，避免申请过程中的常见错误。",
  },
  {
    title: "什么是EORI号码？为什么进出口企业必须申请？",
    slug: "what-is-eori-number-and-why-important",
    date: "2024-03-10",
    excerpt: "深入了解EORI号码的重要性，解释为什么它对于欧盟进出口贸易至关重要，以及没有EORI���能带来的影响。",
  },
  {
    title: "EORI号码有效期和续期指南：确保您的号码始终有效",
    slug: "eori-validity-and-renewal-guide",
    date: "2024-03-05",
    excerpt: "了解EORI号码的有效期规则，何时需要更新或续期，以及如何维护您的EORI号码持续有效。",
  },
  {
    title: "不同类型企业的EORI申请要求：个体、有限公司和跨境电商指南",
    slug: "eori-requirements-different-business-types",
    date: "2024-02-28",
    excerpt: "针对不同类型企业的EORI申请要求详解，包括所需文件和特殊注意事项，帮助企业顺利完成申请。",
  },
  {
    title: "EORI号码验证：如何确认号码的有效性和使用状态",
    slug: "how-to-verify-eori-number",
    date: "2024-02-20",
    excerpt: "详细介绍EORI号码验证的方法和工具，确保您的EORI号码符合欧盟海关要求，避免贸易障碍。",
  },
  {
    title: "英国脱欧后的EORI新规：GB-EORI和EU-EORI的区别",
    slug: "brexit-eori-changes-gb-eu",
    date: "2024-02-15",
    excerpt: "解析英国脱欧后EORI系统的变化，了解GB-EORI和EU-EORI的区别，以及如何根据贸易需求选择正确的EORI类型。",
  },
  {
    title: "EORI申请常见错误和解决方案：避免申请被拒",
    slug: "common-eori-application-mistakes",
    date: "2024-02-10",
    excerpt: "总结EORI申请过程中的常见错误和解决方案，提供实用建议帮助企业提高申请成功率。",
  },
  {
    title: "海关合规：EORI号码在进出口清关中的作用",
    slug: "eori-role-in-customs-clearance",
    date: "2024-02-05",
    excerpt: "深入探讨EORI号码在欧盟海关清关过程中的重要作用，以及如何利用EORI提高清关效率。",
  },
  {
    title: "跨境电商卖家的EORI申请指南：亚马逊、eBay等平台要求",
    slug: "eori-guide-for-ecommerce-sellers",
    date: "2024-01-30",
    excerpt: "专门面向跨境电商卖家的EORI申请指南，包括各大电商平台的具体要求和操作建议。",
  },
  {
    title: "2024年欧盟EORI政策更新：最新变化和应对策略",
    slug: "eu-eori-policy-updates-2024",
    date: "2024-01-25",
    excerpt: "解读2024年欧盟EORI政策的最新变化，分析政策调整对企业的影响，提供实用的应对建议。",
  },
]; 