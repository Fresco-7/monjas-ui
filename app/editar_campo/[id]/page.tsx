import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Livro } from '@prisma/client';
import toast from 'react-hot-toast'
import EditarCampoForm from '@/app/(forms)/components/EditarCampoForm';


const getData = async (id : string) => {
  const data = await fetch(`http://localhost:3000/api/get_campo/${id}`);
  const livro = await data.json();
  if(livro.error){
    return livro
  }
  return livro as Livro
}

export default async function EditarCampo ({ params }: { params: { id: string } }){
  const res = await getData(params.id);
  if(res.error){
    return(
      <>
        <p>Retorna uma pagina </p>
      </>
    )
  }
  return (
    <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <EditarCampoForm campo={res.campo} referencia={res.referencia} livro={res.livro}/>
          </div>
        </div>
    </>
  )
}