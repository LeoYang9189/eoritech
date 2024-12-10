interface BankInfo {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

interface PaymentConfig {
  bankInfo?: BankInfo;
  qrCode?: string;
  redirectUrl?: string;
  url?: string;
  icon: string;
  label: string;
  bgColor: string;
  hoverColor: string;
} 