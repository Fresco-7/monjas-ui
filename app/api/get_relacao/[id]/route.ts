import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';


export const dynamic = 'force-dynamic';
export async function GET(req: Request, context: any) {
    try{
        const existingRelacao = await prismadb.relacoesFamiliares.findFirst({
            where : {
                id: context.params.id
            }        
        });
        if(existingRelacao){
            return NextResponse.json(existingRelacao, { status: 200 })  
        }else{
            return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
        }
    }catch(e){

        return NextResponse.json({ error: 'Data not found' }, { status: 404 })  

    }   
}