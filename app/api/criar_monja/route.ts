import prismadb from '@/lib/prismadb';

export async function POST(req: Request) {

    const data = await req.json() as criarMonjaFrom;


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
                id : data.idLivro
            }
        })
        
        if(!livro){
            new Error("Livro não encontrado!");
        }

        const referenciaModal = await prismadb.referencia.create({
            data : {
                referencia : data.referencia,
                datacaoReferencia : data.datacaoReferencia,
                livro : {
                    connect : {
                        id : livro?.id
                    }
                },
            }
        })

        const monja = await prismadb.monja.create({
            data : { nome : data.nome}
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
                referencia : {
                    connect : {
                        id : referenciaModal?.id
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
        
        
        // Put the campo id in campos Array at monja.

    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }

    
        
    return new Response(JSON.stringify("Monja criada com sucesso"), {status: 200});
}