import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';

export async function GET(req: Request, context: any) {
  try{
    const existingCampo = await prismadb.campo.findFirst({
      where : {
          id: context.params.id
      }
    });
    if(existingCampo){
      const referencia = await prismadb.referencia.findFirst({
        where : {
          id : existingCampo.referenciaId
        }
      })
      if(referencia?.livroId){
        const livro = await prismadb.livro.findFirst({
          where : {
            id : referencia.livroId
          }
        })
        return NextResponse.json({ campo : existingCampo, referencia : referencia, livro : livro }, { status: 200 })

      } 
      return NextResponse.json({ campo : existingCampo, referencia : referencia }, { status: 200 })
    }else{
      return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
    }
  }catch(e){
    return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
  }
  

}