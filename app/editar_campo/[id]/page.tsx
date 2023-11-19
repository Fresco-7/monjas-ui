import React from 'react'
import EditarCampoForm from '@/app/(forms)/components/EditarCampoForm';


export default function EditarCampo ({ params }: { params: { id: string } }){
    return (
      <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <EditarCampoForm id={params.id}/>
          </div>
        </div>
      </>
    )
  

  

}