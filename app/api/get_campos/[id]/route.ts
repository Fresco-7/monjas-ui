
import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';
import { Campo, Livro } from '@prisma/client';
export const dynamic = 'force-dynamic';


 
export async function GET(req: Request, context: any) {
    try{
        const existingMonja = await prismadb.monja.findFirst({
            where : {
                id: context.params.id
            }        
        });
        if(existingMonja){
            const campos = await prismadb.campo.findMany({
                where : {
                    monjaId : existingMonja.id
                }
            })

            if(campos){
                const livrosIds : (string | null)[] = campos
                    .map(campo => campo.livroId);
                    const nonNullLivrosIds: string[] = livrosIds
                    .filter((id): id is string => id !== null && id !== undefined)
                    .reduce((uniqueIds: string[], id) => {
                        if (!uniqueIds.includes(id)) {
                            uniqueIds.push(id);
                        }
                        return uniqueIds;
                    }, []);                
                    if(nonNullLivrosIds != null ){
                        const livros = await prismadb.livro.findMany({
                            where : {
                                id: {
                                    in : nonNullLivrosIds
                            }
                        }
                    })
                    return NextResponse.json({ monja: existingMonja, campos: campos, livros : livros}, { status: 200 })  
                } 
                return NextResponse.json({ monja: existingMonja, campos: campos}, { status: 200 })  
            }else{
                return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
            }
        }else{
            return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
        }
    }catch(e){
        return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
    }   
}