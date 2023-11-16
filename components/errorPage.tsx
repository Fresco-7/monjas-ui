import React from 'react'

import Link from 'next/link';

const PageError = () => {
  return ( 
    <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex flex-col w-full h-full mt-10 justify-center items-center'>
            <span className='text-9xl bold font-mono'>404</span>
            <span className='text-md bold'>Informação não encontrada</span>
            <Link href="/"><span className='text-blue-300 cursor-pointer'>pagina inicial</span></Link>
          </div>
        </div>
    </>
  )
}

export default PageError;