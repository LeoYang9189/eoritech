'use client';

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ApplicationData, PAYMENT_AMOUNT, PAYMENT_CONFIG } from "@/types/application";
import { BankInfoDialog } from "@/components/ui/bank-info-dialog";
import { cn } from "@/lib/utils";

interface PaymentConfig {
  url: string;
  bankInfo?: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    bankCode: string;
  };
}

export default function ApplicationSuccessPage() {
  const router = useRouter();
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);
  const [serialNumber] = useState(() => 
    `EORI${new Date().toISOString().slice(0,10).replace(/-/g,'')}${Math.random().toString().slice(2,8)}`
  );
  const [bankInfoOpen, setBankInfoOpen] = useState(false);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('applicationData');
      if (!savedData) {
        router.replace('/application');
        return;
      }

      const data = JSON.parse(savedData);
      if (!data.submittedAt || !data.formData) {
        throw new Error('Invalid application data');
      }

      setApplicationData(data);
    } catch (error) {
      console.error('Error loading application data:', error);
      router.replace('/application');
    }
  }, [router]);

  if (!applicationData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1728]">
        <div className="text-white">加载中...</div>
      </div>
    );
  }

  const handlePayment = (key: string, config: PaymentConfig) => {
    if (key === 'bankTransfer' && config.bankInfo) {
      setBankInfoOpen(true);
    } else {
      window.open(config.url, '_blank');
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0f1728]">
      <div className="container max-w-3xl">
        {/* 状态卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-white">申请流水号</h2>
              <p className="text-2xl font-mono text-blue-400 mt-1">
                {serialNumber}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium">
                待支付
              </span>
              <p className="text-gray-400 text-sm mt-2">
                提交时间：{new Date(applicationData.submittedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 申请详情 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-8"
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
          >
            <span className="text-lg font-semibold">申请详情</span>
            {isDetailsExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {isDetailsExpanded && (
            <div className="px-6 pb-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">企业名称（中文）</p>
                  <p className="text-white mt-1">{applicationData.formData.companyNameCn}</p>
                </div>
                <div>
                  <p className="text-gray-400">企业名称（英文）</p>
                  <p className="text-white mt-1">{applicationData.formData.companyNameEn}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-400">详细地址（英文）</p>
                  <p className="text-white mt-1">{applicationData.formData.addressEn}</p>
                </div>
                <div>
                  <p className="text-gray-400">申请国家</p>
                  <p className="text-white mt-1">{applicationData.formData.country}</p>
                </div>
                <div>
                  <p className="text-gray-400">成立日期</p>
                  <p className="text-white mt-1">
                    {applicationData.formData.foundingDate 
                      ? new Date(applicationData.formData.foundingDate).toLocaleDateString()
                      : '-'
                    }
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">营业执照</p>
                  <p className="text-blue-400 mt-1 hover:underline cursor-pointer">
                    {applicationData.formData.businessLicense?.name || '-'}
                  </p>
                </div>
                {applicationData.formData.otherFiles && (
                  <div>
                    <p className="text-gray-400">其他文件</p>
                    <p className="text-blue-400 mt-1 hover:underline cursor-pointer">
                      {applicationData.formData.otherFiles.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>

        {/* 支付部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            请选择支付方式
          </h3>
          
          <div className="text-center mb-8">
            <p className="text-3xl font-bold text-white">
              ¥ {PAYMENT_AMOUNT}
            </p>
            <p className="text-gray-400 mt-2">
              支付完成后，我们将立即开始处理您的申请
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Object.entries(PAYMENT_CONFIG).map(([key, config]) => (
              <Button
                key={key}
                variant="ghost"
                className={cn(
                  "h-auto py-6 relative group transition-all duration-300",
                  "before:absolute before:inset-0 before:rounded-lg before:transition-all",
                  config.bgColor,
                  config.hoverColor,
                  "text-white"
                )}
                onClick={() => handlePayment(key, config)}
              >
                <div className="flex flex-col items-center relative z-10">
                  <Image 
                    src={config.icon}
                    alt={config.label}
                    width={32}
                    height={32}
                    className="mb-2 transition-transform group-hover:scale-110"
                  />
                  <span className="font-medium">{config.label}</span>
                </div>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 对公转账弹窗 */}
      <BankInfoDialog
        open={bankInfoOpen}
        onClose={() => setBankInfoOpen(false)}
        bankInfo={PAYMENT_CONFIG.bankTransfer.bankInfo!}
      />
    </main>
  );
} 