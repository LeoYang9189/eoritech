-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING_PAYMENT',
    "companyNameCn" TEXT NOT NULL,
    "companyNameEn" TEXT NOT NULL,
    "addressEn" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "foundingDate" TIMESTAMP(3) NOT NULL,
    "businessLicense" TEXT NOT NULL,
    "otherFiles" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_serialNumber_key" ON "Application"("serialNumber");

-- CreateIndex
CREATE INDEX "Application_status_idx" ON "Application"("status");

-- CreateIndex
CREATE INDEX "Application_serialNumber_idx" ON "Application"("serialNumber");
