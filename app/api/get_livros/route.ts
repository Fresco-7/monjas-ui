import prismadb from '@/lib/prismadb';
import { Campo } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
    try{
        const books = await prismadb.livro.findMany();

        return NextResponse.json({books});
    }catch (error){
        console.error(error);
    }
}