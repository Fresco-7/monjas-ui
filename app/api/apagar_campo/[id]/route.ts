import prismadb from '@/lib/prismadb';
export const dynamic = 'force-dynamic';

export async function POST(req: Request, context: any) {        
  try {
    await prismadb.campo.delete({
      where: {
          id: context.params.id,
        }
      })
    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }
  return new Response(JSON.stringify("Campo apagado com sucesso"), {status: 200});
}