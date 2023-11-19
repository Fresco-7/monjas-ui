"use client"
import React from 'react'
import EditarCampoForm from '@/app/(forms)/components/EditarCampoForm';
import PageError from '@/components/errorPage';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

export default function EditarCampo ({ params }: { params: { id: string } }){
    const id = params.id
    const { data, isLoading,error } = useSWR(`/api/get_campo/${id}`, fetcher); 
   

    if(isLoading){
      return <>
      <div></div>
      </>
    }
    if(error)
    return(
      <>
        <PageError />
      </>
    )
    
    return (
      <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <EditarCampoForm campo={data.campo} livro={data.livro}/>
          </div>
        </div>
      </>
    )
  

  

}