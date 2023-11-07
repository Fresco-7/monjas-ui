import { PrismaClient } from "@prisma/client";

declare global{
    namespace globalThis{
        var prismadb: PrismaClient
    }
    interface criarMonjaFrom {
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
        idLivro : string;
        referencia : string;
        datacaoReferencia : string;
    }
}