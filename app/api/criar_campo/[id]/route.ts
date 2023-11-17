import prismadb from '@/lib/prismadb';

export async function POST(req: Request, context: any) {
    const dataJson = await req.json();
    const monja = dataJson.data
    try {
        const existingMonja =  await prismadb.monja.findFirst({
            where : {
                id : context.params.id
            }
        })
        if(existingMonja){
            try{
                
            }catch{

            }
        }
    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }
    return new Response(JSON.stringify("Campo criado com sucesso"), {status: 200});
}