import React from 'react'
import { Livro } from '@prisma/client';
import EditarLivroForm from '@/app/(forms)/components/EditarLivroForm';
import PageError from '@/components/errorPage';

const getData = async (id : string) => {
  const data = await fetch(`http://localhost:3000/api/get_livro/${id}`, {cache : 'no-store'});
  const livro = await data.json();
  if(livro.error){
    return livro
  }
  return livro as Livro
}

export default async function EditarLivro ({ params }: { params: { id: string } }){
  const res = await getData(params.id);
  if(res.error){
    return(
      <>
        <PageError />
      </>
    )
  }
  return (
    <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <EditarLivroForm data={res}/>
          </div>
        </div>
    </>
  )
}