import React from 'react'
import EditarLivroForm from '@/app/(forms)/components/EditarLivroForm';

export default async function EditarLivro ({ params }: { params: { id: string } }){

  return (
    <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <EditarLivroForm id={params.id}/>
          </div>
        </div>
    </>
  )
}