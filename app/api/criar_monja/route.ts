import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {
    
    const dataJson = await req.json();
    const idLivro = dataJson.idLivro;
    const data = dataJson.data as MonjaForm;
    try {
        const existingMonja = await prismadb.monja.findFirst({
            where : {
                nome: data.nome
            }
        });

        if(existingMonja){
            return new Response(JSON.stringify("Monja já criada!"), {status: 422});
        }
        
        const livro = await prismadb.livro.findFirst({
            where : {
                id : idLivro
            }
        })
        
        if(!livro){
            new Error("Livro não encontrado!");
        }

        const referencia = await prismadb.referencia.create({
            data : {
                nrFolio : data.nrFolio,
                datacaoReferencia : data.datacaoReferencia,
                livro : {
                    connect : {
                        id : livro?.id
                    }
                },
            }
        })

        const monja = await prismadb.monja.create({
            data : { nome : data.nome, camposIds: []}
        });

        const campo = await prismadb.campo.create({
            data : {
                filiacao : data.filiacao,
                linhagemFamiliar : data.linhagemFamiliar,
                nomeReligioso : data.nomeReligioso,
                idade : data.idade,
                pai :  data.pai,
                avoMaterna :  data.avoMaterna,
                avoMaterno :  data.avoMaterno,
                avoPaterno : data.avoPaterno,
                avoPaterna : data.avoPaterna,
                mae : data.mae,
                observacoes : data.observacoes,
                freirasParentesco : data.freirasParentesco,
                dataNascimento : data.dataNascimento,
                tempoNoviciado : data.tempoNoviciado,
                naturalidadeBatismo : data.naturalidadeBatismo,
                irmaos : data.irmaos,
                referencia : {
                    connect : {
                        id : referencia?.id
                    }
                },
                monja : {
                    connect : {
                        id : monja.id
                    }
                }
            }
        })
        
        await prismadb.monja.update({
            where: {
                id: monja.id
            },
            data: {
                campos: {
                    connect: {
                        id: campo.id
                    }
                }
            }
        });
        
        await prismadb.monja.update({
            where: {
                id: monja.id,
            },
            data: {
                camposIds: {
                    push: campo.id
                }
            },
        });
        
        
    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }
    return new Response(JSON.stringify("Monja criada com sucesso"), {status: 200});
}