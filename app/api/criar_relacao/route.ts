import prismadb from '@/lib/prismadb';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    const { firstMonjaId, secondMonjaId, relacao, observacao } = await req.json();
    try {
        const existingFirstMonja = await prismadb.monja.findFirst({
            where : {
                id : firstMonjaId
            }
        });
        const existingSecondMonja = await prismadb.monja.findFirst({
            where : {
                id : secondMonjaId
            }
        });

        if(!existingFirstMonja || !existingSecondMonja){
            return new Response(JSON.stringify("Monja(s) não encontrada(s)"), {status: 404})
        }

        await prismadb.relacoesFamiliares.create({
            data : {
                relacao : relacao,
                observacao : observacao,
                firstMonja : {
                    connect : {
                        id : firstMonjaId
                    }
                },
                secondMonja : {
                    connect : {
                        id : secondMonjaId
                    }
                },
            }
        
        })
     

    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }
        
    return new Response(JSON.stringify("Relação criado com sucesso"), {status: 200});
}