'use client';

import { motion } from "framer-motion";
import { Calendar, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { FileUpload } from "@/components/ui/file-upload";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { uploadFile } from '@/lib/upload';

interface FormData {
  companyNameCn: string;
  companyNameEn: string;
  addressEn: string;
  country: string;
  foundingDate: Date | undefined;
  businessLicense: File | null;
  otherFiles: File | null;
}

const euCountries = [
  { value: "any", label: "任意欧盟国家（通用）" },
  { value: "AT", label: "奥地利" },
  { value: "BE", label: "比利时" },
  { value: "BG", label: "保加利亚" },
  { value: "HR", label: "克罗地亚" },
  { value: "CY", label: "塞浦路斯" },
  { value: "CZ", label: "捷克" },
  { value: "DK", label: "丹麦" },
  { value: "EE", label: "爱沙尼亚" },
  { value: "FI", label: "芬兰" },
  { value: "FR", label: "法国" },
  { value: "DE", label: "德国" },
  { value: "GR", label: "希腊" },
  { value: "HU", label: "匈牙利" },
  { value: "IE", label: "爱尔兰" },
  { value: "IT", label: "意大利" },
  { value: "LV", label: "拉脱维亚" },
  { value: "LT", label: "立陶宛" },
  { value: "LU", label: "卢森堡" },
  { value: "MT", label: "马耳他" },
  { value: "NL", label: "荷兰" },
  { value: "PL", label: "波兰" },
  { value: "PT", label: "葡萄牙" },
  { value: "RO", label: "罗马尼亚" },
  { value: "SK", label: "斯洛伐克" },
  { value: "SI", label: "斯洛文尼亚" },
  { value: "ES", label: "西班牙" },
  { value: "SE", label: "瑞典" },
];

export default function ApplicationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    companyNameCn: "",
    companyNameEn: "",
    addressEn: "",
    country: "any",
    foundingDate: undefined,
    businessLicense: null,
    otherFiles: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 验证所有必填字段
      if (!formData.companyNameCn || 
          !formData.companyNameEn || 
          !formData.addressEn || 
          !formData.country || 
          !formData.foundingDate || 
          !formData.businessLicense) {
        alert('请填写所有必填字段');
        return;
      }

      // 处理文件上传
      const businessLicenseUrl = await uploadFile(formData.businessLicense);
      const otherFilesUrl = formData.otherFiles ? await uploadFile(formData.otherFiles) : null;

      // 提交申请
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyNameCn: formData.companyNameCn,
          companyNameEn: formData.companyNameEn,
          addressEn: formData.addressEn,
          country: formData.country,
          foundingDate: formData.foundingDate?.toISOString(),
          businessLicense: businessLicenseUrl,
          otherFiles: otherFilesUrl,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || '提交失败');
      }

      // 保存申请数据到 localStorage 用于显示
      localStorage.setItem('applicationData', JSON.stringify({
        submittedAt: new Date().toISOString(),
        formData: {
          ...formData,
          businessLicense: { name: formData.businessLicense.name },
          otherFiles: formData.otherFiles ? { name: formData.otherFiles.name } : null,
        },
      }));
      
      // 导航到成功页面
      router.replace('/application/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error instanceof Error ? error.message : '提交失败，请重试');
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0f1728]">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            申请EORI号码
          </h1>
          <p className="text-gray-300">
            填写以下信息，我们将协助您快速获取EORI号码
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
          onSubmit={handleSubmit}
        >
          {/* 企业名称（中文） */}
          <div className="space-y-2">
            <Label htmlFor="company-name-cn" className="text-white">
              企业名称（中文）<span className="text-red-500">*</span>
            </Label>
            <Input
              id="company-name-cn"
              placeholder="请输入企业的中文名称"
              required
              value={formData.companyNameCn}
              onChange={(e) => setFormData(prev => ({ ...prev, companyNameCn: e.target.value }))}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
            />
          </div>

          {/* 企业名称（英文） */}
          <div className="space-y-2">
            <Label htmlFor="company-name-en" className="text-white">
              企业名称（英文）<span className="text-red-500">*</span>
            </Label>
            <Input
              id="company-name-en"
              placeholder="请输入企业的英文名称"
              required
              value={formData.companyNameEn}
              onChange={(e) => setFormData(prev => ({ ...prev, companyNameEn: e.target.value }))}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
            />
          </div>

          {/* 详细地址（英文） */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-white">
              详细地址（英文）<span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              placeholder="请输入企业的英文地址"
              required
              value={formData.addressEn}
              onChange={(e) => setFormData(prev => ({ ...prev, addressEn: e.target.value }))}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
            />
          </div>

          {/* 申请国家 */}
          <div className="space-y-2">
            <Label htmlFor="country" className="text-white">
              申请国家<span className="text-red-500">*</span>
            </Label>
            <Select
              id="country"
              value={formData.country}
              onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
              required
              className="bg-[#1a2236] border-white/10 text-white"
            >
              {euCountries.map((country) => (
                <option
                  key={country.value}
                  value={country.value}
                  className="bg-[#1a2236] text-white hover:bg-blue-500/10"
                >
                  {country.label}
                </option>
              ))}
            </Select>
          </div>

          {/* 成立日期 */}
          <div className="space-y-2">
            <Label htmlFor="founding-date" className="text-white">
              成立日期<span className="text-red-500">*</span>
            </Label>
            <DatePicker
              id="founding-date"
              required
              className="w-full"
              value={formData.foundingDate}
              onChange={(date) => setFormData(prev => ({ ...prev, foundingDate: date }))}
            />
          </div>

          {/* 文件上传 */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-white">
                营业执照<span className="text-red-500">*</span>
              </Label>
              <FileUpload
                accept=".pdf,.jpg,.jpeg,.png"
                maxSize={5}
                required
                onUpload={(file) => setFormData(prev => ({ ...prev, businessLicense: file }))}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">
                其他文件
              </Label>
              <FileUpload
                accept=".pdf,.jpg,.jpeg,.png"
                maxSize={5}
                onUpload={(file) => setFormData(prev => ({ ...prev, otherFiles: file }))}
              />
            </div>
          </div>

          {/* 提交按钮 */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
          >
            提交申请
          </Button>
        </motion.form>
      </div>
    </main>
  );
} 