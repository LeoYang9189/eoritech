import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // 测试数据库连接
    console.log('Testing database connection...');
    await prisma.$connect();
    console.log('Database connected successfully');

    // 测试数据库查询
    console.log('Testing database query...');
    const count = await prisma.application.count();
    console.log('Current application count:', count);

    // 测试创建记录
    console.log('Testing record creation...');
    const testApplication = await prisma.application.create({
      data: {
        serialNumber: `TEST${Date.now()}`,
        companyNameCn: 'Test Company',
        companyNameEn: 'Test Company Ltd',
        addressEn: 'Test Address',
        country: 'TEST',
        foundingDate: new Date(),
        businessLicense: 'test.pdf',
        amount: 799,
      },
    });
    console.log('Test record created:', testApplication);

    // 测试删除记录
    console.log('Testing record deletion...');
    await prisma.application.delete({
      where: { id: testApplication.id }
    });
    console.log('Test record deleted');

    return NextResponse.json({ 
      success: true, 
      message: 'All database tests passed',
      details: {
        connectionTest: 'passed',
        queryTest: 'passed',
        createTest: 'passed',
        deleteTest: 'passed',
        recordCount: count
      }
    });
  } catch (error) {
    console.error('Database test error:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });

    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Database test failed',
        details: process.env.NODE_ENV === 'development' ? {
          name: error instanceof Error ? error.name : 'Unknown',
          message: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined,
          env: {
            databaseUrl: process.env.DATABASE_URL?.replace(
              /^(.*?\/\/[^:]+:)([^@]+)(@.*)$/,
              '$1***$3'
            )
          }
        } : undefined
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 