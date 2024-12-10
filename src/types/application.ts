export interface ApplicationData {
  submittedAt: string;
  formData: {
    companyNameCn: string;
    companyNameEn: string;
    addressEn: string;
    country: string;
    foundingDate: Date | undefined;
    businessLicense: File | null;
    otherFiles: File | null;
  };
}

export interface PaymentConfig {
  url: string;
  icon: string;
  label: string;
  bgColor: string;
  hoverColor: string;
  bankInfo?: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    bankCode: string;
  };
}

export const PAYMENT_AMOUNT = 799;

export const PAYMENT_CONFIG: Record<string, PaymentConfig> = {
  wechatPay: {
    url: "#",
    icon: "/icons/wechat-pay.svg",
    label: "微信支付",
    bgColor: "bg-gradient-to-br from-[#2AAE67]/20 to-[#2AAE67]/10 backdrop-blur-md border border-[#2AAE67]/20",
    hoverColor: "hover:bg-[#2AAE67]/20 hover:border-[#2AAE67]/30",
  },
  aliPay: {
    url: "#",
    icon: "/icons/alipay.svg",
    label: "支付宝",
    bgColor: "bg-gradient-to-br from-[#1677FF]/20 to-[#1677FF]/10 backdrop-blur-md border border-[#1677FF]/20",
    hoverColor: "hover:bg-[#1677FF]/20 hover:border-[#1677FF]/30",
  },
  bankTransfer: {
    url: "#",
    icon: "/icons/bank.svg",
    label: "对公转账",
    bgColor: "bg-gradient-to-br from-[#4C6EF5]/20 to-[#4C6EF5]/10 backdrop-blur-md border border-[#4C6EF5]/20",
    hoverColor: "hover:bg-[#4C6EF5]/20 hover:border-[#4C6EF5]/30",
    bankInfo: {
      accountName: "上海秉渔供应链管理有限公司",
      accountNumber: "4585 4886 8864",
      bankName: "中国银行上海市新天地支行",
      bankCode: "104290020105",
    },
  },
}; 