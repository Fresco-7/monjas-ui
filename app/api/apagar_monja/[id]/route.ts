import prismadb from '@/lib/prismadb';

export async function POST(req: Request, context: any) {        
  try {
    await prismadb.monja.delete({
      where: {
          id: context.params.id,
        }
      })
    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }
  return new Response(JSON.stringify("Monja apagado com sucesso"), {status: 200});
}