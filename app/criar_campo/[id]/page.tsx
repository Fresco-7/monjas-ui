import React from 'react'
import CriarCampoForm from '@/app/(forms)/components/CriarCampoForm';


export default async function CriarCampo ({ params }: { params: { id: string } }){
    return (
      <>
          <div className='flex  justify-center h-full w-full '>
            <div className='flex w-full h-full mt-10 justify-center'>
              <CriarCampoForm id={params.id} />
            </div>
          </div>
      </>
    )
}