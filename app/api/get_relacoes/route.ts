import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    try{
        const relacoes = await prismadb.relacoesFamiliares.findMany();   
        if(relacoes){
            const uniqueIds = new Set();
            relacoes.forEach(relacao => {
                uniqueIds.add(relacao.firstMonjaId);
                uniqueIds.add(relacao.secondMonjaId);
            });
            const uniqueIdsArray = Array.from(uniqueIds) as string[];

            const monjas = await prismadb.monja.findMany({
                where : {
                    id: {
                        in : uniqueIdsArray
                    }
                }
            })

            return NextResponse.json({relacoes, monjas},{status : 200});
        }else{
            throw new Error('Erro a encontrar relações')
        }

    }catch (error){
        return NextResponse.json({ error: error }, { status: 404 })      
    }
}

