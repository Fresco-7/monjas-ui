import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';


export const dynamic = 'force-dynamic';
export async function GET(req: Request, context: any) {
    try{
        const relacoes = await prismadb.relacoesFamiliares.findMany({
            where: {
                OR: [
                    { firstMonjaId: context.params.id },
                    { secondMonjaId: context.params.id }
                ]
            }
        }
        );   
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
            if(!relacoes[0]){
                return NextResponse.json({relacoes : null},{status : 200});
            }
            return NextResponse.json({relacoes, monjas},{status : 200});
        }else{
            throw new Error('Erro a encontrar relações')
        }

    }catch (error){
        return NextResponse.json({ error: error }, { status: 404 })      
    }
}