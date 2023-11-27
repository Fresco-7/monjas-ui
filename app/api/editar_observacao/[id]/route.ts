import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';
export const dynamic = 'force-dynamic';

export async function POST(req: Request, context: any) {
    const { observacao } = await req.json();
  try{
    const existingRelacao = await prismadb.relacoesFamiliares.findFirst({
        where : {
            id: context.params.id
        }        
    });
    if(existingRelacao){
        try{
            await prismadb.relacoesFamiliares.update(({
                where : {
                    id : context.params.id
                },
                data : {
                    observacao
                }
            }))
      }catch(e){
        return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
      }
    }else{
      return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
    }
  }catch(e){
    return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
  }
  return NextResponse.json({status:  'Sucess ' }, { status: 200 })
}