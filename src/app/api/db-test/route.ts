import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    await prisma.$connect();
    
    // 测试查询
    const count = await prisma.application.count();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      count,
      url: process.env.DATABASE_URL?.replace(/:[^:@]*@/, ':****@')  // 隐藏密码
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Database connection failed',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 