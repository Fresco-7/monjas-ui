import { Campo, Monja, PrismaClient, Referencia } from "@prisma/client";

declare global{
    namespace globalThis{
        var prismadb: PrismaClient
    }
    interface criarMonjaFrom {
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
        referencia : string;
        datacaoReferencia : string;
    }
    interface interfaceCampo {
        avoMaterna : string;
        avoMaterno : string;
        avoPaterna : string;
        avoPaterno : string;
        dataNascimento : string;
        filiacao : string;
        freirasParentesco : string;
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

    type SingleMonjatabelaRow = {

        id? : Sting
        referencia? : String
        livro? : string
        nrFolio : string
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

    type SingleMonja = {
        Campos : Campo[]
    }
}