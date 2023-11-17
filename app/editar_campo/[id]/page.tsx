import React from 'react'
import { Campo, Livro } from '@prisma/client';
import EditarCampoForm from '@/app/(forms)/components/EditarCampoForm';
import PageError from '@/components/errorPage';


const getData = async (id : string) => {
  const data = await fetch(`http://localhost:3000/api/get_campo/${id}`,{cache : 'no-store'});
  if (data.status === 200) {
    const campo = await data.json();
    return campo
  }else{
    throw new Error('Erro ao buscar o Campo');
  }
}

export default async function EditarCampo ({ params }: { params: { id: string } }){
  try {
    const res = await getData(params.id);

    return (
      <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <EditarCampoForm campo={res.campo} referencia={res.referencia} livro={res.livro || null}/>
          </div>
        </div>
      </>
    )
  } catch (error) {
    return(
      <>
        <PageError />
      </>
    )

  }

}