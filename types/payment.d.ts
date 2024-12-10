interface BankInfo {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

interface PaymentConfig {
  bankInfo?: BankInfo;
  qrCode?: string;
  redirectUrl?: string;
} 