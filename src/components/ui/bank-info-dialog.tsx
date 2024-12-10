"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface BankInfoDialogProps {
  open: boolean;
  onClose: () => void;
  bankInfo: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    bankCode: string;
  };
}

export function BankInfoDialog({ open, onClose, bankInfo }: BankInfoDialogProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between py-2 border-b border-white/10">
      <span className="text-gray-400">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-white">{value}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-gray-400 hover:text-white"
          onClick={() => copyToClipboard(value)}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#1a2236] border-white/10">
        <DialogHeader>
          <DialogTitle className="text-white">对公转账信息</DialogTitle>
          <DialogDescription className="text-gray-400">
            请复制以下信息进行转账，转账完成后我们将立即处理您的申请
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <InfoRow label="账户名称" value={bankInfo.accountName} />
          <InfoRow label="账号" value={bankInfo.accountNumber} />
          <InfoRow label="开户行" value={bankInfo.bankName} />
          <InfoRow label="行号" value={bankInfo.bankCode} />
        </div>
      </DialogContent>
    </Dialog>
  );
} 