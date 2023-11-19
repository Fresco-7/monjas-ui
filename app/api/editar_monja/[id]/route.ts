import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';

export async function POST(req: Request, context: any) {
    const dataJson = await req.json()
  try{
    const existingMonja = await prismadb.monja.findFirst({
      where : {
        id: context.params.id
      }
    });
    if(existingMonja){
        try{
            await prismadb.monja.update(({
                where : {
                    id : context.params.id
                },
                data : {
                    nome : dataJson.nome,
                }
            }))
            return NextResponse.json({status:  'Sucess ' }, { status: 200 })
        }catch(e){
            return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
        }
    }else{
      return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
    }
  }catch(e){
    return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
  }

}