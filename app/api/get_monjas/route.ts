import prismadb from '@/lib/prismadb';
import { Campo } from '@prisma/client';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET() {
    try{
        const campos = await prismadb.campo.findMany();
        const monjas = await prismadb.monja.findMany({
            select: {
              id: true,
              nome : true
            },
        });       
        const camposJson = [];
        for (const monja of monjas) {
            const camposDaMonja :  Campo[] = campos.filter(campo => campo.monjaId === monja.id);
            let row : tabelaRow = { nome : monja.nome, id : monja.id, tempoDeNoviciado : "", avoMaterna : "", avoMaterno : "", avoPaterna : "", avoPaterno : "", dataNascimento : "", nomeReligioso : "", idade : "", irmaos : "", observacoes : "", pai : "", freirasParentesco : "", filiacao : "", linhagemFamiliar : "", mae : "", naturalidadeBatismo : "" }
            camposDaMonja.forEach((campo) => {
                campo.tempoNoviciado != "" ? row.tempoDeNoviciado += campo.tempoNoviciado + " ": ""
                campo.avoMaterna != "" ? row.avoMaterna += campo.avoMaterna + " " : ""
                campo.avoMaterno != "" ? row.avoMaterno += campo.avoMaterno + " ": ""
                campo.avoPaterna != "" ? row.avoPaterna += campo.avoPaterna + " ": ""
                campo.avoPaterno != "" ? row.avoPaterno += campo.avoPaterno : ""
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
            });
            camposJson.push(row);
        }
        return NextResponse.json(camposJson, {status : 200});

    }catch (error){
        console.log(error);
        return NextResponse.json({ error: 'Error' }, { status: 404 })      
    }
}

