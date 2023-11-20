import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb';
export const dynamic = 'force-dynamic';

export async function GET(req: Request, context: any) {
  try{
    const existingCampo = await prismadb.campo.findFirst({
      where : {
          id: context.params.id
      }
    });
    if(existingCampo){
      if(existingCampo.livroId){
      const livro = await prismadb.livro.findFirst({
        where : {
          id : existingCampo.livroId
        }
      })
        return NextResponse.json({ campo : existingCampo, livro : livro }, { status: 200 })
      }
      return NextResponse.json({ campo : existingCampo}, { status: 200 })

    }
  }catch(e){
    return NextResponse.json({ error: 'Data not found' }, { status: 404 })  
  }
}