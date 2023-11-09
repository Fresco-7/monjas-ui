import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST() {
    try{
        const monjas = await prismadb.monja.findMany();        
    }catch (error){
        console.error(error);
    }
}

