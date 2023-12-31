import prismadb from '@/lib/prismadb';
export const dynamic = 'force-dynamic';

export async function POST(req: Request, context: any) {
    const dataJson = await req.json();
    const data = dataJson.data
    const idLivro = dataJson.idLivro

    try {
        const existingMonja =  await prismadb.monja.findFirst({
            where : {
                id : context.params.id
            }
        })
        if(existingMonja){
            try{
                const campo = await prismadb.campo.create({
                    data : {
                        filiacao : data.filiacao,
                        linhagemFamiliar : data.linhagemFamiliar,
                        nomeReligioso : data.nomeReligioso,
                        idade : data.idade,
                        pai :  data.pai,
                        avosMaternos :  data.avosMaternos,
                        avosPaternos : data.avosPaternos,
                        mae : data.mae,
                        observacoes : data.observacoes,
                        freirasParentesco : data.freirasParentesco,
                        dataNascimento : data.dataNascimento,
                        tempoNoviciado : data.tempoNoviciado,
                        naturalidadeBatismo : data.naturalidadeBatismo,
                        irmaos : data.irmaos,
                        nrFolio : data.nrFolio,
                        datacaoReferencia : data.datacaoReferencia,
                        pagina : data.pagina,
                        nomeSecular : data.nomeSecular,
                        livroDoLivro : data.livroDoLivro,
                        qualidadeCargo : data.qualidadeCargo,
                        monja : {
                            connect : {
                                id : context.params.id
                            }
                        },
                        livro : {
                            connect : {
                                id : idLivro
                            }
                        },
                    }
                })
            }catch(error){
                return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
            }
        }
    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }
    return new Response(JSON.stringify("Campo criado com sucesso"), {status: 200});
}