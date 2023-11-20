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
        qualidadeCargo : string;
        pai: string;
        avosPaternos: string;
        mae: string;
        avosMaternos: string;
        freirasParentesco: string;
        observacoes: string;
        nrFolio : string;
        datacaoReferencia : string;
        pagina            : string;
        nomeSecular       : string;
        livroDoLivro      : string;
        idLivro : string;
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
        qualidadeCargo? : string
        avosPaternos? : string
        mae? : string
        avosMaternos? : string
        freirasParentesco? : string
        irmaos? : string
        observacoes? : string
        monjaId? : string
        nrFolio? : string
        datacaoReferencia? : string
        pagina?            : string
        nomeSecular?       : string
        livroDoLivro?      : string
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
        qualidadeCargo? : string
        avosPaternos? : string
        mae? : string
        avosMaternos? : string
        freirasParentesco? : string
        irmaos? : string
        observacoes? : string
        nomeSecular? : string
    }

    
    
}