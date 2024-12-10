'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe2, Zap, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景元素 */}
        <div className="absolute inset-0 bg-[#0f1728]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20" />
          
          {/* 动态星星背景 */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px w-px bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  scale: Math.random() * 1 + 0.5,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* 悬浮装饰元素 */}
          <div className="absolute inset-0 overflow-hidden">
            {/* 左侧装饰 */}
            <motion.div
              className="absolute -left-20 top-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                y: [-20, 20, -20],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* 右侧装饰 */}
            <motion.div
              className="absolute -right-20 top-2/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{
                y: [20, -20, 20],
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        <div className="container relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* 顶部标签 */}
            <motion.div
              className="mb-8 inline-block"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <span className="text-blue-400 text-xl font-medium px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10">
                快速可靠的EORI申请服务
              </span>
            </motion.div>
            
            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              欧盟
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                EORI号码
              </span>
              申请
            </h1>
            
            {/* 副标题 */}
            <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              专业团队提供一站式EORI申请服务，确保您的申请快速通过
            </p>

            {/* 特点列表 */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/application">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    立即申请 
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
              
              <Link href="/validator">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative overflow-hidden border-2 border-blue-400/30 bg-transparent text-blue-300 hover:text-blue-200 hover:border-blue-400/50 text-lg px-8 py-6 rounded-xl group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    验证EORI
                  </span>
                  <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 底部渐变 */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1728] to-transparent"
          style={{ y }}
        />
      </section>

      {/* Features Section */}
      <section className="py-32 bg-[#0f1728]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              为什么选择我们的服务
            </h2>
            <p className="text-xl text-gray-300">
              专业的团队，完善的服务，让您的EORI申请无忧无虑
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-[#0f1728] to-[#0f1728]/95">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              简单四步，轻松获取EORI
            </h2>
            <p className="text-xl text-gray-300">
              专业的团队全程指导，确保您的申请顺利通过
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-blue-400">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-blue-500/20 to-transparent transform translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#0f1728]/95">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-[#0f1728]/95 to-[#0f1728]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              客户评价
            </h2>
            <p className="text-xl text-gray-300">
              听听他们怎么说
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-[#0f1728] to-blue-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              准备好开始了吗？
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              立即开始您的EORI申请，我们将全程为您提供专业支持
            </p>
            <Link href="/application">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  开始申请 
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "专业服务",
    description: "专业团队提供全程指导，确保申请顺利通过",
    icon: <Globe2 className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "快速处理",
    description: "高效的处理流程，最快速度获取EORI号码",
    icon: <Zap className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "全程跟踪",
    description: "实时跟踪申请进度，及时��解最新状态",
    icon: <Shield className="w-8 h-8 text-blue-400" />,
  },
]; 

const processSteps = [
  {
    title: "提交申请",
    description: "填写必要信息，上传相关文件",
  },
  {
    title: "专家审核",
    description: "专业团队审核资料，确保无误",
  },
  {
    title: "提交欧盟",
    description: "向欧盟机构提交申请材料",
  },
  {
    title: "获取EORI",
    description: "快速获取EORI号码",
  },
];

const stats = [
  {
    value: "500+",
    label: "成功案例",
  },
  {
    value: "99%",
    label: "通过率",
  },
  {
    value: "24h",
    label: "极速处理",
  },
  {
    value: "100%",
    label: "客户满意度",
  },
];

const testimonials = [
  {
    name: "张经理",
    title: "货代公司",
    content: "服务非常专业，EORI号码申请速度很快，全程有专人指导，非常满意！",
  },
  {
    name: "李总",
    title: "跨境电商",
    content: "团队反应迅速，服务态度好，遇到问题都能及时解决，强烈推荐！",
  },
  {
    name: "王老板",
    title: "贸易公司",
    content: "整个申请过程非常顺畅，工作人员专业负责，以后还会继续合作！",
  },
]; 

const highlights = [
  "专业团��指导",
  "极速处理",
  "全程跟踪",
  "安全可靠",
]; 