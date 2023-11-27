import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function GET() {
    try{
        const monjas = await prismadb.monja.findMany();
        return NextResponse.json(monjas, {status : 200});

    }catch (error){
        return NextResponse.json({ error: 'Error' }, { status: 404 })      
    }
}