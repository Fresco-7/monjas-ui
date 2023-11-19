
import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';
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