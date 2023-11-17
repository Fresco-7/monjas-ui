import React from 'react'
import { Monja } from '@prisma/client';
import PageError from '@/components/errorPage';
import CriarCampoForm from '@/app/(forms)/components/CriarCampoForm';

const getData = async (id : string) => {
  const data = await fetch(`http://localhost:3000/api/get_monja/${id}`,{cache : 'no-store'});
  if (data.status === 200) {
    const monja = await data.json();
    return monja as Monja
  }else{
    throw new Error('Erro ao buscar o Campo');
  }
}

export default async function CriarCampo ({ params }: { params: { id: string } }){
  try{
    const data = await getData(params.id);
    return (
      <>
          <div className='flex  justify-center h-full w-full '>
            <div className='flex w-full h-full mt-10 justify-center'>
              <CriarCampoForm Monja={data} />
            </div>
          </div>
      </>
    )
  }catch (error) {
    return(
      <>
        <PageError/>
      </>
    )

  }
}