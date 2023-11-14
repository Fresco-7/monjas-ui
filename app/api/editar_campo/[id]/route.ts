import prismadb from '@/lib/prismadb';

export async function POST(req: Request, context: any) {
    const dataJson = await req.json();
    const campo = dataJson.data

    try {
        const existingCampo = await prismadb.campo.findFirst({
            where : {
                id: dataJson.id
            }
        });
    
        if(existingCampo){
            const referencia = await prismadb.referencia.findFirst({
              where : {
                id : existingCampo.referenciaId
              }
            })
            if(referencia){
                try{
                    await prismadb.referencia.update({
                        where: {
                          id: existingCampo.referenciaId,
                        },
                        data: {
                            datacaoReferencia : campo.datacaoReferencia,
                            nrFolio : campo.nrFolio,
                            livroId : dataJson.idLivro
                        },
                    })
                    await prismadb.campo.update({
                        where : {
                            id : existingCampo.id,
                        },
                        data : 
                        {
                            filiacao : campo.filiacao,
                            linhagemFamiliar : campo.linhagemFamiliar,
                            nomeReligioso : campo.nomeReligioso,
                            idade : campo.idade,
                            pai :  campo.pai,
                            avoMaterna :  campo.avoMaterna,
                            avoMaterno :  campo.avoMaterno,
                            avoPaterno : campo.avoPaterno,
                            avoPaterna : campo.avoPaterna,
                            mae : campo.mae,
                            observacoes : campo.observacoes,
                            freirasParentesco : campo.freirasParentesco,
                            dataNascimento : campo.dataNascimento,
                            tempoNoviciado : campo.tempoNoviciado,
                            naturalidadeBatismo : campo.naturalidadeBatismo,
                            irmaos : campo.irmaos,

                        }
                    })
                }catch(e){
                    return new Response(JSON.stringify(`Algo correu mal: ${e}`) ,{status: 404});
                }
            }
        }else{
            return new Response(JSON.stringify("Campo não existe") ,{status: 404});
        }
    
    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }

    return new Response(JSON.stringify("Monja atualizada com sucesso"), {status: 200});
}