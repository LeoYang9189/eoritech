'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* 背景层 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1728]/80 via-[#0f1728]/90 to-[#0f1728]/80 backdrop-blur-md border-b border-white/10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              EORI申请
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="relative group text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button 
                variant="outline" 
                className="relative overflow-hidden border-2 border-blue-400/30 bg-transparent text-blue-300 hover:text-blue-200 hover:border-blue-400/50 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  登录
                </span>
                <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                注册
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-4 py-6 bg-[#0f1728]/95 backdrop-blur-md border-b border-white/10 space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="outline" 
                  className="w-full relative overflow-hidden border-2 border-blue-400/30 bg-transparent text-blue-300 hover:text-blue-200 hover:border-blue-400/50 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    登录
                  </span>
                  <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                  注册
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

const navItems = [
  { label: "申请EORI", href: "/application" },
  { label: "进度查询", href: "/progress" },
  { label: "EORI验证", href: "/validator" },
  { label: "资讯中心", href: "/news" },
]; 