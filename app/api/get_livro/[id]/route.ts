import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';
 
export async function GET(req: Request, context: any) {
    try{
        const existingLivro = await prismadb.livro.findFirst({
            where : {
                id: context.params.id
            }        
        });
        if(existingLivro){
            return NextResponse.json(existingLivro, { status: 200 })  
        }else{
            return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
        }
    }catch(e){

        return NextResponse.json({ error: 'Data not found' }, { status: 404 })  

    }   
}