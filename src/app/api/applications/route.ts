import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateSerialNumber } from '@/lib/utils';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export async function POST(req: Request) {
  console.log('Received application request');
  
  try {
    await prisma.$connect();
    console.log('Database connected');

    const data = await req.json();
    console.log('Request data:', JSON.stringify(data, null, 2));
    
    // 验证必填字段
    if (!data.companyNameCn || !data.companyNameEn || !data.addressEn || !data.country || !data.foundingDate) {
      return NextResponse.json(
        { success: false, error: '缺少必填字段' },
        { status: 400 }
      );
    }

    // 生成流水号
    const serialNumber = generateSerialNumber();
    console.log('Generated serial number:', serialNumber);
    
    // 创建申请记录
    const application = await prisma.application.create({
      data: {
        serialNumber,
        companyNameCn: data.companyNameCn,
        companyNameEn: data.companyNameEn,
        addressEn: data.addressEn,
        country: data.country,
        foundingDate: new Date(data.foundingDate),
        businessLicense: data.businessLicense || '',  // 确保不为 null
        otherFiles: data.otherFiles || '',  // 确保不为 null
        amount: 799,
      },
    });

    console.log('Created application:', application);
    return NextResponse.json({ success: true, data: application });
  } catch (error) {
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      code: error instanceof PrismaClientKnownRequestError ? error.code : undefined,
      stack: error instanceof Error ? error.stack : undefined
    });
    
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { success: false, error: '流水号重复，请重试' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to create application',
        details: process.env.NODE_ENV === 'development' ? {
          name: error instanceof Error ? error.name : 'Unknown',
          message: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        } : undefined
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 