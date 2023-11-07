import prismadb from '@/lib/prismadb';
import { json } from 'stream/consumers';

export async function GET(req: Request) {
    try{
        const books = await prismadb.livro.findMany();
        return Response.json( {livros : books} ,{status : 200})

    }catch (error){
        console.error(error);
    }
}