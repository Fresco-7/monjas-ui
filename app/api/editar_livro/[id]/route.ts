import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';
import { Livro } from '@prisma/client';

export async function POST(req: Request, context: any) {
    const dataJson = await req.json() as Livro
  try{
    const existingLivro = await prismadb.livro.findFirst({
      where : {
        id: context.params.id
      }
    });
    if(existingLivro){
      try{
        await prismadb.livro.update(({
          where : {
            id : context.params.id
          },
          data : {
            nome : dataJson.nome,
            dataPub : dataJson.dataPub,
            autor : dataJson.autor,
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