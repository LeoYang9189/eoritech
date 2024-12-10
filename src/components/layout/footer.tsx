'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f1728] text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              EORI申请
            </motion.div>
            <p className="text-gray-400">
              专业的欧盟EORI号码申请服务提供商
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>gm@leotech.site</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+86 13482360085</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">关注我们</h3>
            <div className="flex gap-4">
              <Globe className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              版权所有 © {new Date().getFullYear()} 上海秉渔供应链管理有限公司
            </p>
            <p className="text-gray-400">
              <Link 
                href="https://beian.miit.gov.cn/" 
                target="_blank"
                className="hover:text-white transition-colors"
              >
                沪ICP备2024104369号-2 | 沪ICP备2024104369号-3
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const quickLinks = [
  { label: "申请EORI", href: "/application" },
  { label: "进度查询", href: "/progress" },
  { label: "EORI验证", href: "/validator" },
  { label: "资讯中心", href: "/news" },
]; 