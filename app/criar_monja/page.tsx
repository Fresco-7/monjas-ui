import React from 'react'
import CriarMonjaForm from '../(forms)/components/CriarMonja';


const CriarMonja = () => {

  return (
    <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <CriarMonjaForm />
          </div>
        </div>
    </>
  )
}

export default CriarMonja;