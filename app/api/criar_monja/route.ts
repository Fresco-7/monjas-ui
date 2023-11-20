import prismadb from '@/lib/prismadb';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    
    const dataJson = await req.json();
    const data = dataJson.data as MonjaForm;
    const idLivro = dataJson.idLivro
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
                        id : monja.id
                    }
                },
                livro : {
                    connect : {
                        id : idLivro
                    }
                },
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
        
    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }
    return new Response(JSON.stringify("Monja criada com sucesso"), {status: 200});
}