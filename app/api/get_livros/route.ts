import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET() {
    try{
        const books = await prismadb.livro.findMany();
        const campos = await prismadb.campo.findMany();
        const monjaIds = await prismadb.monja.findMany({
            select: {
              id: true,
            },
        });
    
        return NextResponse.json({books});
    }catch (error){
        console.error(error);
    }
}