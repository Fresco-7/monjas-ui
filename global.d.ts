import { Campo, Monja, PrismaClient, Referencia } from "@prisma/client";

declare global{
    namespace globalThis{
        var prismadb: PrismaClient
    }
    interface MonjaForm {
        irmaos : string;
        nome: string;
        filiacao: string;
        linhagemFamiliar: string;
        nomeReligioso: string;
        idade: string;
        dataNascimento: string;
        tempoNoviciado: string;
        naturalidadeBatismo: string;
        pai: string;
        avoPaterno: string;
        avoPaterna: string;
        mae: string;
        avoMaterno: string;
        avoMaterna : string;
        freirasParentesco: string;
        observacoes: string;
        nrFolio : string;
        datacaoReferencia : string;
    }

    type MonjaTabelaRow = {
        id : string
        filiacao? :string
        linhagemFamiliar? : string
        nomeReligioso? : string
        idade? : string
        dataNascimento? : string
        tempoDeNoviciado? : string
        naturalidadeBatismo? : string
        pai? : string
        avoPaterno? : string
        avoPaterna? : string
        mae? : string
        avoMaterno? : string
        avoMaterna? : string
        freirasParentesco? : string
        irmaos? : string
        observacoes? : string
        monjaId? : string
        nrFolio? : string
        datacaoReferencia? : string
        livro? : string
    }

    type tabelaRow = {
        id : string
        nome : string
        camposId?: String[]
        filiacao? :string
        linhagemFamiliar? : string
        nomeReligioso? : string
        idade? : string
        dataNascimento? : string
        tempoDeNoviciado? : string
        naturalidadeBatismo? : string
        pai? : string
        avoPaterno? : string
        avoPaterna? : string
        mae? : string
        avoMaterno? : string
        avoMaterna? : string
        freirasParentesco? : string
        irmaos? : string
        observacoes? : string
    }
    
}