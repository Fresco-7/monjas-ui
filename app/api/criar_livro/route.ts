import prismadb from '@/lib/prismadb';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    const { nome, autores, dataPub } = await req.json();
    console.log(autores);
    try {
        const existingLivro = await prismadb.livro.findFirst({
            where : {
                nome : nome
            }
        });
        if(existingLivro){
            return new Response(JSON.stringify("Livro já criado!"), {status: 422});
        }
        const livro = await prismadb.livro.create({
            data : { nome, autor : autores, dataPub }
        }); 
    }catch(error){
        return new Response(JSON.stringify(`Algo correu mal: ${error}`) ,{status: 404});
    }
        
    return new Response(JSON.stringify("Livro criado com sucesso"), {status: 200});
}