import { ClientLayout } from "@/components/layout/client-layout";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata = {
  title: 'EORI申请 - 专业的欧盟EORI号码申请服务',
  description: '快速、专业的一站式EORI申请服务，提供全程指导和进度跟踪。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
} 