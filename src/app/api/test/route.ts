import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // 测试数据库连接
    await prisma.$connect();
    
    // 尝试查询
    const count = await prisma.application.count();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      count 
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { success: false, error: 'Database connection failed' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 