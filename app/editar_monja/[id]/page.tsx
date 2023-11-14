import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Livro, Monja } from '@prisma/client';
import toast from 'react-hot-toast'
import EditarLivroForm from '@/app/(forms)/components/EditarLivroForm';
import EditarMonja from '@/app/(forms)/components/EditarMonja';

const getData = async (id : string) => {
  const data = await fetch(`http://localhost:3000/api/get_monja/${id}`);
  const monja = await data.json();
  if(monja.error){
    return monja
  }
  return monja as Monja
}

export default async function EditarLivro ({ params }: { params: { id: string } }){
  const res = await getData(params.id);
  if(res.error){
    return(
        <>
        <p>Retorna outra pagina</p>
        </>
    )
  }

  return (
    <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <EditarMonja data={res}/>
          </div>
        </div>
    </>
  )
}