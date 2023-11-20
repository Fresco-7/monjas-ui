import prismadb from '@/lib/prismadb';
import { Campo } from '@prisma/client';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function GET(req: Request, context: any) {
    try{
        const campos = await prismadb.campo.findMany({
            where : {
                livroId : context.params.id
            }
        });
        
        const monjasIdsSet = new Set();

        campos.forEach(campo => {
            monjasIdsSet.add(campo.monjaId);
        });
        
        const monjasIds : any[] = Array.from(monjasIdsSet);

        const monjas = await prismadb.monja.findMany({
            where: {
                id: {
                    in: monjasIds,
                }
            }
        });
        
    
        const camposJson = [];
        for (const monja of monjas) {
            const camposDaMonja :  Campo[] = campos.filter(campo => campo.monjaId === monja.id);
            let row : tabelaRow = { nome : monja.nome, id : monja.id, tempoDeNoviciado : "",  avosMaternos : "", avosPaternos : "", dataNascimento : "", nomeReligioso : "", idade : "", irmaos : "", observacoes : "", pai : "", freirasParentesco : "", filiacao : "", linhagemFamiliar : "", mae : "", naturalidadeBatismo : "", nomeSecular : "", qualidadeCargo : ""}
            camposDaMonja.forEach((campo) => {
                campo.tempoNoviciado != "" ? row.tempoDeNoviciado += campo.tempoNoviciado + " ": ""
                campo.avosMaternos != "" ? row.avosMaternos += campo.avosMaternos + " ": ""
                campo.avosPaternos != "" ? row.avosPaternos += campo.avosPaternos : ""
                campo.dataNascimento != "" ? row.dataNascimento += campo.dataNascimento + " ": ""
                campo.filiacao != "undif" ? row.filiacao += campo.filiacao + " ": ""
                campo.freirasParentesco != "" ? row.freirasParentesco += campo.freirasParentesco + " ": ""
                campo.idade != "" ? row.idade += campo.idade + " ": ""
                campo.irmaos != "" ? row.irmaos += campo.irmaos + " ": ""
                campo.linhagemFamiliar != "" ? row.linhagemFamiliar += campo.linhagemFamiliar + " ": ""
                campo.mae != "" ? row.mae += campo.mae + " ": ""
                campo.naturalidadeBatismo != "" ? row.naturalidadeBatismo += campo.naturalidadeBatismo + " ": ""
                campo.nomeReligioso != "" ? row.nomeReligioso += campo.nomeReligioso + " ": ""
                campo.observacoes != "" ? row.observacoes += campo.observacoes + " ": ""
                campo.pai != "" ? row.pai += campo.pai+ " " : ""
                campo.nomeSecular != "" ? row.nomeSecular += campo.nomeSecular + " ": ""
                campo.qualidadeCargo != "" ? row.qualidadeCargo += campo.qualidadeCargo + " ": ""

            });

            camposJson.push(row);
        }
        
        return NextResponse.json(camposJson, {status : 200});

    }catch (error){
        console.log(error);
        return NextResponse.json({ error: error }, { status: 404 })      
    }
}

