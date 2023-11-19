import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET() {
    try{
        const books = await prismadb.livro.findMany();
        return NextResponse.json(books, {status : 200});

    }catch (error){
        return NextResponse.json({ error: 'Error' }, { status: 404 })      
    }
}