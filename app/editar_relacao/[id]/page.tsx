import React from 'react'
import EditarRelacaoForm from '@/app/(forms)/components/EditarRelacaoForm';

export default async function EditarMonja ({ params }: { params: { id: string } }){
    return (
      <>
          <div className='flex  justify-center h-full w-full '>
            <div className='flex w-full h-full mt-10 justify-center'>
              <EditarRelacaoForm id={params.id} />
            </div>
          </div>
      </>
    )
}