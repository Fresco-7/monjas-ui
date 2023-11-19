import React from 'react'
import EditarMonjaForm from '@/app/(forms)/components/EditarMonja';

export default async function EditarMonja ({ params }: { params: { id: string } }){
    return (
      <>
          <div className='flex  justify-center h-full w-full '>
            <div className='flex w-full h-full mt-10 justify-center'>
              <EditarMonjaForm id={params.id}/>
            </div>
          </div>
      </>
    )
}